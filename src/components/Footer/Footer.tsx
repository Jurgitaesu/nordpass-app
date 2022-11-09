import './styles.scss';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer container">
        <div>
          <div className="footer__text footer__text-grey">ENGAGE</div>
          <div className="footer__text">Privacy Policy</div>
          <div>Terms of Service</div>
        </div>
        <div>Copyright © 2020 NordPass.com </div>
      </div>
    </footer>
  );
};

export default Footer;
