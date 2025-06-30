import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Github, ExternalLink, X } from 'lucide-react';
import Styles from "./Styles";
import projectsData from "./ProjectsData";

const Projects = ({isScrolled}) => {
    const styles = Styles(isScrolled);
    const [selectedProject, setSelectedProject] = useState(null);

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

    const cardHover = {
        hover: {
            y: -10,
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const modalBackdrop = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { duration: 0.3 }
        }
    };

    const modalContent = {
        hidden: { opacity: 0, scale: 0.9, y: 50 },
        visible: { 
            opacity: 1, 
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1]
            }
        },
        exit: { 
            opacity: 0, 
            scale: 0.9,
            transition: { duration: 0.2 } 
        }
    };

    const buttonHover = {
        hover: {
            background: 'rgba(168, 85, 247, 0.4)',
            transition: { duration: 0.2 }
        }
    };

    const techTagHover = {
        hover: {
            background: 'rgba(124, 58, 237, 0.5)',
            transition: { duration: 0.2 }
        }
    };

    return (
        <>
            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div 
                        style={styles.modal} 
                        onClick={() => setSelectedProject(null)}
                        variants={modalBackdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                        <motion.div 
                            style={styles.modalContent} 
                            onClick={(e) => e.stopPropagation()}
                            variants={modalContent}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <motion.button 
                                style={styles.closeButton}
                                onClick={() => setSelectedProject(null)}
                                variants={buttonHover}
                                whileHover="hover"
                                whileTap={{ scale: 0.9 }}
                            >
                                <X size={24} />
                            </motion.button>
                            
                            <div style={{padding: '2rem'}}>
                                <motion.h2 
                                    style={{
                                        fontSize: '2rem',
                                        fontWeight: 'bold',
                                        marginBottom: '1rem',
                                        background: 'linear-gradient(45deg, #a855f7, #ec4899)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text'
                                    }}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    {selectedProject.title}
                                </motion.h2>
                                
                                {/* Image Gallery */}
                                <motion.div 
                                    style={styles.imageGallery}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {selectedProject.images.map((image, index) => (
                                        <motion.img 
                                            key={index}
                                            src={image} 
                                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                                            style={styles.galleryImage}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                                        />
                                    ))}
                                </motion.div>
                                
                                {/* Project Description */}
                                <motion.div 
                                    style={{marginBottom: '2rem'}}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem'}}>Overview</h3>
                                    <p style={{color: '#d1d5db', lineHeight: '1.6', marginBottom: '1rem'}}>
                                        {selectedProject.longDescription}
                                    </p>
                                </motion.div>
                                
                                {/* Technologies */}
                                <motion.div 
                                    style={{marginBottom: '2rem'}}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.45 }}
                                >
                                    <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem'}}>Technologies Used</h3>
                                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                                        {selectedProject.tech.map((tech, index) => (
                                            <motion.span 
                                                key={index}
                                                style={{
                                                    padding: '0.5rem 1rem',
                                                    background: 'rgba(124, 58, 237, 0.3)',
                                                    color: '#c4b5fd',
                                                    borderRadius: '20px',
                                                    fontSize: '0.875rem',
                                                    border: '1px solid rgba(168, 85, 247, 0.3)'
                                                }}
                                                variants={techTagHover}
                                                whileHover="hover"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.5 + index * 0.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>
                                
                                {/* Features */}
                                <motion.div 
                                    style={{marginBottom: '2rem'}}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem'}}>Key Features</h3>
                                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem'}}>
                                        {selectedProject.features.map((feature, index) => (
                                            <motion.div 
                                                key={index} 
                                                style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.55 + index * 0.05 }}
                                            >
                                                <span style={{color: '#a855f7', fontSize: '1.2rem'}}>✓</span>
                                                <span style={{color: '#d1d5db', fontSize: '0.9rem'}}>{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                                
                                {/* Challenges & Solutions */}
                                <motion.div 
                                    style={{marginBottom: '2rem'}}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem'}}>Challenges & Solutions</h3>
                                    <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                                        {selectedProject.challenges}
                                    </p>
                                </motion.div>
                                
                                {/* Results */}
                                <motion.div 
                                    style={{marginBottom: '2rem'}}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.65 }}
                                >
                                    <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', color: '#a855f7', marginBottom: '1rem'}}>Results & Impact</h3>
                                    <p style={{color: '#d1d5db', lineHeight: '1.6'}}>
                                        {selectedProject.results}
                                    </p>
                                </motion.div>
                                
                                {/* Links */}
                                <motion.div 
                                    style={{display: 'flex', gap: '1rem', justifyContent: 'center'}}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7 }}
                                >
                                    <motion.a 
                                        href={selectedProject.github}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1.5rem',
                                            background: 'rgba(168, 85, 247, 0.2)',
                                            border: '1px solid #a855f7',
                                            borderRadius: '0.5rem',
                                            color: 'white',
                                            textDecoration: 'none'
                                        }}
                                        variants={buttonHover}
                                        whileHover="hover"
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Github size={20} />
                                        View Code
                                    </motion.a>
                                    <motion.a 
                                        href={selectedProject.live}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            padding: '0.75rem 1.5rem',
                                            background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
                                            border: 'none',
                                            borderRadius: '0.5rem',
                                            color: 'white',
                                            textDecoration: 'none'
                                        }}
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: '0 10px 20px -5px rgba(124, 58, 237, 0.5)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink size={20} />
                                        Live Demo
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Projects Section */}
            <section id="projects" style={{...styles.section, background: 'rgba(51, 65, 85, 0.3)'}}>
                <motion.h2 
                    style={styles.sectionTitle}
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured Projects
                </motion.h2>
                <motion.p 
                    style={styles.sectionSubtitle}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    A showcase of my recent work and side projects
                </motion.p>
            
                <motion.div 
                    style={styles.grid}
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {projectsData.map((project, index) => (
                        <motion.div 
                            key={index} 
                            style={{
                                ...styles.card,
                                overflow: 'hidden',
                                padding: 0
                            }}
                            variants={cardVariants}
                            whileHover="hover"
                            whileTap={{ scale: 0.98 }}
                        >
                            <div style={{
                                height: '200px',
                                background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '3rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: `url(${project.images[0]}) center/cover`
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(45deg, rgba(124, 58, 237, 0.8), rgba(236, 72, 153, 0.8))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Code size={80} color="white" />
                                </div>
                            </div>
                            <div style={{padding: '1.5rem'}}>
                                <h3 style={{fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white'}}>{project.title}</h3>
                                <p style={{color: '#d1d5db', marginBottom: '1rem', lineHeight: '1.6'}}>{project.description}</p>
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem'}}>
                                    {project.tech.map((tech, techIndex) => (
                                        <motion.span 
                                            key={techIndex} 
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                background: 'rgba(124, 58, 237, 0.3)',
                                                color: '#c4b5fd',
                                                borderRadius: '20px',
                                                fontSize: '0.875rem'
                                            }}
                                            variants={techTagHover}
                                            whileHover="hover"
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                                <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
                                    <motion.button
                                        onClick={() => setSelectedProject(project)}
                                        style={{
                                            padding: '0.5rem 1rem',
                                            background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
                                            border: 'none',
                                            borderRadius: '0.5rem',
                                            color: 'white',
                                            fontSize: '0.875rem',
                                            cursor: 'pointer'
                                        }}
                                        whileHover={{ 
                                            scale: 1.05,
                                            boxShadow: '0 10px 20px -5px rgba(124, 58, 237, 0.5)'
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View Details
                                    </motion.button>
                                    <motion.a 
                                        href={project.github} 
                                        style={{color: '#9ca3af'}}
                                        whileHover={{ color: '#a855f7', y: -3 }}
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                    <motion.a 
                                        href={project.live} 
                                        style={{color: '#9ca3af'}}
                                        whileHover={{ color: '#ec4899', y: -3 }}
                                    >
                                        <ExternalLink size={20} />
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
};

export default Projects;