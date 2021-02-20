import bearBuilder from '../../components/bearBuilder';

const bearGroup = [
  {
    bearName: 'Oscar',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/7/71/2010-kodiak-bear-1.jpg',
  },
  {
    bearName: 'Daisy',
    imageUrl:
      'https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Mammals/mammal_grizzy-bear_600x300.ashx',
  },
];

const formInput = (e) => {
  e.preventDefault();

  const bearName = document.querySelector('#bearName').value;
  const imageUrl = document.querySelector('#bearImage').value;
  const bearsObj = {
    bearName,
    imageUrl,
  };

  bearGroup.push(bearsObj);
  bearBuilder(bearGroup);
  document.querySelector('#bear-form').reset();
};

export { formInput, bearGroup };
