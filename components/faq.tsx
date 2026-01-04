"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the pendant connect to my phone?",
    answer:
      "The Palvo pendant uses Bluetooth 5.2 for seamless, low-energy connection to your smartphone. Simply pair it once through the mobile app, and it will automatically reconnect whenever in range. The connection is encrypted end-to-end for maximum security.",
  },
  {
    question: "What blockchain does it use and why Solana?",
    answer:
      "We chose Solana for its incredible speed (sub-second transactions), extremely low fees (fractions of a cent), and robust ecosystem. This means your voice commands can trigger on-chain actions instantly without waiting for confirmations or paying high gas fees.",
  },
  {
    question: "Is my conversation data private?",
    answer:
      "Absolutely. Privacy is our top priority. All audio is processed locally on your device first, and only encrypted, structured data is stored. You have complete control over what gets recorded - the pendant only listens when you activate it. Your data is never sold or shared with third parties.",
  },
  {
    question: "How long does the battery last?",
    answer:
      "The pendant features a 7-day battery life with typical use (2-3 hours of active recording per day). It charges wirelessly in under 2 hours using the included charging dock. Battery status is always visible in the mobile app.",
  },
  {
    question: "Can I use it without crypto/blockchain knowledge?",
    answer:
      "Yes! While the pendant leverages blockchain technology, you don't need any crypto knowledge to use it. The blockchain features work seamlessly in the background. If you want to explore Web3 features like token swaps or NFT interactions, the app provides guided tutorials.",
  },
  {
    question: "What languages are supported?",
    answer:
      "Currently, we support English, Spanish, French, German, Mandarin, Japanese, and Korean with 95%+ accuracy. We're continuously adding more languages based on user demand. The AI can also translate between supported languages in real-time.",
  },
  {
    question: "Is there a subscription fee?",
    answer:
      "The pendant comes with 6 months of premium features included. After that, basic features remain free forever, including voice recording, transcription, and local storage. Premium features (advanced AI insights, unlimited cloud storage, blockchain transactions) are available for $9.99/month.",
  },
  {
    question: "What's the return policy?",
    answer:
      "We offer a 30-day money-back guarantee, no questions asked. If you're not completely satisfied with your Palvo pendant, simply return it in its original condition for a full refund. We also provide a 1-year warranty covering manufacturing defects.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about the Palvo pendant
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left glass-panel p-6 rounded-2xl border-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-white/10">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center glass-panel p-8 rounded-3xl border-white/10"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="https://x.com/Ankitsi32659808"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Contact our support team →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
