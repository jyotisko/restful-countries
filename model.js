export const getCountryByName = async function (country) {
  try {
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${country}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`${err} 💥💥💥💥💥💥`);
  }
};

export const getCountriesByRegion = async function (region) {
  try {
    const response = await fetch(`https://restcountries.eu/rest/v2/region/${region}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(`${err} 💥💥💥💥💥💥`);
  }
};





