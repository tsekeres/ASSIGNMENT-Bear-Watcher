import renderToDom from '../helpers/renderToDom';

const runScreen = () => {
  const screenLoad = `<div class="main-container d-flex flex-row flex-nowrap">
                      <div class="left-container border border-dark">
                        <div class="logo">
                          <img src="https://i.pinimg.com/originals/03/27/e7/0327e70876c263372de6556c6dfb8439.jpg" class="bear-logo img-fluid" alt="Bear logo">
                        </div>
                      </div>
                      <div class="right-container border border-dark">
                        <form id="bear-form">
                          <h1 class="display-4">Bear Watcher 3000</h1>
                          <p class="lead w-50 mx-auto">
                            Welcome to the live bear watching and tracking application! We hope
                            you are able to track and tally your bear's fish catching success.
                          </p>
                          <hr />
                          <div class="form-window d-flex justify-content-around">
                            <div class="form-group">
                              <input
                                type="text"
                                class="form-control"
                                id="bearName"
                                placeholder="Bear Name"
                                required
                              />
                            </div>
                            <div class="form-group">
                              <input
                                type="url"
                                class="form-control"
                                id="bearImage"
                                placeholder="Bear Image"
                              />
                            </div>
                            <div class="col-auto">
                              <button type="submit" class="btn btn-danger mb-2">Submit</button>
                            </div>
                          </div>
                        </form>
                        <hr />
                        <hr />
                        <div id="bear-card-container" class="d-flex flex-wrap justify-content-around"></div>
                      </div>
                    </div>`;
  renderToDom('body', screenLoad);
};

export default runScreen;
