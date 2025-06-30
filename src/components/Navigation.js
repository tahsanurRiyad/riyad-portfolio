
import Styles from "./Styles";

const Navigation = ({activeSection,scrollToSection,isScrolled}) => {
    const styles = Styles(isScrolled);

    return (
        <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>Tahsanur Rahman</div>
          <ul style={styles.navLinks}>
            {['home', 'about', 'services', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  style={{
                    ...styles.navLink,
                    color: activeSection === item ? '#a855f7' : '#d1d5db'
                  }}
                  onClick={() => scrollToSection(item)}
                  onMouseEnter={(e) => e.target.style.color = '#a855f7'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === item ? '#a855f7' : '#d1d5db'}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );

};

export default Navigation;