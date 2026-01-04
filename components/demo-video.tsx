"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function DemoVideo() {
  return (
    <section className="py-24 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            See Palvo in Action
          </motion.h2>
          <p className="text-muted-foreground">
            Witness the pendant understand, reason, and act in real time.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative aspect-video max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden border border-white/10 group cursor-pointer shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          <iframe
            src="https://www.youtube.com/embed/Jq1BJwsiOYU?rel=0&modestbranding=1"
            className="absolute inset-0 w-full h-full object-cover"
            title="Palvo Live Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Bottom Bar UI */}
          <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end pointer-events-none">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-white/60 uppercase tracking-widest">
                Palvo Live Demo
              </span>
              <span className="text-xl font-bold">
                The Future of Interaction
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
