import React, {Component} from 'react'

class Form extends Component{

  initalState= {
    Company:'',
    Role: '',
    RH:'',
    Contrat:'',
    SA:'',
    lieu:'',
    lien: ""
  }
  state=this.initalState
  handleChange = (event)=>{
    const {name, value} = event.target

  this.setState({
    [name]: value,
  })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { Company,Role,RH,
    Contrat,
    SA,
    lieu,
    lien } = this.state;
  
    return (
      <form>
        <div class="row">
            <label class="col-sm-1 col-form-label" htmlFor="Company">Company</label>
            <div class="col">
              <input
                type="text"
                name="Company"
                id="company"
                value={Company}
                onChange={this.handleChange} />
            </div>
            <label class="col-sm-1"  htmlFor="Role">Role</label>
            <div class="col">
              <input
                type="text"
                name="Role"
                id="role"
                value={Role}
                onChange={this.handleChange} />
            </div>
        </div>
        <div class="row">
            <label class="col-sm-1"  htmlFor="RH">RH</label>
            <div class="col">
              <input
                type="text"
                name="RH"
                id="rh"
                value={RH}
                onChange={this.handleChange} />
            </div>
            <label class="col-sm-1" htmlFor="Contrat">Contrat</label>
            <div class="col">
              <input
                type="text"
                name="Contrat"
                id="Contrat"
                value={Contrat}
                onChange={this.handleChange} />
            </div>
        </div>
        <div class="row">
            <label class="col-sm-1" htmlFor="SA">SA</label>
            <div class="col">
                <input
                type="text"
                name="SA"
                id="sa"
                value={SA}
                onChange={this.handleChange} />
            </div>
            <label class="col-sm-1" htmlFor="lieu">Address</label>
            <div class="col">
                <input
                  type="text"
                  name="lieu"
                  id="lieu"
                  value={lieu}
                  onChange={this.handleChange} />
            </div>
        </div>
        <div class="row">
            <label class="col-sm-1" htmlFor="lieu">Link</label>
            <div class="col">
              <input
                type="text"
                name="lien"
                id="lien"
                value={lien}
                onChange={this.handleChange} />
            </div>
        </div>
        <div class="row" >
        <input type="button" value="Submit" onClick={this.submitForm} />
        </div>
      </form>
    );
  }
}
export default Form
