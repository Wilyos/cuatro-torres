import { motion } from "framer-motion"
import Spline from "@splinetool/react-spline"

const HeroSection = () => {
  return (
    <section className='relative min-h-[300px] md:h-screen bg-gradient-to-b from-blue-950 to-blue-900 flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 overflow-hidden pb-2 mb-5 md:pb-2'>
      {/* Spline solo en escritorio/tablet */}
      <div className="hidden md:block w-full h-full absolute xl:right-[0%] right-0 top-[-20%] lg:top-0 sm:right-[-25%]">
        <Spline
          scene="https://prod.spline.design/KhOnp2ib0TGJqBZs/scene.splinecode"
          className="w-full h-full"
        />
      </div>
      {/* Imagen solo en móvil */}
      <img
        src="/assets/banner-ppl.png"
        alt="banner-ppl"
        className="block md:hidden absolute left-1/2 top-1/8 transform -translate-x-1/2 w-100 h-auto z-1"
        style={{ pointerEvents: 'none' }}
      />
    </section>
  )
}

export default HeroSection