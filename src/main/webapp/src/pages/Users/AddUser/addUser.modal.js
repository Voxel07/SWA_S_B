import React from 'react';
import axios from 'axios'

class AddUser extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      admin: '',
      companys: [],
      errorMsgCompanys: '',
      phone1: '',
      type1: '',
      phone2: '',
      type2: '',
      companyId: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  Changehandler = (event) => {
    if (event.target.name === "admin") {
      console.log('ändern');
      this.setState({ [event.target.name]: event.target.checked })
    }
    else {
      this.setState({ [event.target.name]: event.target.value })
    }
  }
  componentDidMount() {
    this.getCompanys();
  }
  ClearInput() {
    this.setState({
      id: '',
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      admin: '',
      companys: [],
      errorMsgCompanys: '',
      phone1: '',
      type1: '',
      phone2: '',
      type2: '',
      companyId: ''
    })
  }

  getCompanys() {
    axios.get('http://localhost:8080/company')
      .then(response => {
        console.log(response)
        this.setState({ companys: response.data })
        if (response.data.length === 0) {
          this.setState({ errorMsgUser: 'Kein Company Daten erhalten' })
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({ errorMsgCompany: error })
      })
  }
  handleSubmit = event => {
    event.preventDefault();
    this.addUser();
    this.ClearInput();
  }
  addUser() {
    const { username, firstName, lastName, password, email, admin } = this.state
    axios.put('http://localhost:8080/user/' + this.state.companyId,
      {
        email: email,
        username: username,
        password: password,
        firstName: firstName,
        lastName: lastName,
        admin: admin
      })
      // axios.put('http://localhost:8080/user/' + this.state.companyId, this.state) //geht eh nicht
      .then(response => {
        console.log(response)
        this.setState({ id: response.data })

        if (this.state.phone1 !== '' && this.state.type1 !== '') {
          this.addPhone(this.state.phone1, this.state.type1);
        }
        if (this.state.phone2 !== '' && this.state.type2 !== '') {
          this.addPhone(this.state.phone2, this.state.type2);
        }
        this.props.cbToBar(true);
        this.props.cbToBar(false);
      })
      .catch(error => {
        console.log(error)
      })
  }

  addPhone = (phoneNumber, phoneType) => {
    axios.put('http://localhost:8080/phone/' + this.state.id,
      { number: phoneNumber, type: phoneType })
      .then(response => {
        console.log(response)
        // this.ClearInput();
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { username, firstName, lastName, password, email, admin, phone1, type1, phone2, type2 } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <legend>Add User: </legend>
          <div className="container"  >
            <h1 className="title">{username}</h1>
            <div className=" form-row ">
              <div className="form-group col-6 col-sm-6 my-2 p-2">
                <label> Company </label>
                <select name="companyId" class="custom-selected" id="inputGroupSelect01" onChange={this.Changehandler}>
                  {
                    <option >Firma wählen</option>
                  }
                  {
                    this.state.companys.length ?
                      this.state.companys.map(company => <option value={company.id}  >{company.name}</option>)
                      : <option value={0} >{this.state.errorMsgCompany}</option>
                  }
                </select>
              </div>
              <div className="form-group col-12 col-sm-6 my-2 p-2">
                <label> Email </label>
                <input
                  placeholder="Email"
                  className="form-control1"
                  name="email"
                  type="text"
                  value={email} onChange={this.Changehandler} />
              </div>
            </div>

            <div className=" form-row ">
              <div className="form-group col-12 col-sm-6 my-2 p-2 ">
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  className="form-control1 "
                  name="firstName"
                  type="text"
                  value={firstName} onChange={this.Changehandler} />
              </div>
              <div className="form-group col-12 col-sm-6 my-2 p-2">
                <label> Last Name </label>
                <input
                  placeholder="Last Name"
                  className="form-control1"
                  name="lastName"
                  type="text"
                  value={lastName} onChange={this.Changehandler} />
              </div>
            </div>

            <div className="form-group form-row ">
              <div className=" col-12 col-sm-6 my-2 p-2">
                <label> Username </label>
                <input
                  placeholder="Username"
                  className="form-control1"
                  name="username"
                  type="text"
                  value={username} onChange={this.Changehandler} />
              </div>
              <div className=" form-group col-12 col-sm-6 my-2 p-2">
                <label> Password </label>
                <input
                  placeholder="Password"
                  className="form-control1"
                  name="password"
                  type="password"
                  value={password} onChange={this.Changehandler} />
              </div>
            </div>

            <div className=" form-row ">
              <div className=" form-group col-12 col-sm-6 my-2 p-2">
                <label> Number1 </label>
                <input
                  placeholder="Number"
                  className="form-control1"
                  name="phone1"
                  type="number"
                  value={phone1} onChange={this.Changehandler} />
              </div>
              <div className=" form-group col-12 col-sm-6 my-2 p-2">
                <label> Type1 </label>
                <input
                  placeholder="Type"
                  className="form-control1"
                  name="type1"
                  type="text"
                  value={type1} onChange={this.Changehandler} />
              </div>
            </div>
            <div className=" form-row ">
              <div className="form-group col-12 col-sm-6 my-2 p-2">
                <label> Number2 </label>
                <input
                  placeholder="Number"
                  className="form-control1"
                  name="phone2"
                  type="number"
                  value={phone2} onChange={this.Changehandler} />
              </div>
              <div className="form-group col-12 col-sm-6 my-2 p-2">
                <label> Type2 </label>
                <input
                  placeholder="Type2"
                  className="form-control1"
                  name="type2"
                  type="text"
                  value={type2} onChange={this.Changehandler} />
              </div>
            </div>
            <div className=" form-group col-12 col-sm-6 my-2 p-2">
              <label> admin </label>
              <input
                name="admin"
                className="form-control1"
                type="checkbox"
                checked={admin} onChange={this.Changehandler} />
            </div>
          </div>
        </div>
        <div className="mt-4 text-center">
          <button type="submit" class=" btn-primary1">Add</button>
        </div>
      </form>
    );
  }
}

export default AddUser;