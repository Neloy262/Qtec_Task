import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";
import PersonIcon from "@mui/icons-material/Person";
import "../styles/Cart.css";

function Cart(props) {
  return (
    <div style={{ height: "100%", position: "relative" }}>
      <div style={{ margin: "20px" }}>
        <div style={{ display: "inline-block" }}>
          <PersonIcon fontSize="medium" style={{ color: "#8F00FF" }} />
        </div>
        <div className="CartHeader">Add Customer</div>
        <hr />
      </div>

      {props.items.map((i) => {
        if (i.count > 0) {
          return (
            <Card style={{ margin: "10px" }}>
              <CardContent>
                <div className="Item" key={i.id}>
                  <div
                    style={{
                      width: "fit-content",
                      alignItems: "center",
                    }}
                  >
                    <div className="imageContainer">
                      <img
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                        }}
                        src={i.src}
                        alt="Not found"
                      />
                    </div>
                    <div className="ItemCount">{i.count}</div>
                  </div>
                  <div style={{ width: "fit-content" }}>{i.name}</div>
                  <div>BDT{i.price * i.count}</div>
                  <div>
                    <IconButton
                      aria-label="delete"
                      onClick={props.remove.bind(this, i.id)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        }
      })}
      <div className="CartFooter">
        <div style={{ marginLeft: "5px" }}>
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>Discount</li>
            <li>Subtotal</li>
            <li>Tax (0%)</li>
            <li>Total</li>
          </ul>
        </div>
        <div className="info">
          <ul style={{ listStyleType: "none", padding: "0px" }}>
            <li>BDT 0.00</li>
            <li>BDT {props.total}</li>
            <li>BDT 0</li>
            <li>BDT {props.total}</li>
          </ul>
        </div>
        <div className="pay">
          <button className="paybtn" type="button">
            <div className="buttonText">
              <div style={{ textAlign: "start" }}>
                <h3 style={{ color: "white" }}>PAY</h3>
              </div>{" "}
              <div style={{ textAlign: "end" }}>
                <h3 style={{ color: "white" }}>BDT {props.total}</h3>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
