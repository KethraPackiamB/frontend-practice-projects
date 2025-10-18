import { Row, Col } from "react-bootstrap";
import Wall2 from "../assets/wall2.jpg";
import Wall from "../assets/wall.jpg";
import Wall3 from "../assets/wall3.jpg";
import Wall5 from "../assets/wall5.jpg";
import forest2 from "../assets/forest2.jpg";
import forest3 from "../assets/forest3.jpg";
import marble2 from "../assets/marble2.jpg";
import paint from "../assets/paint.jpg";
import paint2 from "../assets/paint2.jpg";
import virtualPainting from "../assets/virtual painting.jpg";
import WallDecoration from "../assets/wall decoration.jpg"

export const GridImage = () => {
  return (
    <div className="container my-4">
      <Row className="mb-3">
        <Col md={3}><img src={Wall2} className="w-100"/></Col>
        <Col md={5}><img src={Wall3} className="w-100"/></Col>
        <Col md={4}><img src={Wall} className="w-100"/>
        <Row className="my-3"><Col><img src={paint2} className="w-100"/></Col></Row></Col> 
      </Row>

       <Row>
        <Col md={4}><img src={forest2} className="w-100"/></Col>
        <Col md={4}><img src={paint2} className="w-100"/><Row className="my-3"><Col><img src={forest3} className="w-100"/></Col><Col><img src={Wall3} className="w-100"/></Col></Row></Col>
        <Col md={4}><img src={virtualPainting} className="w-100" style={{height:"340px"}}/></Col> 
      </Row>
      
     <Row className="mb-3">
      <Col md={4}><img src={marble2} className="w-100"/></Col>
      <Col md={8}><img src={Wall5} className="w-100" style={{height:"330px"}}/></Col>
     </Row>

     <Row className="">
      <Col md={9}><img src={paint} className="w-100"/><Row>
        <Col md={3}><img src={Wall3} className="w-100 my-2" style={{height:"172px"}}/></Col>
        <Col md={3}><img src={WallDecoration} className="w-100 my-2" style={{height:"172px"}}/></Col>
        <Col md={3}><img src={forest2} className="w-100 my-2" style={{height:"172px"}}/></Col>
        <Col md={3}><img src={Wall} className="w-100 my-2" style={{height:"172px"}}/></Col>
      </Row></Col>
      <Col md={3}><img src={Wall2} className="w-100" style={{height:"500px"}}/></Col>
     </Row>
     
     <Row>
      <Col md={3}><img src={forest3} className="w-100"/></Col>
      <Col md={9}><img src={paint2} className="w-100"/></Col>
     </Row>
    </div>
  );
};
