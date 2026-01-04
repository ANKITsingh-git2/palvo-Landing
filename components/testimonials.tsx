"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Star, Quote } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Crypto Trader",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "This pendant has completely transformed how I manage my portfolio. I can execute trades hands-free while analyzing charts. The AI understands my trading strategy perfectly.",
    verified: true
  },
  {
    name: "Marcus Rodriguez",
    role: "Software Engineer",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "As a developer, I'm constantly in meetings and coding sessions. The pendant captures all my ideas and action items without breaking my flow. It's like having a second brain.",
    verified: true
  },
  {
    name: "Dr. Emily Watson",
    role: "Research Scientist",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "The privacy-first approach and on-chain verification give me confidence that my research notes are secure. The AI summarization saves me hours every week.",
    verified: true
  },
  {
    name: "Alex Kim",
    role: "Startup Founder",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "I've tried every productivity tool out there. This is the first one that actually feels like the future. The Solana integration makes everything instant.",
    verified: true
  },
  {
    name: "Jessica Martinez",
    role: "Content Creator",
    avatar: "/placeholder-user.jpg",
    rating: 5,
    text: "Recording my thoughts on-the-go has never been easier. The pendant picks up my voice perfectly even in noisy environments, and the transcription is incredibly accurate.",
    verified: true
  }
]

export function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-medium uppercase tracking-widest">Loved by Users</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from people who are living in the future
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true
            }}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="max-w-2xl">
                <div className="glass-panel p-8 md:p-10 rounded-3xl border-white/10 mx-4">
                  <Quote className="w-10 h-10 text-primary/30 mb-6" />
                  
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>

                  <p className="text-lg leading-relaxed mb-8 text-foreground/90">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent p-[2px]">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        {testimonial.verified && (
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.3);
          opacity: 1;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: var(--color-primary);
        }
      `}</style>
    </section>
  )
}
