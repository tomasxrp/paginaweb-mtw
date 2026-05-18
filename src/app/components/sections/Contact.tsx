import { MessageCircle, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Cabecera de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Construyamos <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Juntos</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            ¿Listo para comenzar tu proyecto? Ponte en contacto directo con nosotros a través de nuestros canales oficiales.
          </p>
        </motion.div>

        {/* Contenedor de Tarjetas de Contacto directo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Tarjeta de WhatsApp */}
          <a
            href="https://wa.me/56967385442/?text=Hola%20MTW%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web.%20¿Podrían%20proporcionarme%20más%20información%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all group hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div className="size-14 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
              <MessageCircle className="size-7 text-slate-950" />
            </div>
            <div>
              <div className="font-semibold text-lg text-white">WhatsApp</div>
              <div className="text-sm text-slate-400 mt-0.5">Chatea con nosotros al instante</div>
            </div>
            <ArrowRight className="size-5 ml-auto text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </a>

          {/* Tarjeta de Correo Electrónico */}
          <a
            href="mailto:servicios.mtw@gmail.com?subject=Consulta%20de%20Proyecto%20-%20MTW"
            className="flex items-center gap-5 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all group hover:shadow-xl hover:shadow-cyan-500/5"
          >
            <div className="size-14 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-cyan-500/20">
              <Mail className="size-7 text-slate-950" />
            </div>
            <div>
              <div className="font-semibold text-lg text-white">Correo Electrónico</div>
              <div className="text-sm text-slate-400 mt-0.5">servicios.mtw@gmail.com</div>
            </div>
            <ArrowRight className="size-5 ml-auto text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}