import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import SearchFilter from './components/search-filter/search-filter.component';
import CanyonDirectory from './components/canyon-directory/canyon-directory.component';
import './App.css';


class App extends Component {
  
  constructor() {
    super();

    this.state = {
      searchQuery: '',
      filters: [],
      canyons: [
        {
          id: 1,
          name: 'Bedford Stream',
          country: 'New Zealand',
          region: '',
          rating: 'V6A5IV',
          coordinates: {
            latitude: '-44.602170',
            longitude: '168.369616'
          }
        },
        {
          id: 2,
          name: 'Gloomy Gorge',
          country: 'New Zealand',
          region: '',
          rating: 'V6A6IV',
          coordinates: {
            latitude: '-44.437454',
            longitude: '168.684115'
          }
        },
        {
          id: 3,
          name: 'Oules des Freissinieres',
          country: 'France',
          region: '',
          rating: 'V6A5V',
          coordinates: {
            latitude: '44.728779',
            longitude: '6.447517'
          }
        },
        {
          id: 4,
          name: 'Gorgas de Nuria',
          country: 'Spain',
          region: '',
          rating: 'V4A4III',
          coordinates: {
            latitude: '42.375247',
            longitude: '2.161019'
          }
        },
        {
          id: 5,
          name: 'Malacara',
          country: 'Brazil',
          region: '',
          rating: 'V5A4IV',
          coordinates: {
            latitude: '42.375247',
            longitude: '2.161019'
          }
        },
      ]
    };      
  }
  onSearchChange = (e) => {
    const searchQuery = e.target.value.toLowerCase()
    this.setState(() => {
      return { searchQuery }
    })
  }
  componentDidMount () {  
    const uniqueCountries = Array.from(
        new Set(this.state.canyons.map(canyon => canyon.country))
      );
    // Create an array of filter objects with unique countries
    const filters = uniqueCountries.map(country => ({
      [country]: false,
    }));    
    // Update the state with the filters array
      this.setState({ filters });          
  }
  

  render() {        
    const { canyons, filters } = this.state;
    const searchedCanyons = canyons.filter((canyon) => {
      const queryTerms = `${canyon.name}, ${canyon.country}, ${canyon.rating}`      
      return queryTerms.toLowerCase().includes(this.state.searchQuery)
    })
   
           
    return (
      
      <div className="App">
        <header className="App-header">
          <SearchBox placeholder='Search Canyons' onChangeHandler={this.onSearchChange} className='search-box' />
          <SearchFilter filters={filters}/>
          <CanyonDirectory content={searchedCanyons} />
          
        </header>
      </div>    
    )
  }
}

export default App;
