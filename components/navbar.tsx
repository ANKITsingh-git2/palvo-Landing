"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
            <Cpu className="text-primary-foreground w-6 h-6" />
          </div>
          <span className="text-xl font-heading font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
            Palvo
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Vision", "Product", "Intelligence", "Security"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
          <Link href="#waitlist">
            <Button
              variant="outline"
              className="rounded-full border-primary/30 hover:bg-primary/10 bg-transparent"
            >
              Waitlist
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {["Vision", "Product", "Intelligence", "Security"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg font-medium py-2 border-b border-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
            <Link href="#waitlist" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full rounded-full mt-4">Join Waitlist</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
