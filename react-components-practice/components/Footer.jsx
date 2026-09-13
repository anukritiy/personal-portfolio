import React from 'react';

function Footer({ companyName = 'My Company', year = new Date().getFullYear(), socialLinks = [] }) {
  return (
    <footer className="footer">
      <p>© {year} {companyName}. All rights reserved.</p>
      <div className="footer-socials">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.url} target="_blank" rel="noreferrer">
            {social.name}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;