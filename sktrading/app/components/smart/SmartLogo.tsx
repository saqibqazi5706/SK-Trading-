import Image from "next/image";

export default function SmartLogo({ className = "h-10" }: { className?: string }) {
  return (
    <Image
      src="/logo/smart-automation-tp.png"
      alt="Smart Automation"
      width={500}
      height={500}
      priority
      className={`${className} w-auto object-contain`}
    />
  );
}
