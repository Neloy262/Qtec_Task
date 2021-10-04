import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import IconButton from "@mui/material/IconButton";

import "../styles/Cart.css";

function Cart(props) {
  return (
    <div style={{ height: "100%" }}>
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
                    <div
                      style={{
                        width: "fit-content",
                        border: "1px",
                        borderRadius: "5px",
                        borderStyle: "outset",
                        backgroundColor: "white",
                      }}
                    >
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
                    <div
                      style={{
                        border: "1px",
                        position: "relative",
                        bottom: "57px",
                        left: "35px",
                        borderStyle: "solid",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        textAlign: "center",
                        backgroundColor: "#03fca9",
                      }}
                    >
                      {i.count}
                    </div>
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
        return;
      })}
    </div>
  );
}

export default Cart;
