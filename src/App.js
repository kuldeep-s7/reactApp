import React  from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { robots } from './robots';

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            robots : robots , 
            cardData : [],
            searchField : ''
        }
    }
    
  componentDidMount(){
    this.data()
}

  data= async()=>{
    
      fetch('https://cors-anywhere.herokuapp.com/https://api.jikan.moe/v3/search/anime?q=naruto', {
          method: 'GET',
          
          headers: {

            'Content-Type': 'application/json',
          
          },
        
        })
          .then(response => response.json())
          .then(cardData => this.setState({cardData : cardData.results}))
          
          }
    
    onSearchChange = (event) =>{
        this.setState({searchField : event.target.value}) 
    }
    render() {
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        const Anime = this.state.cardData.length > 0 
        ? this.state.cardData.filter(anime => {
          
            return anime.title.toLowerCase().includes(this.state.searchField.toLowerCase())
              
        }) : this.state.cardData
         return (  
            <div className= 'tc'> {console.log(Anime,"jrjjf")}
                <h1 className = 'f1'> Naruto</h1>
                <Searchbox searchChange = {this.onSearchChange}/>
                <CardList robots = {filterRobots}
                       anime = {Anime}     
                />
           </div>
           )

    }
};

export default App ;