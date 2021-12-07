import React from "react";
import Table from './Table'


class App extends React.Component {
  state = {
    characters: [
      {
        Company: 'Oze-Energies',
        Role: 'Développeur python',
        RH:'Gaultier D\'acunto',
        Contrat:'CDI',
        SA:'Ent RH',
        lieu:'Vincennes',
        lien: "https://www.linkedin.com/jobs/view/2829193120/?refId=c6a1cdd3-2dd5-49f6-9246-9a32b028e8f6&trk=flagship3_job_home_appliedjobs"
      },
      {
        
        Company: 'Casam Pro',
        Role: 'Développeur Web',
        RH:'Julien',
        Contrat:'CDI',
        SA:'Test tech',
        lieu:'Orsay',
        lien: "https://www.linkedin.com/jobs/view/2808115945/?refId=c6a1cdd3-2dd5-49f6-9246-9a32b028e8f6&trk=flagship3_job_home_appliedjobs&lipi=urn%3Ali%3Apage%3Ad_flagship3_myitems_savedjobs%3BKJ9KTCiPQtGf0J2VCBGZrQ%3D%3D"
      },
      {
        
        Company: 'Meritis',
        Role: 'Développeur Python',
        RH:'Olivia',
        Contrat:'CDI',
        SA:'Ent client',
        lieu:'Paris',
        lien: "https://www.linkedin.com/jobs/view/2829193120/?refId=c6a1cdd3-2dd5-49f6-9246-9a32b028e8f6&trk=flagship3_job_home_appliedjobs"
      },
      {
        
        Company: 'Capgemini',
        Role: 'Deep learning ingeneer',
        RH:'ASma ',
        Contrat:'CDI',
        SA:'Test tech',
        lieu:'Issy-les-moulineaux',
        lien: "https://www.linkedin.com/jobs/view/2829193120/?refId=c6a1cdd3-2dd5-49f6-9246-9a32b028e8f6&trk=flagship3_job_home_appliedjobs"
      }
    ]
  }
  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  render() {
    const { characters } = this.state

    

   
  


return (
  <div>
    <h1>My job applications List</h1>
    <p>"There is no failure except in no longer trying"</p>
    <Table characterData={characters} removeCharacter={this.removeCharacter} />
  </div>
)
}
}
  
export default App
