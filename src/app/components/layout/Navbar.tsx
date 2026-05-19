import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Eliminamos Code2 si ya no lo usas
import { motion } from 'motion/react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo con Imagen */}
          <a href="#home" className="flex items-center gap-1 group">
            <div className="size-10 overflow-hidden rounded-lg">
               <img 
                src="public\logo_1.png" // Reemplaza con el nombre exacto de tu archivo en public
                alt="MTW Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-semibold text-lg tracking-tight">
              Multi
            </span>
            <span className="font-semibold text-lg text-cyan-400 tracking-tight">
              Tech
            </span>
            <span className="font-semibold text-lg tracking-tight">
              Works
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-cyan-400 transition-colors">Inicio</a>
            <a href="#about" className="text-sm hover:text-cyan-400 transition-colors">Nosotros</a>
            <a href="#services" className="text-sm hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#contact" className="text-sm hover:text-cyan-400 transition-colors">Contacto</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-cyan-500/10"
        >
          <div className="px-4 py-4 space-y-3">
            <a 
              href="#home" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-cyan-400 transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-cyan-400 transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-cyan-400 transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-cyan-400 transition-colors"
            >
              Contacto
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}