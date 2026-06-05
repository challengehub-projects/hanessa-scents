import { motion } from "framer-motion";
import WhatsAppFloat from "./whatsaappfloat";

export default function About() {
  return (
    <section className="bg-black text-white overflow-hidden">

      {/* HERO */}
      {/* HERO */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background */}
        <img
          src="https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-black" />

        {/* Luxury Glow */}
        <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#D4AF37]/10 blur-[180px] rounded-full" />
        <div className="absolute bottom-20 right-10 w-[350px] h-[350px] bg-[#D4AF37]/10 blur-[160px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <p className="uppercase tracking-[10px] text-[#D4AF37] mb-6">
            Luxury Fragrance House
          </p>

          <h1 className="text-6xl md:text-8xl font-light leading-none">
            About
            <span className="block mt-4 text-[#D4AF37]">
              HANESSA'S SCENTS
            </span>
          </h1>

          <div className="w-32 h-[1px] bg-[#D4AF37] mx-auto my-10" />

          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto leading-9">
            More than fragrance, we create unforgettable identities.
            Every bottle is chosen to inspire confidence, elegance,
            sophistication and lasting impressions.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-12">

            <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-full px-8 py-4">
              Premium Quality
            </div>

            <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-full px-8 py-4">
              Luxury Collection
            </div>

            <div className="border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-full px-8 py-4">
              Long Lasting
            </div>

          </div>
        </motion.div>
      </div>

      {/* BRAND STORY */}
      <section className="relative py-40 overflow-hidden">

        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[700px] h-[700px] bg-[#D4AF37]/10 blur-[200px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          <div className="text-center mb-24">

            <p className="tracking-[8px] uppercase text-[#D4AF37] mb-6">
              Our Story
            </p>

            <h2 className="text-5xl md:text-7xl font-light">
              Crafted For Those
              <br />
              Who Leave A Mark
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >

              <img
                src="https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg"
                alt=""
                className="rounded-[40px] h-[750px] w-full object-cover"
              />

              <div className="absolute -bottom-8 -right-8 bg-black border border-[#D4AF37]/20 rounded-3xl p-8 backdrop-blur-xl">

                <h3 className="text-5xl text-[#D4AF37]">
                  500+
                </h3>

                <p className="text-white/60 mt-2">
                  Satisfied Clients
                </p>

              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >

              <p className="text-[#D4AF37] uppercase tracking-[6px] mb-4">
                The Hanessa Difference
              </p>

              <h3 className="text-4xl md:text-6xl font-light mb-10">
                Luxury That
                Speaks Before You Do
              </h3>

              <p className="text-white/65 leading-9 mb-8">
                Hanessa was built around one idea:
                fragrance should never be ordinary. A scent should
                become a signature, a memory, and a statement of
                confidence.
              </p>

              <p className="text-white/65 leading-9 mb-8">
                Our collection features carefully selected luxury
                fragrances known for exceptional quality,
                remarkable longevity, and unforgettable character.
                From rich oud compositions to sophisticated florals,
                every bottle tells a unique story.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-12">

                <div className="border border-white/10 rounded-3xl p-6 bg-white/[0.03]">
                  <h4 className="text-5xl text-[#D4AF37]">
                    100+
                  </h4>

                  <p className="text-white/50 mt-3">
                    Luxury Fragrances
                  </p>
                </div>

                <div className="border border-white/10 rounded-3xl p-6 bg-white/[0.03]">
                  <h4 className="text-5xl text-[#D4AF37]">
                    24H+
                  </h4>

                  <p className="text-white/50 mt-3">
                    Lasting Presence
                  </p>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border border-[#D4AF37]/20 rounded-[40px] p-10 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"
          >

            <p className="text-[#D4AF37] uppercase tracking-[6px] mb-5">
              Mission
            </p>

            <h3 className="text-4xl mb-6">
              Elevating Confidence
            </h3>

            <p className="text-white/65 leading-8">
              We provide premium fragrances that empower
              individuals to express elegance, confidence,
              personality and timeless sophistication.
            </p>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-[#D4AF37]/20 rounded-[40px] p-10 bg-gradient-to-br from-[#D4AF37]/10 to-transparent"
          >

            <p className="text-[#D4AF37] uppercase tracking-[6px] mb-5">
              Vision
            </p>

            <h3 className="text-4xl mb-6">
              Luxury Without Limits
            </h3>

            <p className="text-white/65 leading-8">
              To become the trusted destination for luxury
              fragrances, known for excellence, authenticity,
              and unforgettable customer experiences.
            </p>

          </motion.div>

        </div>

      </section>


      {/* BRAND STORY */}
      <section className="relative py-40 overflow-hidden">

        {/* Luxury Glow */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#D4AF37]/10 blur-[220px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          ```
          {/* Header */}
          <div className="text-center mb-24">

            <p className="uppercase tracking-[10px] text-[#D4AF37] mb-6">
              Our Story
            </p>

            <h2 className="text-5xl md:text-7xl font-light leading-tight">
              Luxury Begins
              <br />
              With A Lasting Impression
            </h2>

            <div className="w-32 h-[1px] bg-[#D4AF37] mx-auto mt-10" />

          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative"
            >

              <img
                src="https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg"
                alt=""
                className="rounded-[40px] h-[750px] w-full object-cover"
              />

              <div
                className="
      absolute
      bottom-8
      right-8
      bg-black/70
      backdrop-blur-xl
      border
      border-[#D4AF37]/20
      rounded-3xl
      p-8
    "
              >
                <h4 className="text-5xl text-[#D4AF37]">
                  100+
                </h4>

                <p className="text-white/60 mt-2">
                  Luxury Fragrances
                </p>
              </div>

            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[6px] text-[#D4AF37] mb-4">
                The Hanessa Difference
              </p>

              <h3 className="text-4xl md:text-6xl font-light mb-10 leading-tight">
                Crafted For Those
                <span className="block text-[#D4AF37]">
                  Who Refuse Ordinary
                </span>
              </h3>

              <p className="text-white/65 leading-9 mb-8">
                At Hanessa, fragrance is more than a
                finishing touch—it is a statement of confidence,
                elegance, and individuality. Every scent is chosen
                to leave a memorable impression long after you have
                left the room.
              </p>

              <p className="text-white/65 leading-9 mb-8">
                Our collection brings together exceptional luxury
                fragrances renowned for their quality, character,
                and remarkable longevity. From rich oud blends and
                warm oriental notes to modern florals and fresh
                sophisticated accords, each bottle tells its own
                unforgettable story.
              </p>

              <p className="text-white/65 leading-9 mb-10">
                We believe true luxury should not only be seen—it
                should be experienced. That is why every fragrance
                in our collection is selected to inspire confidence
                and elevate everyday moments into lasting memories.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-12">

                <div className="border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-xl p-6">

                  <h4 className="text-5xl text-[#D4AF37]">
                    100+
                  </h4>

                  <p className="text-white/50 mt-3">
                    Premium Fragrances
                  </p>

                </div>

                <div className="border border-white/10 rounded-3xl bg-white/[0.03] backdrop-blur-xl p-6">

                  <h4 className="text-5xl text-[#D4AF37]">
                    24H+
                  </h4>

                  <p className="text-white/50 mt-3">
                    Lasting Presence
                  </p>

                </div>

              </div>

            </motion.div>

          </div>
          

        </div>

      </section>


      {/* STATS */}
      <div className="max-w-6xl mx-auto px-6 pb-32">

        <div className="grid md:grid-cols-4 gap-6">

          {[
            ["500+", "Happy Clients"],
            ["100%", "Authentic Fragrances"],
            ["24/7", "Customer Support"],
            ["Premium", "Luxury Experience"],
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center"
            >
              <h3 className="text-4xl text-[#D4AF37] mb-3">
                {item[0]}
              </h3>

              <p className="text-white/60">
                {item[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="max-w-7xl mx-auto px-6 pb-32">

        <div className="text-center mb-20">
          <span className="text-[#D4AF37] tracking-[6px] uppercase">
            Excellence
          </span>

          <h2 className="text-5xl font-light mt-4">
            Why Choose Us
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Signature Scents",
              text: "Distinct fragrances designed to express personality, confidence, and luxury."
            },
            {
              title: "Long Lasting",
              text: "Premium compositions that remain captivating from morning to night."
            },
            {
              title: "Luxury Experience",
              text: "Every detail—from fragrance to presentation—is crafted for elegance."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="bg-gradient-to-b from-white/[0.06] to-white/[0.02]
              border border-white/10 rounded-3xl p-8"
            >
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mb-6">
                <div className="w-6 h-6 bg-[#D4AF37] rounded-full" />
              </div>

              <h3 className="text-2xl mb-4">
                {feature.title}
              </h3>

              <p className="text-white/60 leading-7">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PHILOSOPHY */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 pb-32"
      >
        <div className="border border-[#D4AF37]/20 rounded-[40px] bg-gradient-to-b from-[#D4AF37]/10 to-transparent p-12 text-center">

          <p className="text-[#D4AF37] tracking-[6px] uppercase mb-4">
            Our Philosophy
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Luxury Is Remembered,
            Scent Makes It Last
          </h2>

          <p className="text-white/65 max-w-3xl mx-auto leading-8">
            We believe fragrance is the invisible signature
            of elegance. Every scent in our collection is
            selected to leave a memorable impression,
            helping you express confidence, sophistication,
            and individuality wherever life takes you.
          </p>
        </div>
      </motion.div>

      {/* CTA */}
      <div className="text-center px-6 pb-32">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-light mb-6"
        >
          Discover Your Signature Scent
        </motion.h2>

        <p className="text-white/60 mb-10 max-w-2xl mx-auto">
          Explore our exclusive collection and find
          the fragrance that perfectly reflects your
          personality and style.
        </p>

        <a
          href="/contact"
          className="inline-block bg-[#D4AF37] text-black px-10 py-4 rounded-full font-medium hover:scale-105 transition"
        >
          Shop Collection
        </a>
      </div>

      <WhatsAppFloat />
    </section>
  );
}