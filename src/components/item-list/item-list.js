import React, {Component} from "react";
import SwapiService from "../../services/swapi";
import Spiner from "../spiner";
import './item-list.css'



export default class ItemList extends Component  {

    swapiService = new SwapiService() 

    state = {
        peopleList : null
    }

    componentDidMount() {
        this.swapiService
            .getAllPeople()
            .then((peopleList) => {
                this.setState({peopleList})
            })
    }

    // getIdPerson = (id) => {
    //     console.log(id);
    // }

    getPerson = (arr) => {
        const newArr = arr.slice(0,10
            );
       
        return (
            newArr.map((item, id) => {     
                return <li key= {id} onClick={() => this.props.getIdPerson(id)}> 
                    {item.name} 
                </li>
            })
        )
    } 
     
    render() {

        const {peopleList} = this.state;
     
        
        if (!peopleList) {
            return <Spiner/>
        }

        return (
            <div className='itemList'>
                <ul>
                    {this.getPerson(peopleList)}
                </ul>
            </div>
        )
    }

};

