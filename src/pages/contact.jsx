import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa";
import { useState } from "react";
import WhatsAppFloat from "./whatsaappfloat";

export default function Contact() {
  const [message, setMessage] = useState("");


  const phoneNumber = "07086389388";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message ||
      "Hello Hanessa's Scents 🌸. I'm interested in your fragrances and would like to place an order."
  )}`;

  return (
    <section className="relative min-h-screen bg-black text-white py-28 px-6 overflow-hidden">
      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4af37]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#d4af37]/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[6px] text-[#d4af37] text-sm">
            Premium Fragrances
          </span>

          <h1 className="text-5xl md:text-7xl font-light mt-4 leading-tight">
            Let's Find Your
            <span className="block text-[#d4af37]">
              Signature Scent
            </span>
          </h1>

          <p className="text-white/60 mt-6 max-w-2xl mx-auto text-lg">
            Discover luxury fragrances crafted to inspire confidence,
            elegance and unforgettable memories.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-[#d4af37] text-3xl">100+</h3>
            <p className="text-white/60 text-sm mt-2">
              Premium Fragrances
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-[#d4af37] text-3xl">24/7</h3>
            <p className="text-white/60 text-sm mt-2">
              Customer Support
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center">
            <h3 className="text-[#d4af37] text-3xl">Fast</h3>
            <p className="text-white/60 text-sm mt-2">
              Delivery Service
            </p>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg"
              alt=""
              className="h-[650px] w-full object-cover rounded-[40px]"
            />

            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-8 left-8">
              <h3 className="text-3xl font-light">
                Luxury In Every Drop
              </h3>

              <p className="text-white/70 mt-2 max-w-sm">
                Carefully selected fragrances that leave a lasting impression.
              </p>
            </div>
          </motion.div>

          {/* FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
              bg-white/[0.03]
              border border-white/10
              rounded-[40px]
              p-10
              backdrop-blur-2xl
              shadow-[0_0_50px_rgba(212,175,55,0.1)]
            "
          >
            <h2 className="text-3xl font-light mb-3">
              Message Us
            </h2>

            <p className="text-white/50 mb-8">
              Tell us the fragrance you're looking for and we'll help you choose the perfect scent.
            </p>

            <textarea
              rows="7"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hello, I'm interested in your fragrances..."
              className="
                w-full
                bg-black/40
                border border-white/10
                rounded-3xl
                p-5
                text-white
                placeholder:text-white/30
                focus:border-[#d4af37]
                outline-none
              "
            />

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="
                mt-6
                flex
                items-center
                justify-center
                gap-3
                w-full
                py-4
                rounded-full
                bg-[#d4af37]
                text-black
                font-semibold
                hover:scale-[1.02]
                transition
              "
            >
              <FaWhatsapp />
              Send via WhatsApp
              <FaArrowRight />
            </a>

            {/* CONTACT CARDS */}
            <div className="grid gap-4 mt-8">

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <div className="flex items-center gap-4">
                  <FaWhatsapp className="text-[#d4af37] text-2xl" />
                  <div>
                    <h4>WhatsApp Orders</h4>
                    <p className="text-white/50 text-sm">
                      Fast responses and easy ordering.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <h4>Quick Delivery</h4>
                <p className="text-white/50 text-sm mt-1">
                  We deliver fragrances safely and quickly.
                </p>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex justify-center gap-6 mt-10">

              <a href="#" className="text-white/60 hover:text-[#d4af37] transition">
                <FaInstagram size={22} />
              </a>

              <a href="#" className="text-white/60 hover:text-[#d4af37] transition">
                <FaFacebook size={22} />
              </a>

              <a href="#" className="text-white/60 hover:text-[#d4af37] transition">
                <FaTwitter size={22} />
              </a>

            </div>

            <p className="text-center text-white/40 text-sm mt-8">
              Usually replies within a few hours.
            </p>
          </motion.div>

        </div>
      </div>

      <WhatsAppFloat />
    </section>
  );
}
