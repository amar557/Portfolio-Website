import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ContexApi } from "./context";

const orbitDots = [
  { size: "w-3 h-3", color: "from-blue-500 to-cyan-400", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { size: "w-2.5 h-2.5", color: "from-purple-500 to-pink-500", position: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
  { size: "w-2 h-2", color: "from-indigo-500 to-blue-500", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { size: "w-2.5 h-2.5", color: "from-fuchsia-500 to-purple-500", position: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
];

const Loader = ({ coverNavbar = true }) => {
  const { Isdark } = useContext(ContexApi);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center overflow-hidden ${
        coverNavbar ? "z-[100]" : "z-40"
      } ${
        Isdark
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "46px 46px",
        }}
      />

      <motion.div
        animate={{ rotate: 360, scale: [1, 1.15, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className={`pointer-events-none absolute -top-16 right-10 h-56 w-56 rounded-full blur-3xl ${
          Isdark ? "bg-blue-500/20" : "bg-purple-400/25"
        }`}
      />
      <motion.div
        animate={{ rotate: -360, y: [0, -24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className={`pointer-events-none absolute bottom-10 left-6 h-44 w-44 rounded-full blur-3xl ${
          Isdark ? "bg-purple-500/20" : "bg-blue-400/25"
        }`}
      />

      <div className="relative z-10 flex flex-col items-center gap-8">
        <div className="relative flex h-40 w-40 items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-transparent"
            style={{
              background:
                "conic-gradient(from 90deg, transparent 0%, #2563eb 35%, #9333ea 70%, transparent 100%)",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
            }}
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
            className={`absolute inset-4 rounded-full border ${
              Isdark ? "border-white/10" : "border-gray-300/60"
            }`}
          >
            {orbitDots.map((dot) => (
              <span
                key={dot.color}
                className={`absolute rounded-full bg-gradient-to-r shadow-lg ${dot.size} ${dot.color} ${dot.position}`}
              />
            ))}
          </motion.div>

          <motion.div
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className={`relative flex h-20 w-20 items-center justify-center rounded-full border shadow-2xl ${
              Isdark
                ? "border-white/15 bg-white/10 text-white"
                : "border-white/70 bg-white/80 text-gray-800"
            } backdrop-blur-md`}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-3xl font-bold text-transparent">
              A
            </span>
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <h2
            className={`text-lg font-semibold tracking-[0.35em] uppercase ${
              Isdark ? "text-white" : "text-gray-800"
            }`}
          >
            Loading
            <span className="inline-flex w-8 justify-start">
              {[0, 1, 2].map((dot) => (
                <motion.span
                  key={dot}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.1,
                    repeat: Infinity,
                    delay: dot * 0.18,
                  }}
                >
                  .
                </motion.span>
              ))}
            </span>
          </h2>
          <p
            className={`text-sm ${
              Isdark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Crafting the experience
          </p>
        </div>

        <div
          className={`h-1 w-44 overflow-hidden rounded-full ${
            Isdark ? "bg-white/10" : "bg-gray-200"
          }`}
        >
          <motion.div
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
