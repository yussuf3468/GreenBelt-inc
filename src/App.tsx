import React, { useState, useEffect } from "react";
import {
  Globe,
  Shield,
  Zap,
  Users,
  Mail,
  // Phone,
  MapPin,
  ChevronRight,
  Droplet,
  Wheat,
  CheckCircle,
  ArrowRight,
  Menu,
  X,
  TrendingUp,
  Clock,
  Lock,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "commodities", "process", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({
    href,
    children,
    mobile = false,
  }: {
    href: string;
    children: React.ReactNode;
    mobile?: boolean;
  }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`${
        mobile
          ? "block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-gray-50 rounded-md transition-all duration-200"
          : `text-gray-700 hover:text-green-700 px-3 py-2 text-sm font-medium transition-all duration-200 ${
              activeSection === href
                ? "text-green-700 border-b-2 border-green-700"
                : ""
            }`
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Globe className="h-8 w-8 text-green-700 mr-2" />
              <span className="text-xl font-bold text-gray-900">
                Greenbelt Canada Inc.
              </span>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink href="home">Home</NavLink>
                <NavLink href="about">About</NavLink>
                <NavLink href="commodities">Commodities</NavLink>
                <NavLink href="process">Process</NavLink>
                <NavLink href="contact">Contact</NavLink>
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <NavLink href="home" mobile>
                Home
              </NavLink>
              <NavLink href="about" mobile>
                About
              </NavLink>
              <NavLink href="commodities" mobile>
                Commodities
              </NavLink>
              <NavLink href="process" mobile>
                Process
              </NavLink>
              <NavLink href="contact" mobile>
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
              >
                Your Trusted Gateway to{" "}
                <span className="text-green-700">Global Commodity Trade</span>
              </motion.h1>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                Greenbelt Canada Inc. specializes in facilitating large-scale
                commodity transactions across the globe. We connect verified
                buyers with reputable suppliers, streamlining the movement of
                high-demand commodities.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection("contact")}
                  className="bg-green-700 text-white px-8 py-4 rounded-lg hover:bg-green-800 transition-all duration-200 font-semibold flex items-center justify-center group"
                >
                  Start Trading Today
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => scrollToSection("about")}
                  className="border-2 border-green-700 text-green-700 px-8 py-4 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-200 font-semibold"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <img
                src="/images/oil.jpg"
                alt="Global trade and shipping"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center">
                  <TrendingUp className="h-8 w-8 text-green-700 mr-3" />
                  <div>
                    <p className="text-sm text-gray-600">Global Network</p>
                    <p className="text-lg font-bold text-gray-900">
                      50+ Countries
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* WHY CHOOSE US */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white py-20"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Why Partner with Greenbelt Canada?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-gray-600 mb-12 text-lg"
            >
              We are more than brokers — we are a bridge of trust in high-value
              global trade. Here’s why our partners choose us:
            </motion.p>

            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                ...[
                  {
                    icon: <Shield className="h-8 w-8 text-green-700 mb-4" />,
                    title: "Trusted Transactions",
                    desc: "We verify every buyer and supplier, ensuring only credible parties are brought together.",
                  },
                  {
                    icon: <Clock className="h-8 w-8 text-green-700 mb-4" />,
                    title: "Speed & Efficiency",
                    desc: "Our team works around the clock to meet tight timelines and ensure seamless deals.",
                  },
                  {
                    icon: <Users className="h-8 w-8 text-green-700 mb-4" />,
                    title: "Global Relationships",
                    desc: "We've cultivated strong ties across five continents, allowing us to operate globally with confidence.",
                  },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition"
                  >
                    {card.icon}
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{card.desc}</p>
                  </motion.div>
                )),
              ]}
            </div>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Greenbelt Canada Inc.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dynamic intermediary company specializing in facilitating
              large-scale commodity transactions, connecting markets worldwide
              with trust, efficiency, and transparency.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Who We Are
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Greenbelt Canada Inc. is a trade facilitation and intermediary
                company operating in the international commodities sector. We
                help clients source, negotiate, and secure high-volume trade
                deals across critical sectors — particularly energy and
                agriculture.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our operations focus on bridging the gap between suppliers
                (often in Brazil, UAE, Africa) and buyers (based globally). By
                doing due diligence on both sides, we reduce risk and build
                trust in every deal.
              </p>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-green-700 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vision</h4>
                    <p className="text-gray-600">
                      To be the most trusted intermediary partner in global
                      commodity trade — known for professionalism, speed, and
                      integrity.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-700 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Mission</h4>
                    <p className="text-gray-600">
                      Facilitate reliable and profitable commodity transactions,
                      build long-term relationships through transparency, and
                      open global markets to local buyers and sellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/images/industry.jpg"
                alt="Business handshake"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
              <Lock className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Verified Network
              </h4>
              <p className="text-gray-600">
                We only work with proven buyers & sellers
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
              <Globe className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Global Reach
              </h4>
              <p className="text-gray-600">
                We connect continents: from Brazil to the Middle East to Africa
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
              <Zap className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Fast Negotiation
              </h4>
              <p className="text-gray-600">
                We act fast to close deals and move product
              </p>
            </div>
            <div className="text-center p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors duration-200">
              <Shield className="h-12 w-12 text-green-700 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                Discreet & Confidential
              </h4>
              <p className="text-gray-600">
                Your business remains private and protected
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commodities Section */}
      <section id="commodities" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Commodities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deal in a range of high-demand global commodities, ensuring
              quality, reliability, and competitive pricing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Card 1 - Petroleum */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 h-[400px] bg-black">
              <img
                src="/images/petroleum.jpg"
                alt="Petroleum Background"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <div className="mb-4 flex items-center">
                  <Droplet className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-2xl font-bold text-white">
                    Petroleum Products
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-100 text-sm">
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Crude Oil</span>
                    <span>Bonny Light, Brent</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Diesel (AGO)</span>
                    <span>High Quality</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Jet Fuel (JP54)</span>
                    <span>Aviation Grade</span>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span>Mazut</span>
                    <span>Various Grades</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 - Agriculture */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 h-[400px] bg-black">
              <img
                src="/images/agriculture.jpg"
                alt="Agriculture Background"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <div className="mb-4 flex items-center">
                  <Wheat className="h-6 w-6 text-yellow-300 mr-2" />
                  <h3 className="text-2xl font-bold text-white">
                    Agricultural Commodities
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-100 text-sm">
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>ICUMSA-45 Sugar</span>
                    <span>Premium</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Raw Brown Sugar</span>
                    <span>Bulk</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Soybean</span>
                    <span>Brazil Origin</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Corn</span>
                    <span>Export Grade</span>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span>Wheat</span>
                    <span>Various Origins</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 3 - Metals */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 h-[400px] bg-black">
              <img
                src="/images/metals.jpg"
                alt="Metals Background"
                className="absolute inset-0 w-full h-full object-cover group-hover :scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <div className="mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-gray-300 mr-2" />
                  <h3 className="text-2xl font-bold text-white">
                    Metals & Minerals
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-100 text-sm">
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Gold</span>
                    <span>Bars & Nuggets</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Silver</span>
                    <span>Coins & Bullion</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Iron Ore</span>
                    <span>Brazilian Origin</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Copper</span>
                    <span>Concentrate & Cathodes</span>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span>Aluminum</span>
                    <span>Ingots & Scrap</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 4 - Petrochemicals */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 h-[400px] bg-black">
              <img
                src="/images/petrochemicals.jpg"
                alt="Petrochemicals Background"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 p-6 flex flex-col justify-end">
                <div className="mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-blue-400 mr-2" />
                  <h3 className="text-2xl font-bold text-white">
                    Petrochemicals
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-100 text-sm">
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Polyethylene</span>
                    <span>HDPE, LDPE</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Polypropylene</span>
                    <span>Granules & Pellets</span>
                  </li>
                  <li className="flex justify-between border-b border-white/20 pb-1">
                    <span>Polyvinyl Chloride (PVC)</span>
                    <span>Resin & Compounds</span>
                  </li>
                  <li className="flex justify-between pt-1">
                    <span>Styrene Butadiene Rubber (SBR)</span>
                    <span>Various Grades</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              All products are sourced directly from trusted producers and mills
              — especially from Brazil and Latin America.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors duration-200 font-semibold inline-flex items-center"
            >
              Request Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined process ensures efficient, secure, and transparent
              commodity trading from initial inquiry to final delivery.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200 hidden lg:block"></div>

            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Client Inquiry",
                  description:
                    "You tell us what commodity you need or want to sell.",
                  icon: Users,
                },
                {
                  step: "02",
                  title: "Verification & Due Diligence",
                  description:
                    "We verify both parties and paperwork (LOI, SCO, FCO, etc.)",
                  icon: Shield,
                },
                {
                  step: "03",
                  title: "Negotiation",
                  description:
                    "We bridge communication between buyer & seller until both parties agree.",
                  icon: Users,
                },
                {
                  step: "04",
                  title: "Transaction",
                  description:
                    "Once documentation is aligned, deal proceeds (LC, TT, etc.)",
                  icon: CheckCircle,
                },
                {
                  step: "05",
                  title: "Delivery Oversight",
                  description: "We ensure both sides honor agreed terms.",
                  icon: Clock,
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start lg:items-center"
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10">
                    {item.step}
                  </div>
                  <div className="ml-6 lg:ml-8 flex-1">
                    <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                      <div className="flex items-start">
                        <item.icon className="h-8 w-8 text-green-700 mr-4 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Partners Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don’t just take our word for it — here’s what clients and partners
              have shared about working with Greenbelt Canada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial Card 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <Quote className="h-6 w-6 text-green-700 mb-4" />
              <p className="text-gray-700 mb-4 text-sm">
                “Greenbelt helped us close a bulk sugar deal with full
                transparency. We were impressed by their speed, global reach,
                and the way they handled the transaction.”
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Mohamed K., Dubai
              </p>
              <p className="text-xs text-gray-500">Bulk Sugar Buyer</p>
            </motion.div>

            {/* Testimonial Card 2 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <Quote className="h-6 w-6 text-green-700 mb-4" />
              <p className="text-gray-700 mb-4 text-sm">
                “We’ve worked with other middlemen before, but Greenbelt felt
                like a real partner — very honest and timely. We now use them
                for all our petroleum imports.”
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Sandra L., Nigeria
              </p>
              <p className="text-xs text-gray-500">Oil Trading Company</p>
            </motion.div>

            {/* Testimonial Card 3 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-50 rounded-xl p-6 shadow hover:shadow-md transition"
            >
              <Quote className="h-6 w-6 text-green-700 mb-4" />
              <p className="text-gray-700 mb-4 text-sm">
                “Their due diligence team is solid. They made sure every party
                was verified before we committed. We’ll be working with them
                again.”
              </p>
              <p className="text-sm font-semibold text-gray-900">
                Carlos M., Brazil
              </p>
              <p className="text-xs text-gray-500">Commodities Exporter</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-green-700 to-green-800 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Whether you're a supplier or a serious buyer, Greenbelt is here to
              connect you to global opportunities. Let's discuss how we can
              facilitate your next commodity transaction.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-green-300 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@greenbeltcanada.com"
                      className="text-green-100 hover:text-white transition-colors"
                    >
                      info@greenbeltcanada.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-green-300 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Website</p>
                    <a
                      href="https://greenbeltcanada.com"
                      className="text-green-100 hover:text-white transition-colors"
                    >
                      greenbeltcanada.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-green-300 mr-4 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-green-100">
                      Headquartered in Canada (with global associates)
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
                <div className="space-y-2 text-green-100">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Emergency deals: Available 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-gray-900">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Commodity Interest
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors">
                    <option>Select a commodity</option>
                    <option>Crude Oil</option>
                    <option>Refined Petroleum</option>
                    <option>Sugar</option>
                    <option>Agricultural Products</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="Tell us about your commodity trading needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-colors duration-200 font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Globe className="h-8 w-8 text-green-500 mr-2" />
                <span className="text-xl font-bold">Greenbelt Canada Inc.</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Your trusted gateway to global commodity trade. Connecting
                markets worldwide with professionalism, speed, and integrity.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Petroleum Products Trading</li>
                <li>Agricultural Commodities</li>
                <li>Trade Facilitation</li>
                <li>Global Sourcing</li>
                <li>Risk Management</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@greenbeltcanada.com</p>
                <p>greenbeltcanada.com</p>
                <p>Canada & Global Associates</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Greenbelt Canada Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
