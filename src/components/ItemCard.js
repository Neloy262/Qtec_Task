import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function ItemCard(props) {
  const c = () => {
    console.log("clicked");
  };
  return (
    <div
      style={{ width: "250px", height: "150px"}}
      onClick={c}
    >
      {props.item.map((i) => {
        return (
          <Card>
            <CardContent>
              <img
                style={{
                  display: "block",
                  margin:"auto",
                  maxWidth: "230px",
                  maxHeight: "130px",
                  width: "auto",
                  height: "auto",
                }}
                src={i.src}
              />
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default ItemCard;
