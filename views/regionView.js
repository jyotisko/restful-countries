class RegionView {

  _parentEl = document.querySelector('.results__container');
  _select = document.querySelector('select');

  addHandlerRegion(handler) {
    this._select.addEventListener('change', function () {
      handler(this.value);
    })
  }

  generateMarkup(data) {

    if (data?.status === 404) return;

    this._parentEl.innerHTML = '';

    data.forEach(country => {

      const markup = `
        <figure data-capital="${country.capital}" data-region="${country.region}" data-population="${country.population}" data-image="${country.flag}" data-name="${country.name}" data-native-name="${country.nativeName}" data-sub-region="${country.subregion}" data-currencies="${country.currencies.map(currency => currency.name).join(', ')}" data-top-domains="${country.topLevelDomain.join(', ')}" data-languages="${country.languages.map(lang => lang.name).join(', ')}" data-border="${country.borders.join(', ')}">
          <div class="img">
            <img src="${country?.flag ? country.flag : 'https://www.thermaxglobal.com/wp-content/uploads/2020/05/image-not-found.jpg'}" alt="${country?.name ? country.name : 'N/A'}">
          </div>
          <div class="result-text">
            <h2 class="name">${country?.name ? country.name : 'N/A'}</h2>
            <h4 class="population"><span class="title">Population: </span>${country?.population ? country.population : 'N/A'}</h4>
            <h4 class="region"><span class="title">Region: </span>${country?.region ? country.region : 'N/A'}</h4>
            <h4 class="capital"><span class="title">Capital: </span>${country?.capital ? country.capital : 'N/A'}</h4>
          </div>
        </figure>
      `;

      this._parentEl.insertAdjacentHTML('beforeend', markup);
    });
  }
}

export default new RegionView();
