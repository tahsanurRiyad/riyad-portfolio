const Styles = (isScrolled) => ({
  
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #581c87 50%, #1e293b 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent',
      backdropFilter: 'blur(10px)',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 10px 30px rgba(0,0,0,0.3)' : 'none'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: '#d1d5db',
      cursor: 'pointer',
      textTransform: 'capitalize',
      transition: 'color 0.3s ease',
      fontSize: '1rem'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      padding: '2rem'
    },
    heroContent: {
      maxWidth: '800px',
      zIndex: 10
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      background: 'linear-gradient(45deg, #a855f7, #ec4899, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '2rem',
      lineHeight: '1.6'
    },
    buttonGroup: {
      display: 'flex',
      gap: '1rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginBottom: '3rem'
    },
    primaryButton: {
      padding: '1rem 2rem',
      background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
      border: 'none',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      boxShadow: '0 4px 15px rgba(124, 58, 237, 0.4)',
    },
    secondaryButton: {
      padding: '1rem 2rem',
      background: 'transparent',
      border: '2px solid #a855f7',
      borderRadius: '50px',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      backdropFilter: 'blur(10px)',
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      transition: 'all 0.3s ease',
      borderRadius: '50%',
      padding: '10px',
    },
    socialLink: {
      color: '#9ca3af',
      transition: 'color 0.3s ease',
      cursor: 'pointer'
    },
    section: {
      padding: '5rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '1.5rem',
      background: 'linear-gradient(45deg, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    sectionSubtitle: {
      fontSize: '1.125rem',
      color: '#d1d5db',
      textAlign: 'center',
      marginBottom: '4rem',
      maxWidth: '600px',
      margin: '0 auto 4rem auto'
    },
    grid: {
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    card: {
    background: 'rgba(51, 65, 85, 0.5)',
    border: '1px solid rgba(168, 85, 247, 0.2)',
    borderRadius: '16px',
    padding: '2rem',
    transition: 'all 0.3s ease',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1,
    },
    skillBar: {
      width: '100%',
      height: '8px',
      background: '#374151',
      borderRadius: '4px',
      overflow: 'hidden',
      marginBottom: '1rem'
    },
    skillProgress: {
      height: '100%',
      background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
      transition: 'width 1s ease'
    },
    footer: {
      padding: '2rem',
      background: '#0f172a',
      textAlign: 'center',
      color: '#9ca3af'
    },
    modal: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(10px)',
    overflowY: 'auto',
    padding: '2rem'
    },
    modalContent: {
        background: 'rgba(30, 41, 59, 0.95)',
        borderRadius: '16px',
        maxWidth: '800px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        position: 'relative',
        border: '1px solid rgba(168, 85, 247, 0.3)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    },
    closeButton: {
        position: 'absolute',
        top: '1rem',
        right: '1rem',
        background: 'rgba(168, 85, 247, 0.2)',
        border: 'none',
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'white',
        zIndex: 10
    },
    imageGallery: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1rem',
        marginBottom: '2rem'
    },
    galleryImage: {
        width: '100%',
        borderRadius: '12px',
        border: '1px solid rgba(168, 85, 247, 0.2)',
        aspectRatio: '16/9',
        objectFit: 'cover',
        background: 'linear-gradient(45deg, #1e293b, #0f172a)'
    },
    scrollTopButton: {
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: '#a855f7',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: 'none',
        boxShadow: '0 4px 20px rgba(168, 85, 247, 0.3)',
        zIndex: 100
    },
    avatarContainer: {
        position: 'relative',
        width: '400px',
        height: '400px',
        margin: '0 auto 2rem auto',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #8b5cf6, #ec4899, #f59e0b)',
        padding: '4px',
        boxShadow: '0 4px 20px rgba(139, 92, 246, 0.3)',
        zIndex: 1,
    },
    avatar: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        objectFit: 'cover',
        border: '3px solid #1e1b4b',
    },
    avatarFallback: {
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
  });

  export default Styles;