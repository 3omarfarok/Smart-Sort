import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactForm from './components/ContactForm';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-eco-green font-bold text-2xl">Smart Sort</h1>
            <div className="space-x-6">
              <a href="#features" className="text-gray-600 hover:text-eco-green transition-colors">Features</a>
              <a href="#benefits" className="text-gray-600 hover:text-eco-green transition-colors">Benefits</a>
              <a href="#contact" className="text-gray-600 hover:text-eco-green transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Features />
        <Benefits />
        <ContactForm />
      </main>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-eco-green mb-6">Smart Sort</h3>
              <p className="text-gray-400">
                Making the world cleaner through smart waste management solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-eco-green transition-colors">Features</a></li>
                <li><a href="#benefits" className="text-gray-400 hover:text-eco-green transition-colors">Benefits</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-eco-green transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>info@Smart_Sort.com</li>
                <li>+20 1147825907</li>
                <li>123 Green Street, Eco City</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-eco-green transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-eco-green transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zM9 9.109c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zM17 16h-2v-3.158c0-.674-.616-1.842-2-1.842s-2 1.168-2 1.842V16h-2v-6h2v1.183c.391-.443 1.267-1.183 2.5-1.183 2.733 0 3.5 1.842 3.5 3.958V16z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© 2025 SmartSort. All rights reserved </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;