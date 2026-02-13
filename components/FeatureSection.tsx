"use client";

import { motion } from "framer-motion";
import { BarChart3, Globe, Music, Radio, ShieldCheck, Zap } from "lucide-react";

export default function FeatureSection() {
  const features = [
    {
      icon: <Music className="w-6 h-6" />,
      title: "High-Res Audio",
      desc: "Experience uncompressed audio. Supports FLAC & 320kbps for true audiophiles.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Auto Moderation",
      desc: "Keep your server clean from spam links, raids, and profanity automatically.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Zero Latency",
      desc: "Instant response time under 20ms. Zero lag, immediate command execution.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Dashboard",
      desc: "Full control via browser. Manage playlists and volume without complex commands.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Server Analytics",
      desc: "Visualize member statistics, chat activity, and peak hours with intuitive graphs.",
    },
    {
      icon: <Radio className="w-6 h-6" />,
      title: "24/7 Radio",
      desc: "Stream Lofi Hip Hop or your favorite stations non-stop, 24/7, even when idle.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-900/20 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-semibold tracking-wide"
          >
            POWERFUL FEATURES
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Everything You Need, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              In One Bot.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 leading-relaxed"
          >
            Built with cutting-edge technology to ensure your Discord server
            stays active, secure, and entertaining without compromising
            performance.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 rounded-3xl transition-colors duration-300 pointer-events-none" />

              <div className="w-14 h-14 bg-slate-900 rounded-2xl flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20 group-hover:shadow-indigo-500/40">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
