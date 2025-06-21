import { useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// 🔥 Quote data – English + Hindi
const quotes = [
  {
    id: 1,
    text: "Success doesn’t come from what you do occasionally. It comes from what you do consistently.",
    lang: "en"
  },
  {
    id: 2,
    text: "Don’t wait for opportunity. Create it.",
    lang: "en"
  },
  {
    id: 3,
    text: "Push yourself, because no one else is going to do it for you.",
    lang: "en"
  },
  {
    id: 4,
    text: "जो सपने देखता है, वही उन्हें पूरा करने की ताकत रखता है।",
    lang: "hi"
  },
  {
    id: 5,
    text: "हौसला अगर बुलंद हो, तो हर मंज़िल झुक जाती है।",
    lang: "hi"
  },
  {
    id: 6,
    text: "हर सुबह एक नया मौका है खुद को बेहतर बनाने का।",
    lang: "hi"
  }
];

export default function UdaanWithVedantApp() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
  }, [controls]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-zinc-100 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
          src="/photo.jpg"
          alt="Vedant Thakur"
          className="rounded-full w-40 h-40 object-cover shadow-2xl mb-6 border-4 border-yellow-400"
        />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg mb-4"
        >
          VEDANT THAKUR
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          className="max-w-2xl text-lg md:text-xl text-zinc-300"
        >
          A dreamer, a doer, and a believer in rising above limits. <br />
          <span className="text-yellow-300 font-medium">"उड़ान वहीं तक नहीं होती जहाँ तक सब सोचते हैं, मैं वहाँ तक सोचता हूँ जहाँ उड़ान शुरू होती है।"</span>
        </motion.p>

        <motion.a
          href="#quotes"
          whileHover={{ y: -4 }}
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-yellow-400/70 backdrop-blur-sm hover:bg-yellow-400/10 transition shadow-lg"
        >
          Explore Quotes <ArrowUpRight size={20} />
        </motion.a>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-20 px-4 md:px-10 lg:px-24">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-yellow-300">Fuel Your Flight</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {quotes.map((q, idx) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-zinc-900/80 rounded-2xl shadow-xl backdrop-blur-sm border border-zinc-700 hover:scale-[1.02] transition-transform"
              >
                <p className="text-lg leading-relaxed text-zinc-200 font-medium italic relative">
                  <span className="absolute -left-4 -top-2 text-4xl text-yellow-400">“</span>
                  {q.text}
                  <span className="absolute -right-4 -bottom-2 text-4xl text-yellow-400">”</span>
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Parents Section */}
      <section className="py-16 px-6 text-center border-t border-yellow-400/20 bg-zinc-900">
        <h3 className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-4">My Inspiration</h3>
        <p className="max-w-3xl mx-auto text-lg text-zinc-300">
          Behind every successful step I take, there are two pillars of strength — my parents, <span className="text-yellow-200 font-semibold">Mrs. Renu Thakur</span> and <span className="text-yellow-200 font-semibold">Mr. Kripa Shankar Thakur</span>. <br />
          Without their constant support and unconditional love, I could never have moved forward in life. <br />
          <span className="text-yellow-200 italic">"माँ-पापा की दुआओं का असर है जो मैं हर रोज़ खुद में उड़ान भरता हूँ। उनका विश्वास मेरी सबसे बड़ी ताक़त है।"</span>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-zinc-400 border-t border-zinc-700/70">
        Made with <span className="text-red-500">♥</span> by Vedant Thakur · 2025
      </footer>
    </div>
  );
}
