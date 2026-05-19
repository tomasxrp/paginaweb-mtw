import { CircleFadingPlus, MessageCircle, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-10 overflow-hidden rounded-lg">
               <img 
                src="public\logo_1.png" // Reemplaza con el nombre exacto de tu archivo en public
                alt="MTW Logo" 
                className="w-full h-full object-contain"
              />
            </div>
              <span className="font-semibold text-lg">Multi Tech Works</span>
            </div>
            <p className="text-slate-400 text-sm">Creando experiencias web excepcionales para empresas ambiciosas en todo el mundo.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Inicio</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Nosotros</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Servicios</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Conéctate con Nosotros</h4>
            <div className="flex gap-4">
              <a href="https://instagram.com/multitechwork" target="_blank" rel="noopener noreferrer" className="size-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-400 hover:to-purple-500 transition-all">
                <CircleFadingPlus className="size-5" />
              </a>
              <a href="https://wa.me/56967385442" target="_blank" rel="noopener noreferrer" className="size-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-green-400 hover:to-green-500 transition-all">
                <MessageCircle className="size-5" />
              </a>
              <a href="#" className="size-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-cyan-400 hover:to-blue-500 transition-all">
                <Globe className="size-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-cyan-500/10 text-center text-sm text-slate-400">
          <p>&copy; 2026 Multi Tech Works (MTW). Todos los derechos reservados. Creado con precisión y pasión.</p>
        </div>
      </div>
    </footer>
  );
}