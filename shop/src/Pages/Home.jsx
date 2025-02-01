import axios from "axios";
import bg from "../img/bg.png";
import { useState } from "react";

function Home({ shoes, setShoes }) {
  let [id, setId] = useState(0);

  return (
    <>
      <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>
      {/* <img src={bg} alt="" className="main-bg"/> */}
      {/* <img src={process.env.PUBLIC_URL + '/이미지경로'} />  */}
      <div className="container">
        <div className="row">
          {shoes.map((item, i) => {
            return <Card key={i} item={item} />;
          })}
        </div>
      </div>
      <button
        onClick={() => {
          if (id == 2) {
            alert("상품이 없습니다");
          } else {
            axios
              .get(`https://codingapple1.github.io/shop/data${id + 2}.json`)
              .then((response) => {
                console.log(response.data);
                console.log(shoes);
                let copy = [...shoes, ...response.data];
                setShoes(copy);
                setId(id + 1);
              })
              .catch(() => {
                console.log("실패함");
              });
            // axios.post("url", {key: "value"})
            // Promise.all([axios.get("url1"), axios.get("url2")]).then(()=>{}) // 동시 요청시
            // ajax 요청보다 html 렌더링이 빨라 state가 비어있는 경우 에러 발생 -> state 상태에 따른 if문 추가가
          }
        }}
      >
        더보기
      </button>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.item.id + 1) + ".jpg"} alt="" width="80%" />
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </div>
  );
}

export default Home;
