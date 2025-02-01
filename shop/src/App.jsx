import "./App.css";
import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./Pages/Detail.jsx";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import data from "./data.jsx";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate(); // 페이지 이동을 도와주는 함수 (Link태그는 a태그 생성됨)

  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate("/");}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate("/detail");}}>Detail</Nav.Link>
            {/* <Link to="/detail">상세페이지</Link> */}
            {/* navigate(1) : 앞으로 한페이지, navigate(-1) : 뒤로 한페이지*/}
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
        <Route path="/about" element={<About />}>
          {/* 서브 경로 nested routes의 element 보여주는 곳은 <Outlet> */}
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        {/* 설정한 경로 외의 모든 경로, 404페이지 */}
        <Route path="*" element={<div>없는페이지</div>} />
      </Routes>
    </div>
  );
}

export default App;
