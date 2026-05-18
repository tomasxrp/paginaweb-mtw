import { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="size-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <Code2 className="size-5 text-slate-950" />
            </div>
            <span className="font-semibold text-lg">Multi Tech Works</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#about" className="text-sm hover:text-cyan-400 transition-colors">Nosotros</a>
            <a href="#services" className="text-sm hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#contact" className="text-sm hover:text-cyan-400 transition-colors">Contacto</a>
          </div>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/10"
        >
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block py-2 hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#about" className="block py-2 hover:text-cyan-400 transition-colors">Nosotros</a>
            <a href="#services" className="block py-2 hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#contact" className="block py-2 hover:text-cyan-400 transition-colors">Contacto</a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}