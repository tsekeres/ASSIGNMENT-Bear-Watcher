import { formInput } from './data/bearData';

const handleButtonEvents = () => {
  document.querySelector('#bear-form').addEventListener('submit', formInput);
  // document
  //   .querySelector('#bear-card-container')
  //   .addEventListener('click', attemptFish);
  // document.querySelector('#bear-card-container').addEventListener('click', fishCatch);
};

export default handleButtonEvents;
