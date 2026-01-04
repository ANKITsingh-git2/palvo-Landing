import Link from "next/link";
import { Cpu } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 relative bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-primary/30">
              <Cpu className="text-white w-10 h-10" />
            </div>
            <span className="text-6xl font-heading font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Palvo
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
