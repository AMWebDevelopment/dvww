import './framer/styles.css';

import NavFramerComponent from './framer/nav';
import HeroFramerComponent from './framer/hero';
import IntroFramerComponent from './framer/intro';
import ServicesFramerComponent from './framer/services';
import FondateurFramerComponent from './framer/fondateur';
import TemignageFramerComponent from './framer/temignage';
import FaqFramerComponent from './framer/faq';
import FooterFramerComponent from './framer/footer';
import SocialBubble from './SocialBubble';

export default function App() {
  return (
    <div className="flex flex-col items-center">
      <NavFramerComponent.Responsive 
      className="!w-full"/>
      <HeroFramerComponent.Responsive
      className="!w-full"/>
      <IntroFramerComponent.Responsive 
      className="!w-full"/>
      <ServicesFramerComponent.Responsive 
      className="!w-full"/>
      <FondateurFramerComponent.Responsive 
      className="!w-full"/>
      <TemignageFramerComponent.Responsive 
      className="!w-full"/>
      <FaqFramerComponent.Responsive 
      className="!w-full"/>
      <FooterFramerComponent.Responsive 
      className="!w-full"/>
      <SocialBubble />
    </div>
  );
}
