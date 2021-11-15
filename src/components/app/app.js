import React, {Component} from "react";
import Header from "../header/header.js";
import RandomPlanet from "../random-planet/random-planet.js";
import ItemList from "../item-list/item-list.js";
import PersonDetalis from "../person-detalis/person-detalis.js";
import SwapiService from "../../services/swapi.js";
import './app.css'


export default class  App extends Component{

    swapiService = new SwapiService();
    
    state = {
        person : 1,
        man : [],
        loading : true
    }

    getIdPerson = (id) => {   
    
        this.setState({person : id + 1});     
    }

    getMan  = () => {
        this.swapiService.getPerson(this.state.person  )
            .then( (body) => this.setState ({man : body})) 
            
    } 
 
    componentDidMount () {
        // this.getMyPerson1();
        this.getMan()
       
     }
    
    render() {
       
        return(
            <div className='app'>
                <Header />
                <RandomPlanet />
                <ItemList getIdPerson = {this.getIdPerson} loading = {this.state.loading} />
                <PersonDetalis getMan = {this.getMan} idPerson = {this.state.person} man = {this.state.man}/>
            </div>
        )
    }
}
