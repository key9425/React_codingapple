import "./App.css";

function App() {
  let post = "강남 우동 맛집";

  return (
    // JSX 문법 1. class 넣을 땐 -> className
    // JSX 문법 2. 변수 넣을 땐 (데이터바인딩) -> {변수명}
    // JSX 문법 3. style 넣을 땐 -> style={{이름:'값'}}
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "red", fontSize: "16px" }}>개발 블로그</h4>
      </div>
      <h4 className={post}>{post}</h4>
    </div>
  );
}

export default App;
