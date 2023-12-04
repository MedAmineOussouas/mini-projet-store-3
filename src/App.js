import "./App.css";
import Contact from "./react-router/Contact";
import Cart from "./react-router/Cart";
import NavBar from "./react-router/NavBar";
import { Routes, Route } from "react-router-dom";
import Store from "./react-router/Store";
import { CartProvider } from "./react-router/Context";
import ItemPage from "./react-router/ItemPage";
import Login from "./react-router/Login";

// in index define BrowserRouter
// then the navbar that contains links to your pages
// use routes to route your pages

export default function App() {
  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </CartProvider>
  );
}

// import Context from "./ContextExample/Context";
// import Todo from "./todo-fourth/Todo";
// import Contact from "./react-router/Contact";

// <div className="App">
//   {/* <Todo /> */}
//   {/* <Context /> */}
//   <Contact />
// </div>

// {
//   <BrowserRoute>
//   <NavBar />
//   <Routes>
//     <Route path="/" element={<Main />} />
//     <Route path="/contact" element={<Contact />} />
//     <Route path="/privacy" element={<Privacy />} />
//   </Routes>
// </BrowserRoute>
// }
