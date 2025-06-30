import { motion } from 'framer-motion';
import { Code, Smartphone, TrendingUp } from 'lucide-react';
import Styles from "./Styles";

const Services = ({isScrolled}) => {
    const styles = Styles(isScrolled);

    const services = [
        {
        icon: <Code size={32} />,
        title: "Full Stack Development",
        description: "From frontend interactions to backend APIs, I build complete web solutions. I work with modern stacks to deliver apps that are scalable, maintainable, and ready for real-world users."
        },
        {
        icon: <Smartphone size={32} />,
        title: "UI/UX Design",
        description: "Design is more than looks — it's about clarity and connection. I design and develop clean, responsive interfaces that feel intuitive across devices. My focus is on clarity, accessibility, and seamless user experiences."
        },
        {
        icon: <TrendingUp size={32} />,
        title: "Performance & Growth",
        description: "Beyond building, I focus on helping websites grow through speed, discoverability, and clean architecture. I apply core CS concepts to ensure quality, performance, and long-term maintainability."
        }
    ];

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    // Corrected: Single variant definition for cards
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        hover: {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            borderColor: "rgba(168, 85, 247, 0.4)",
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const iconHover = {
        hover: {
            scale: 1.2,
            rotate: -5,
            transition: {
                duration: 0.3,
                ease: "backOut"
            }
        }
    };

    return (
        <section id="services" style={styles.section}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.h2 style={styles.sectionTitle} variants={fadeInUp}>
                    What I Do
                </motion.h2>
                <motion.p 
                    style={styles.sectionSubtitle}
                    variants={fadeInUp}
                >
                    I provide comprehensive web development services to bring your ideas to life
                </motion.p>
            </motion.div>
            
            <motion.div 
                style={styles.grid}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {services.map((service, index) => (
                    // CORRECTED: Using single variants definition
                    <motion.div 
                        key={index} 
                        style={styles.card}
                        variants={cardVariants}
                        whileHover="hover"
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            style={{color: '#a855f7', marginBottom: '1.5rem'}}
                            variants={iconHover}
                            whileHover="hover"
                        >
                            {service.icon}
                        </motion.div>
                        <motion.h3 
                            style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white'}}
                            whileHover={{ color: '#c084fc' }}
                            transition={{ duration: 0.2 }}
                        >
                            {service.title}
                        </motion.h3>
                        <motion.p 
                            style={{color: '#d1d5db', lineHeight: '1.6'}}
                            whileHover={{ color: '#e9d5ff' }}
                            transition={{ duration: 0.2 }}
                        >
                            {service.description}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Services;