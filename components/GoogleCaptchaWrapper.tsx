"use client";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function GoogleCaptchaWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey ?? ""}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
      }}
    >
      <section className="-z-10 absolute inset-0">
      {children}
      </section>
    </GoogleReCaptchaProvider>
  );
}
