import React, {Component} from 'react';
import {Button, FormGroup, Label} from "reactstrap";
import alertify from "alertifyjs";



class Login extends Component {
  constructor(props) {

    super(props)

    this.state = {
      users: [],userrUsername:'',userrPassword:'',
    }
  };


  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]: value})

  }

  TestUsers =() =>
  {
    fetch('http://localhost:8090/book/users')
      .then(response => response.json())
      .then(data=>this.setState({users:data}));
    {this.state.users.map(user  => ( user.userUsername === 'elifff' ? console.log("giriş başarılı") : console.log("başarısız")))}


  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.TestUsers();
    alertify.success(this.state.userrUsername + " isimli kullanıcı  veri tabanına eklendi");
  }
  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.onSubmitHandler}>
            <FormGroup>
              <Label for="userrUserName">Your Name</Label>
              <input name="userrUserName" type="text" id="userrUserName" placeholder="Kullanıcı İsminizi giriniz"
                     onChange={this.onChangeHandler}></input>
            </FormGroup>

            <FormGroup>
              <Label for="userrPassword">Your Password</Label>
              <input name="userrPassword" onChange={this.onChangeHandler} type="text" id="userrPassword"
                     placeholder="Şifrenizi giriniz"></input>
            </FormGroup>

            <Button type="submit">Save</Button>
          </form>
        </center>
      </div>
    );
  }
}

export default Login;
