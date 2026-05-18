import { Code2, Wrench, Gamepad2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Sobre <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">MTW</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Somos un equipo multidisciplinario enfocado en soluciones tecnológicas integrales. Fusionamos desarrollo de software moderno, soporte técnico y optimización de consolas para asegurar máxima eficiencia en cada proyecto.
          </p>
        </motion.div>

        {/* Pilares de la Agencia alineados a los servicios */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Pilar 1: Desarrollo Web */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="size-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                <Code2 className="size-7 text-slate-950" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Ingeniería Digital</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Construimos plataformas web rápidas, robustas y escalables. Nos enfocamos en código limpio y experiencias de usuario fluidas para potenciar tu negocio.
              </p>
            </div>
          </motion.div>

          {/* Pilar 2: Servicio Técnico */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="size-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                <Wrench className="size-7 text-slate-950" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precisión Operativa</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Ofrecemos soporte informático y reparación de hardware con estándares meticulosos. Solucionamos problemas complejos para extender la vida útil de tus equipos.
              </p>
            </div>
          </motion.div>

          {/* Pilar 3: Modificación de Consolas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="size-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/10">
                <Gamepad2 className="size-7 text-slate-950" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Cultura de Entretenimiento</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Optimizamos y modificamos consolas de videojuegos con máxima seguridad, expandiendo su versatilidad tanto a nivel de hardware como de software.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}