import HeroImage from '../../assets/np-hero-image.png';
import './styles.scss';

const OrganizedPasswords: React.FC = () => {
  return (
    <section className="organized-passwords container">
      <div>
        <h2 className="organized-passwords__title">Get your passwords organized</h2>
        <button>Get started</button>
      </div>
      <div>
        <img src={HeroImage} alt="hero nordpass password" />
      </div>
    </section>
  );
};

export default OrganizedPasswords;
