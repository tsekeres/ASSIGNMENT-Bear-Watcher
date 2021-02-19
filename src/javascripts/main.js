import handleButtonEvents from './helpers/buttonEvents';
import bearBuilder from './components/bearBuilder';
import { bearGroup } from './helpers/data/bearData';
import '../styles/main.scss';

const init = () => {
  handleButtonEvents();
  bearBuilder(bearGroup);
};

init();
