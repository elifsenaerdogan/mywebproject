import React, {Component} from 'react';
import {Button, Container, Row} from "reactstrap";
import Header from "./components/Header";
import {Link} from "react-router-dom";
class Yonlendir extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Header/>
          </Row>
          <Row>
            <center>
              <h1>
                KitapEvi
              </h1>
            </center>
          </Row>
          <Row>
            <center>
              <Link to="/login" >Giriş Yap</Link>
            </center>
          </Row>
          <Row>
            <center>
                  <Link to="/form" >Kayıt Ol</Link>
            </center>

          </Row>
          <Row>
           <center>
             <Link to="/book" >Kitaplar</Link>
           </center>

          </Row>


        </Container>
      </div>
    );
  }
}

export default Yonlendir;
