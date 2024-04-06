import { useRef } from 'react';
import './portfolio.scss';
import images from "/coldest.png"
import images2 from "/bagly.png"
import images3 from "/project1.png"
import images4 from "/project3.png"
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';

const items = [
    {
        id: 1,
        title: "Coldest",
        img: images,
        desc: "It's NOT just a water bottle. Our COLDEST Water bottles are designed to help you stay colder, longer. We designed the water bottles to stay cold up to 36+ to 100+ hours. COLD tested against 50+ leading brands."
        , demoLink: "https://coldest.com/"
    },
    {
        id: 2,
        title: "Baggly",
        img: images2,
        desc: "Design classico, materiali di altissima qualità, dettagli luminosi con Bagly sarà come indossare un gioiello esclusivo nella vita di tutti i giorni."
        , demoLink: "https://bagly.it/"
    },
    {
        id: 3,
        title: "Ageless Medical",
        img: images3,
        desc: "At Ageless Medical, We stay on top of the latest, most effective, research-proven technologies and treatments that allow you to reverse the signs of agings."
        , demoLink: "https://www.agelessiscool.com/"
    },
    {
        id: 4,
        title: "Mern Stack ",
        img: images4,
        desc: "These hand crafted 100% longfiller tobacco cigars were created to be enjoyed daily and often. Our focus was to build a premium cigar out of quality aged full length tobacco leaf that was affordable and econimical."
        , demoLink: "https://kafiecigars.com/liga-de-la-casa-cigars/"
    }
]
const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return <section >
        <div className='container'>
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{ y }}>
                    <h2 >
                        {item.title}
                    </h2>
                    <p>{item.desc}</p>
                    <button><a href={item.demoLink}>See demo</a></button>
                </motion.div>
            </div>
        </div>
    </section>
}

const Portfolio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })
    return (
        <div className='portfolio' ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX: scaleX }} className='progressBar'>
                </motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio