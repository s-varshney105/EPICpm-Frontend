"use client";

import { useState, useRef, useEffect } from "react";

interface OtpModalProps {
  isOpen: boolean;
  email: string;
  onClose: () => void;
  onVerify: (otp: string) => Promise<void>;
  onResendOtp: () => Promise<void>;
}

export default function OtpModal({
  isOpen,
  email,
  onClose,
  onVerify,
  onResendOtp,
}: OtpModalProps) {
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isOpen) {
      setOtp(new Array(6).fill(""));
      setError("");
      setSuccessMessage("");
      setTimeout(() => inputRefs.current[0]?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (value: string, index: number) => {
    const char = value.slice(-1);
    if (!/^\d*$/.test(char)) return;

    const newOtp = [...otp];
    newOtp[index] = char;
    setOtp(newOtp);

    if (char && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (!/^\d{6}$/.test(pastedData)) return;

    const digits = pastedData.split("");
    setOtp(digits);
    inputRefs.current[5]?.focus();
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length < 6) {
      setError("Please enter the complete 6-digit code.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      await onVerify(otpValue);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Verification failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setResending(true);
      setError("");
      setSuccessMessage("");
      await onResendOtp();
      setSuccessMessage("A new code has been sent!");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to resend code.");
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="otp-modal-overlay">
      <div className="otp-modal-card">
        {/* Close Button */}
        <button
          type="button"
          className="otp-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="otp-title">We’ve emailed you a code</h2>
        <p className="otp-subtitle">
          To complete your account setup, enter the code we sent to:
        </p>
        <p className="otp-email">{email}</p>

        <form onSubmit={handleVerify}>
          <div className="otp-inputs-row">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  inputRefs.current[idx] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(e.target.value, idx)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
                onPaste={handlePaste}
                className={`otp-digit-input ${digit ? "filled" : ""}`}
              />
            ))}
          </div>

          {error && <p className="otp-message error">{error}</p>}
          {successMessage && <p className="otp-message success">{successMessage}</p>}

          <button
            type="submit"
            className="otp-verify-btn"
            disabled={loading || otp.join("").length < 6}
          >
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        {/* Webmail Quick Links */}
        <div className="otp-mail-links">
          <a
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mail-provider-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#4285F4" d="M22 6.5v11a2.5 2.5 0 0 1-2.5 2.5H19V9.5l-7 5.5-7-5.5V20H4.5A2.5 2.5 0 0 1 2 17.5v-11C2 5.1 3.1 4 4.5 4h.4l7.1 5.5L19.1 4h.4c1.4 0 2.5 1.1 2.5 2.5z" />
            </svg>
            <span>Open Gmail &#8599;</span>
          </a>

          <a
            href="https://outlook.live.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mail-provider-link"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path fill="#0078D4" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5h-2v-5h2v5zm0-7h-2V7.5h2V9.5z" />
            </svg>
            <span>Open Outlook &#8599;</span>
          </a>
        </div>

        {/* Resend link */}
        <p className="otp-resend-text">
          Didn’t receive an email?{" "}
          <button
            type="button"
            className="otp-resend-btn"
            onClick={handleResend}
            disabled={resending}
          >
            {resending ? "Sending..." : "Resend email"}
          </button>
        </p>
      </div>
    </div>
  );
}