"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Crown } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    price: 0,
    period: "forever",
    description: "Perfect for trying out the Palvo experience",
    icon: Sparkles,
    features: [
      "Voice recording & transcription",
      "Up to 10 hours/month",
      "Basic AI summaries",
      "Local storage only",
      "Mobile app access",
      "Community support",
    ],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Pro",
    price: 9.99,
    period: "month",
    description: "For power users who want unlimited intelligence",
    icon: Zap,
    features: [
      "Everything in Starter",
      "Unlimited recording",
      "Advanced AI insights",
      "Cloud sync & backup",
      "Solana transactions",
      "Priority support",
      "Custom voice commands",
      "API access",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: null,
    period: "custom",
    description: "For teams and organizations",
    icon: Crown,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Admin dashboard",
      "SSO & advanced security",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Volume discounts",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. All plans include the pendant
            hardware.
          </p>

          {/* Annual/Monthly Toggle */}
          <div className="inline-flex items-center gap-4 glass-panel p-2 rounded-full border-white/10">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                !isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                isAnnual
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-accent/20 text-accent px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-xs font-bold uppercase">
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass-panel p-8 rounded-3xl h-full flex flex-col relative overflow-hidden ${
                  plan.popular
                    ? "border-primary/50 shadow-2xl shadow-primary/20"
                    : "border-white/10"
                }`}
              >
                {/* Glow effect for popular plan */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-50" />
                )}

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${
                      plan.popular
                        ? "from-primary to-accent"
                        : "from-white/10 to-white/5"
                    } p-3 mb-6`}
                  >
                    <plan.icon className="w-full h-full text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    {plan.price !== null ? (
                      <>
                        <div className="flex items-baseline gap-2">
                          <span className="text-5xl font-bold">
                            $
                            {isAnnual && plan.price > 0
                              ? (plan.price * 0.8).toFixed(2)
                              : plan.price}
                          </span>
                          <span className="text-muted-foreground">
                            /{plan.period}
                          </span>
                        </div>
                        {isAnnual && plan.price > 0 && (
                          <p className="text-sm text-muted-foreground mt-2">
                            Billed annually at $
                            {(plan.price * 0.8 * 12).toFixed(2)}
                          </p>
                        )}
                      </>
                    ) : (
                      <div className="text-3xl font-bold">Custom</div>
                    )}
                  </div>

                  <Button
                    size="lg"
                    className={`w-full rounded-full mb-8 ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                        : "bg-white/10 hover:bg-white/20"
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  <div className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground/80">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-muted-foreground">
            All plans include the Palvo pendant hardware ($299 value). 30-day
            money-back guarantee.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
