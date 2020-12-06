class HomeView {

  _parentEl = document.querySelector('.results__container');

  addHandlerLoad(handler) {
    window.addEventListener('load', handler);
  }

  renderMarkup(data) {
    const [info] = data;

    const markup = `
    <figure data-capital="${info.capital}" data-region="${info.region}" data-population="${info.population}" data-image="${info.flag}" data-name="${info.name}" data-native-name="${info.nativeName}" data-sub-region="${info.subregion}" data-currencies="${info.currencies.map(currency => currency.name).join(', ')}" data-top-domains="${info.topLevelDomain.join(', ')}" data-languages="${info.languages.map(lang => lang.name).join(', ')}" data-border="${info.borders.join(', ')}">
        <div class="img">
          <img src="${info.flag}" alt="${info.name}">
        </div>
        <div class="result-text">
          <h2 class="name">${info.name}</h2>
          <h4 class="population"><span class="title">Population: </span>${info.population}</h4>
          <h4 class="region"><span class="title">Region: </span>${info.region}</h4>
          <h4 class="capital"><span class="title">Capital: </span>${info.capital}</h4>
        </div>
      </figure>
    `;

    this._parentEl.insertAdjacentHTML('beforeend', markup);
  }
};

export default new HomeView();