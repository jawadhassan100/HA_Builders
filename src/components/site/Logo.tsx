import logoMeta from "@/assets/logo.jpeg";

export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <img
      src={logoMeta}
      alt="HA Construction"
      className={className}
      width={160}
      height={100}
    />
  );
}