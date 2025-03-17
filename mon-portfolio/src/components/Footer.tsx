import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ padding: '1rem',textAlign: 'center' }}>
            <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
            <p>
                Conçu avec <span style={{ color: 'red' }}>❤</span> par Hugo.
            </p>
        </footer>
    );
};

export default Footer;