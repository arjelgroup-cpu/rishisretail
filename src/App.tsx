import React, { useRef, useState } from 'react';
import { Phone, Star, ShoppingBag, Users, Award, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
import { Analytics, track } from '@vercel/analytics/react';
import { CountdownTimer } from './components/CountdownTimer';
import { PhoneForm } from './components/PhoneForm';

const storeLocations = [
  {
    name: "Nalbari",
    address: "N.T Road, Near Hari Mandir, Nalbari, Assam 781335",
    phone: "60011 34056"
  },
  {
    name: "Barpeta Road",
    address: "Ganesh Commercial Complex, Barpeta Rd, near Barpeta Road Police Station, Maj Gaon, Barpeta Road, Assam 781315",
    phone: "95311 84891"
  },
  {
    name: "Bongaigaon",
    address: "Chapaguri Rd, near The Universal Studio Shopping Mall, Gwjwnpuri, Chapaguri, Bongaigaon, Assam 783380",
    phone: "93958 66245"
  },
  {
    name: "Gauripur",
    address: "Ground Floor, Roy Complex (Dharma Tower), Ward no 1, opposite Children Park, Gauripur, Assam 783331",
    phone: "96789 05073"
  },
  {
    name: "Maligaon, Guwahati",
    address: "Commercial Complex, Kunja Plaza, Maligaon, Guwahati, Assam 781012",
    phone: "91270 12917"
  },
  {
    name: "Pan Bazaar, Guwahati",
    address: "Hem Baruah Rd, opp. Central bank of India, Pan Bazaar, Guwahati, Assam 781001",
    phone: "98545 28302"
  },
  {
    name: "Mangaldoi",
    address: "Ward no. 5, Hiren sarkar Building, Jumma Masjid, LNB Rd, Mangaldoi, Kowar Para, Assam 784125",
    phone: "98641 28575"
  },
  {
    name: "Nagaon",
    address: "GROUND FLOOR, 1, Nagaon - Guwahati Hwy, near SHYAM MANDIR, Haibargaon, Khutikatia, Nagaon, Assam 782002",
    phone: "70997 13917"
  },
  {
    name: "Headquarters",
    address: "H.K. Choudhary Complex, Basistha Road, Dispur, Lastgate, Guwahati, Assam 781006",
    phone: "+91 70990 79777"
  }
];

const productCategories = [
  { name: "TVs", icon: "📺" },
  { name: "Refrigerators", icon: "❄️" },
  { name: "Washing Machines", icon: "🧺" },
  { name: "Air Conditioners", icon: "❄️" },
  { name: "Laptops", icon: "💻" },
  { name: "Mobile Phones", icon: "📱" },
  { name: "Gaming Consoles", icon: "🎮" },
  { name: "Accessories", icon: "🔌" }
];

function App() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = 280 + 16; // card width + gap
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = 280 + 16;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Subtle polka dot background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-white to-orange-50"></div>
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>

      {/* Header - Enhanced with navigation */}
      <header className="relative z-10 pt-4 pb-3">
        {/* Navigation Bar - Mobile optimized */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 border border-gray-200 shadow-lg">
            <div className="flex items-center justify-between">
              {/* Logo - Mobile optimized */}
              <div className="flex items-center">
                <img 
                  src="/rishis-logo.png" 
                  alt="Rishis Retail" 
                  className="h-14 md:h-16 w-auto object-contain drop-shadow-lg"
                  style={{ maxWidth: '180px' }}
                />
              </div>
              
              {/* Navigation Links */}
              <div className="hidden md:flex items-center space-x-6">
                <a href="#products" className="text-gray-600 hover:text-yellow-600 transition-colors text-sm font-medium">Products</a>
                <a href="#stores" className="text-gray-600 hover:text-yellow-600 transition-colors text-sm font-medium">Stores</a>
                <a href="#offers" className="text-gray-600 hover:text-yellow-600 transition-colors text-sm font-medium">Offers</a>
                <a href="#contact" className="text-gray-600 hover:text-yellow-600 transition-colors text-sm font-medium">Contact</a>
              </div>
              
              {/* Contact Info */}
              <div className="flex items-center space-x-3">
                <div className="hidden lg:flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1.5">
                  <Phone className="w-3 h-3 text-gray-600" />
                  <span className="text-gray-700 text-xs font-medium">+91 70990 79777</span>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
                  SALE ON!
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Mobile optimized */}
      <main className="relative z-10 px-4 md:px-6 lg:px-8 pb-6 space-y-8 md:space-y-12 lg:space-y-16">
        
        {/* 1. HERO - Mobile friendly */}
        <section id="offers" className="text-center pt-2 max-w-6xl mx-auto">
          <div className="relative mb-6">
            <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto mb-6">
              <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl md:text-3xl mb-2">📺</div>
                <div className="text-gray-700 text-xs font-medium">Smart TVs</div>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl md:text-3xl mb-2">❄️</div>
                <div className="text-gray-700 text-xs font-medium">ACs & Fridges</div>
              </div>
              <div className="bg-white rounded-lg p-3 md:p-4 border border-gray-200 shadow-sm">
                <div className="text-2xl md:text-3xl mb-2">💻</div>
                <div className="text-gray-700 text-xs font-medium">Laptops</div>
              </div>
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-800 mb-6 md:mb-8 leading-tight">
            AUGUST-END
            <br />
            <span className="text-yellow-600">MEGA DHAMAKA</span>
          </h1>
          <div className="flex flex-col items-center space-y-4 mb-6">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 md:px-12 md:py-5 rounded-full text-xl md:text-3xl font-bold shadow-lg">
              UP TO 40% OFF
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-full px-8 py-3 border border-gray-200 shadow-md">
              <span className="text-gray-700 font-semibold text-base md:text-lg">
                9 Stores Across Assam • Premium Electronics & Appliances
              </span>
            </div>
          </div>
        </section>

        {/* 2. URGENCY - Prominent countdown */}
        <section className="max-w-4xl mx-auto">
          <CountdownTimer />
        </section>

        {/* 3. MAIN CTA - Mobile optimized */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 shadow-xl">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="bg-yellow-100 rounded-full p-3 border border-yellow-200">
                  <div className="text-3xl">🏪</div>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Visit Your Nearest Store</h2>
              <p className="text-gray-700 text-base md:text-lg mb-4">Get up to 40% OFF on all electronics & home appliances</p>
              <p className="text-gray-600 text-sm md:text-base mb-6">Walk into any Rishis Retail outlet and claim your exclusive August-end savings!</p>
              
              {/* Product categories - enhanced with icons */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-6">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                  <div className="text-lg mb-1">📺</div>
                  <div className="text-gray-700 text-xs font-medium">Smart TVs</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                  <div className="text-lg mb-1">❄️</div>
                  <div className="text-gray-700 text-xs font-medium">ACs & Fridges</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                  <div className="text-lg mb-1">📱</div>
                  <div className="text-gray-700 text-xs font-medium">Mobiles</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                  <div className="text-lg mb-1">💻</div>
                  <div className="text-gray-700 text-xs font-medium">Laptops</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 text-center">
                  <div className="text-lg mb-1">🎮</div>
                  <div className="text-gray-700 text-xs font-medium">Gaming</div>
                </div>
              </div>
            </div>
            
            {/* Phone Form - For Rishis executives to call back */}
            <div className="max-w-sm mx-auto">
              <PhoneForm />
            </div>
            
            {/* Additional call to action */}
            <div className="text-center mt-4">
              <p className="text-white/80 text-xs">Or scroll down to find your nearest store location</p>
            </div>
          </div>
        </section>

        {/* 4. SOCIAL PROOF - Enhanced with better visuals */}
        <section className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="bg-yellow-100 rounded-full p-3 border border-yellow-200">
                <div className="text-lg">🏆</div>
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-800">Why Customers Trust Us</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: Users, value: "9", label: "Stores", color: "from-blue-500 to-blue-600" },
              { icon: ShoppingBag, value: "1000+", label: "Products", color: "from-purple-500 to-purple-600" },
              { icon: Star, value: "4.8", label: "Rating", color: "from-yellow-500 to-yellow-600" },
              { icon: Award, value: "Trusted", label: "Brand", color: "from-green-500 to-green-600" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 text-center border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className={`bg-gradient-to-r ${stat.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xl md:text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PRODUCT INTEREST - Enhanced with better visuals */}
        <section id="products" className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="bg-yellow-100 rounded-full p-3 border border-yellow-200">
                <div className="text-2xl">🛍️</div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">What We Offer</h2>
            <p className="text-gray-600 text-sm">Premium electronics and home appliances at unbeatable prices</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl">
                <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <div className="text-2xl md:text-3xl">{category.icon}</div>
                </div>
                <div className="text-gray-800 font-semibold text-sm md:text-base">{category.name}</div>
                <div className="text-yellow-600 text-xs mt-1 font-medium">Up to 40% OFF</div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. TRUST BUILDING - Enhanced with icons */}
        <section className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-gray-200 shadow-xl">
            <div className="text-center mb-6">
              <div className="flex justify-center mb-3">
                <div className="bg-yellow-100 rounded-full p-3 border border-yellow-200">
                  <div className="text-2xl">✨</div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">Why Choose Rishis Retail?</h3>
              <p className="text-gray-600 text-sm">Your trusted partner for premium electronics</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md">✓</div>
                <div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold">9 Stores Across Assam</span>
                  <div className="text-gray-600 text-xs">Wide network coverage</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md">✓</div>
                <div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold">Easy EMI Options</span>
                  <div className="text-gray-600 text-xs">Flexible payment plans</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md">✓</div>
                <div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold">Exchange Programs</span>
                  <div className="text-gray-600 text-xs">Trade-in your old devices</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md">✓</div>
                <div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold">Genuine Products</span>
                  <div className="text-gray-600 text-xs">100% authentic brands</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base shadow-md">✓</div>
                <div>
                  <span className="text-gray-800 text-sm md:text-base font-semibold">After-Sales Support</span>
                  <div className="text-gray-600 text-xs">Comprehensive service</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. LOCATION ACCESS - Enhanced with icons */}
        <section id="stores" className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="bg-yellow-100 rounded-full p-3 border border-yellow-200">
                <div className="text-2xl">📍</div>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Your Nearest Rishis Store</h2>
            <p className="text-gray-600 text-sm md:text-base">Choose your location and visit for the best deals on electronics!</p>
          </div>
                      <div className="relative">
              <div 
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing carousel-container"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
              {storeLocations.map((store, index) => (
                <div 
                  key={index} 
                  className="bg-white/95 backdrop-blur-sm rounded-xl p-4 border border-gray-200 min-w-[280px] max-w-[280px] flex-shrink-0 hover:bg-white transition-all duration-300 snap-start shadow-lg hover:shadow-xl carousel-item"
                >
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3 shadow-md">
                      <span className="text-xl">🏪</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-800 mb-2">{store.name}</h3>
                    <p className="text-gray-600 text-xs mb-4 leading-relaxed">{store.address}</p>
                    <a 
                      href={`tel:${store.phone}`}
                      onClick={() => track('store_call', { store: store.name, location: store.address })}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 font-medium shadow-sm hover:shadow-md text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span className="font-semibold">Call Store</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {storeLocations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:bg-yellow-400 cursor-pointer ${
                    activeIndex === index ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Desktop navigation arrows */}
            <div className="hidden md:flex absolute inset-y-0 left-0 right-0 pointer-events-none">
              <button
                onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg pointer-events-auto transition-all duration-300"
                disabled={activeIndex === 0}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollToIndex(Math.min(storeLocations.length - 1, activeIndex + 1))}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg pointer-events-auto transition-all duration-300"
                disabled={activeIndex === storeLocations.length - 1}
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* 8. CONTACT - Enhanced with icons */}
        <section id="contact" className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex justify-center mb-3">
              <div className="bg-yellow-100 rounded-full p-3 border border-yellow-200">
                <div className="text-2xl">📞</div>
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Get In Touch</h2>
            <p className="text-gray-600 text-sm">Connect with us for expert guidance</p>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 mb-3 shadow-lg">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Phone className="w-5 h-5 text-gray-600" />
              <span className="text-gray-700 font-semibold text-base md:text-lg">Main Contact</span>
            </div>
            <a 
              href="tel:+917099079777" 
              onClick={() => track('main_contact_call')}
              className="text-2xl md:text-3xl font-bold text-gray-800 text-center block hover:text-yellow-600 transition-colors"
            >
              +91 70990 79777
            </a>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-gray-200 shadow-lg">
            <h3 className="text-base md:text-lg font-bold text-gray-800 mb-3 md:mb-4 text-center">Follow Us</h3>
            <div className="flex justify-center space-x-4 md:space-x-6">
              <a href="https://instagram.com/rishisretail" onClick={() => track('social_click', { platform: 'instagram' })} className="text-gray-600 hover:text-pink-500 transition-colors">
                <Instagram className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="https://facebook.com/rishisretail" onClick={() => track('social_click', { platform: 'facebook' })} className="text-gray-600 hover:text-blue-500 transition-colors">
                <Facebook className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="https://youtube.com/@rishisretail" onClick={() => track('social_click', { platform: 'youtube' })} className="text-gray-600 hover:text-red-500 transition-colors">
                <Youtube className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="https://linkedin.com/company/rishis-retail" onClick={() => track('social_click', { platform: 'linkedin' })} className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal */}
      <footer className="relative z-10 text-center py-4 mt-8 border-t border-gray-200">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <Phone className="w-3 h-3 text-gray-600" />
          <a href="tel:+917099079777" className="text-gray-700 font-medium text-xs hover:text-yellow-600 transition-colors">
            +91 70990 79777
          </a>
        </div>
        <p className="text-gray-500 text-xs">
          © 2025 Rishis Retail. All Rights Reserved. • Offers subject to T&C
        </p>
      </footer>
      
      {/* Vercel Analytics */}
      <Analytics />
    </div>
  );
}

export default App;