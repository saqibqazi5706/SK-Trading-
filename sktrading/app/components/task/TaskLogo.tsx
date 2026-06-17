import Image from "next/image";

export default function TaskLogo({ className = "h-10" }: { className?: string }) {
  return (
    <Image
      src="/logo/task-tp.png"
      alt="Task"
      width={189}
      height={75}
      priority
      className={`${className} w-auto object-contain`}
    />
  );
}
