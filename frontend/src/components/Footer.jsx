import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#6A38C2',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
  };

  const sectionStyle = {
    margin: '20px 0',
  };

  const linkStyle = {
    color: '##F83002',
    textDecoration: 'none',
  };

  const socialStyle = {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  };

  const socialItemStyle = {
    display: 'inline',
  };

  return (
    <footer style={footerStyle}>
      <div>
        <div style={sectionStyle}>
          <h2>About Us</h2>
          <p>We are dedicated to providing the best services for your needs. Contact us for more information.</p>
        </div>

        <div style={sectionStyle}>
          <h2>Quick Links</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/home" style={linkStyle}>Home</a></li>
            <li><a href="/about" style={linkStyle}>About</a></li>
            <li><a href="/contact" style={linkStyle}>Contact</a></li>
            <li><a href="/services" style={linkStyle}>Services</a></li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h2>Follow Us</h2>
          <ul style={socialStyle}>
            <li style={socialItemStyle}><a href="https://facebook.com" style={linkStyle}>Facebook</a></li>
            <li style={socialItemStyle}><a href="https://twitter.com" style={linkStyle}>Twitter</a></li>
            <li style={socialItemStyle}><a href="https://linkedin.com" style={linkStyle}>LinkedIn</a></li>
            <li style={socialItemStyle}><a href="https://instagram.com" style={linkStyle}>Instagram</a></li>
          </ul>
        </div>
      </div>

      <div>
        <p>&copy; 2024  | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
