import { Cpu } from "lucide-react";

// Placeholder logo — swap for an <Image> of the real Smart Automation logo later.
export default function SmartLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 font-bold tracking-wide ${className}`}>
      <Cpu className="text-sky-400" />
      <span>
        Smart <span className="text-sky-400">Automation</span>
      </span>
    </span>
  );
}
