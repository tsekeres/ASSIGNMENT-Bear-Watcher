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

  const bearIds = bearGroup.map((bear) => bear.id).sort((a, b) => a - b);
  const id = bearIds.length ? bearIds[bearIds.length - 1] + 1 : 1;

  const bearsObj = {
    bearName,
    imageUrl,
    id,
  };

  bearGroup.push(bearsObj);
  bearBuilder(bearGroup);
  document.querySelector('#bear-form').reset();
};

// const attemptFish = (e) => {
//   const attemptDate = new Date();

//   const targetType = e.target.type;
//   const targetId = Number(e.target.id);

//   if (targetType === 'button') {
//     const cardIndex = bearGroup.findIndex(
//       (bear) => bear.id === targetId
//     );

//     const attemptsObj = {
//       attemptDate,
//     };

//     bearGroup.push(attemptsObj);

//     const fishAttempt = bearGroup.splice(cardIndex, 1);
//     bearGroup.push(...fishAttempt);

//     cardIndex.parentNode.replaceChild(fishAttempt, cardIndex);
//     bearBuilder(bearGroup);
//   }
// };

// let catches = 0;

// const fishCatch = (e) => {
//   catches += 1;
//   const targetType = e.target.type;
//   const targetId = Number(e.target.id);

//   if (targetType === 'button') {
//     const cardIndex = bearGroup.findIndex(
//       (bear) => bear.id === targetId
//     );

//     const catchObj = {
//       catches,
//     };

//     bearGroup.push(catchObj);

//     const catchFish = bearGroup.splice(cardIndex, 1);
//     bearGroup.push(...catchFish);

//     bearBuilder(bearGroup);
//   }
// };

export { formInput, bearGroup };
