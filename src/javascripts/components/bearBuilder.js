import renderToDom from '../helpers/renderToDom';

const bearBuilder = (array) => {
  let bearString = '';

  array.forEach((element, i) => {
    bearString += `<div id="bear-cards" class="card" style="width: 12rem;" id=${i}>
                    <img src="${element.imageUrl}" class="card-img-top" alt="Bear in the grass">
                    <div class="card-body">
                    <h5 class="card-title">${element.bearName}</h5>
                    <p class="card-text">Bears love to fish. Keep an eye the awards for catches!</p>
                    </div>
                  </div>`;
  });
  renderToDom('#bear-card-container', bearString);
};

/* <button type="button" id=${array[i].id} class="btn btn-primary btn-sm">Fish Attempts</button>
<div class="attempts" id="fish-attempts">
  <p class="card-text" id="attemptDate">Attempted on ${element.attemptDate}</p>
</div>
<button type="button" id=${array[i].id} class="btn btn-primary btn-sm">Fish Catches</button>
<div class="catches" id="fish-catches">
  <p class="card-text" id="catchNumber">Caught: ${element.catches}</p>
</div>
         */

export default bearBuilder;
