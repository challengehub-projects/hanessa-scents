import React from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";
import WhatsAppFloat from "./whatsaappfloat";


function Home() {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center bg-black">

        {/* BACKGROUND */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{ scale: [1, 1.08] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        {/* GOLD GLOW */}
        <div className="absolute w-[500px] h-[500px] bg-[#d4af37]/20 blur-[140px] rounded-full" />

        <motion.div
          className="relative z-10 text-center max-w-4xl px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >

          <p className="uppercase tracking-[8px] text-[#d4af37] mb-6 text-sm">
            Luxury Fragrance House
          </p>

          <motion.h1
            className="text-6xl md:text-8xl font-extralight tracking-[10px]"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
            }}
          >
            HANESSA'S
            <br />
            SCENTS
          </motion.h1>

          <p className="mt-8 text-white/70 max-w-2xl mx-auto leading-loose">
            Crafted to leave a memory,
            not just a scent.
            Discover fragrances inspired by elegance,
            confidence and timeless luxury.
          </p>

          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-10 py-4 rounded-full bg-[#d4af37] text-black font-semibold"
            >
              Explore Collection
            </motion.button>
          </a>

        </motion.div>

      </section>

      {/* FRAGRANCE STORY */}
      <section className="py-32 bg-[#050505] text-white">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/img1.jpg"
              className="w-full h-[650px] object-cover rounded-[40px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[6px] text-[#d4af37] mb-6">
              Our Story
            </p>

            <h2 className="text-5xl md:text-6xl font-light leading-tight">
              Fragrance Is
              <br />
              Invisible Luxury
            </h2>

            <p className="mt-8 text-white/60 leading-loose">
              At Hanessa's Scents, every fragrance is carefully selected
              to create emotion, confidence and unforgettable presence.
              Our collection blends timeless elegance with modern luxury,
              creating scents that become part of your identity.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-12">

              <div>
                <h3 className="text-4xl text-[#d4af37]">
                  100+
                </h3>
                <p className="text-white/60 mt-2">
                  Premium Fragrances
                </p>
              </div>

              <div>
                <h3 className="text-4xl text-[#d4af37]">
                  24hrs+
                </h3>
                <p className="text-white/60 mt-2">
                  Long Lasting Scents
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </section>

      {/* BEST SELLERS */}
      <section className="py-32 bg-black text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-[#d4af37]">
              Most Loved
            </p>

            <h2 className="text-5xl font-light mt-4">
              Best Sellers
            </h2>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[

              {
                name: "Aromatic Essence",
                notes: "A warm fusion of amber, soft woods, and vanilla musk",
                img: "/images/img2.jpg",
              },
              {
                name: "Floral Elegance",
                notes: "A delicate blend of rose petals, jasmine, and soft musk",
                img: "/images/img3.jpg",
              },
              {
                name: "Fresh Radiance",
                notes: "A bright composition of citrus zest, bergamot, and cedarwood",
                img: "/images/img4.jpg",
              },

            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileHover={{ y: -10 }}
                className="bg-white/[0.03] border border-white/10 overflow-hidden rounded-[30px]"
              >

                <img
                  src={item.img}
                  className="w-full h-[420px] object-cover"
                />

                <div className="p-8">

                  <h3 className="text-3xl font-light">
                    {item.name}
                  </h3>

                  <p className="text-[#d4af37] tracking-[2px] mt-4">
                    {item.notes}
                  </p>

                  <button className="mt-8 border border-[#d4af37] px-6 py-3 rounded-full hover:bg-[#d4af37] hover:text-black transition">
                    <a href="/contact">
                      Order Fragrance
                    </a>
                  </button>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* FULLSCREEN CAMPAIGN */}
      <section
        className="h-screen relative flex items-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-4xl px-10">

          <p className="uppercase tracking-[6px] text-[#d4af37]">
            New Collection
          </p>

          <h2 className="text-6xl md:text-8xl font-light mt-8 leading-none">
            The Art
            <br />
            Of Presence
          </h2>

          <p className="mt-8 text-white/70 max-w-xl leading-loose">
            Luxury fragrances crafted to leave a lasting impression
            wherever life takes you.
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section id="collections" className="bg-black text-white py-24 px-0 md:px-6">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <div className="text-center mb-16 px-6">
            <h2 className="text-4xl font-light tracking-wide">
              Hanessa's scents Collections
            </h2>
            <p className="text-white/60 mt-4 max-w-2xl mx-auto">
              Each fragrance in our collection is designed to match a mood, a moment, and a personality.
              Explore scents that inspire confidence, sophistication, and unforgettable memories.
            </p>
          </div>

          {/* INNER SECTION */}
          <section className="bg-black text-white py-28 px-0 md:px-6">
            <div className="max-w-6xl mx-auto">

              {/* HEADER */}
              <div className="text-center mb-20 px-6">
                <h2 className="text-4xl font-light tracking-wide">
                  Our Collections
                </h2>
                <p className="text-white/60 mt-4 max-w-2xl mx-auto">
                  From everyday freshness to unforgettable evening fragrances, our collection offers premium scents for every occasion and every personality.
                </p>
              </div>

              {/* CARDS */}
              <div className="flex flex-col gap-20">

                {[{
                  title: "Signature Scents",
                  img: "/images/img5.jpg",
                  desc: "Unique fragrances selected to help you stand out with confidence, class, and sophistication..",
                },
                {
                  title: "Luxury Fragrances",
                  img: "/images/img6.jpg",
                  desc: "High-end perfumes designed with rich notes of sophistication and charm.",
                },
                {
                  title: "Floral Collection",
                  img: "/images/img1.jpg",
                  desc: "Soft floral scents inspired by roses, jasmine, and natural beauty.",
                },
                {
                  title: "Woody & Musk",
                  img: "/images/img3.jpg",
                  desc: "Deep, bold fragrances with warm woody and musky undertones.",
                },
                {
                  title: "Fresh & Clean",
                  img: "/images/img4.jpg",
                  desc: "Light, refreshing perfumes perfect for daily elegance and simplicity.",
                },
                {
                  title: "Evening Luxury",
                  img: "/images/img2.jpg",
                  desc: "Bold evening scents made for unforgettable nights and presence.",
                },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      duration: 1.1,
                      ease: "easeOut",
                      delay: i * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden rounded-none md:rounded-2xl"
                  >
                    {/* IMAGE */}
                    <img
                      src={item.img}
                      className="w-full h-[300px] md:h-[420px] object-cover transition duration-700 ease-in-out group-hover:scale-105"
                    />

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition duration-500"></div>

                    {/* TEXT */}
                    <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-auto max-w-md">
                      <h3 className="text-2xl font-light mb-3 relative">
                        <span className="before:content-['“'] after:content-['”']">
                          {item.title}
                        </span>
                      </h3>
                      <p className="text-white/80 text-sm leading-relaxed italic opacity-90">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}

              </div>

            </div>
          </section>

          {/* FEATURES */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center px-6">

            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-500"
            >
              <h4 className="text-lg font-light mb-3">Signature Fragrances</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Discover exclusive perfumes crafted to express elegance, confidence, and individuality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-500"
            >
              <h4 className="text-lg font-light mb-3">Long-Lasting Scent</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Our perfumes are designed with rich notes that stay with you throughout the day and night.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-500"
            >
              <h4 className="text-lg font-light mb-3">Luxury Experience</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Every bottle is crafted to deliver a premium fragrance experience that leaves a lasting impression.
              </p>
            </motion.div>

          </div>
        </div>
      </section>



      {/* CONTACT */}

      <section id="contact" className="py-28 px-6 bg-black text-white relative overflow-hidden">

        <div className="max-w-5xl mx-auto text-center">

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-light tracking-wide">
              Connect With Us
            </h2>

            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Reach out anytime — your luxury experience starts with a message.
            </p>
          </motion.div>

          {/* FLOATING ICONS WRAPPER */}
          <div className="mt-20 flex justify-center items-center">

            <div className="mt-24 flex justify-center">
              <div className="relative w-[500px] h-[250px]">

                {/* WHATSAPP */}
                <motion.a
                  href="https://wa.me/2347086389388?text=I%20want%20to%20place%20an%20order%20from%20Hanessa%27s%20Scents"
                  target="_blank"
                  animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-10 left-10 group p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                >
                  {/* SHINE */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>

                  <FaWhatsapp className="relative text-2xl text-white/70 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

                {/* INSTAGRAM */}
                <motion.a
                  href="https://instagram.com/"
                  target="_blank"
                  animate={{ y: [0, -20, 0], x: [0, -12, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-0 right-10 group p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>

                  <FaInstagram className="relative text-2xl text-white/70 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

                {/* FACEBOOK */}
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
                  transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-10 left-20 group p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>

                  <FaFacebook className="relative text-2xl text-white/70 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

                {/* TWITTER */}
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  animate={{ y: [0, -18, 0], x: [0, -10, 0] }}
                  transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-20 group p-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_35px_rgba(212,175,55,0.9)] hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.8)]"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out"></span>

                  <FaTwitter className="relative text-2xl text-white/70 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

                {/* EMAIL (CENTER FOCUS) */}
                <motion.a
                  href="ezinnecovenant@gmail.com.com"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group p-6 rounded-full bg-white/10 border border-[#d4af37]/30 backdrop-blur-lg overflow-hidden transition-all duration-500 hover:border-[#d4af37] hover:shadow-[0_0_45px_rgba(212,175,55,1)]"
                >

                  {/* SHINE (FIXED CLICK ISSUE) */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent -translate-x-full group-hover:translate-x-full transition duration-700 ease-in-out pointer-events-none"></span>

                  <FaEnvelope className="relative text-3xl text-white/80 group-hover:text-[#d4af37] transition duration-300" />
                </motion.a>

              </div>
            </div>

          </div>

          {/* OPTIONAL CTA BUTTON */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://wa.me/2347086389388"
              target="_blank"
              className="relative inline-block px-8 py-3 rounded-full border border-[#d4af37] text-[#d4af37] overflow-hidden transition duration-500 group"
            >
              {/* SHINE EFFECT */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 ease-in-out"></span>

              {/* TEXT */}
              <span className="relative z-10 group-hover:text-black transition duration-500">
                Message Us Directly
              </span>

              {/* BACKGROUND HOVER */}
              <span className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></span>
            </a>
          </motion.div>

          {/* FOOTER */}
          <p className="mt-12 text-white/50 text-sm tracking-wide">
            Luxury fragrances crafted for elegance, emotion, and lasting presence — delivered with care.
          </p>
        </div>

        {/* BACKGROUND GLOW EFFECT */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-[#d4af37]/10 blur-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>

      </section>

      <WhatsAppFloat />

    </div>
  );
}

export default Home;