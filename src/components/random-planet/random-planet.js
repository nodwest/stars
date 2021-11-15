import React, {Component} from "react";
import './random-planet.css'
import SwapiService from "../../services/swapi";
import Spiner from "../spiner";
import ErrorCatch from "../error-catch";



export default class RandomPlanet extends Component {
    
    swapiService = new SwapiService();
    state = {
        planet: {},
        loading : true,
        error : false
    };

    componentDidMount() {
        this.updatePlanet();
    }

    onPlanetLoaded = (planet) => {
        this.setState( {planet, loading: false})
    }

    updatePlanet () {
        // const id = Math.floor(Math.random() * 25 + 2);
        const id = Math.floor(Math.random() * 25 + 2);
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    }

    onError = (err) =>  {
        this.setState({
            loading :false,
            error : true
        })
    }

    

    render() {
        
        const { planet, loading , error} = this.state;

        const errorMassage = error ? <ErrorCatch/> : null;
        const hasData = !(loading || error);
        const spiner = loading ? <Spiner/> : null;
        const content = hasData ? <PlanetView planet={planet} /> : null;
       
        return (
            <div className='randomPlanet'>
                {/* <div className="planet">
                    <img width='200px' src=  {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet" />
                </div>
    
                <div className="planet_desc">
                    <h3> {name} </h3>
    
                    <ul>
                        <li>Population: {population}</li>
                        <li>Rotattion Period: {rotation}</li>
                        <li>Diametr: {diametr}</li>
                    </ul>
                </div> */}
            {errorMassage}           
            {spiner}
            {content}        
            </div>
        )
    }



};

const PlanetView = ({planet}) => {
    const {id, name, population, rotation, diametr} = planet

    return (
        <React.Fragment> 
            
                <div className="planet">
                    <img width='200px' src=  {`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="Planet" />
                </div>
    
                <div className="planet_desc">
                    <h3> {name} </h3>
    
                    <ul>
                        <li>Population: {population}</li>
                        <li>Rotattion Period: {rotation}</li>
                        <li>Diametr: {diametr}</li>
                    </ul>
                </div>
           
        </React.Fragment>
    )
}

