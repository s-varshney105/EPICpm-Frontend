"use client";

import { useState } from "react";
import { sendOtp, verifyOtp } from "../lib/api";
import OtpModal from "./OtpModel";

declare const process: {
  env: {
    NEXT_PUBLIC_GOOGLE_AUTH_URL?: string;
  };
};

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  // Modal state
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [activeEmail, setActiveEmail] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setError(false);

    if (!email.trim()) {
      setMessage("Please enter your work email.");
      setError(true);
      return;
    }

    try {
      setLoading(true);
      await sendOtp(email);

      // Open the modal and pass the user's email
      setActiveEmail(email);
      setShowOtpModal(true);
    } catch (err) {
      setError(true);
      setMessage(
        err instanceof Error ? err.message : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  const handleVerifyOtp = async (otpCode: string) => {
    await verifyOtp(activeEmail, otpCode);
    setShowOtpModal(false);
    // You can redirect to dashboard or update auth state here
  };

  const handleResendOtp = async () => {
    await sendOtp(activeEmail);
  };

  function handleGoogleSignup() {
    const googleURL = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL;

    if (googleURL) {
      window.location.href = googleURL;
    } else {
      setError(true);
      setMessage("Google authentication is not configured yet.");
    }
  }

  return (
    <div className="signup-container" id="signup">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Work email</label>

        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <p className="email-description">
          Use a work email to find teammates and get access to Rovo AI
        </p>

        <button
          type="submit"
          className="signup-btn"
          disabled={loading}
        >
          {loading ? "Sending code..." : "Sign up"}
        </button>

        {message && (
          <p
            className={`form-message ${
              error ? "error-message" : "success-message"
            }`}
            role="status"
          >
            {message}
          </p>
        )}
      </form>

      <div className="or-divider">
        <span />
        <p>Or continue with</p>
        <span />
      </div>

      <button
        type="button"
        className="google-btn"
        onClick={handleGoogleSignup}
      >
        <svg viewBox="0 0 48 48" width="28" height="28">
          <path
            fill="#FFC107"
            d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-1.9 4.6-4.1 6v5h6.6c3.9-3.6 6.1-8.8 6.1-14.7Z"
          />
          <path
            fill="#FF3D00"
            d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2C9.2 39.5 16.1 44 24 44Z"
          />
          <path
            fill="#4CAF50"
            d="M12.6 27.8c-.4-1.2-.7-2.5-.7-3.8s.2-2.6.7-3.8V15H5.8C4.4 17.8 3.6 20.8 3.6 24s.8 6.2 2.2 9l6.8-5.2Z"
          />
          <path
            fill="#1976D2"
            d="M24 11.8c3 0 5.6 1 7.7 3l5.8-5.8C34 5.7 29.5 4 24 4 16.1 4 9.2 8.5 5.8 15l6.8 5.2c1.6-4.8 6.1-8.4 11.4-8.4Z"
          />
        </svg>

        <span>Google</span>
      </button>

      {/* 6-Digit OTP Modal matching second image */}
      <OtpModal
        isOpen={showOtpModal}
        email={activeEmail}
        onClose={() => setShowOtpModal(false)}
        onVerify={handleVerifyOtp}
        onResendOtp={handleResendOtp}
      />
    </div>
  );
}
