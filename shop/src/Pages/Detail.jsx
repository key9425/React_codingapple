import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import "../App.css";

let YellowBtn = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg == "blue" ? "white" : "black")};
  padding: 10px;
`;

let NewBtn = styled.button(YellowBtn);

let Box = styled.div`
  background: gray;
  padding: 20px;
`;

function Detail(props) {
  let { id } = useParams();
  let item = props.shoes.find((x) => x.id == id);
  let [탭, 탭변경] = useState(0);

  // Lifecycle - useEffect
  // html 렌더링 이후에 동작 -> 코드의 실행 시점을 조절
  // useEffect(() => {  }); // mount & update시 실행
  // useEffect(() => {  }, []); // mount에만 실행
  // useEffect(() => {  }, [실행조건 특정state]); // mount, 특정state 변경 실행
  // return ()=>{} // useEffect 동작 전, unmount 시에 실행, clean up function (-> 타이머제거, socket 연결요청제거, ajax요청 중단 등)
  let [show, setShow] = useState(true);
  let [fade2, setFade2] = useState("");
  useEffect(() => {
    console.log(1);
    let a = setTimeout(() => {
      setShow(false);
    }, 2000);
    setFade2("end2"); // 컴포넌트 로드시
    return () => {
      console.log(0);
      clearTimeout(a);
      setFade2(""); //컴포넌트 삭제시
    };
  }, []);

  let [num, setNum] = useState("");
  useEffect(() => {
    if (isNaN(num) == true) {
      alert("숫자만 입력해주세요요");
    }
  }, [num]);

  return (
    <div className={`container start2 ${fade2}`}>
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
      </Box>

      {show ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      />

      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + (item.id + 1) + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              탭변경(2);
            }}
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭} />
    </div>
  );
}

function TabContent(props) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 10);
    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [props.탭]);
  // if (props.탭 == 0) {
  //   return <div>내용0</div>;
  // } else if (props.탭 == 1) {
  //   return <div>내용1</div>;
  // } else if (props.탭 == 2) {
  //   return <div>내용2</div>;
  // }
  return <div className={`start ${fade}`}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][props.탭]}</div>;
}

export default Detail;
