import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  let item = props.shoes.find(function (x) {
    return x.id == id;
  });
  // let item = props.shoes.find((x) => x.id == id);

  // Lifecycle - useEffect
  // html 렌더링 이후에 동작 -> 코드의 실행 시점을 조절
  // useEffect(() => {  }); // mount & update시 실행
  // useEffect(() => {  }, []); // mount에만 실행
  // useEffect(() => {  }, [실행조건 특정state]); // mount, 특정state 변경 실행
  // return ()=>{} // useEffect 동작 전, unmount 시에 실행, clean up function (-> 타이머제거, socket 연결요청제거, ajax요청 중단 등)
  let [show, setShow] = useState(true);
  useEffect(() => {
    console.log(1);
    let a = setTimeout(() => {setShow(false)}, 2000);
    return ()=>{
      console.log(0)
      clearTimeout(a)
    }
  }, []);

  let [num, setNum] = useState('');
  useEffect(()=>{
    if (isNaN(num) == true){
      alert('숫자만 입력해주세요요')
    }
  }, [num])


  return (
    <div className="container">
      <Box>
        <YellowBtn bg="blue">버튼</YellowBtn>
        <YellowBtn bg="orange">버튼</YellowBtn>
      </Box>
      
      {show ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null}
      <input onChange={(e) => {setNum(e.target.value)}} />

      <div className="row">
        <div className="col-md-6">
          <img src={"https://codingapple1.github.io/shop/shoes" + item.id + ".jpg"} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{item.title}</h4>
          <p>{item.content}</p>
          <p>{item.price}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
