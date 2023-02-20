import React, {Component} from 'react';
import alertify from "alertifyjs";
import {Button, FormGroup, Label} from "reactstrap";
import axios from "axios";



class Form extends Component {
  constructor(props) {

    super(props)

    this.state = {
      userNamee: '',
      userSurnamee: '',
      userMaill: '',
      userTelephonee: '',
      userUsernamee: '',
      userPasswordd: '',
      userCityy: '',

    }
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({[name]: value})

  }

  postUsers = () => {

    axios.post('http://localhost:8090/book/user', {
      userName:this.state.userNamee,
      userSurname: this.state.userSurnamee,
      userMail:this.state.userMaill,
      userTelephone:this.state.userTelephonee,
      userUsername:this.state.userUsernamee,
      userPassword:this.state.userPasswordd,
      userCity:this.state.userCityy


    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    this.postUsers();
    alertify.success(this.state.userNamee + " isimli kullanıcı  veri tabanına eklendi");
  }


  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.onSubmitHandler}>
            <FormGroup>
              <Label for="userName">Your Name</Label>
              <input name="userNamee" type="text" id="userNamee" placeholder="İsminizi giriniz"
                     onChange={this.onChangeHandler}></input>
            </FormGroup>

            <FormGroup>
              <Label for="userSurname">Your Surname</Label>
              <input name="userSurnamee" onChange={this.onChangeHandler} type="text" id="userSurnamee"
                     placeholder="Soyadınızı giriniz"></input>
            </FormGroup>


            <FormGroup>
              <Label for="userMail">Your Mail Adress</Label>
              <input name="userMaill" onChange={this.onChangeHandler} type="mail" id="userMaill"
                     placeholder="Mail Adresinizi giriniz"></input>
            </FormGroup>

            <FormGroup>
              <Label for="userTelephone">Your Telephone Number</Label>
              <input name="userTelephonee" onChange={this.onChangeHandler} type="text" id="userTelephonee"
                     placeholder="Telefon numaranızı giriniz"></input>
            </FormGroup>

            <FormGroup>
              <Label for="userUsername">Your User Name</Label>
              <input name="userUsernamee" onChange={this.onChangeHandler} type="text" id="userUsernamee"
                     placeholder="Kullanıcı adınızı giriniz"></input>
            </FormGroup>

            <FormGroup>
              <Label for="userPassword">Your Password</Label>
              <input name="userPasswordd" onChange={this.onChangeHandler} type="password" id="userPasswordd"
                     placeholder="Kullanıcı şifrenizi giriniz"></input>
            </FormGroup>

            <FormGroup>
              <Label for="userCity">User City</Label>
              <select name="userCityy" onChange={this.onChangeHandler} id="userCityy">
                <option>Ankara</option>
                <option>İstanbul</option>
                <option>Bursa</option>
                <option>İzmir</option>
                <option>Çanakkale</option>
                <option>Konya</option>
              </select>
            </FormGroup>


            <Button type="submit">Save</Button>

          </form>
        </center>
      </div>
    );
  }
}

export default Form;
