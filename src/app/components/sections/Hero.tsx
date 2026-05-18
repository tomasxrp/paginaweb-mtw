import { Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
              ✨ Transformando Ideas en Realidad Digital
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Construye el Sitio Web
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> de tus Sueños</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl">
              Soluciones de desarrollo web de vanguardia impulsadas por tecnología moderna.
              Ofrecemos experiencias web ultrarrápidas, seguras y escalables para empresas ambiciosas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-medium hover:shadow-xl hover:shadow-cyan-500/30 transition-all flex items-center justify-center gap-2 group">
                Inicia tu Proyecto
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="size-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Cpu className="size-6 text-slate-950" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-400">Rendimiento</div>
                      <div className="font-semibold">99.9% Disponibilidad</div>
                    </div>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: "95%" }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">100%</div>
                      <div className="text-xs text-slate-400">Confiabilidad</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">10+</div>
                      <div className="text-xs text-slate-400">Clientes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">5★</div>
                      <div className="text-xs text-slate-400">Calificación</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}