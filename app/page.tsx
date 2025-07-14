"use client"

import { useEffect, useState, useRef } from "react"
import { Facebook, Instagram, Linkedin } from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar"
import Footer from "@/components/ui/footer"
import "@/app/hover-zoom-tilt.css"

export default function GlobalWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 10)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const newsItems = [
    /* News items */
    {
      date: "JUNE 2025",
      title: "Solar-Powered CCTV & LED Installations for Urban Safety",
      description:
        "Placed CCTV cameras and LED lights powered by solar panels at key junctions in Kandy city in collaboration with Kandy Police to enhance crime prevention, deter illegal drug usage, and improve overall public security.",
      image:
        "https://i.postimg.cc/vBTJyLGS/Whats-App-Image-2025-07-02-at-14-44-20-e3231750.jpg",
    },

    {
      date: "DECEMBER 2024",
      title: "Kandy BTL Launches Smart Bus Shelter Campaign",
      description:
        "Our latest smart bus shelter installations across Kandy city feature interactive digital displays and sustainable design elements, revolutionizing outdoor advertising in the region.",
      image:
        "https://i.postimg.cc/VsXkjbv3/bcas-kandy-bus-stop.avif",
    },

    {
      date: "NOVEMBER 2024",
      title: "3,278 BTL Advertising Projects Milestone Achieved",
      description:
        "Celebrating over 10 years in business, Kandy BTL has successfully completed 3,278 BTL advertising projects, establishing ourselves as the premier outdoor advertising company in Kandy.",
      image:
        "https://i.postimg.cc/hGV9gW65/collage-1.jpg",
    },

    {
      date: "OCTOBER 2024",
      title: "Sustainability Projects Reach 260+ Initiatives",
      description:
        "Our commitment to environmental responsibility continues with city beautification, tree plantation projects, and smart city developments across the Central Province.",
      image:
        "https://i.postimg.cc/4d8Qbkw4/Whats-App-Image-2025-07-02-at-14-45-15-7ce62d2a.jpg",
    },

    {
      date: "SEPTEMBER 2024",
      title: "International Design Team Expansion",
      description:
        "Kandy BTL welcomes 36 international designers to our creative team, enhancing our capability to deliver 5000+ creative designs per year for our diverse client portfolio.",
      image:
        "https://i.postimg.cc/kGtL6J6Q/photo-1559136555-9303baea8ebd-1.jpg",
    },

    {
      date: "AUGUST 2024",
      title: "Digital Billboard Network Launch",
      description:
        "Revolutionary digital billboard network launched across 25 prime locations in Kandy, offering dynamic content management and real-time campaign optimization for maximum impact.",
      image:
        "https://i.postimg.cc/pdSHp1ct/imgi-5-blank-advertisement-billboard.jpg",
    },

    {
      date: "JULY 2024",
      title: "Community Engagement Awards Recognition",
      description:
        "Kandy BTL receives prestigious community engagement award for outstanding contribution to local development through innovative public-private partnership programs.",
      image:
        "https://i.postimg.cc/FsqcLHQ6/imgi-2-72b29b4b-60ce-451d-a137-201e975acdea.jpg",
    },

    {
      date: "JUNE 2024",
      title: "Smart City Initiative Partnership Announced",
      description:
        "Kandy BTL partners with local government for comprehensive smart city development, integrating IoT-enabled advertising solutions with urban infrastructure improvements.",
      image:
        "https://i.postimg.cc/J4CRNvrr/imgi-13-smart-city-robotique-mobile-haw-hamburg.jpg",
    },

    {
      date: "MAY 2024",
      title: "Eco-Friendly Billboard Materials Launch",
      description:
        "Revolutionary biodegradable billboard materials introduced across all installations, reducing environmental impact by 80% while maintaining superior visual quality and durability.",
      image:
        "https://i.postimg.cc/DwBFKzq0/imgi-4-img-bp-3-ways-eco-friendly-lifestyle-my-02-dt.png",
    },

    {
      date: "APRIL 2024",
      title: "Mobile App for Campaign Management Released",
      description:
        "New mobile application allows clients to monitor campaign performance, update content, and track analytics in real-time across all outdoor advertising locations.",
      image:
        "https://i.postimg.cc/26qCGfL6/photo-1512941937669-90a1b58e7e9c.jpg",
    },


  ]

  /* Product images and Data */
  const projects = [
    {
      name: "Urban Billboard Campaign",
      image:
        "https://i.postimg.cc/br1rrZSf/IMG-5274.jpg",
    },
    {
      name: "Bus Shelter Advertising",
      image:
        "https://i.postimg.cc/VsXkjbv3/bcas-kandy-bus-stop.avif",
    },
    {
      name: "Large Building Branding",
      image:
        "https://i.postimg.cc/9MZWVzk3/Untitled-design-197.png",
    },
    {
      name: "Roundabout Branding",
      image:
        "https://i.postimg.cc/yxK7NsqD/IMG-9869.jpg",
    },
    {
      name: "Branding & Signage",
      image: "https://i.postimg.cc/NjsFGfgZ/IMG-1359.avif",
    },
    {
      name: "Interior Signage",
      image:
        "https://i.postimg.cc/Jnk4YsqH/ECU.jpg",
    },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")

          const children = entry.target.querySelectorAll(".stagger-child")
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add("animate-in")
            }, index * 150)
          })
        }
      })
    }, observerOptions)

    const scrollElements = document.querySelectorAll(".scroll-animate")
    scrollElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden animate-fade-in">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 scale-110"
            /*Hero Section Background Video */
            src="/assets/0703 (1).mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 animate-gradient-shift"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full scale-150 animate-pulse-glow"></div>

            <h1 className="relative font-bold mb-4 animate-text-reveal text-white text-4xl custom-sm:text-6xl custom-md:text-8xl custom-lg:text-[8rem] custom-xl:text-[10rem] custom-2xl:text-[12rem] leading-tight font-montserrat" style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}>
              kandyBTL
            </h1>
          </div>

          <p className="text-xl mb-8 animate-slide-up-delayed">Driving Brand Visibility in Kandy</p>

          <p className="text-sm max-w-2xl animate-fade-in-up-slow">
            Premier outdoor advertising company offering diverse solutions including railway stations ads, roadside
            hoardings, roundabout branding, and digital strategies across Kandy, Sri Lanka.
          </p>

          <div className="mt-8 animate-bounce-gentle">
            <Button
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Work
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </section>

      <Navbar scrolled={scrolled} />

      {/*What's New Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 py-16 relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full animate-float-slow"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-purple-300/10 rounded-full animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/10 rounded-full animate-pulse-slow"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center mb-16 relative z-30">
            <h2 className="font-extrabold text-transparent stroke-2 stroke-white/20 leading-none select-text selection:text-white selection:bg-blue-500 text-4xl custom-sm:text-6xl custom-md:text-8xl custom-lg:text-[8rem] custom-xl:text-[10rem] custom-2xl:text-[12rem]" style={{ fontSize: 'clamp(2.5rem, 8vw, 8rem)' }}>
              what's new
            </h2>
          </div>

          {/* News Cards */}
          <div className="relative z-20">
            <div className="grid grid-cols-1 custom-sm:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 animate-slide-in-left hover:shadow-blue-500/25">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={newsItems[currentSlide].image || "/placeholder.svg"}
                    alt={newsItems[currentSlide].title}
                    className="w-full h-auto object-cover max-h-72"
                    style={{ aspectRatio: '4/3' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded animate-slide-down">
                    {newsItems[currentSlide].date}
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 leading-tight line-clamp-3 animate-text-reveal-delayed">
                    {newsItems[currentSlide].title}
                  </h3>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 custom-sm:mt-12 animate-slide-in-up animation-delay-200 hover:shadow-purple-500/25">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={newsItems[(currentSlide + 1) % newsItems.length].image || "/placeholder.svg"}
                    alt={newsItems[(currentSlide + 1) % newsItems.length].title}
                    className="w-full h-auto object-cover max-h-72"
                    style={{ aspectRatio: '4/3' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded animate-slide-down animation-delay-200">
                    {newsItems[(currentSlide + 1) % newsItems.length].date}
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 leading-tight line-clamp-2 animate-text-reveal-delayed">
                    {newsItems[(currentSlide + 1) % newsItems.length].title}
                  </h3>
                  <p className="text-sm opacity-80 line-clamp-3 animate-fade-in-up animation-delay-400">
                    {newsItems[(currentSlide + 1) % newsItems.length].description}
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 custom-sm:mt-24 animate-slide-in-right animation-delay-400 hover:shadow-green-500/25">
                <div className="h-48 relative overflow-hidden">
                  <img
                    src={newsItems[(currentSlide + 2) % newsItems.length].image || "/placeholder.svg"}
                    alt={newsItems[(currentSlide + 2) % newsItems.length].title}
                    className="w-full h-auto object-cover max-h-72"
                    style={{ aspectRatio: '4/3' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded animate-slide-down animation-delay-400">
                    {newsItems[(currentSlide + 2) % newsItems.length].date}
                  </div>
                </div>
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-3 leading-tight line-clamp-3 animate-text-reveal-delayed">
                    {newsItems[(currentSlide + 2) % newsItems.length].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Project Showcase */}
      <section
        id="projects-section"
        className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20 animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 scroll-animate animate-fade-in-up">
          <div className="flex flex-col custom-sm:flex-row items-center custom-sm:justify-between relative gap-8 custom-sm:gap-0">
            <div className="flex-shrink-0 pr-0 custom-sm:pr-8 relative z-20 self-center mb-8 custom-sm:mb-0 animate-fade-in-up">
              <div className="text-2xl custom-sm:text-4xl custom-md:text-5xl custom-lg:text-6xl font-extrabold text-transparent stroke-2 stroke-white/20 transform custom-sm:-rotate-90 origin-center select-text selection:text-white selection:bg-blue-500 whitespace-nowrap hover:stroke-white/40 transition-all duration-500" style={{ fontSize: 'clamp(2rem, 6vw, 6rem)' }}>
                Projects
              </div>
            </div>

            {/* Center: Project Grid - 6 projects, 3*2 */}
            <div className="grid grid-cols-1 custom-sm:grid-cols-2 custom-md:grid-cols-3 gap-6 w-full max-w-7xl mx-auto relative z-20">
              {projects.map((project, index) => (
                <div className="hover-zoom-tilt rounded-2xl" key={index} style={{ aspectRatio: '4/3', maxWidth: '400px', margin: '0 auto' }}>
                  <div
                    className={
                      `bg-gray-200 rounded-2xl overflow-hidden shadow-lg group flex items-center justify-center animate-fade-in-up`
                    }
                    style={{
                      animationDelay: `${index * 0.1}s`,
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <div className="relative w-full h-auto overflow-hidden flex items-center justify-center">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        className="w-full h-auto object-cover max-h-72"
                        style={{ aspectRatio: '4/3' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-80 custom-sm:opacity-0 custom-sm:group-hover:opacity-80 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 custom-sm:opacity-0 custom-sm:group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-semibold text-center px-2 text-lg custom-sm:text-xl custom-md:text-2xl drop-shadow-lg">{project.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Social Icons*/}
            <div className="flex flex-row items-center space-x-6 pl-8 relative z-20 mt-8 custom-sm:mt-0">
              <div className="flex flex-row space-x-3">
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
          </div>
        </div>
      </section>

      {/*Services Section */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-100 rounded-full animate-float-slow opacity-50"></div>
          <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-100 rounded-full animate-float-reverse opacity-50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 custom-lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-6xl font-bold text-blue-600 mb-6 animate-text-reveal bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                services
              </h2>
              <p className="text-gray-700 text-lg mb-8 animate-slide-up-delayed">
                Kandy BTL offers comprehensive outdoor advertising solutions including hoardings, bus shelter ads,
                roundabout branding, street marketing, and brand activations across Kandy district.
              </p>
              <Button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                <a href="/services">MORE INFO</a>
              </Button>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <div className="text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-600 animate-counter">175+</div>
                  <div className="text-sm text-gray-600">Advertising Sites</div>
                </div>
                <div className="text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-600 animate-counter animation-delay-200">95%</div>
                  <div className="text-sm text-gray-600">Population Reach</div>
                </div>
                <div className="text-center hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl font-bold text-blue-600 animate-counter animation-delay-400">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg"></div>

              <img
                src="https://i.postimg.cc/ydwsrr0T/imgi-41-advertising-agencies-services.png"
                alt="Outdoor advertising"
                className="relative w-full rounded-lg transform hover:scale-105 transition-transform duration-500 shadow-2xl"
              />
              <div className="absolute bottom-4 right-4">
                <Button className="bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white transform hover:scale-105 transition-all duration-300 animate-bounce-gentle">
                  <a href="/contact">WORK WITH US</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Outdoor Advertising */}
      <section
        className="relative py-16 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/RhxwV6Vw/photo-1449824913935-59a10b8d2000.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70 animate-gradient-shift"></div>

        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-white/20 rounded-full animate-spin-reverse"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl text-white">
            <h2 className="text-6xl font-bold mb-6" style={{ color: "#4ECDC4" }}>
              outdoor
            </h2>
            <p className="text-lg mb-8 animate-slide-up-delayed">
              Kandy BTL's expansive outdoor advertising network covers roadside billboards, bus shelter ads, roundabout
              branding, railway stations, and high-traffic urban areas across Kandy, effectively engaging both local and
              foreign audiences.
            </p>
          </div>
        </div>
      </section>

      {/*Brand Activations & Sustainability */}
      <section className="bg-white py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 custom-lg:grid-cols-2 gap-12 mb-16">
            {/* Brand Activations */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-lg text-white transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl">
              <h2 className="text-4xl font-bold mb-6 animate-text-reveal">brand activations</h2>
              <div className="bg-gray-100 rounded-lg mb-6 overflow-hidden">
                <div className="overflow-hidden rounded-lg">
                  <img
                    /* Use 3:2 Ratio Images */
                    src="https://i.postimg.cc/cHZbwNnp/IMG-2368.jpg"
                    alt="Brand Activations"
                    className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110"
                  />
                </div>
              </div>

              <p className="text-sm mb-4 animate-fade-in-up animation-delay-200">
                Street promotions, mall events, exhibitions, guerrilla marketing, sports marketing, and customer
                engagement activities.
              </p>
            </div>

            {/* Sustainability */}
            <div className="relative p-8 rounded-lg text-white bg-cover bg-center transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-blue-700">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 animate-text-reveal">sustainability</h2>
                <div className="bg-gray-100 rounded-lg mb-6 overflow-hidden">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      /* Use 3:2 Ratio Images */
                      src="https://i.postimg.cc/bJLBwHjn/Whats-App-Image-2025-07-02-at-14-45-15-7ce62d2a.jpg"
                      alt="Sustainability"
                      className="w-full h-auto transition-transform duration-500 ease-in-out transform hover:scale-110"
                    />
                  </div>
                </div>
                <p className="text-sm animate-fade-in-up animation-delay-200">
                  260+ sustainability projects including city beautification, tree plantation, and smart city
                  developments.
                </p>
              </div>
            </div>
          </div>

          {/* Numbers Speak */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg shadow-xl">
            <div className="grid grid-cols-1 custom-lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-text-reveal">
                  numbers <span className="text-blue-600">speak</span>
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-600 animate-counter">3,278</div>
                    <div className="text-sm text-gray-600">BTL Projects</div>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-600 animate-counter animation-delay-200">320+</div>
                    <div className="text-sm text-gray-600">CSR Campaigns</div>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-600 animate-counter animation-delay-400">5000+</div>
                    <div className="text-sm text-gray-600">Creatives/Year</div>
                  </div>
                  <div className="hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-blue-600 animate-counter animation-delay-600">1120+</div>
                    <div className="text-sm text-gray-600">OOH Campaigns</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Work With Us Section*/}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-6 overflow-hidden">
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute top-4 left-0 right-0 overflow-hidden">
          <div className="relative w-full h-24">
            <div className="absolute animate-scroll-right-infinite left-0 top-0 whitespace-nowrap text-blue-300 text-8xl font-bold opacity-20">
              {'work with us. '.repeat(30)}
            </div>
            <div className="absolute animate-scroll-right-infinite left-full top-0 whitespace-nowrap text-blue-300 text-8xl font-bold opacity-20">
              {'work with us. '.repeat(30)}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <p className="text-lg mb-4 animate-slide-up-delayed">
              10 Years of Undefeated Success in Outdoor Advertising
            </p>
            <Button className="bg-gradient-to-r from-blue-800 to-purple-800 hover:from-blue-900 hover:to-purple-900 text-white transform hover:scale-105 transition-all duration-300">
              <a href="/contact">WORK WITH US.</a>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
