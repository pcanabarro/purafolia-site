import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="place-name">
          <p>Av. A.J. Renner 1010 - Canoas | Contato: (51) 98170-1508</p>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/purafolia.casadefestas/" target="_blank"><i className="fab fa-instagram"></i></a>
          <a href="https://www.facebook.com/PuraFolia.CasadeFestas" target="_blank"><i className="fab fa-facebook"></i></a>
          <a href="https://www.tiktok.com/@purafolia" target="_blank"><i className="fa-brands fa-tiktok"></i></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
