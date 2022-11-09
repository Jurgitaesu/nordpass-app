import * as React from 'react';
import './styles.scss';

interface IAccordionItem {
  id: string;
  title: string;
  text1: string;
  text2: string;
}

const FAQ: React.FC = () => {
  const [isAccordion1Open, setIsAccordion1Open] = React.useState<Boolean>(false);
  const [isAccordion2Open, setIsAccordion2Open] = React.useState<Boolean>(false);
  const [isAccordion3Open, setIsAccordion3Open] = React.useState<Boolean>(false);

  const accordionItems: IAccordionItem[] = [
    {
      id: '1',
      title: 'Why should you use a password manager for business?',
      text1:
        'Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.',
      text2:
        'With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
    },
    {
      id: '2',
      title: 'How to choose the best password manager for business?',
      text1:
        'Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.',
      text2:
        'With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
    },
    {
      id: '3',
      title: 'How can I get a business password manager?',
      text1:
        'Running a business comes with managing a lot of different devices and accounts. The easiest way to keep track of their login credentials is to use a password manager.',
      text2:
        'With a password manager, your employees can store all their logins in one place, share them with coworkers, and access them on multiple devices with one password only. No excuse for forgetting passwords after a long vacation or for sharing passwords via email!',
    },
  ];

  const toggleAccordion = (id: string) => {
    if (id === '1') {
      return setIsAccordion1Open(!isAccordion1Open);
    }
    if (id === '2') {
      return setIsAccordion2Open(!isAccordion2Open);
    }
    if (id === '3') {
      return setIsAccordion3Open(!isAccordion3Open);
    }
  };

  const openSvg = (): React.ReactNode => {
    return (
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00079 3.32858L2.05105 8.27833L0.636832 6.86411L7.00079 0.500153L13.3648 6.86411L11.9505 8.27833L7.00079 3.32858Z"
          fill="#383C43"
        />
      </svg>
    );
  };

  const closeSvg = (): React.ReactNode => {
    return (
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.99982 5.67142L2.05007 0.721673L0.635856 2.13589L6.99982 8.49985L13.3638 2.13589L11.9496 0.721673L6.99982 5.67142Z"
          fill="#383C43"
        />
      </svg>
    );
  };

  const renderAccordion = (): React.ReactNode => {
    return accordionItems.map((item: IAccordionItem) => {
      return (
        <div className="accordion" key={item.id}>
          <div className="accordion__button" onClick={() => toggleAccordion(`${item.id}`)}>
            <p>{item.title}</p>
            {isAccordionItemOpen(item.id) ? openSvg() : closeSvg()}
          </div>
          {isAccordionItemOpen(item.id) && (
            <div className="accordion__panel">
              <p>{item.text1}</p>
              <p>{item.text2}</p>
            </div>
          )}
        </div>
      );
    });
  };

  const isAccordionItemOpen = (id: string) => {
    if (id === '1') {
      return isAccordion1Open;
    }
    if (id === '2') {
      return isAccordion2Open;
    }
    if (id === '3') {
      return isAccordion3Open;
    }
  };

  return (
    <section className="faq">
      <div className="container">
        <h3 className="faq__title">Frequently asked questions</h3>
        <div>{renderAccordion()}</div>
      </div>
    </section>
  );
};

export default FAQ;
