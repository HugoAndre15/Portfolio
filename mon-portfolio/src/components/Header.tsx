import React from 'react';

const Header: React.FC = () => {
    return (
        <>
        <header style={styles.header}>
            <nav style={styles.navbar}>
                <ul style={styles.navList}>
                    <li style={styles.navItem}><a href="#" style={styles.navLink}>Accueil</a></li>
                    <li style={styles.navItem}><a href="#presentation" style={styles.navLink}>À propos</a></li>
                    <li style={styles.navItem}><a href="#projets" style={styles.navLink}>Projets</a></li>
                    <li style={styles.navItem}><a href="#competences" style={styles.navLink}>Compétences</a></li>
                    <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
};

const styles = {
    header: {
        backgroundColor: '#333',
        padding: '10px 0',
        color: 'white',
        textAlign: 'center' as const,
    },
    navbar: {
        display: 'flex',
        justifyContent: 'center',
    },
    navList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
    },
    navItem: {
        margin: '0 15px',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontSize: '18px',
    }
};

export default Header;