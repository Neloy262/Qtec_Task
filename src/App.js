import React, { useState } from "react";
import Cart from "./components/Cart";
import "./styles/App.css";
import DisplayItems from "./components/DisplayItems";

const items = [
  {
    id: 1,
    name: "latop",
    src: "https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SL1500_.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 2,
    name: "oneplus",
    src: "https://static.toiimg.com/thumb/resizemode-4,msid-70656832,imgsize-200,width-640/70656832.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 3,
    name: "vivo",
    src: "https://i.gadgets360cdn.com/products/large/V19-Vivo-DB-841x800-1586163515.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 4,
    name: "z-flip",
    src: "https://gulfstores.com/1579-medium_default/sumsung-galaxy-z-flip.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 5,
    name: "blue shirt",
    src: "https://cdn.luxe.digital/media/2019/01/19135334/casual-dress-code-men-style-polo-ral-lauren-shirt-luxe-digital.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 6,
    name: "black shirt",
    src: "https://shop.tate.org.uk/dw/image/v2/BBPB_PRD/on/demandware.static/-/Sites-TateMasterShop/default/dwaa107262/tate-logo-black--tshirt-back-g1086.jpg?sw=556",
    price: 50000,
    count: 0,
  },
  {
    id: 7,
    name: "controller",
    src: "https://brain-images-ssl.cdn.dixons.com/9/2/10211929/u_10211929.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 8,
    name: "PS5",
    src: "https://cdn.vox-cdn.com/thumbor/avQXnY3_y3EE2SbGO_UwMnpZJyM=/0x0:2400x1566/1200x800/filters:focal(1008x591:1392x975)/cdn.vox-cdn.com/uploads/chorus_image/image/67708941/ps5_hardware_render.0.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 9,
    name: "mouse",
    src: "https://cdn.shopify.com/s/files/1/0024/9803/5810/products/417845-Product-0-I-637142542006328297_a24d56bf-7d0f-419e-9427-5df1b4fdbfd2_1080x.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 10,
    name: "keyboard",
    src: "https://m.media-amazon.com/images/I/71sXzUqI9XL._AC_SL1500_.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 12,
    name: "macbook",
    src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-gold-select-201810?wid=904&hei=840&fmt=jpeg&qlt=80&.v=1603332211000",
    price: 50000,
    count: 0,
  },
  {
    id: 13,
    name: "xbox",
    src: "https://m.media-amazon.com/images/I/714IbXR4HuL._SL1500_.jpg",
    price: 50000,
    count: 0,
  },
  {
    id: 14,
    name: "imac",
    src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-og-202008?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1594849639000",
    price: 50000,
    count: 0,
  },
  {
    id: 15,
    name: "ipad",
    src: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000",
    price: 50000,
    count: 0,
  },
];

function App() {
  const [Items, setItems] = useState(items);

  const onProductClicked = (id) => {
    let temp = Items.map((i) => i);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i].count += 1;
      }
    }
    setItems(temp);
  };

  const remove = (id) => {
    let temp = Items.map((i) => i);
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i].count = 0;
      }
    }
    setItems(temp);
  };

  return (
    <div className="container">
      <div>
        <DisplayItems item={Items} selected={onProductClicked} />
      </div>
      <div className="Cart">
        <Cart items={Items} remove={remove} />
      </div>
    </div>
  );
}

export default App;
