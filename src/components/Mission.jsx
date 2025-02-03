import { motion } from "framer-motion"
import missionImg from "../assets/mission.jpeg"
import mission from "../assets/mission.mp4"
import { MISSION } from "../constants"
const Mission = () => {
  return (
    <section id="mission">
        <div className="container text-center">
            <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>
            <div className="relative flex-items justify-center">
                <motion.video className="w-full rounded-3xl" autoPlay muted loop playsInline
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:1}}
                poster={missionImg}>
                    <source src={mission} type="video/mp4" />
                </motion.video>
                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:0.5,delay:0.5}}
                className="absolute h-full w-full rounded-3xl bg-black/
                40"></motion.div>
                <motion.p className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[90%]
                text-center text-xl tracking-tighter lg:top-1/2 lg:-translate-y-1/2
                lg:w-auto lg:max-w-2xl lg:text-3xl"
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                viewport={{once:true}}
                transition={{duration:1,delay:0.5}}>
                {MISSION}
                </motion.p>
            </div>
        </div>
    </section>
  )
}

export default Mission
