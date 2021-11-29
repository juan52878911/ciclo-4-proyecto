import React from 'react';
import { ReactDOM } from 'react';
import { SketchPicker } from 'react-color';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { BsChat } from "react-icons/bs"; 
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { BsVectorPen } from "react-icons/bs";
import { BsScissors } from "react-icons/bs";
import { BsPaletteFill } from "react-icons/bs"; 
import { BsMusicNote } from "react-icons/bs"; 
import { BsKeyFill } from "react-icons/bs";
import { BsGearFill } from "react-icons/bs";
import { BsEyeglasses } from "react-icons/bs";
import { BsEggFried } from "react-icons/bs";
import { BsAt } from "react-icons/bs";
import { AiFillExperiment } from "react-icons/ai";
import {BsPersonCircle} from "react-icons/bs";
import '../views/Topics.css';
import { Block } from '@mui/icons-material';
import { textAlign } from '@mui/system';

class handleChangeComplete extends React.Component {
    state = {
      background: '#f3dbee',
    };
  
    handleChangeComplete = (color) => {
      this.setState({ background: color.hex });
    };
  
    render() {
      //require("./LoguedHome.css"); 
      return (
       <SketchPicker 
        color={ this.state.background }
          onChangeComplete={ this.handleChangeComplete }
      />
    );
    }
  }
  
  export function Topics() {
  
      //botón de ver más debe llevar a perfil del otro usuario
  
  return ( 
    <Container style={{backgroundColor:"black"}}>
      <Row>
        <Col>
        <h1 class="menudeconsulta" style={{textAlign:'center'}}>
          Menú de consulta: 
        </h1>
        </Col>
      </Row>
      <Row>
          <Col>
        <h2 class="categoriastematicas"style={{textAlign:'center'}}>
             Categorías temáticas de Trueque Mental
        </h2>
          </Col>
      </Row>

      




      <Row>
          <Col class="externo1">
          <div class="caja1">
                <p>
                    <BsPaletteFill class={"icono1"} size={"60"} style={{textAlign:'center'}}></BsPaletteFill>
                 </p>
            <div class="tema1">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    Arte
                </h3>
            </div>
            <div class="textodescripcion1">
                <p>
                    Lorem ipsum, dolor sit amet
                </p> 
            </div>
            </div>
            </Col>
      </Row>



      <Row>
          <Col class="externo2">
            <div class="caja2">
                <p>
                    <AiFillExperiment class={"icono2"} size={"60"} style={{textAlign:'center'}}></AiFillExperiment>
                 </p>
            <div class="tema2">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    Ciencias
                </h3>
            </div>
            <div class="textodescripcion2">
                <p>
                    Lorem ipsum, dolor sit amet
                </p> 
            </div>
            </div>
            </Col>
      </Row>


      <Row>
          <Col class="externo3">
            <div class="caja3">
                <p>
                    <BsEyeglasses class={"icono3"} size={"60"} style={{textAlign:'center'}}></BsEyeglasses>
                 </p>
            <div class="tema3">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    Ciencias Sociales
                </h3>
            </div>
            <div class="textodescripcion3">
                <p>
                    Lorem ipsum, dolor sit amet
                </p>
            </div> 
            </div>
            </Col>
      </Row>



      <Row>
          <Col class="externo4">
              <div class="caja4">
                <p>
                    <BsEggFried class={"icono4"} size={"60"} style={{textAlign:'center'}}></BsEggFried>
                 </p>
            <div class="tema4">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    Cocina
                </h3>
            </div>
            <div class="textodescripcion4">
                <p>
                    Lorem ipsum, dolor sit amet
                </p> 
            </div>
            </div>
            </Col>
      </Row>



      <Row>
          <Col class="externo5">
            <div class="caja5">
                <p>
                    <BsScissors class={"icono5"} size={"60"} style={{textAlign:'center'}}></BsScissors>
                 </p>
            <div class="tema5">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    DIY
                </h3>
            </div>
            <div class="textodescripcion5">
                <p>
                    Lorem ipsum, dolor sit amet
                </p> 
            </div>
            </div>
            </Col>
      </Row>



      <Row>
          <Col class="externo6">
            <div class="caja6">
                <p>
                    <BsKeyFill class={"icono6"} size={"60"} style={{textAlign:'center'}}></BsKeyFill>
                 </p>
            <div class="tema6">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    Habilidades para la vida
                </h3>
            </div>
            <div class="textodescripcion6">
                <p>
                    Lorem ipsum, dolor sit amet
                </p> 
            </div>
            </div>
            </Col>
      </Row>



      <Row>
          <Col class="externo7">
            <div class="caja7">
                <p>
                    <BsVectorPen class={"icono7"} size={"60"} style={{textAlign:'center'}}></BsVectorPen>
                 </p>
            <div class="tema7">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    Literatura
                </h3>
            </div>
            <div class="textodescripcion7">
                <p>
                    Lorem ipsum, dolor sit amet
                </p> 
            </div>
            </div>
            </Col>
      </Row>



      <Row>
          <Col class="externo8">
            <div class="caja8">
                <p>
                    <BsMusicNote class={"icono8"} size={"60"} style={{textAlign:'center'}}></BsMusicNote>
                 </p>
            <div class="tema8">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    Música
                </h3>
            </div>
            <div class="textodescripcion8">
                <p>
                    Lorem ipsum, dolor sit amet
                </p> 
            </div>
            </div>
            </Col>
      </Row>




      <Row>
          <Col class="externo9">
            <div class="caja9">
                <p>
                    <BsAt class={"icono9"} size={"60"} style={{textAlign:'center'}}></BsAt>
                 </p>
            <div class="tema9">
                 <h3 style={{textAlign:'center', fontSize:"lg"}}>
                    Tecnología
                </h3>
            </div>
            <div class="textodescripcion9">
                <p>
                    Lorem ipsum, dolor sit amet
                </p> 
            </div>
            </div>
            </Col>
      </Row>
    </Container>
    )
    }