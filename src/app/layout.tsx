// @ts-expect-error Next.js processes global CSS imports.
import "./globals.css";

export const metadata = {
  title: "EpicPM - Project Management Made Simple",
  description:
    "Plan projects, manage tasks, and collaborate with your team using EpicPM.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}