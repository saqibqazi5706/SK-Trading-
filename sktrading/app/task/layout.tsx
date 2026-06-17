import type { Metadata } from "next";
import TaskHeader from "@/app/components/task/TaskHeader";
import TaskFooter from "@/app/components/task/TaskFooter";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Task | Brand New Plastic Injection Moulding Machines",
  description:
    "Task is SK Trading's own brand of brand new Plastic Injection Moulding Machines, manufactured in China and imported to Pakistan.",
};

export default function TaskLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TaskHeader />
      {children}
      <TaskFooter />
      <FloatingWhatsApp />
    </>
  );
}
