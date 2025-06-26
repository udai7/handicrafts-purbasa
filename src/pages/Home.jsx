import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroSection from "../components/Home/HeroSection";
import CategorySection from "../components/Home/CategorySection";
import FeaturedProducts from "../components/Home/FeaturedProducts";
import Testimonials from "../components/Home/Testimonials";
import ArtisanCard from "../components/Artisan/ArtisanCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ProductCard from "../components/Product/ProductCard";

const Home = () => {
  const [currentMap, setCurrentMap] = useState(0);
  const mapImages = ["/map1.png", "/map2.png", "/map3.png", "/map4.png"];
  const artisanData = [
    {
      id: "1",
      name: "Purbasha Agartala",
      image: "Purbasha2.jpg",
      location: "Agartala",
      rating: 4.8,
      reviewCount: 127,
      specialty: "Block Printing",
      shortBio:
        "Third-generation artisan specializing in traditional Rajasthani block printing techniques using natural dyes.",
      featured: true,
      productCount: 24,
    },
    {
      id: "2",
      name: "Purbasha Mumbai",
      image: "Purbasha3.jpg",
      location: "Mumbai",
      rating: 4.6,
      reviewCount: 89,
      specialty: "Silk Handicrafts",
      shortBio:
        "Skilled in traditional Banarasi silk weaving with over 25 years of experience creating intricate patterns.",
      featured: false,
      productCount: 18,
    },
    {
      id: "3",
      name: "Purbasha Kolkata",
      image: "Purbasha4.jpg",
      location: "Kolkata",
      rating: 4.9,
      reviewCount: 143,
      specialty: "Embroidery",
      shortBio:
        "Specializes in Kutch embroidery featuring mirror work, intricate stitches, and vibrant colors.",
      featured: true,
      productCount: 32,
    },
    {
      id: "4",
      name: "Purbasha Bangalore",
      image: "Purbasha5.jpg",
      location: "Bangalore",
      rating: 4.7,
      reviewCount: 76,
      specialty: "Pickle",
      shortBio:
        "Creates handcrafted blue pickle using techniques passed down for generations in his family.",
      featured: false,
      productCount: 15,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Category Section */}
      <div className="scroll-mt-16" id="categories">
        <CategorySection />
      </div>

      {/* Featured Products Section */}
      <div className="scroll-mt-16" id="featured">
        <FeaturedProductsSection />
      </div>

      {/* New Arrivals Section */}
      <div className="scroll-mt-16" id="new-arrivals">
        <NewArrivalsSection />
      </div>

      {/* Flagship Items Section */}
      <div className="scroll-mt-16" id="flagship-items">
        <FlagshipItemsSection />
      </div>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-amber-200 transition-shadow">
              <span className="text-amber-500 text-4xl mb-4">🌍</span>
              <h3 className="font-semibold text-lg mb-2">Ethically Sourced</h3>
              <p className="text-gray-600">
                We partner directly with artisans, ensuring fair wages and
                sustainable practices for every product.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-amber-200 transition-shadow">
              <span className="text-amber-500 text-4xl mb-4">🎨</span>
              <h3 className="font-semibold text-lg mb-2">
                Unique Craftsmanship
              </h3>
              <p className="text-gray-600">
                Every item is handmade, celebrating tradition, creativity, and
                the story of its maker.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-amber-200 transition-shadow">
              <span className="text-amber-500 text-4xl mb-4">💎</span>
              <h3 className="font-semibold text-lg mb-2">Quality Guaranteed</h3>
              <p className="text-gray-600">
                We carefully curate and inspect each product to ensure you
                receive only the best in quality and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section (Customer Stories) */}
      <div className="scroll-mt-16" id="customer-stories">
        <Testimonials />
      </div>

      {/* FAQ Section */}
      <FAQSection />

      {/* Collection of stores Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
            Collection of stores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {artisanData.map((artisan, idx) => (
              <ArtisanCard
                key={artisan.id}
                artisan={artisan}
                highlighted={currentMap === idx}
              />
            ))}
          </div>
          <StoreMapCarousel
            images={mapImages}
            current={currentMap}
            setCurrent={setCurrentMap}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <div className="scroll-mt-16" id="testimonials">
        <Testimonials />
      </div> */}

      {/* Join Artisan Section */}
      <div className="scroll-mt-16" id="join">
        <JoinArtisanSection />
      </div>
    </div>
  );
};

const JoinArtisanSection = () => {
  return (
    <section className="bg-gradient-to-b from-amber-50 to-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Join Our Community of Artisans
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Are you a craftsperson looking to share your unique creations with
            the world? Join our marketplace and connect with customers who value
            handmade quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              to="/admin-panel/"
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-5 rounded-lg transition-colors duration-200 shadow-md"
            >
              Start Selling Today
            </Link>
            <Link
              to="/artisans"
              className="bg-white hover:bg-gray-50 text-gray-800 font-medium py-2 px-5 rounded-lg border border-gray-300 transition-colors duration-200 shadow-md"
            >
              Visit Our Shops
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// FAQSection component with dropdowns
const FAQSection = () => {
  const faqs = [
    {
      question: "How are your products sourced?",
      answer:
        "All our products are ethically sourced directly from skilled artisans across Tripura and other parts of Northeast India. We work closely with Self-Help Groups (SHGs), tribal cooperatives, and independent craftsmen to ensure each product reflects authentic craftsmanship and traditional techniques. Our sourcing model not only preserves cultural heritage but also empowers rural communities by providing sustainable livelihoods.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "While we currently do not offer international shipping, we deliver across India using trusted courier partners to ensure your order reaches you safely and on time. If you're not satisfied with your purchase, we offer a 7-day return policy for unused items in their original condition—just contact our support team to initiate a return or exchange.",
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer:
        "Your satisfaction is our top priority. If you're not fully happy with your purchase, we offer a hassle-free return and exchange policy. You can return most items within 7 days of receiving them, provided they are unused, in their original condition, and with all original tags or packaging intact.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking ID via email or SMS, which you can use on our 'Track My Order' page to follow the delivery status. We don't enable direct contact with artisans, but we do share their stories and welcome you to send any feedback or special requests through us—we're happy to pass them on to the makers behind the craft.",
    },
    {
      question: "Can I contact the artisan directly?",
      answer:
        "While we do not currently allow direct contact with artisans for privacy and logistical reasons, we ensure that every artisan's story, background, and cultural significance are shared on our platform. You'll often find their profiles or short bios featured on the product pages or in our \"Meet the Makers\" section.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-6 transition-all"
            >
              <button
                className="w-full flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-lg text-amber-600">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-amber-500 transform transition-transform duration-300 ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-40 mt-4" : "max-h-0"
                } text-gray-700`}
                style={{
                  maxHeight: openIndex === idx ? "200px" : "0",
                  opacity: openIndex === idx ? 1 : 0,
                }}
              >
                <p className="text-base leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Carousel component for store map images
function StoreMapCarousel({ images, current, setCurrent }) {
  const prev = () => setCurrent((current - 1 + images.length) % images.length);
  const next = () => setCurrent((current + 1) % images.length);
  return (
    <div className="mt-8 flex items-center justify-center w-full max-w-8xl mx-auto">
      <button
        onClick={prev}
        className="mr-6 bg-white bg-opacity-80 hover:bg-amber-100 text-amber-600 rounded-full p-3 shadow transition"
        aria-label="Previous map"
        style={{ minWidth: 48 }}
      >
        <FaChevronLeft size={28} />
      </button>
      <img
        src={images[current]}
        alt={`Map of store locations ${current + 1}`}
        className="rounded-2xl shadow-lg object-cover w-full h-48 md:h-56 lg:h-64"
        style={{ height: "14rem" }}
      />
      <button
        onClick={next}
        className="ml-6 bg-white bg-opacity-80 hover:bg-amber-100 text-amber-600 rounded-full p-3 shadow transition"
        aria-label="Next map"
        style={{ minWidth: 48 }}
      >
        <FaChevronRight size={28} />
      </button>
    </div>
  );
}

function FeaturedProductsSection() {
  const products = [
    {
      id: 1,
      name: "Pinapple Bamboo Lamp",
      price: 45.99,
      image: "/pic/3.jpg",
      rating: 4.8,
      reviewCount: 32,
      badge: "Featured",
      tag: "Handicraft",
    },
    {
      id: 2,
      name: "Bamboo Earring Set",
      price: 89.99,
      image: "/pic/7.jpeg",
      rating: 4.9,
      reviewCount: 17,
      badge: "Featured",
      tag: "Jewelry",
    },
    {
      id: 3,
      name: "Landloom Saree",
      price: 35.5,
      image: "/pic/12.webp",
      rating: 4.7,
      reviewCount: 24,
      badge: "Featured",
      tag: "Textiles",
    },
    {
      id: 4,
      name: "Spicy Mango Pickle",
      price: 29.99,
      image: "/pic/man.webp",
      rating: 5.0,
      reviewCount: 11,
      badge: "Featured",
      tag: "Pickle",
    },
  ];
  return (
    <FeaturedProducts
      heading="Best Deal of the Day"
      subheading="Handcrafted With Love"
      description="Unique treasures handpicked from our most talented artisans, each telling a story of tradition and craftsmanship."
      buttonText="View All Products"
      products={products}
      showStrikethrough={true}
    />
  );
}

function NewArrivalsSection() {
  const products = [
    {
      id: 5,
      name: "Bamboo and Wooden Furniture",
      price: 24.99,
      image: "/pic/4.jpg",
      rating: 4.6,
      reviewCount: 8,
      badge: "New Arrival",
      tag: "Handicrafts",
    },
    {
      id: 6,
      name: "Bamboo Necklace and Earrings",
      price: 39.99,
      image: "/pic/6.jpg",
      rating: 4.8,
      reviewCount: 15,
      badge: "New Arrival",
      tag: "Jewelry",
    },
    {
      id: 7,
      name: "Tribal Style Scarf",
      price: 19.99,
      image: "/pic/10.jpg",
      rating: 4.7,
      reviewCount: 10,
      badge: "New Arrival",
      tag: "Textiles",
    },
    {
      id: 8,
      name: "Spicy Garlic and Veg pickle",
      price: 59.99,
      image: "/pic/2pp.jpg",
      rating: 4.9,
      reviewCount: 19,
      badge: "New Arrival",
      tag: "Pickle",
    },
  ];
  return (
    <FeaturedProducts
      heading="New Arrivals"
      subheading="Just In"
      description="Discover the latest additions to our artisan collection, fresh from the hands of our talented creators."
      buttonText="View All New Arrivals"
      products={products}
      showStrikethrough={false}
    />
  );
}

function FlagshipItemsSection() {
  const products = [
    {
      id: 9,
      name: "Wooden Water Bottle",
      price: 129.99,
      image: "/pic/2.jpg",
      rating: 5.0,
      reviewCount: 27,
      badge: "Flagship",
      tag: "Handicraft",
    },
    {
      id: 10,
      name: "Wooden Necklace and Earings",
      price: 54.99,
      image: "/pic/5.jpg",
      rating: 4.8,
      reviewCount: 21,
      badge: "Flagship",
      tag: "Jewelry",
    },
    {
      id: 11,
      name: "Silk Saree",
      price: 74.99,
      image: "/pic/11.webp",
      rating: 4.9,
      reviewCount: 18,
      badge: "Flagship",
      tag: "Textiles",
    },
    {
      id: 12,
      name: "Bamboo Shoot Pickle",
      price: 64.99,
      image: "/pic/bbp.webp",
      rating: 4.7,
      reviewCount: 13,
      badge: "Flagship",
      tag: "Pickle",
    },
  ];
  return (
    <FeaturedProducts
      heading="Flagship Items"
      subheading="Signature Picks"
      description="Explore our most iconic and celebrated artisan creations, loved by our community."
      buttonText="View Flagship Items"
      products={products}
      showStrikethrough={false}
    />
  );
}

export default Home;
