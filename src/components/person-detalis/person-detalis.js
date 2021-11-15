
import React , {Component} from "react";
import Spiner from "../spiner";
import SwapiService from "../../services/swapi";
import './person-detalis.css'






export default class PersonDetalis extends Component {

    swapiService = new SwapiService()

    componentDidUpdate(prevProps) {
       if (this.props.man !== prevProps.man) {
       
        this.props.getMan()
       }
    }

    onChangePersonSpiner = () => {
        return (
            <Spiner/>
        )
    }

    render() {

      const {idPerson, man} = this.props
    //   console.log('man', man);
      
   
    
        return (
           
            <div className='PersonDetalis'>
                <div className="persona">
                    <img width='200px'  src={`https://starwars-visualguide.com/assets/img/characters/${idPerson}.jpg`} alt="Planet" />
                </div>
    
                <div className="persona_desc">
                    <h3> {man.name} </h3>
    
                    <ul>
                        <li>Gender: {man.gender}</li>
                        <li>mass: {man.mass}</li>
                        <li>Skin color: {man.skin_color}</li>
                    </ul>
                </div>
            </div>
        )
    }

};

