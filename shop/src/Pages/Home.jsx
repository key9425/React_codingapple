import bg from "../img/bg.png";

function Home({ shoes }) {
  return (
    <>
      <div className="main-bg" style={{ backgroundImage: "url(" + bg + ")" }}></div>
      {/* <img src={bg} alt="" className="main-bg"/> */}
      {/* <img src={process.env.PUBLIC_URL + '/이미지경로'} />  */}
      <div className="container">
        <div className="row">
          {shoes.map((item, i) => {
            return <Card key={i} item={item} i={i} />;
          })}
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} alt="" width="80%" />
      <h4>{props.item.title}</h4>
      <p>{props.item.price}</p>
    </div>
  );
}

export default Home;
