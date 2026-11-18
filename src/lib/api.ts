declare const process: {
  env: {
    NEXT_PUBLIC_API_BASE_URL?: string;
  };
};

const API_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:5000/api";

export interface SendOtpResponse {
  success: boolean;
  message: string;
}

export async function sendOtp(email: string): Promise<SendOtpResponse> {
  const response = await fetch(`${API_URL}/auth/send-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email: email.trim() }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to send OTP. Please try again.");
  }

  return data;
}

export async function verifyOtp(email: string, otp: string) {
  const response = await fetch(`${API_URL}/auth/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email: email.trim(), otp: otp.trim() }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Invalid or expired code.");
  }

  return data;
}
