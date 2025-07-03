import { FaPhoneAlt, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contacto = () => (
  <section id="contacto" className="py-20 bg-gradient-to-b from-black  to-blue-900">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center italic text-white mb-10">¿QUIERES SABER MAS?</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Datos de contacto */}
        <div className="bg-gray-50 dark:bg-transparent border-spacing-0 border-yellow-300 border rounded-xl shadow p-8 w-full md:w-1/2 space-y-6 min-h-[300px]">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-yellow-500 text-2xl" />
            <span className="text-lg text-blue-900 dark:text-white font-semibold">
              604 322 0830
            </span>
          </div>
          <div className="flex items-center gap-4">
            <IoIosMail className="text-yellow-500 text-2xl" />
            <a
              href="mailto:4torres@sistemaslitograficos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-900 dark:text-white font-semibold hover:underline"
            >
              4torres@sistemaslitograficos
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaInstagram className="text-yellow-500 text-2xl" />
            <a
              href="https://www.instagram.com/cuatrotorres"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-blue-900 dark:text-white font-semibold hover:underline"
            >
              @cuatrotorres
            </a>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            <span className="text-lg text-blue-900 dark:text-white font-semibold">
             Cll 54 # 54 - 50, Medellin, Colombia
            </span>
          </div>
        </div>
        {/* Mapa de Google */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg min-h-[300px]">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2358.240259808079!2d-75.57154243052922!3d6.254302462781514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428fc3833643f%3A0xcb0fef71db130a02!2sCl.%2054%20%23%2054-50%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20La%20Candelaria%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1750769733282!5m2!1ses!2sco"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default Contacto;