import React from 'react';
import { motion } from 'framer-motion';
import Styles from "./Styles";

const skills = [
    { name: "JavaScript", level: 95 },
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Python", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 }
];

const education = [
    {
        degree: "Master of Science in Computer Science",
        institution: "Stanford University",
        location: "California, USA",
        period: "2018 - 2020",
        gpa: "3.8/4.0",
        coursework: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Software Engineering"],
        achievements: ["Dean's List", "Graduate Research Assistant", "Published 2 research papers"]
    },
    {
        degree: "Bachelor of Science in Software Engineering",
        institution: "University of California, Berkeley",
        location: "California, USA",
        period: "2014 - 2018",
        gpa: "3.7/4.0",
        coursework: ["Data Structures", "Database Systems", "Web Development", "Computer Networks"],
        achievements: ["Summa Cum Laude", "ACM Programming Contest Winner", "Software Engineering Society President"]
    }
];

const About = () => {
    const styles = Styles(false);

    // Modern animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.6, 
                ease: [0.16, 1, 0.3, 1],
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { 
                duration: 0.5, 
                ease: "easeOut",
                type: "spring",
                damping: 15
            }
        },
        hover: {
            y: -8,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.25)",
            transition: { 
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const progressSpring = {
        hidden: { width: 0 },
        visible: {
            width: "100%",
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 100,
                duration: 1.2
            }
        }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    return (
        <section id="about" style={{ ...styles.section, background: 'rgba(51, 65, 85, 0.3)' }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
            >
                <motion.h2
                    style={styles.sectionTitle}
                    variants={fadeInUp}
                >
                    About Me
                </motion.h2>
                
                <motion.p
                    style={styles.sectionSubtitle}
                    variants={fadeInUp}
                >
                    I'm a passionate full-stack developer with expertise in modern web technologies.
                    I love creating efficient, scalable solutions that make a real impact.
                </motion.p>
            </motion.div>

            <motion.div
                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', alignItems: 'start', marginTop: '3rem' }}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Skills Section */}
                <motion.div variants={fadeInUp}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#a855f7' }}>Skills & Expertise</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {skills.map((skill, index) => (
                            <motion.div 
                                key={index} 
                                variants={fadeInUp}
                                custom={index}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ color: '#d1d5db' }}>{skill.name}</span>
                                    <span style={{ color: '#a855f7' }}>{skill.level}%</span>
                                </div>
                                <div style={styles.skillBar}>
                                    <motion.div
                                        style={styles.skillProgress}
                                        initial="hidden"
                                        whileInView="visible"
                                        variants={progressSpring}
                                        viewport={{ once: true }}
                                        custom={index}
                                        animate={{
                                            width: `${skill.level}%`,
                                            transition: {
                                                type: "spring",
                                                damping: 15,
                                                stiffness: 100,
                                                delay: 0.1 * index
                                            }
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience Section */}
                <motion.div 
                    style={styles.card} 
                    variants={cardVariants}
                    whileHover="hover"
                >
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#a855f7' }}>Experience</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <motion.div 
                            style={{ borderLeft: '3px solid #7c3aed', paddingLeft: '1.5rem' }}
                            variants={fadeInUp}
                        >
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Senior Full Stack Developer</h4>
                            <p style={{ color: '#a855f7', marginBottom: '0.5rem' }}>Tech Company • 2022 - Present</p>
                            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>Led development of scalable web applications using React, Node.js, and cloud technologies.</p>
                        </motion.div>
                        <motion.div 
                            style={{ borderLeft: '3px solid #7c3aed', paddingLeft: '1.5rem' }}
                            variants={fadeInUp}
                        >
                            <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: 'white', marginBottom: '0.5rem' }}>Frontend Developer</h4>
                            <p style={{ color: '#a855f7', marginBottom: '0.5rem' }}>Startup • 2020 - 2022</p>
                            <p style={{ color: '#d1d5db', lineHeight: '1.6' }}>Built responsive user interfaces and improved application performance by 40%.</p>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Education Section */}
            <motion.div
                style={{ marginTop: '4rem' }}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h3 
                    style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem', color: '#a855f7', textAlign: 'center' }}
                    variants={fadeInUp}
                >
                    Education
                </motion.h3>
                <motion.div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}
                    variants={staggerContainer}
                >
                    {education.map((edu, index) => (
                        <motion.div 
                            key={index} 
                            style={{ ...styles.card, padding: '2rem' }} 
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <motion.h4 
                                style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '0.5rem' }}
                                variants={fadeInUp}
                            >
                                {edu.degree}
                            </motion.h4>
                            <motion.p 
                                style={{ color: '#a855f7', fontSize: '1.1rem', marginBottom: '0.5rem' }}
                                variants={fadeInUp}
                            >
                                {edu.institution}
                            </motion.p>
                            <motion.p 
                                style={{ color: '#d1d5db', marginBottom: '0.5rem' }}
                                variants={fadeInUp}
                            >
                                {edu.location} • {edu.period}
                            </motion.p>
                            <motion.p 
                                style={{color: '#d1d5db', marginBottom: '1rem'}}
                                variants={fadeInUp}
                            >
                                GPA: {edu.gpa}
                            </motion.p>

                            <motion.div 
                                style={{marginBottom: '1rem'}}
                                variants={fadeInUp}
                            >
                                <h5 style={{color: '#a855f7', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem'}}>Relevant Coursework:</h5>
                                <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem'}}>
                                    {edu.coursework.map((course, courseIndex) => (
                                        <motion.span 
                                            key={courseIndex}
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                background: 'rgba(124, 58, 237, 0.2)',
                                                color: '#c4b5fd',
                                                borderRadius: '15px',
                                                fontSize: '0.8rem'
                                            }}
                                            variants={fadeInUp}
                                            custom={courseIndex}
                                        >
                                            {course}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                            
                            <motion.div
                                variants={fadeInUp}
                            >
                                <h5 style={{color: '#a855f7', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem'}}>Achievements:</h5>
                                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                                    {edu.achievements.map((achievement, achIndex) => (
                                        <motion.li 
                                            key={achIndex} 
                                            style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem'}}
                                            variants={fadeInUp}
                                            custom={achIndex}
                                        >
                                            <span style={{color: '#a855f7', fontSize: '1rem'}}>🏆</span>
                                            <span style={{color: '#d1d5db', fontSize: '0.9rem'}}>{achievement}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;