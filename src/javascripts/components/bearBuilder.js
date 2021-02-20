import renderToDom from '../helpers/renderToDom';

const bearBuilder = (array) => {
  let bearString = '';

  array.forEach((element) => {
    bearString += `<div id="pet-cards" class="card" style="width: 12rem;">
                    <img src="${element.imageUrl}" class="card-img-top" alt="Bear in the grass">
                    <div class="card-body">
                    <h5 class="card-title">${element.bearName}</h5>
                    <p class="card-text">Bears love to fish. We are keeping track of your bear's eating habits and how successful they are at catching fish! Also keep an eye the awards for catches!</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`;
  });
  renderToDom('#bear-card-container', bearString);
};

export default bearBuilder;
