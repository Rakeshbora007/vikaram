import { useRef } from 'react';
import './service.scss'
import { motion, useInView } from 'framer-motion';
const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 2,
            staggerChildren: 0.1
        }
    }
}
const Service = () => {
    const ref = useRef()
    const isInView = useInView(ref, { margin: "-100px" })
    return (
        <motion.div className='service' variants={variants} ref={ref} initial="initial" animate={isInView && "animate"} >
            <motion.div className='textContainer' variants={variants}>
                <p>I focus on helping yout brand grow <br />
                    and move forward</p>
                <hr />
            </motion.div>
            <motion.div className='titleContainer' variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>
                    <button>What We Do?</button>
                </div>
            </motion.div>
            <motion.div className='listContainer ' variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Web Developer</h2>
                    <p>
                        A Full Stack Developer with two years of professional experience, specializing in web development, project management, Agile methodology, and quality assurance testing
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" variants={variants} whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Mobile Developer</h2>
                    <p>
                        My journey in the tech industry has led me to the heart of NYC, where I thrive in the dynamic ecosystem of innovation and collaboration.
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Backend developer</h2>
                    <p>
                        My journey in the tech industry has led me to the heart of NYC, where I thrive in the fast-paced environment of innovation and collaboration.
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
                <motion.div className="box" variants={variants} whileHover={{ background: "lightgray", color: 'black' }} >
                    <h2>UI/UX Developer</h2>
                    <p>
                     Whether it's designing intuitive mobile apps for startups, revamping e-commerce platforms for established brands, or optimizing user journeys for web applications,
                    </p>
                    <button>
                        Go
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Service