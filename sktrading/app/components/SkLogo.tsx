import Image from "next/image";

export default function SkLogo({ className = "h-10" }: { className?: string }) {
  return (
    <Image
      src="/logo/sk-trading-tp.png"
      alt="SK Trading"
      width={1152}
      height={649}
      priority
      className={`${className} w-auto object-contain`}
    />
  );
}
