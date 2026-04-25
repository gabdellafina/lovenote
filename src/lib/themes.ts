export const themes = {
  blue: {
    id: "blue",
    name: "Ocean Blue",
    emoji: "🌊",
    desc: "beachy, oceanic and fresh",

    home: {
      background: "bg-gradient-to-br from-sky-100 via-blue-200/80 to-indigo-300",
    },

    ui: {
      card: "bg-white/50 backdrop-blur-lg border-white/10",
      textPrimary: "text-white",
      textSecondary: "text-white/60",
      button: "bg-blue-400 hover:bg-blue-500",
      glow: "shadow-blue-400/40"
    },

    themeButton: {
      background: "bg-white/50",
      textPrimary: "text-pink-900",
      textSecondary: "text-pink-600",
    },

    preview: {
      container: "bg-blue-100 text-blue-900",
      border: "border-blue-300",
      accent: "bg-blue-200",
      header: "bg-blue-600 text-white",
      textPrimary: "text-blue-800",
      textSecondary: "text-blue-600",
      divider: "border-blue-200",
      footer: "text-blue-400",
      emojiSet: ["🌊", "🐚", "✨"]
    },

    email: {
      background: "#E6F0FF",
      text: "#1E3A8A",
      accent: "#3B82F6",
    }
  },

  pink: {
    id: "pink",
    name: "Pastel Pink",
    emoji: "🌸",
    desc: "soft and delicate",

    home: {
      background: "bg-gradient-to-br from-pink-100 via-rose-200/80 to-fuchsia-300",
    },

    ui: {
      card: "bg-white/50 backdrop-blur-lg border-white/10",
      textPrimary: "text-pink-900",
      textSecondary: "text-pink-600",
      button: "bg-pink-400 hover:bg-pink-500",
      glow: "shadow-pink-400/40"
    },

    themeButton: {
      background: "bg-white/50",
      textPrimary: "text-pink-900",
      textSecondary: "text-pink-600",
    },

    preview: {
      container: "bg-pink-100 text-pink-900",
      border: "border-pink-300",
      accent: "bg-pink-200",
      header: "bg-pink-500 text-white",
      textPrimary: "text-pink-800",
      textSecondary: "text-pink-600",
      divider: "border-pink-200",
      footer: "text-pink-400",
      emojiSet: ["🌸", "💖", "✨"]
    },

    email: {
      background: "#FFE4EC",
      text: "#9D174D",
      accent: "#EC4899",
    }
  },

  goth: {
    id: "goth",
    name: "Soft Gothic",
    emoji: "🖤",
    desc: "dark and moody",

    home: {
      background: "bg-gradient-to-br from-zinc-900 via-purple-900/80 to-black",
    },

    ui: {
      card: "bg-white/20 border-white/10",
      textPrimary: "text-white",
      textSecondary: "text-gray-400",
      button: "bg-gray-800 hover:bg-gray-900",
      glow: "shadow-purple-800/40"
    },

    themeButton: {
      background: "bg-white/50",
      textPrimary: "text-pink-900",
      textSecondary: "text-pink-600",
    },

    preview: {
      container: "bg-black text-white",
      border: "border-gray-700",
      accent: "bg-gray-800",
      header: "bg-black text-white",
      textPrimary: "text-gray-100", 
      textSecondary: "text-gray-300",
      divider: "border-gray-700",
      footer: "text-gray-500",
      emojiSet: ["🖤", "🦇", "🌙"]
    },

    email: {
      background: "#0F0F0F",
      text: "#E5E5E5",
      accent: "#444",
    }
  }
};