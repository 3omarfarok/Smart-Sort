import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="absolute inset-0">
        <div className="h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[60vh] overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3"
              alt="Smart waste sorting device"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      <div className="relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-center pt-[65vh] pb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Smart Waste Sorting
              <span className="text-eco-green block mt-2">for a Better Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your waste management with our AI-powered sorting device.
              Make recycling effortless and contribute to a sustainable planet.
            </p>
            <a 
              href="#contact"
              className="bg-eco-green text-white px-12 py-4 rounded-lg hover:bg-eco-green/90 transition-colors inline-block font-semibold"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;