import { Code2, Wrench, Gamepad2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

// Estructura de datos flexible con la propiedad opcional branchSubtitle
const servicesList = [
  {
    id: "web-development",
    title: "Desarrollo Web",
    description: "Creación de sitios web modernos, rápidos y optimizados para buscadores. Diseñamos soluciones digitales escalables que se adaptan a la identidad y objetivos de tu negocio.",
    icon: Code2,
    branches: [
      "Landing Pages de alto impacto",
      "Sitios web corporativos",
      "Plataformas web y aplicaciones a medida",
      "Optimización de rendimiento y SEO profesional"
    ]
  },
  {
    id: "technical-support",
    title: "Servicio Técnico",
    description: "Asistencia especializada para garantizar la continuidad y el óptimo funcionamiento de tus sistemas informáticos. Diseñado para adaptarse a tus necesidades críticas de soporte.",
    icon: Wrench,
    branches: [
      "Soporte y mantenimiento de software",
      "Reparación de dispositivos y hardware",
      /* Próximamente: Agrega nuevas ramas aquí simplemente como texto */
    ]
  },
  {
    id: "modificacion-consolas",
    title: "Modificación de Consolas",
    description: "Servicios especializados en la modificación y personalización de consolas de videojuegos para mejorar su rendimiento y funcionalidad.",
    branchSubtitle: "Dispositivos con soporte", // Subtítulo solicitado antes de los modelos
    icon: Gamepad2,
    branches: [
      "PSP",
      "PlayStation Vita",
      "PlayStation 2",
      "PlayStation 3",
      "PlayStation 4",
      "Nintendo DSi",
      "Nintendo 3DS",
      /* Próximamente: Agrega nuevas ramas aquí simplemente como texto */
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Cabecera de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Nuestros <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Ofrecemos soluciones digitales integrales combinando desarrollo de software de vanguardia y soporte técnico de confianza.
          </p>
        </motion.div>

        {/* Grilla de Servicios */}
        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Icono del Servicio */}
                  <div className="size-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-cyan-500/10">
                    <IconComponent className="size-7 text-slate-950" />
                  </div>
                  
                  {/* Título y Descripción */}
                  <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </p>
                  
                  {/* Listado de Ramas/Especialidades */}
                  <div className="space-y-2.5">
                    {/* Renderizado condicional del subtítulo si existe en el objeto */}
                    {service.branchSubtitle && (
                      <h4 className="text-xs font-semibold text-cyan-400 tracking-wider uppercase mb-3">
                        {service.branchSubtitle}
                      </h4>
                    )}
                    
                    {service.branches.map((branch, branchIndex) => (
                      <div key={branchIndex} className="flex items-center gap-2 text-sm text-slate-400">
                        <ChevronRight className="size-4 text-cyan-400 flex-shrink-0" />
                        <span>{branch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enlace de acción rápida */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    Consultar por este servicio
                    <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}