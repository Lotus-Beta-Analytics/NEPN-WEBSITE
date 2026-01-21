"use client";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting NEPN. We will get back to you soon!");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Head Office",
      details: [
        "Plot 1234, Central Business District",
        "Abuja, FCT",
        "Nigeria",
      ],
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Phone",
      details: [
        "+234 123 456 7890",
        "+234 123 456 7891",
        "Toll Free: 0800-NEPN-OIL",
      ],
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email",
      details: [
        "info@nepn.com.ng",
        "careers@nepn.com.ng",
        "partners@nepn.com.ng",
      ],
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const offices = [
    {
      name: "Lagos Office",
      address: "Victoria Island, Lagos State",
      phone: "+234 123 456 7892",
      email: "lagos@nepn.com.ng",
    },
    {
      name: "Port Harcourt Office",
      address: "Trans Amadi, Port Harcourt, Rivers State",
      phone: "+234 123 456 7893",
      email: "portharcourt@nepn.com.ng",
    },
    {
      name: "Akwa Ibom Office",
      address: "Uyo, Akwa Ibom State",
      phone: "+234 123 456 7894",
      email: "akwaibom@nepn.com.ng",
    },
  ];

  return (
    <div className="bg-white">
      <Header />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[50vh] mt-[84px] overflow-hidden bg-gradient-to-br from-[#00005A] to-[#0000fe]"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="relative h-full flex items-center justify-center text-center text-white px-4">
          <div>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl font-bold mb-6"
            >
              Contact <span className="text-[#fe0000]">Us</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-2xl mx-auto"
            >
              We're here to answer your questions and discuss opportunities
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Contact Information Cards */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-[#0000fe] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-black">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm mb-1">
                  {detail}
                </p>
              ))}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-black">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6 text-black">
                  <div>
                    <label className="block text-black text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0000fe] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-black font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0000fe] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-black font-semibold mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0000fe] focus:outline-none transition-colors"
                      placeholder="+234 123 456 7890"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-black font-semibold mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0000fe] focus:outline-none transition-colors"
                      placeholder="Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-black font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border text-black border-gray-300 focus:border-[#0000fe] focus:outline-none transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="career">Career Information</option>
                    <option value="media">Media & Press</option>
                    <option value="supplier">Supplier Registration</option>
                    <option value="complaint">Complaint/Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-black text-sm font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#0000fe] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-[#0000fe] text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-[#0000cc] transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-black">Visit Our Office</h2>
              <p className="text-gray-600 mb-8">
                Find us at our head office in Abuja&apos;s Central Business District.
              </p>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-xl mb-8 h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9319374934867!2d7.488670814770842!3d9.072264493493967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0ba78eb61a47%3A0xd09df9f46c84d1c!2sCentral%20Business%20District%2C%20Abuja!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="NEPN Head Office Location"
                />
              </div>

              {/* Directions */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="font-bold mb-4">Getting Here</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0000fe] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5">
                      1
                    </div>
                    <span>
                      From Nnamdi Azikiwe International Airport: 30 minutes by
                      car
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0000fe] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5">
                      2
                    </div>
                    <span>Public transportation available via BRT routes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#0000fe] rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold mt-0.5">
                      3
                    </div>
                    <span>Parking available on-site for visitors</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Offices */}
      <section className="py-20 container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Other Offices</h2>
          <p className="text-gray-600">
            We have a presence across key locations in Nigeria
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl p-6 shadow-lg border-2 border-transparent hover:border-[#0000fe] transition-all"
            >
              <h3 className="text-xl font-bold mb-4 text-[#0000fe]">
                {office.name}
              </h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0000fe] mt-1 flex-shrink-0" />
                  <span className="text-sm">{office.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0000fe] flex-shrink-0" />
                  <span className="text-sm">{office.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0000fe] flex-shrink-0" />
                  <span className="text-sm">{office.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-[#fe0000] text-white mb-48">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Emergency Contact</h2>
            <p className="text-xl mb-6">
              For urgent matters or emergencies related to our operations
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/20 px-6 py-3 rounded-lg">
                <Phone className="w-6 h-6" />
                <span className="text-xl font-bold">
                  24/7 Hotline: +234 800 NEPN 911
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/20 px-6 py-3 rounded-lg">
                <Mail className="w-6 h-6" />
                <span className="text-xl font-bold">emergency@nepn.com.ng</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
