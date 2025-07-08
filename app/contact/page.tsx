"use client"

import type React from "react"

import { useEffect, useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Building,
  Users,
  Award,
  Globe,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import { FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const scrollToContactForm = () => {
    const contactForm = document.getElementById("contact-form")
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    { icon: Building, number: "175+", label: "Advertising Sites" },
    { icon: Users, number: "3,278", label: "Completed Projects" },
    { icon: Award, number: "10+", label: "Years Experience" },
    { icon: Globe, number: "95%", label: "Population Reach" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/43fCLRqG/photo-1497366216548-37526070297c.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/70"></div>
        </div>

        <div
          className={`relative z-10 h-full flex items-center justify-center text-center text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-12 h-12 text-blue-400 mr-4 animate-bounce" />
              <span className="text-blue-400 text-lg font-semibold">GET IN TOUCH</span>
            </div>
            <h1 className="text-6xl custom-sm:text-8xl font-bold mb-6 leading-tight">
              Contact <span className="text-blue-400">Us</span>
            </h1>
            <p className="text-xl custom-sm:text-2xl mb-8 opacity-90 leading-relaxed">
              The Largest Outdoor Advertising Agency in Kandy
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
              Ready to elevate your brand visibility? Let's discuss your outdoor advertising needs and create impactful
              campaigns that drive results.
            </p>
            <Button
              onClick={scrollToContactForm}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full animate-pulse"
            >
              Start Your Project
            </Button>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping delay-300"></div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help you create powerful outdoor advertising campaigns that make an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 custom-sm:grid-cols-2 custom-lg:grid-cols-4 gap-8 mb-16">
            {/* Address */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Address</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                93, Captain's Deck
                <br />
                Rajapihilla Mw, Kandy
                <br />
                20000, Sri Lanka
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Phone</h3>
              <p className="text-gray-600 text-sm">
                <a href="tel:+94711225777" className="hover:text-blue-600 transition-colors">
                  +94 711225777
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Email</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:talk@kandybtl.lk" className="hover:text-blue-600 transition-colors">
                  talk@kandybtl.lk
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Opening Hours</h3>
              <div className="text-gray-600 text-sm">
                <p className="mb-2">
                  <strong>Mon - Fri:</strong> 09:00 - 17:00
                </p>
                <p>
                  <strong>Sat - Sun:</strong> 10:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 custom-sm:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <stat.icon className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 custom-lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Send us a Message</h2>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! Your message has been sent successfully. We'll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 custom-sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 custom-sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+94 XX XXX XXXX"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project inquiry"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Find Us</h2>

              {/* Google Maps*/}
              <div className="rounded-2xl h-64 mb-8 overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.34763596788073!2d80.63660540411868!3d7.290550576993907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae366f24d22d2b3%3A0xa1a7256937181be1!2sKandy%20BTL!5e0!3m2!1sen!2slk!4v1751602804434!5m2!1sen!2slk" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kandy BTL Location"
                ></iframe>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose Kandy BTL?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-sm opacity-90">
                      Largest outdoor advertising network in Kandy with 175+ premium locations
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-sm opacity-90">10+ years of proven success with 3,278+ completed projects</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-sm opacity-90">95% population reach across Kandy district</p>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-sm opacity-90">Award-winning creative team with 5000+ designs per year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Let's create impactful outdoor advertising campaigns that drive real results for your brand.
          </p>

          <div className="flex justify-center space-x-8">
            <a href="https://www.instagram.com/kandybtl/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-8 h-8 text-white hover:scale-125 hover:text-pink-300 transition-all duration-300 cursor-pointer" />
            </a>

            <a href="http://facebook.com/kandybtl" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-8 h-8 text-white hover:scale-125 hover:text-blue-300 transition-all duration-300 cursor-pointer" />
            </a>

            <a href="https://www.linkedin.com/company/kandybtl" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8 text-white hover:scale-125 hover:text-blue-400 transition-all duration-300 cursor-pointer" />
            </a>

            <a href="https://x.com/KandyBTL" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-8 h-8 text-white hover:scale-125 hover:text-black-400 transition-all duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
