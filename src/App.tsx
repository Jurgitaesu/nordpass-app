import React from 'react';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import OrganizedPasswords from './components/OrganizedPasswords/OrganizedPasswords';
import LeakedPasswords from './components/LeakedPasswords/LeakedPasswords';
import Navigation from './components/Navigation/Navigation';
import './styles/global-styles.scss';

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <header>
        <Navigation />
      </header>
      <main>
        <OrganizedPasswords />
        <LeakedPasswords />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
