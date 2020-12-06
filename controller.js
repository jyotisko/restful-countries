import { DEFAULT_COUNTRIES } from './config.js'
import homeView from './views/homeView.js';
import searchView from './views/searchView.js';
import regionView from './views/regionView.js';
import countryView from './views/countryView.js';
import manageMode from './views/manageMode.js';
import * as model from './model.js';

const manageHandlerLoad = () => DEFAULT_COUNTRIES.forEach(country => model.getCountryByName(country).then(data => homeView.renderMarkup(data)));

const manageSearchHandler = query => model.getCountryByName(query).then(data => searchView.generateMarkup(data));

const manageRegionHandler = region => model.getCountriesByRegion(region).then(data => regionView.generateMarkup(data));

const manageCountryInfo = figure => countryView.generateMarkup(figure);

const hideInfo = () => countryView.closeMarkup();

const init = () => {
  homeView.addHandlerLoad(manageHandlerLoad);
  searchView.addHandlerSearch(manageSearchHandler);
  regionView.addHandlerRegion(manageRegionHandler);
  countryView.addHandlerInfo(manageCountryInfo);
  countryView.addHandlerClose(hideInfo);
  manageMode.manageChangeMode();
};

init();

