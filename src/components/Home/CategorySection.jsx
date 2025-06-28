import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import {
  Scissors,
  PenTool,
  Palette,
  Brush,
  Leaf,
  Feather,
  ChevronRight,
  Shirt,
  Wand2,
  Gem,
  Diamond,
  Crown,
} from "lucide-react";

// SVG Pattern backgrounds instead of images
const PatternBackground = memo(({ pattern, color }) => {
  // Different SVG patterns for each category
  const patterns = {
    weaving: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="weaving-pattern"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          patternTransform="scale(2) rotate(0)"
        >
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path d="M0 10h20M10 0v20" stroke={`${color}90`} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#weaving-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    Achaar: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="Achaar-pattern"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          patternTransform="scale(2) rotate(45)"
        >
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <circle cx="10" cy="10" r="2" fill={`${color}90`} />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#Achaar-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    bamboo: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="bamboo-pattern"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          patternTransform="scale(2) rotate(0)"
        >
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path d="M0 5h20M0 15h20" stroke={`${color}90`} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#bamboo-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    textiles: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="textiles-pattern"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          patternTransform="scale(2) rotate(30)"
        >
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path
            d="M0 0L20 20M20 0L0 20"
            stroke={`${color}90`}
            strokeWidth="1"
          />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#textiles-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    jewelry: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="jewelry-pattern"
          patternUnits="userSpaceOnUse"
          width="30"
          height="30"
          patternTransform="scale(1.5) rotate(0)"
        >
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path
            d="M15 5L25 15L15 25L5 15z"
            fill="none"
            stroke={`${color}90`}
            strokeWidth="1"
          />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#jewelry-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
    achaar: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern
          id="achaar-pattern"
          patternUnits="userSpaceOnUse"
          width="20"
          height="20"
          patternTransform="scale(2) rotate(0)"
        >
          <rect x="0" y="0" width="100%" height="100%" fill={`${color}50`} />
          <path d="M0 10h20M10 0v20" stroke={`${color}90`} strokeWidth="1" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#achaar-pattern)`} />
        <rect width="100%" height="100%" fill={`${color}20`} />
      </svg>
    ),
  };

  return patterns[pattern] || patterns.weaving;
});

// Category theme data
const categoryThemes = {
  Handicrafts: {
    primaryIcon: <Scissors size={28} />,
    secondaryIcon: <PenTool size={20} />,
    pattern: "weaving",
    color: "#f59e0b", // amber-500
    bgLight: "bg-amber-50",
    bgDark: "bg-amber-100",
    accentBg: "bg-amber-500",
    accentText: "text-amber-600",
    accentHover: "group-hover:text-amber-700",
    buttonBg: "bg-amber-100 group-hover/btn:bg-amber-600",
  },
  Achaar: {
    primaryIcon: <Palette size={28} />,
    secondaryIcon: <Brush size={20} />,
    pattern: "Achaar",
    color: "#ec4899", // pink-500
    bgLight: "bg-pink-50",
    bgDark: "bg-pink-100",
    accentBg: "bg-pink-500",
    accentText: "text-pink-600",
    accentHover: "group-hover:text-pink-700",
    buttonBg: "bg-pink-100 group-hover/btn:bg-pink-600",
  },
  "Bamboo Crafts": {
    primaryIcon: <Leaf size={28} />,
    secondaryIcon: <Feather size={20} />,
    pattern: "bamboo",
    color: "#10b981", // emerald-500
    bgLight: "bg-emerald-50",
    bgDark: "bg-emerald-100",
    accentBg: "bg-emerald-500",
    accentText: "text-emerald-600",
    accentHover: "group-hover:text-emerald-700",
    buttonBg: "bg-emerald-100 group-hover/btn:bg-emerald-600",
  },
  Textiles: {
    primaryIcon: <Shirt size={28} />,
    secondaryIcon: <Wand2 size={20} />, // Changed from Needle to Wand2
    pattern: "textiles",
    color: "#6366f1", // indigo-500
    bgLight: "bg-indigo-50",
    bgDark: "bg-indigo-100",
    accentBg: "bg-indigo-500",
    accentText: "text-indigo-600",
    accentHover: "group-hover:text-indigo-700",
    buttonBg: "bg-indigo-100 group-hover/btn:bg-indigo-600",
  },
  Jewelry: {
    primaryIcon: <Gem size={28} />,
    secondaryIcon: <Diamond size={20} />,
    pattern: "jewelry",
    color: "#8b5cf6", // violet-500
    bgLight: "bg-violet-50",
    bgDark: "bg-violet-100",
    accentBg: "bg-violet-500",
    accentText: "text-violet-600",
    accentHover: "group-hover:text-violet-700",
    buttonBg: "bg-violet-100 group-hover/btn:bg-violet-600",
  },
  Furniture: {
    primaryIcon: <Diamond size={28} />,
    secondaryIcon: <Crown size={20} />,
    pattern: "bamboo",
    color: "#a0522d",
    bgLight: "bg-yellow-50",
    bgDark: "bg-yellow-100",
    accentBg: "bg-yellow-900",
    accentText: "text-yellow-900",
    accentHover: "group-hover:text-yellow-800",
    buttonBg: "bg-yellow-100 group-hover/btn:bg-yellow-900",
  },
  Pickle: {
    primaryIcon: <Palette size={28} />,
    secondaryIcon: <Brush size={20} />,
    pattern: "Achaar",
    color: "#dc2626",
    bgLight: "bg-red-50",
    bgDark: "bg-red-100",
    accentBg: "bg-red-600",
    accentText: "text-red-600",
    accentHover: "group-hover:text-red-700",
    buttonBg: "bg-red-100 group-hover/btn:bg-red-600",
  },
};

// Memoized category card for performance
const CategoryCard = memo(({ category }) => {
  const { name, description, image } = category;
  const theme = categoryThemes[name] || categoryThemes.Handicrafts;
  // Assign light background shade based on category
  let cardBg = "bg-white";
  if (name === "Handicrafts") cardBg = "bg-orange-50";
  else if (name === "Jewelry") cardBg = "bg-purple-50";
  else if (name === "Furniture") cardBg = "bg-yellow-50";
  else if (name === "Textiles") cardBg = "bg-indigo-50";
  else if (name === "Pickle") cardBg = "bg-red-50";
  return (
    <div
      className={`flex-shrink-0 w-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group ${cardBg}`}
    >
      {/* Top section with full image background */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          style={name === "Jewelry" ? { objectPosition: "bottom" } : {}}
        />
      </div>
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className={`w-6 h-1 ${theme.accentBg} rounded-full mr-2`}></div>
          <h3
            className={`text-lg font-bold text-gray-800 ${theme.accentHover} transition-colors`}
          >
            {name}
          </h3>
        </div>
        <p className="text-gray-600 mb-4 text-xs leading-relaxed line-clamp-2">
          {description}
        </p>
        <div className="flex items-center justify-between w-full group/btn">
          <span
            className={`text-sm font-medium ${theme.accentText} group-hover:text-white transition-colors`}
          >
            Explore
          </span>
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center ${theme.buttonBg} group-hover:text-white transition-all`}
          >
            <ChevronRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform duration-300" />
          </span>
        </div>
      </div>
    </div>
  );
});

const CategorySection = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Handicrafts",
      description:
        "Traditional handwoven textiles and fabrics crafted with authentic techniques passed down through generations.",
      image: "/pic/h.jpeg",
    },
    {
      id: 2,
      name: "Jewelry",
      description:
        "Handcrafted ornaments and accessories featuring traditional metalwork, gemstones, and culturally significant designs.",
      image: "/pic/j.jpeg",
    },
    {
      id: 5,
      name: "Furniture",
      description:
        "Beautifully crafted furniture pieces made from sustainable materials, blending tradition with modern design.",
      image: "/pic/f.jpeg",
    },
    {
      id: 3,
      name: "Textiles",
      description:
        "Exquisite hand-loomed fabrics and garments featuring intricate patterns and natural dyes from regional textile traditions.",
      image: "/pic/t.jpeg",
    },
    {
      id: 4,
      name: "Pickle",
      description:
        "Handcrafted ceramic art and functional Achaar shaped with precision and artistic expression by skilled artisans.",
      image: "/pic/p.jpg",
    },
  ];

  const handleCategoryClick = (categoryName) => {
    navigate(`/category/${categoryName.toLowerCase().replace(" ", "-")}`);
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Watermark background for desktop only */}
      <img
        src="/pic/em.jpg"
        alt="Watermark"
        className="hidden md:block pointer-events-none select-none absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        style={{
          backgroundImage: "url(/pic/em.jpg)",
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          zIndex: 0,
        }}
      />
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center mb-3">
            <Crown className="text-amber-500 mr-2" size={20} />
            <span className="text-amber-600 font-medium text-sm tracking-wider uppercase">
              Purbasha Tripura
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-3">
            Explore Our Wide Range of Products
          </h2>

          <p className="text-gray-600 text-center max-w-2xl mb-4 text-sm">
            Discover handmade treasures created by skilled craftspeople using
            traditional techniques.
          </p>

          <div className="w-12 h-1 bg-amber-500 rounded-full"></div>
        </div>

        {/* Centered grid of categories */}
        <div className="flex justify-center w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(CategorySection);
