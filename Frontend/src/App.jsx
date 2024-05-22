import { useEffect, useState } from "react";
import "./App.css";
import MainContext from "./Context/Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ROUTES from "./Routes/Routes";
import axios from "axios";
function App() {
  const routes = createBrowserRouter(ROUTES);
  const [data, setData] = useState([]);
  const [input,setInput]=useState("")
  const [basketItems, setBasketItems] = useState(
    localStorage.getItem("basketItems")
      ? JSON.parse(localStorage.getItem("basketItems"))
      : []
  );
  const [wishlistItems, setWishlistItems] = useState(
    localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : []
  );
  useEffect(() => {
    axios.get("http://localhost:2000/courses").then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [basketItems, wishlistItems]);

  function addToBasket(item) {
    const target = basketItems.find((x) => x.item._id == item._id);
    if (target) {
      target.count += 1;
      target.totalPrice += item.price;
      setBasketItems([...basketItems]);
    } else {
      let newBasketItems = {
        item: item,
        count: 1,
        totalPrice: item.price,
      };
      setBasketItems([...basketItems, newBasketItems]);
    }
  }
  function deleteFromBasket(item) {
    const target = basketItems.find((x) => x.item._id == item._id);
    if (target.count > 1) {
      target.count -= 1;
      target.totalPrice -= item.price;
      setBasketItems([...basketItems]);
    } else {
      setBasketItems([...basketItems.filter((x) => x.item._id !== item._id)]);
    }
  }

  function addToWishlist(item) {
    const target = wishlistItems.find((x) => x.item._id == item._id);
    if (!target) {
      let newWishlistItem = {
        item: item,
      };
      setWishlistItems([...wishlistItems, newWishlistItem]);
    }
  }
  function deleteFromWishlist(item){
    const target = wishlistItems.find(x=>x.item._id==item._id)
    if(target){
      setWishlistItems([...wishlistItems.filter(x=>x.item._id !== item._id)])
    }
  }
  const contextData = {
    data,
    setData,
    basketItems,
    setBasketItems,
    wishlistItems,
    setWishlistItems,
    addToBasket,
    addToWishlist,
    deleteFromBasket,
    deleteFromWishlist,
    input,setInput
  };
  return (
    <>
      <MainContext.Provider value={contextData}>
        <RouterProvider router={routes} />
      </MainContext.Provider>
    </>
  );
}

export default App;
