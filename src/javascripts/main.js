import handleButtonEvents from './helpers/buttonEvents';
import bearBuilder from './components/bearBuilder';
import { bearGroup } from './helpers/data/bearData';
import '../styles/main.scss';
import runScreen from './components/initialScreen';

const init = () => {
  runScreen();
  handleButtonEvents();
  bearBuilder(bearGroup);
};

init();
