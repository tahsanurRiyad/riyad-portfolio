
// import { Github, Linkedin, Mail, Code } from 'lucide-react';
// import Styles from "./Styles";

// const Hero = ({isScrolled,scrollToSection}) => {
//     const styles = Styles(isScrolled);

//     return (
//         <section id="home" style={styles.hero}>
//         <div style={styles.heroContent}>
//           <div style={{
//             width: '120px',
//             height: '120px',
//             margin: '0 auto 2rem auto',
//             borderRadius: '50%',
//             background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center'
//           }}>
//             <Code size={60} color="white" />
//           </div>
//           <h1 style={styles.heroTitle}>Full Stack Developer</h1>
//           <p style={styles.heroSubtitle}>
//             Building scalable web solutions with modern technologies.<br />
//             Transforming ideas into exceptional digital experiences.
//           </p>
//           <div style={styles.buttonGroup}>
//             <button 
//               style={styles.primaryButton}
//               onClick={() => scrollToSection('projects')}
//               onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
//               onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
//             >
//               View My Work
//             </button>
//             <button 
//               style={styles.secondaryButton}
//               onClick={() => scrollToSection('contact')}
//               onMouseEnter={(e) => {
//                 e.target.style.background = '#a855f7';
//                 e.target.style.color = 'white';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.background = 'transparent';
//                 e.target.style.color = 'white';
//               }}
//             >
//               Get In Touch
//             </button>
//           </div>
//           <div style={styles.socialLinks}>
//             <a href="#" style={styles.socialLink}>
//               <Github size={24} />
//             </a>
//             <a href="#" style={styles.socialLink}>
//               <Linkedin size={24} />
//             </a>
//             <a href="#" style={styles.socialLink}>
//               <Mail size={24} />
//             </a>
//           </div>
//         </div>
//       </section>
//     );

// };

// export default Hero;




import { Github, Linkedin, Mail, Code } from 'lucide-react';
import Styles from "./Styles";

const Hero = ({isScrolled, scrollToSection, profileImage}) => {
    const styles = Styles(isScrolled);

    return (
        <section id="home" style={styles.hero}>
            <div style={styles.heroContent}>
                {/* Profile Image Container */}
                <div style={styles.avatarContainer}>
                    {profileImage ? (
                        <img 
                            src={profileImage} 
                            alt="Profile" 
                            style={styles.avatar} 
                        />
                    ) : (
                        <div style={styles.avatarFallback}>
                            <Code size={60} color="white" />
                        </div>
                    )}
                </div>
                
                <h1 style={styles.heroTitle}>Full Stack Developer</h1>
                <p style={styles.heroSubtitle}>
                    Building scalable web solutions with modern technologies.<br />
                    Transforming ideas into exceptional digital experiences.
                </p>
                
                <div style={styles.buttonGroup}>
                    <button 
                        style={styles.primaryButton}
                        onClick={() => scrollToSection('projects')}
                        onMouseEnter={(e) => {
                            e.target.style.transform = 'scale(1.05)';
                            e.target.style.background = 'linear-gradient(45deg, #8b5cf6, #ec4899)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.transform = 'scale(1)';
                            e.target.style.background = 'linear-gradient(45deg, #7c3aed, #ec4899)';
                        }}
                    >
                        View My Work
                    </button>
                    <button 
                        style={styles.secondaryButton}
                        onClick={() => scrollToSection('contact')}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'transparent';
                            e.target.style.transform = 'scale(1)';
                        }}
                    >
                        Get In Touch
                    </button>
                </div>
                
                <div style={styles.socialLinks}>
                    <a 
                        href="#" 
                        style={styles.socialLink}
                        onMouseEnter={(e) => e.target.style.color = '#8b5cf6'}
                        onMouseLeave={(e) => e.target.style.color = 'white'}
                    >
                        <Github size={24} />
                    </a>
                    <a 
                        href="#" 
                        style={styles.socialLink}
                        onMouseEnter={(e) => e.target.style.color = '#0A66C2'}
                        onMouseLeave={(e) => e.target.style.color = 'white'}
                    >
                        <Linkedin size={24} />
                    </a>
                    <a 
                        href="#" 
                        style={styles.socialLink}
                        onMouseEnter={(e) => e.target.style.color = '#ea4335'}
                        onMouseLeave={(e) => e.target.style.color = 'white'}
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;