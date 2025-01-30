import "./App.css";
import { useState } from "react";

function App() {
  // state 쓰는 이유?
  // 일반변수는 변경되면 html에 자동으로 반영안됨 - 바뀌지 않는 데이터
  // state는 변경되면 state와 관련된 html을 자동 재렌더링 - 변경될 것 같은 데이터
  // state 변경하는 법 -> state변경함수를 사용하여야 html 재렌더링 됨
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(["남자 코트 추천", "강남 우동 맛집", "파이썬 독학"]);
  let [좋아요, 좋아요변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false); // UI의 현재 상태
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  return (
    // JSX 문법 1. class 넣을 땐 -> className
    // JSX 문법 2. 변수 넣을 땐 (데이터바인딩) -> {변수명}
    // JSX 문법 3. style 넣을 땐 -> style={{이름:'값'}}
    // return () 안에는 병렬 태그 금지
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>개발 블로그</h4>
      </div>

      {/* array, object state 변경 */}
      <button
        onClick={()=>{
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          글제목변경(copy);
        }}>글수정</button>
      
      {/* array 정렬 */}
      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬</button>


      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{setModal(!modal); setTitle(i);}}>
                {a}
                <span onClick={(e)=>{
                  e.stopPropagation();
                  let copy = [...좋아요];
                  copy[i] += 1;
                  좋아요변경(copy);
                  }}>👍</span>
                {좋아요[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <h4 className={post}>{post}</h4>

      {/* 입력 */}
      {/* 태그: input, select, textarea */}
      {/* type: text, range, checkbox, date, number */}
      {/* 이벤트핸들러: onChange, onInput, onMouseOver, onScroll, ...등 */}
      {/* 이벤트객체e - e.target, e.preventDefault(), e.stopPropagation() */}
      <input onChange={(e)=>{
        입력값변경(e.target.value);
      }} />
      <button onClick={()=>{
        let copy = [...글제목];
        copy.unshift(입력값);
        글제목변경(copy)
      }}>등록</button>


      {
        // 조건식 ? 참일때실행할코드 : 거짓일때실행할코드
        modal == true ? <Modal 글제목={글제목} color="skyblue" title={title}/> : null
      }
    </div>
  );
}

// Component 문법1
function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}
// Component 문법2
// const Modal = () => {
//   return (
//     <div></div>
//   )
// }

export default App;
