import type { Metadata } from "next";
import SmartHeader from "@/app/components/smart/SmartHeader";
import SmartFooter from "@/app/components/smart/SmartFooter";

export const metadata: Metadata = {
  title: "Smart Automation | Brand New PLC & Servo Energy Saving Systems",
  description:
    "Smart Automation supplies brand new automation products — PLC systems, complete servo energy saving systems, lubrication pumps, mould clamps and more.",
};

export default function SmartAutomationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SmartHeader />
      {children}
      <SmartFooter />
    </>
  );
}
