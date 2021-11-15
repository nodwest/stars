


export default class SwapiService {
    
  _apiBase = 'https://swapi.dev/api';
    // Фукнция Fetch 
    async getResource (url) {
      const res = await fetch(`${this._apiBase}${url}`);
     
      if (!res.ok) {
        throw new Error(`Could not fetch ${url}, received ${res.status}`);
      }
    
      const body = await res.json();
      return body;
    }
  // Получаем список людей
   async getAllPeople () {
      const res = await this.getResource(`/people/`);
      return res.results
    }
  // Получаем список персонажа
    async getPerson (id) {
      return await this.getResource(`/people/${id}`);
    }
  // Получаем список планет
    async getAllPlanets () {
      const res = await this.getResource(`/planets/`);
      return res.results.map(this._transformPlanet);
    }
  // Получаем планету
    async getPlanet (id) {
      const planet = await this.getResource(`/planets/${id}`);
      return this._transformPlanet(planet);
    }
  
  // Получаем список планет
  async getAllShips () {
    const res = await this.getResource(`/starships/`);
    return res.results;
  }
  // Получаем планету
  async getShip (id = 9) {
    return this.getResource(`/starships/${id}`);
  }

  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }
  

  _transformPlanet (planet) {
    
    return {
      id: this._extractId(planet),
      name: planet.name,
      population: planet.population,
      rotation: planet.rotation_period,
      diametr: planet.diameter
  }
  }


  
  // }const swapi = new SwapiService();
  
  // swapi.getAllShips().then( (heroes) => {
  //   heroes.forEach( (hero) => {
  //     console.log(hero.name);
  //   })
  // })
  
  // swapi.getShip(2).then( (planets) => {
  //  console.log(planets)
  // })
  
  // swapi.getPerson(1).then( (body) => {
  //   console.log(body);
  // })
  
  
  
  
  
  // fetch('https://swapi.dev/api/people/1')
  //   .then( (res) => {
  //     return res.json()
  //   })
  //   .then( (body) => {
  //     console.log(body);
  //   });
  
  }

//   const swapi = new SwapiService();

//  const pl = swapi.getPlanet(7).then( (res) => {
//     console.log('res' , res);
//   })
   
//   console.log('pl', pl);