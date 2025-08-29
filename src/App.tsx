import React, { useRef, useState } from 'react';
import { Phone, Star, ShoppingBag, Users, Award, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';
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
      const cardWidth = 320 + 24; // card width + gap
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
      const cardWidth = 320 + 24;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-500 to-red-600 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-24 h-24 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/3 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Header - Compact and clean */}
      <header className="relative z-10 pt-4 pb-3">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center justify-center">
            <img 
              src="/rishis transparent.png" 
              alt="Rishis Retail" 
              className="h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-lg"
              style={{ maxWidth: '200px' }}
            />
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5">
            <span className="text-white font-medium text-xs md:text-sm">
              9 Stores Across Assam • Since 2014
            </span>
          </div>
        </div>
      </header>

      {/* Main Content - Mobile optimized */}
      <main className="relative z-10 px-3 pb-4 space-y-8">
        
        {/* 1. HERO - Mobile friendly */}
        <section className="text-center pt-2">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 drop-shadow-lg leading-tight">
            AUGUST-END
            <br />
            <span className="text-yellow-300">MEGA DHAMAKA</span>
          </h1>
          <div className="bg-red-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-2xl font-bold shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 inline-block animate-urgent-pulse">
            UP TO 40% OFF
          </div>
        </section>

        {/* 2. URGENCY - Prominent countdown */}
        <section className="max-w-3xl mx-auto">
          <CountdownTimer />
        </section>

        {/* 3. MAIN CTA - Mobile optimized */}
        <section className="max-w-lg mx-auto">
          <div className="bg-white/25 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/30 shadow-xl">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">🏪 Visit Your Nearest Store</h2>
              <p className="text-white/95 text-base md:text-lg mb-4">Get up to 40% OFF on all electronics & home appliances</p>
              <p className="text-white/90 text-sm md:text-base mb-6">Walk into any Rishis Retail outlet and claim your exclusive August-end savings!</p>
              
              {/* Product categories - compact */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="bg-white/20 px-2 py-1 rounded-full text-white text-xs font-medium">📺 TVs</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-white text-xs font-medium">❄️ ACs</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-white text-xs font-medium">📱 Mobiles</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-white text-xs font-medium">💻 Laptops</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-white text-xs font-medium">🎮 Gaming</span>
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

        {/* 4. SOCIAL PROOF - Compact mobile */}
        <section className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {[
              { icon: Users, value: "9", label: "Stores" },
              { icon: Award, value: "11", label: "Years" },
              { icon: ShoppingBag, value: "1000+", label: "Products" },
              { icon: Star, value: "4.8", label: "Rating" }
            ].map((stat, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-sm rounded-lg p-2 md:p-3 text-center border border-white/20">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-white mx-auto mb-1" />
                <div className="text-lg md:text-xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. PRODUCT INTEREST - Mobile compact */}
        <section className="max-w-3xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">🛍️ What We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20 hover:bg-white/25 transition-all duration-300 hover:scale-105">
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">{category.icon}</div>
                <div className="text-white font-semibold text-xs md:text-sm">{category.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. TRUST BUILDING - Mobile compact */}
        <section className="max-w-2xl mx-auto">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
            <h3 className="text-lg md:text-xl font-bold text-white mb-4 md:mb-6 text-center">✨ Why Choose Rishis Retail?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">✓</div>
                <span className="text-white text-sm md:text-base">11+ Years of Trust</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">✓</div>
                <span className="text-white text-sm md:text-base">9 Stores Across Assam</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">✓</div>
                <span className="text-white text-sm md:text-base">Easy EMI Options</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">✓</div>
                <span className="text-white text-sm md:text-base">Exchange Programs</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">✓</div>
                <span className="text-white text-sm md:text-base">Genuine Products</span>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm">✓</div>
                <span className="text-white text-sm md:text-base">After-Sales Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* 7. LOCATION ACCESS - Mobile optimized */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-3">📍 Your Nearest Rishis Store</h2>
          <p className="text-white/90 text-sm md:text-base text-center mb-6">Choose your location and visit for the best deals on electronics!</p>
          <div className="relative">
            <div 
              ref={carouselRef}
              onScroll={handleScroll}
              className="flex overflow-x-auto gap-3 pb-3 scrollbar-hide snap-x snap-mandatory cursor-grab active:cursor-grabbing"
            >
              {storeLocations.map((store, index) => (
                <div 
                  key={index} 
                  className="bg-white/15 backdrop-blur-sm rounded-lg p-4 border border-white/20 min-w-[260px] max-w-[260px] flex-shrink-0 hover:bg-white/25 transition-all duration-300 snap-start shadow-lg"
                >
                  <div className="text-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">🏪</span>
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{store.name}</h3>
                    <p className="text-white/80 text-xs mb-2 leading-relaxed">{store.address}</p>
                    <div className="bg-white/20 rounded p-1.5 mb-3">
                      <p className="text-white/90 text-xs font-medium">🎉 40% OFF Available Here!</p>
                    </div>
                    <a 
                      href={`tel:${store.phone}`}
                      className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white px-3 py-2 rounded flex items-center justify-center space-x-2 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span className="font-semibold">Call Store</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Smaller scroll indicators */}
            <div className="flex justify-center mt-3 space-x-1">
              {storeLocations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollToIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/60 cursor-pointer ${
                    activeIndex === index ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* 8. CONTACT - Mobile compact */}
        <section className="max-w-lg mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-4">📞 Get In Touch</h2>
          
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20 mb-3">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Phone className="w-5 h-5 text-white" />
              <span className="text-white font-semibold text-base md:text-lg">Main Contact</span>
            </div>
            <a 
              href="tel:+917099079777" 
              className="text-2xl md:text-3xl font-bold text-white text-center block hover:text-yellow-300 transition-colors"
            >
              +91 70990 79777
            </a>
          </div>

          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
            <h3 className="text-base md:text-lg font-bold text-white mb-3 md:mb-4 text-center">Follow Us</h3>
            <div className="flex justify-center space-x-4 md:space-x-6">
              <a href="https://instagram.com/rishisretail" className="text-white hover:text-pink-400 transition-colors">
                <Instagram className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="https://facebook.com/rishisretail" className="text-white hover:text-blue-400 transition-colors">
                <Facebook className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="https://youtube.com/@rishisretail" className="text-white hover:text-red-400 transition-colors">
                <Youtube className="w-8 h-8 md:w-10 md:h-10" />
              </a>
              <a href="https://linkedin.com/company/rishis-retail" className="text-white hover:text-blue-600 transition-colors">
                <Linkedin className="w-8 h-8 md:w-10 md:h-10" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Minimal */}
      <footer className="relative z-10 text-center py-2 mt-4">
        <div className="flex items-center justify-center space-x-2 mb-1">
          <Phone className="w-3 h-3 text-white" />
          <a href="tel:+917099079777" className="text-white font-medium text-xs hover:text-yellow-300 transition-colors">
            +91 70990 79777
          </a>
        </div>
        <p className="text-white/70 text-xs">
          © 2025 Rishis Retail. All Rights Reserved. • Offers subject to T&C
        </p>
      </footer>
    </div>
  );
}

export default App;