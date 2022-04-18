const Footer = () => {
    return (
      <footer align="center">
        <a href="https://github.com/crosenfrisk" target="_blank" rel="noopener noreferrer">
          <img
            src={require('../../assets/icons/GitHub.png')}
            alt="GitHub icon"
            className="icon"
          />
        </a>
        
        <a href="https://www.linkedin.com/in/crosenfrisk/" target="_blank" rel="noopener noreferrer">
          <img
            src={require('../../assets/icons/LinkedIn.png')}
            alt="LinkedIn icon"
            className="icon"
          />
        </a>
        <a href="https://www.facebook.com/clryogi/" target="_blank" rel="noopener noreferrer">
          <img
            src={require('../../assets/icons/facebook.png')}
            alt="Facebook icon"
            className="icon"
          />
        </a>
      </footer>
    );
  };
  
  export default Footer;