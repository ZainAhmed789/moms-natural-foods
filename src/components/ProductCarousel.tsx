// src/components/ProductCarousel.tsx
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Heart, ChefHat, Utensils, List } from "lucide-react";
import Image from "next/image";

type Product = {
  id: number;
  name: string;
  chef: string;
  rating: number;
  likes: number;
  image: string;
  chefBio: string;
  price?: number;
  deliveryTime?: string;
  ingredients?: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "GLUTEN FREE GRANOLA & MUESLI",
    chef: "Chef Feny",
    rating: 4.9,
    likes: 96,
    image: "/assets/bowl1.png",
    chefBio: "A delicious blend of natural ingredients that provides sustained energy throughout your day.",
    price: 45000,
    deliveryTime: "25-35 min",
    ingredients: [
      "Banana "," Walnut "," Rolled Oats "," Extra Virgin Olive Oil "," Apple Juice "," Wheat Germ "," Oat Bran ","Sunflower Seed ","Coconut "," Cinnamon"
    ]
  },
  {
    id: 2,
    name: "ORGANIC GLUTEN-FREE GRANOLA",
    chef: "Chef K Semy",
    rating: 4.3,
    likes: 38,
    image: "/assets/bowl2.png",
    chefBio: "A berry-infused gluten-free granola that bursts with antioxidant power. Perfect for those with dietary restrictions who still want to enjoy",
    price: 89000,
    deliveryTime: "30-40 min",
    ingredients: [
     " Blueberry "," Cranberry "," Strawberry "," Gluten Free Rolled Oats "," Almond "," Coconut "]
  },
  {
    id: 3,
    name: " GRANOLA GLUTEN-FREE ",
    chef: "Chef Adin Salmo",
    rating: 4.6,
    likes: 38,
    image: "/assets/bowl3.png",
    chefBio: "A rich, chocolatey granola with tart cherries and nutrient-dense ingredients. This antioxidant-rich blend provides a perfect balance of sweetness and nutrition",
    price: 35000,
    deliveryTime: "20-30 min",
    ingredients: ["Cherry "," Cacao Nibs "," Gluten Free Rolled Oats "," Extra Virgin Olive Oil "
    ]
  },
  {
    id: 4,
    name: "GLUTEN FREE GRANOLA & MUESLI",
    chef: "Chef Reza",
    rating: 4.5,
    likes: 96,
    image: "/assets/bowl4.png",
    chefBio: "Designer nyambi chef, setelah menikahi gadis south mountain yg lama dinanti nanti.",
    price: 38000,
    deliveryTime: "25-35 min",
    ingredients: [
      "Banana "," Walnut "," Rolled Oats "," Extra Virgin Olive Oil "," Apple Juice "," Wheat Germ "
    ]
  },
];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const mainBowlVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "400px" : "-400px",
    y: "-500px",
    opacity: 0,
    rotate: direction > 0 ? 8 : -8,
  }),
  animate: {
    x: "0px",
    y: "0px",
    opacity: 1,
    rotate: 0,
    scale: [0.98, 1.02, 1],
    transition: {
      duration: 1.6,
      ease: EASE,
      scale: { times: [0, 0.6, 1], duration: 1.6 },
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-400px" : "400px",
    y: "500px",
    opacity: 0,
    rotate: direction > 0 ? -8 : 8,
    transition: { duration: 1.2, ease: EASE },
  }),
};

const pathVariants = {
  initial: (direction: number) => ({
    x: direction > 0 ? "400px" : "-400px",
    y: "-500px",
    opacity: 0,
  }),
  animate: {
    x: "0px",
    y: "0px",
    opacity: 1,
    transition: {
      duration: 1.6,
      ease: EASE,
    },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-400px" : "400px",
    y: "500px",
    opacity: 0,
    transition: { duration: 1.2, ease: EASE },
  }),
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
};

export default function ProductCarousel(): JSX.Element {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'ingredients'>('overview');
  const product = products[page];

  // Reset to overview tab when product changes
  useEffect(() => {
    setActiveTab('overview');
  }, [product.id]);

  const paginate = (dir: number) => {
    setIsAutoPlaying(false);
    setPage(([p]) => {
      const nextIndex = (p + dir + products.length) % products.length;
      return [nextIndex, dir];
    });
    
    // Re-enable autoplay after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setPage(([p]) => [(p + 1) % products.length, 1]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="w-screen h-screen relative overflow-hidden flex items-center justify-center">
      {/* Blurred background image with dynamic change */}
      <AnimatePresence mode="wait">
        <motion.div 
          key={product.id}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/bg${product.id}.jpg')`,
            filter: "blur(4px)",
            transform: "scale(1.1)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>
      
      {/* Gradient overlay for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70 z-0"></div>
      
      <div className="w-[100vw] h-[100vh] relative overflow-hidden p-8 flex z-10">
        {/* Left side - Image display */}
        <div className="relative w-1/2 h-full flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="sync">
            <motion.div
              key={product.id}
              custom={direction}
              variants={mainBowlVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-[500px] h-[500px] left-[15%] bottom-[20%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={500}
                height={500}
                className="drop-shadow-2xl object-contain"
              />
            </motion.div>
            <motion.div
              key={`${product.id}-path`}
              custom={direction}
              variants={pathVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute w-[600px] h-[600px] opacity-70 left-[15%] bottom-[20%] transform -translate-x-1/2 -translate-y-1/2"
              style={{ zIndex: -1 }}
            />
          </AnimatePresence>
        </div>

        {/* Right side - Product info */}
        <div className="w-1/2 h-full flex flex-col justify-center items-start pl-12 pr-6 relative">
          <div className="w-full flex justify-end">
            <motion.div 
              className="w-[300px] h-[550px] bg-[#f9f9f9] bg-opacity-95 rounded-3xl p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm border border-white/30"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              key={`info-${product.id}`}
            >
              <div>
                {/* Tab Selection */}
                <div className="flex mb-6 border-b border-gray-200">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`flex-1 py-3 text-center font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTab === 'overview'
                        ? 'text-amber-600 border-b-2 border-amber-500'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <Utensils className="w-4 h-4" />
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('ingredients')}
                    className={`flex-1 py-3 text-center font-medium flex items-center justify-center gap-2 transition-colors ${
                      activeTab === 'ingredients'
                        ? 'text-amber-600 border-b-2 border-amber-500'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    <List className="w-4 h-4" />
                    Ingredients
                  </button>
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                  <button className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                    <Heart className="w-6 h-6 text-gray-600" fill="currentColor" fillOpacity={0.2} />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-amber-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xl font-bold text-amber-500 ml-2">
                    {product.rating}
                  </span>
                  <span className="text-gray-500">({product.likes} likes)</span>
                </div>
                
                {/* Tab Content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' ? (
                    <motion.div
                      key="overview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mb-6"
                    >
                      <div className="flex items-center gap-4 p-3 bg-amber-50 rounded-xl">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                          <ChefHat className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900">{product.chef}</h3>
                          <p className="text-sm text-gray-600">{product.chefBio}</p>
                        </div>
                      </div>
                
                    </motion.div>
                  ) : (
                    <motion.div
                      key="ingredients"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="mb-6"
                    >
                      <h3 className="font-semibold text-lg text-gray-900 mb-3">Ingredients</h3>
                      <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-2">
                        {product.ingredients?.map((ingredient, index) => (
                          <div key={index} className="flex items-center py-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></div>
                            <span className="text-sm text-gray-700">{ingredient}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
          
            </motion.div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-2xl px-8">
          <div className="flex items-center justify-between">
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous slide"
              className="p-3 rounded-full bg-white bg-opacity-90 shadow-md hover:bg-amber-50 transition-colors hover:shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <div className="flex gap-3">
              {products.map((p, index) => (
                <button
                  key={p.id}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setPage([index, index > page ? 1 : -1]);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 ease-in-out ${
                    index === page
                      ? "bg-white bg-opacity-95 shadow-lg scale-110 border border-amber-100"
                      : "bg-gray-100 bg-opacity-80 opacity-80 scale-95 hover:scale-100 hover:opacity-100"
                  }`}
                >
                  <div className="w-16 h-16 relative mb-2">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-gray-700 max-w-[80px] truncate">
                    {p.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
            
            <button
              onClick={() => paginate(1)}
              aria-label="Next slide"
              className="p-3 rounded-full bg-white bg-opacity-90 shadow-md hover:bg-amber-50 transition-colors hover:shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          
          {/* Progress indicator */}
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-2">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setPage([index, index > page ? 1 : -1]);
                    setTimeout(() => setIsAutoPlaying(true), 10000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === page ? 'bg-amber-500 w-6' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}