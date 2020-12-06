class CountryView {

  _parentContainer = document.querySelector('#more-info');
  _parentEl = document.querySelector('.more-info__container');
  _figureContainer = document.querySelector('.results__container');

  addHandlerInfo(handler) {
    this._figureContainer.addEventListener('click', e => {
      const figure = e.target.closest('figure');
      if (!figure) return;
      handler(figure);
    });
  }

  addHandlerClose(handler) {
    this._parentContainer.addEventListener('click', e => {
      const btn = e.target.classList.contains('back');
      if (!btn) return;
      handler();
    });
  }

  generateMarkup(figure) {
    window.scrollTo(0, 0);
    this._addHandlerScroll();
    this._parentEl.innerHTML = '';
    const flag = figure.dataset.image;
    const name = figure.dataset.name;
    const population = figure.dataset.population;
    const nativeName = figure.dataset.nativeName;
    const region = figure.dataset.region;
    const subRegion = figure.dataset.subRegion;
    const capital = figure.dataset.capital;
    const currencies = figure.dataset.currencies;
    const domain = figure.dataset.topDomains;
    const language = figure.dataset.languages;
    const borders = figure.dataset.border.split(', ');

    const markup = `
      <div class="part__1">
        <button class="back">
          <-- Back</button>
            <img class="flag" src="${flag}" alt="${name}">
      </div>

      <div class="part__2">
        <h2 class="name">${name}</h2>
      <div class="info">
        <div class="part__1">
          <h3><span class="title">Native Name: </span>${nativeName}</h3>
          <h3><span class="title">Population: </span>${population}</h3>
          <h3><span class="title">Region: </span>${region}</h3>
          <h3><span class="title">Sub Region: </span>${subRegion}</h3>
          <h3><span class="title">Capital: </span>${capital}</h3>
        </div>
        <div class="part__2">
          <h3><span class="title">Top Level Domains: </span>${domain}</h3>
          <h3><span class="title">Currencies: </span>${currencies}</h3>
          <h3><span class="title">Languages: </span>${language}</h3>
        </div>
      </div>

      <div class="border">
        <h3><span class="title">Border Countries: </span> ${borders.length === 1 ? 'No Bordering Countries!' : borders.map(border => `<span class="border-country">${border}</span>`).join(' ')}</h3>
      </div>
    </div> 
    `;

    this._parentEl.insertAdjacentHTML('beforeend', markup);
    this._parentContainer.style.display = 'flex';
  }

  closeMarkup() {
    this._parentEl.innerHTML = '';
    this._parentContainer.style.display = 'none';
    window.removeEventListener('scroll', this._disableScroll);
  }

  _addHandlerScroll() {
    window.addEventListener('scroll', this._disableScroll);
  };

  _disableScroll() {
    window.scrollTo(0, 0);
  }
}

export default new CountryView();
