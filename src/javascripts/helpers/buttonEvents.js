import { formInput } from './data/bearData';

const handleButtonEvents = () => {
  document.querySelector('#bear-form').addEventListener('submit', formInput);
};

export default handleButtonEvents;
