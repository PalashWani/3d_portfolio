import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative h-screen w-full mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl flex flex-row mx-auto top-[120px] items-start gap-5`}
      >
        <div className="flex flex-col mt-5 items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Palash</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a Web Developer
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className=" absolute xs:bottom-10 bottom-32 flex w-full justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
