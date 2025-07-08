"use client"

import { useEffect, useState } from "react"
import { Award, Users, Zap, Palette, Monitor, Settings } from "lucide-react"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"

export default function ServicesPage() {
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentServiceSlide((prev) => (prev + 1) % 4)
    }, 5000)

    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const isScrolled = window.scrollY > heroHeight - 100
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const services = [
    /* Use 3:2 Ratio Images */
    {
      title: "Brand Activation",
      description: "Creating dynamic experiences that bring brands to life and drive meaningful connections",
      image:
        "https://i.postimg.cc/cHZbwNnp/IMG-2368.jpg",
      features: ["Hospitality", "Fan Engagement", "Launches", "Event Build"],
    },
    {
      title: "Sports & Entertainment",
      description: "Limitless creation pushing global boundaries with an 'Anything's Possible' approach",
      image:
        "https://i.postimg.cc/qBPvmgLd/photo-1461896836934-ffe607ba8211-1.jpg",
      features: ["Stand Alone Sports Events", "Mass Participation Events", "Spectator Events", "Festivals"],
    },
    {
      title: "Creative Services",
      description: "In-house design team delivering exceptional graphic design and creative solutions",
      image: "https://i.postimg.cc/FKDMwnXL/imgi-81-27280.jpg",
      features: ["Graphic Design", "Concept Drawing", "CAD & Render", "Event Marketing Collateral"],
    },
    {
      title: "Event Management",
      description: "Award-winning event marketing and management creating unforgettable experiences",
      image:"https://i.postimg.cc/HxwC12wg/IMG-5892.jpg",
      features: ["Design and Styling", "Consumer Journey", "Event Brand Development", "Contract Negotiation"],
    },
  ]

  const achievements = [
    { title: "Event Management Organisation of the Year", year: "2021", event: "Middle East Event Show & Awards" },
    { title: "Charity Event of the Year", year: "2022", event: "Blood Donation Walk" },
    { title: "Best Brand Event", year: "2021", event: "Finalist" },
    { title: "Best Community Event", year: "2021", event: "Finalist" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar scrolled={scrolled} />

      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://i.postimg.cc/YCkqHVZn/photo-1540575467063-178a50c2df87.jpg"
            alt="Corporate Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
        </div>

        <div
          className={`relative z-10 h-full flex items-center justify-center text-center text-white transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-6">
              <Award className="w-12 h-12 text-yellow-400 mr-4" />
              <span className="text-yellow-400 text-lg font-semibold">AWARD WINNING AGENCY</span>
            </div>
            <h1 className="text-6xl custom-sm:text-8xl font-bold mb-6 leading-tight">
              corporate <span className="text-blue-400">Events</span>
            </h1>
            <p className="text-xl custom-sm:text-2xl mb-8 opacity-90 leading-relaxed">
              Shifting Mindsets For a Positive Change
            </p>
            <p className="text-lg mb-12 max-w-3xl mx-auto opacity-80">
              KandyBTL is an award-winning event marketing and management agency that redefines how modern brands
              connect with their audiences. By crafting unforgettable experiences and innovative marketing campaigns, we
              ensure that every interaction leaves a lasting impact.
            </p>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-20 w-12 h-12 bg-yellow-400/20 rounded-full animate-ping"></div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turning ideas into assets and delivering them to the world. Creating a voice with purpose.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div className="grid grid-cols-1 custom-lg:grid-cols-2 gap-0">
                <div className="relative h-96 custom-lg:h-auto">
                  <img
                    src={services[currentServiceSlide].image || "/placeholder.svg"}
                    alt={services[currentServiceSlide].title}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="bg-white p-12 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">{services[currentServiceSlide].title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {services[currentServiceSlide].description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {services[currentServiceSlide].features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Zap className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentServiceSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentServiceSlide ? "bg-blue-600 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Awards may highlight our achievements, but they do not define us. They serve as a testament to the hard
              work and dedication of our talented team.
            </p>
          </div>

          <div className="grid grid-cols-1 custom-sm:grid-cols-2 custom-lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-center">
                  <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.year}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports & Entertainment */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://i.postimg.cc/SNcNHqTY/photo-1461896836934-ffe607ba8211.jpg"
            alt="Sports Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
                SPORTS & <span className="text-yellow-400">ENTERTAINMENT</span>
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Limitless creation - Pushing Global boundaries with an 'Anything's Possible' approach.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-yellow-400">Events</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Stand Alone Sports Events</li>
                    <li>• Mass Participation Events</li>
                    <li>• Spectator Events</li>
                    <li>• Festivals</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-yellow-400">Services</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Sponsorship Activation</li>
                    <li>• Contract Negotiation</li>
                    <li>• 3rd Party Integration</li>
                    <li>• Design and Styling</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://i.postimg.cc/SNcNHqTY/photo-1461896836934-ffe607ba8211.jpg"
                alt="Sports Event"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-black p-6 rounded-2xl">
                <Users className="w-8 h-8 mb-2" />
                <div className="text-2xl font-bold">1000+</div>
                <div className="text-sm">Events Managed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Studio */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Creative <span className="text-blue-600">Studio</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Igniting brands and events through our Event Marketing led design studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: Palette, title: "DESIGN", desc: "Creative concepts and visual identity" },
              { icon: Monitor, title: "TECH", desc: "Cutting-edge technology solutions" },
              { icon: Settings, title: "STUDIO", desc: "Professional production facilities" },
              { icon: Zap, title: "STRATEGIES", desc: "Data-driven marketing approaches" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <item.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Without Boundaries</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Powered by a systematic platform, we connect freelancers to jobs, clients and each other.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                    <span>In-house Design Team</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                    <span>Event Marketing Collateral</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                    <span>CAD & Render Services</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-4"></div>
                    <span>Concept Drawing</span>
                  </div>
                </div>
              </div>

              <div className="relative h-96 lg:h-auto">
                <img
                  src="https://i.postimg.cc/fWjrPr7T/ECU.jpg"
                  alt="Creative Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
