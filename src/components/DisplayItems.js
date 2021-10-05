import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "../styles/DisplayItems.css";
function DisplayItems(props) {
  const select = (item) => {
    props.selected(item.id);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <input className="searchInput" type="text" placeholder="Search.." />
      <div className="ItemCard">
        {props.item.map((i) => {
          return (
            <div key={i.id} onClick={select.bind(this, i)}>
              <Card>
                <CardContent>
                  <img
                    style={{
                      display: "block",
                      margin: "auto",
                      maxWidth: "230px",
                      maxHeight: "130px",
                      width: "auto",
                      height: "auto",
                    }}
                    src={i.src}
                    alt="Not found"
                  />
                  <div style={{ textAlign: "center", margin: "5px" }}>
                    {i.name}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DisplayItems;
