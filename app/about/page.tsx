"use client"

import { useEffect, useState } from "react"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const isScrolled = window.scrollY > heroHeight - 100
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/Bnc9BnhN/imgi-14-65455-1024x1024.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/70"></div>
        </div>

        <div
          className={`relative z-10 h-full flex items-center justify-center text-center text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-6xl custom-sm:text-8xl font-bold mb-6 leading-tight">
              About <span className="text-blue-400">Us</span>
            </h1>
            <p className="text-xl custom-sm:text-2xl mb-8 opacity-90 leading-relaxed">
              10 Years of Excellence in Outdoor Advertising
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
              Kandy BTL has been at the forefront of outdoor advertising innovation, creating impactful campaigns that
              drive results for brands across Sri Lanka.
            </p>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping delay-300"></div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Our Story</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Founded in 2014, Kandy BTL has grown to become the largest outdoor advertising agency in Kandy, with over
              175 premium advertising locations and a reach of 95% of the population in the Central Province.
            </p>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Our commitment to excellence, innovation, and sustainability has earned us recognition as an award-winning
              agency, completing over 3,278 BTL projects and 1,120+ OOH campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 custom-sm:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 bg-blue-50 rounded-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="text-4xl font-bold text-blue-600 mb-4">175+</div>
              <h3 className="text-xl font-semibold mb-2">Advertising Sites</h3>
              <p className="text-gray-600">Premium locations across Kandy</p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="text-4xl font-bold text-blue-600 mb-4">3,278</div>
              <h3 className="text-xl font-semibold mb-2">Completed Projects</h3>
              <p className="text-gray-600">Successful BTL campaigns</p>
            </div>
            <div className="text-center p-8 bg-blue-50 rounded-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2">
              <div className="text-4xl font-bold text-blue-600 mb-4">95%</div>
              <h3 className="text-xl font-semibold mb-2">Population Reach</h3>
              <p className="text-gray-600">Coverage across Central Province</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
