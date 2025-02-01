import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Cart() {
  // Redux store의 state 공유
  let state = useSelector((state) => {
    return state;
    // return state.cart;
  });
  console.log(state);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>안녕</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
