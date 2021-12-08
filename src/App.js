import React from "react";
import Table from './Table'
import Form from './Form'

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
        Contrat:'ALT',
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
        RH:'Asma ',
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
  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }
  render() {
    const { characters } = this.state
    const heading = <h1>Job Search List</h1>
    return (
       <div id="myApp">
        <div id="head">
        {heading}
        </div>
        <div id="quote">
          <blockquote>
          <p>There is no failure except in no longer trying</p>
          <cite>Elbert<span class="cite-last-name"> Hubbard</span></cite>
          </blockquote>
        </div>
        <div id="form">
        <Form handleSubmit={this.handleSubmit} />
        </div>
        <div id="table">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        </div>
       
      </div>

   
    )
  }
}
  
export default App
