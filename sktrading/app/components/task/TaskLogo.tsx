import { Factory } from "lucide-react";

// Placeholder logo — swap for an <Image> of the real Task logo later.
export default function TaskLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 font-bold tracking-wide ${className}`}>
      <Factory className="text-red-500" />
      <span>
        TASK<span className="text-red-500"> Machines</span>
      </span>
    </span>
  );
}
