import React, {Component} from 'react';
import {Container, Row} from "reactstrap";
import Form from './Form';
import App from "./App";
import {Route, Routes} from "react-router-dom";
import Yonlendir from "./Yonlendir";
import Login from "./Login";
class Main extends Component {
  render() {
    return (
      <div>
      <Container>
        <Routes>
          <Route path="/book" element={<App/>}/>
          <Route exact path="/" element={<Yonlendir/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>

      </Container>
      </div>
    );
  }
}

export default Main;
