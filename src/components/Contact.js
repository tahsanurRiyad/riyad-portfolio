import { motion } from 'framer-motion';
import Styles from "./Styles";

const Contact = ({isScrolled}) => {
    const styles = Styles(isScrolled);

    // Animation variants
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
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

    const inputFocus = {
        focus: {
            borderColor: '#a855f7',
            boxShadow: '0 0 0 3px rgba(168, 85, 247, 0.3)',
            background: 'rgba(55, 65, 81, 0.7)',
            transition: { duration: 0.2 }
        }
    };

    const buttonHover = {
        hover: {
            background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
            boxShadow: '0 10px 25px -5px rgba(124, 58, 237, 0.5)',
            transform: 'translateY(-3px)',
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        tap: {
            scale: 0.95,
            boxShadow: '0 2px 10px -3px rgba(124, 58, 237, 0.5)'
        }
    };

    const cardHover = {
        hover: {
            boxShadow: '0 25px 50px -12px rgba(124, 58, 237, 0.25)',
            borderColor: 'rgba(168, 85, 247, 0.4)',
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={container}
            >
                <motion.h2 
                    style={styles.sectionTitle} 
                    variants={fadeInUp}
                >
                    Let's Work Together
                </motion.h2>
                <motion.p 
                    style={styles.sectionSubtitle}
                    variants={fadeInUp}
                >
                    Ready to start your next project? I'd love to hear from you.
                </motion.p>
            </motion.div>
            
            <motion.div 
                style={{maxWidth: '600px', margin: '0 auto'}}
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                <motion.div 
                    style={styles.card}
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem'}}>
                            <motion.div variants={fadeInUp}>
                                <label style={{display: 'block', color: '#a855f7', marginBottom: '0.5rem', fontWeight: '500'}}>Name</label>
                                <motion.input 
                                    type="text" 
                                    style={{
                                        width: '95%',
                                        padding: '0.75rem',
                                        background: '#374151',
                                        border: '1px solid #4b5563',
                                        borderRadius: '0.5rem',
                                        color: 'white',
                                        fontSize: '1rem',
                                        outline: 'none'
                                    }}
                                    placeholder="Your Name"
                                    whileFocus="focus"
                                    variants={inputFocus}
                                />
                            </motion.div>
                            <motion.div variants={fadeInUp}>
                                <label style={{display: 'block', color: '#a855f7', marginBottom: '0.5rem', fontWeight: '500'}}>Email</label>
                                <motion.input 
                                    type="email" 
                                    style={{
                                        width: '100%',
                                        padding: '0.75rem',
                                        background: '#374151',
                                        border: '1px solid #4b5563',
                                        borderRadius: '0.5rem',
                                        color: 'white',
                                        fontSize: '1rem',
                                        outline: 'none'
                                    }}
                                    placeholder="your@email.com"
                                    whileFocus="focus"
                                    variants={inputFocus}
                                />
                            </motion.div>
                        </div>
                        <motion.div variants={fadeInUp}>
                            <label style={{display: 'block', color: '#a855f7', marginBottom: '0.5rem', fontWeight: '500'}}>Subject</label>
                            <motion.input 
                                type="text" 
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    background: '#374151',
                                    border: '1px solid #4b5563',
                                    borderRadius: '0.5rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                                placeholder="Project Discussion"
                                whileFocus="focus"
                                variants={inputFocus}
                            />
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <label style={{display: 'block', color: '#a855f7', marginBottom: '0.5rem', fontWeight: '500'}}>Message</label>
                            <motion.textarea 
                                rows={6}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    background: '#374151',
                                    border: '1px solid #4b5563',
                                    borderRadius: '0.5rem',
                                    color: 'white',
                                    fontSize: '1rem',
                                    resize: 'vertical',
                                    outline: 'none'
                                }}
                                placeholder="Tell me about your project..."
                                whileFocus="focus"
                                variants={inputFocus}
                            ></motion.textarea>
                        </motion.div>
                        <motion.button 
                            style={{
                                ...styles.primaryButton,
                                width: '100%',
                                border: 'none',
                                background: 'linear-gradient(45deg, #8b5cf6, #ec4899)',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                            }}
                            onClick={() => alert('Thank you for your message! This is a demo - in a real implementation, this would send the email.')}
                            variants={buttonHover}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            Send Message
                        </motion.button>
                    </div>
                </motion.div>
            </motion.div>
            
            {/* Floating particles for visual interest */}
            <div style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', zIndex: -1}}>
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            background: 'rgba(168, 85, 247, 0.1)',
                            borderRadius: '50%',
                            width: `${Math.random() * 10 + 5}px`,
                            height: `${Math.random() * 10 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -100],
                            x: [0, (Math.random() - 0.5) * 100],
                            opacity: [0, 0.7, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Contact;