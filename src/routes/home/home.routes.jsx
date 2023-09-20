import CanyonDirectory from '../../components/canyon-directory/canyon-directory.component';

const Home = () => {
  const canyons = [
        {
          id: 1,
          name: 'Bedford Stream', // string
          location: {
            // extract from Maps API with ability to override values pulled; user should be able to drag-and-drop pin which 
            country: 'New Zealand', // select (from country list)
            region: 'Mount Aspiring', // string
            nearestTown: 'Glenorchy', // string
            access: 'public', // select (public - private - permit)
            coordinates: [
              {
                canyonPutIn: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                parking: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                
            }]
          },
          information: {
            canyonTopography: '', // PDF of the canyon map 
            historicalInfo: {
              firstDescentDate: '', // datetime
              firstDescentTeam: '', // string
              latestDescentDate: '', // datetime
              latestDescentReportedBy: '', // user
            },
            descentDescription: {
              approach: '', // markdown
              descent: '', // markdown
              return: '', // markdown
            },
            canyonDuration: {
              approach: '', // integer
              descent: '', // integer
              return: '', // integer
            },
            rating: {
              vertical: '6', // integer (1-7)
              aquatic: '5', // integer (1-7)
              committment: 'VI', // integer (1-7)
              interest: '' // integer range (1-5)
            },
            technicalDefinitions: {
              typeOfRock: '', // string (or select from list of previously entries)
              catchmentSizeInSqKm: '', // integer
              highestWaterfall: '', // integer
              highestPitch: '', // integer
              lenghtInMeters: '', // integer
              elevationAtEntryPointInMeters: '', // integer
              elevationLossInMeters: '', // integer
              minRopeRequirementsInMeters: '', // integer
              anchorSetUp: '', // string
              shuttle: {
                required: false,
                distanceInKm: '', // integer 
                parkingCoordinates: {
                  latitude: '', 
                  longitude: '',
                }
              }
            },
            photos: [], // image
            reports: [
              {
                id: 1,
                user: '', 
                descentLog: {
                  descentQuality: '', // select (1-5)
                  dateOfDescent: '', // datetime
                  groupSize: '', // integer
                  groupLevel: '', // select (Guided - Beginner - Intermediate - Advanced)
                  approachDurationInMinutes: '', // integer
                  descentDurationInMinutes: '', // integer
                  returnDurationInMinutes: '', // integer
                  conditions: {
                    waterLevelObserved: 'medium', // select (very low - low - medium - medium-high - high - flood)
                    airTemperatureInCelsius: '', // integer
                    waterTemperatureInCelsius: '',// integer
                    remarks: '', // markdown
                    photos: []
                  }
                },
              }
            ]
          }
        },
        {
          id: 2,
          name: 'Gloomy Gorge', // string
          location: {
            // extract from Maps API with ability to override values pulled; user should be able to drag-and-drop pin which 
            country: 'New Zealand', // select (from country list)
            region: 'Matukituki', // string
            nearestTown: 'Wanaka', // string
            access: 'public', // select (public - private - permit)
            coordinates: [
              {
                canyonPutIn: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                parking: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                
            }]
          },
          information: {
            canyonTopography: '', // PDF of the canyon map 
            historicalInfo: {
              firstDescentDate: '', // datetime
              firstDescentTeam: '', // string
              latestDescentDate: '', // datetime
              latestDescentReportedBy: '', // user
            },
            descentDescription: {
              approach: '', // markdown
              descent: '', // markdown
              return: '', // markdown
            },
            canyonDuration: {
              approach: '', // integer
              descent: '', // integer
              return: '', // integer
            },
            rating: {
              vertical: '6', // integer (1-7)
              aquatic: '6', // integer (1-7)
              committment: 'VI', // integer (1-7)
              interest: '' // integer range (1-5)
            },
            technicalDefinitions: {
              typeOfRock: '', // string (or select from list of previously entries)
              catchmentSizeInSqKm: '', // integer
              highestWaterfall: '', // integer
              highestPitch: '', // integer
              lenghtInMeters: '', // integer
              elevationAtEntryPointInMeters: '', // integer
              elevationLossInMeters: '', // integer
              minRopeRequirementsInMeters: '', // integer
              anchorSetUp: '', // string
              shuttle: {
                required: false,
                distanceInKm: '', // integer 
                parkingCoordinates: {
                  latitude: '', 
                  longitude: '',
                }
              }
            },
            photos: [], // image
            reports: [
              {
                id: 1,
                user: '', 
                descentLog: {
                  descentQuality: '', // select (1-5)
                  dateOfDescent: '', // datetime
                  groupSize: '', // integer
                  groupLevel: '', // select (Guided - Beginner - Intermediate - Advanced)
                  approachDurationInMinutes: '', // integer
                  descentDurationInMinutes: '', // integer
                  returnDurationInMinutes: '', // integer
                  conditions: {
                    waterLevelObserved: 'medium', // select (very low - low - medium - medium-high - high - flood)
                    airTemperatureInCelsius: '', // integer
                    waterTemperatureInCelsius: '',// integer
                    remarks: '', // markdown
                    photos: []
                  }
                },
              }
            ]
          }
        },
        {
          id: 3,
          name: 'Gorgas del Nuria', // string
          location: {
            // extract from Maps API with ability to override values pulled; user should be able to drag-and-drop pin which 
            country: 'Spain', // select (from country list)
            region: 'Catalunya', // string
            nearestTown: 'Sant Joan de les Abadasses', // string
            access: 'public', // select (public - private - permit)
            coordinates: [
              {
                canyonPutIn: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                parking: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                
            }]
          },
          information: {
            canyonTopography: '', // PDF of the canyon map 
            historicalInfo: {
              firstDescentDate: '', // datetime
              firstDescentTeam: '', // string
              latestDescentDate: '', // datetime
              latestDescentReportedBy: '', // user
            },
            descentDescription: {
              approach: '', // markdown
              descent: '', // markdown
              return: '', // markdown
            },
            canyonDuration: {
              approach: '', // integer
              descent: '', // integer
              return: '', // integer
            },
            rating: {
              vertical: '4', // integer (1-7)
              aquatic: '4', // integer (1-7)
              committment: 'II', // integer (1-7)
              interest: '' // integer range (1-5)
            },
            technicalDefinitions: {
              typeOfRock: '', // string (or select from list of previously entries)
              catchmentSizeInSqKm: '', // integer
              highestWaterfall: '', // integer
              highestPitch: '', // integer
              lenghtInMeters: '', // integer
              elevationAtEntryPointInMeters: '', // integer
              elevationLossInMeters: '', // integer
              minRopeRequirementsInMeters: '', // integer
              anchorSetUp: '', // string
              shuttle: {
                required: false,
                distanceInKm: '', // integer 
                parkingCoordinates: {
                  latitude: '', 
                  longitude: '',
                }
              }
            },
            photos: [], // image
            reports: [
              {
                id: 1,
                user: '', 
                descentLog: {
                  descentQuality: '', // select (1-5)
                  dateOfDescent: '', // datetime
                  groupSize: '', // integer
                  groupLevel: '', // select (Guided - Beginner - Intermediate - Advanced)
                  approachDurationInMinutes: '', // integer
                  descentDurationInMinutes: '', // integer
                  returnDurationInMinutes: '', // integer
                  conditions: {
                    waterLevelObserved: 'medium', // select (very low - low - medium - medium-high - high - flood)
                    airTemperatureInCelsius: '', // integer
                    waterTemperatureInCelsius: '',// integer
                    remarks: '', // markdown
                    photos: []
                  }
                },
              }
            ]
          }
        },
        {
          id: 4,
          name: 'Oules des Freissinieres', // string
          location: {
            // extract from Maps API with ability to override values pulled; user should be able to drag-and-drop pin which 
            country: 'France', // select (from country list)
            region: 'Alps', // string
            nearestTown: 'Freissinieres', // string
            access: 'public', // select (public - private - permit)
            coordinates: [
              {
                canyonPutIn: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                parking: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                
            }]
          },
          information: {
            canyonTopography: '', // PDF of the canyon map 
            historicalInfo: {
              firstDescentDate: '', // datetime
              firstDescentTeam: '', // string
              latestDescentDate: '', // datetime
              latestDescentReportedBy: '', // user
            },
            descentDescription: {
              approach: '', // markdown
              descent: '', // markdown
              return: '', // markdown
            },
            canyonDuration: {
              approach: '', // integer
              descent: '', // integer
              return: '', // integer
            },
            rating: {
              vertical: '6', // integer (1-7)
              aquatic: '5', // integer (1-7)
              committment: 'V', // integer (1-7)
              interest: '' // integer range (1-5)
            },
            technicalDefinitions: {
              typeOfRock: '', // string (or select from list of previously entries)
              catchmentSizeInSqKm: '', // integer
              highestWaterfall: '', // integer
              highestPitch: '', // integer
              lenghtInMeters: '', // integer
              elevationAtEntryPointInMeters: '', // integer
              elevationLossInMeters: '', // integer
              minRopeRequirementsInMeters: '', // integer
              anchorSetUp: '', // string
              shuttle: {
                required: false,
                distanceInKm: '', // integer 
                parkingCoordinates: {
                  latitude: '', 
                  longitude: '',
                }
              }
            },
            photos: [], // image
            reports: [
              {
                id: 1,
                user: '', 
                descentLog: {
                  descentQuality: '', // select (1-5)
                  dateOfDescent: '', // datetime
                  groupSize: '', // integer
                  groupLevel: '', // select (Guided - Beginner - Intermediate - Advanced)
                  approachDurationInMinutes: '', // integer
                  descentDurationInMinutes: '', // integer
                  returnDurationInMinutes: '', // integer
                  conditions: {
                    waterLevelObserved: 'medium', // select (very low - low - medium - medium-high - high - flood)
                    airTemperatureInCelsius: '', // integer
                    waterTemperatureInCelsius: '',// integer
                    remarks: '', // markdown
                    photos: []
                  }
                },
              }
            ]
          }
        },
        {
          id: 5,
          name: 'Malacara', // string
          location: {
            // extract from Maps API with ability to override values pulled; user should be able to drag-and-drop pin which 
            country: 'Brazil', // select (from country list)
            region: 'Aparados da Serra NP', // string
            nearestTown: 'Praia Grande', // string
            access: 'public', // select (public - private - permit)
            coordinates: [
              {
                canyonPutIn: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                parking: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                
            }]
          },
          information: {
            canyonTopography: '', // PDF of the canyon map 
            historicalInfo: {
              firstDescentDate: '', // datetime
              firstDescentTeam: '', // string
              latestDescentDate: '', // datetime
              latestDescentReportedBy: '', // user
            },
            descentDescription: {
              approach: '', // markdown
              descent: '', // markdown
              return: '', // markdown
            },
            canyonDuration: {
              approach: '', // integer
              descent: '', // integer
              return: '', // integer
            },
            rating: {
              vertical: '5', // integer (1-7)
              aquatic: '4', // integer (1-7)
              committment: 'VI', // integer (1-7)
              interest: '' // integer range (1-5)
            },
            technicalDefinitions: {
              typeOfRock: '', // string (or select from list of previously entries)
              catchmentSizeInSqKm: '', // integer
              highestWaterfall: '', // integer
              highestPitch: '', // integer
              lenghtInMeters: '', // integer
              elevationAtEntryPointInMeters: '', // integer
              elevationLossInMeters: '', // integer
              minRopeRequirementsInMeters: '', // integer
              anchorSetUp: '', // string
              shuttle: {
                required: false,
                distanceInKm: '', // integer 
                parkingCoordinates: {
                  latitude: '', 
                  longitude: '',
                }
              }
            },
            photos: [], // image
            reports: [
              {
                id: 1,
                user: '', 
                descentLog: {
                  descentQuality: '', // select (1-5)
                  dateOfDescent: '', // datetime
                  groupSize: '', // integer
                  groupLevel: '', // select (Guided - Beginner - Intermediate - Advanced)
                  approachDurationInMinutes: '', // integer
                  descentDurationInMinutes: '', // integer
                  returnDurationInMinutes: '', // integer
                  conditions: {
                    waterLevelObserved: 'medium', // select (very low - low - medium - medium-high - high - flood)
                    airTemperatureInCelsius: '', // integer
                    waterTemperatureInCelsius: '',// integer
                    remarks: '', // markdown
                    photos: []
                  }
                },
              }
            ]
          }
        },
        {
          id: 6,
          name: 'Ribeira de Casas', // string
          location: {
            // extract from Maps API with ability to override values pulled; user should be able to drag-and-drop pin which 
            country: 'Portugal', // select (from country list)
            region: 'Flores', // string
            nearestTown: 'Fajã Grande', // string
            access: 'public', // select (public - private - permit)
            coordinates: [
              {
                canyonPutIn: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                parking: {
                  latitude: '-44.602170',
                  longitude: '168.369616'
                },
                
            }]
          },
          information: {
            canyonTopography: '', // PDF of the canyon map 
            historicalInfo: {
              firstDescentDate: '', // datetime
              firstDescentTeam: '', // string
              latestDescentDate: '', // datetime
              latestDescentReportedBy: '', // user
            },
            descentDescription: {
              approach: '', // markdown
              descent: '', // markdown
              return: '', // markdown
            },
            canyonDuration: {
              approach: '', // integer
              descent: '', // integer
              return: '', // integer
            },
            rating: {
              vertical: '6', // integer (1-7)
              aquatic: '3', // integer (1-7)
              committment: 'V', // integer (1-7)
              interest: '' // integer range (1-5)
            },
            technicalDefinitions: {
              typeOfRock: '', // string (or select from list of previously entries)
              catchmentSizeInSqKm: '', // integer
              highestWaterfall: '', // integer
              highestPitch: '', // integer
              lenghtInMeters: '', // integer
              elevationAtEntryPointInMeters: '', // integer
              elevationLossInMeters: '', // integer
              minRopeRequirementsInMeters: '', // integer
              anchorSetUp: '', // string
              shuttle: {
                required: false,
                distanceInKm: '', // integer 
                parkingCoordinates: {
                  latitude: '', 
                  longitude: '',
                }
              }
            },
            photos: [], // image
            reports: [
              {
                id: 1,
                user: '', 
                descentLog: {
                  descentQuality: '', // select (1-5)
                  dateOfDescent: '', // datetime
                  groupSize: '', // integer
                  groupLevel: '', // select (Guided - Beginner - Intermediate - Advanced)
                  approachDurationInMinutes: '', // integer
                  descentDurationInMinutes: '', // integer
                  returnDurationInMinutes: '', // integer
                  conditions: {
                    waterLevelObserved: 'medium', // select (very low - low - medium - medium-high - high - flood)
                    airTemperatureInCelsius: '', // integer
                    waterTemperatureInCelsius: '',// integer
                    remarks: '', // markdown
                    photos: []
                  }
                },
              }
            ]
          }
        },
      ];     
      
  const filters = Array.from(new Set(canyons.map((canyon) => canyon.location.country)));
  
  
  return (
    
    <CanyonDirectory canyons={canyons} filters={filters} /> 
    
  )
}

export default Home;