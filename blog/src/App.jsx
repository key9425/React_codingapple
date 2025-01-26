import "./App.css";
import { useState } from "react";

function App() {
  // state 쓰는 이유?
  // 일반변수는 변경되면 html에 자동으로 반영안됨 - 바뀌지 않는 데이터
  // state는 변경되면 state와 관련된 html을 자동 재렌더링 - 변경될 것 같은 데이터
  let post = "강남 우동 맛집";
  let [글제목, b] = useState("남자 코트 추천");

  return (
    // JSX 문법 1. class 넣을 땐 -> className
    // JSX 문법 2. 변수 넣을 땐 (데이터바인딩) -> {변수명}
    // JSX 문법 3. style 넣을 땐 -> style={{이름:'값'}}
    // return () 안에는 병렬 태그 금지
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>개발 블로그</h4>
      </div>

      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>

      <h4 className={post}>{post}</h4>
    </div>
  );
}

export default App;
