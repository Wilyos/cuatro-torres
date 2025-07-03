import { motion } from "framer-motion";

const bannersH = [
  "BANNER-1-H.png",
  "BANNER-2-H.png",
  "BANNER-3-H.png",
];

const bannersV = [
  "BANNER-1-V.png",
  "BANNER-2-V.png",
];

const scrollToContacto = () => {
  const contacto = document.getElementById("contacto");
  if (contacto) {
    contacto.scrollIntoView({ behavior: "smooth" });
  }
};

const Servicios = () => (
  <section id="servicios" className="pt-4 my-2 md:pt-2 pb-2 -mt-8 bg-gradient-to-b from-blue-900 to-black">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-blue-200 mb-10 text-center italic">Sobre Nosotros</h1>
      
      {/* Banners Horizontales (solo en escritorio/tablet) */}
      <div className="hidden md:flex flex-col gap-12">
        {bannersH.map((img, idx) => (
          <motion.button
            key={img}
            initial={{ opacity: 0, x: idx % 2 === 0 ? 150 : -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className={`w-full flex flex-row ${idx % 2 === 0 ? "justify-start" : "justify-end"} bg-transparent border-0 p-0 outline-none cursor-pointer`}
            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? -2 : 2, boxShadow: "0px 8px 32px 0px rgba(0,0,0,0.25)" }}
            whileTap={{ scale: 0.97, rotate: 0 }}
            onClick={scrollToContacto}
            style={{ background: "none" }}
          >
            <img
              src={`./src/assets/${img}`}
              alt={`Banner H ${idx + 1}`}
              className="w-full max-w-4xl object-contain rounded transition-all duration-300"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>

      {/* Banners Verticales (solo en móvil) */}
      <div className="flex flex-col gap-8 md:hidden mt-8">
        {bannersV.map((img, idx) => (
          <motion.button
            key={img}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex justify-center bg-transparent border-0 p-0 outline-none cursor-pointer"
            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? -2 : 2, boxShadow: "0px 8px 32px 0px rgba(0,0,0,0.25)" }}
            whileTap={{ scale: 0.97, rotate: 0 }}
            onClick={scrollToContacto}
            style={{ background: "none" }}
          >
            <img
              src={`./src/assets/${img}`}
              alt={`Banner V ${idx + 1}`}
              className="w-full max-w-xs object-contain transition-all duration-300 rounded"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>
    </div>
  </section>
);

export default Servicios;