import renderToDom from '../helpers/renderToDom';

const bearBuilder = (array) => {
  let bearString = '';

  array.forEach((element) => {
    bearString += `<div id="pet-cards" class="card" style="width: 12rem;">
                    <img src="${element.imageUrl}" class="card-img-top" alt="Bear in the grass">
                    <div class="card-body">
                    <h5 class="card-title">${element.bearName}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>`;
  });
  renderToDom('#bear-card-container', bearString);
};

export default bearBuilder;
