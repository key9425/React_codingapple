import "./App.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./img/bg.png";
import { useState } from "react";
import data from "./data.jsx";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 이미지 */}
      {/* src 폴더에 있는 이미지 - import 후 사용 */}
      <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>
      {/* <img src={bg} alt="" className="main-bg"/> */}
      {/* pubilc 폴더 (수정이 필요없는 static 파일 보관) - 이미지 import 없이 /이미지경로 사용 */}
      {/* <img src={process.env.PUBLIC_URL + '/이미지경로'} />  */}

      <div className="container">
        <div className="row">
          {
            shoes.map((shoes, i)=>{
              return (
                <Card shoes={shoes} i={i} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} alt="" width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
