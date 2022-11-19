import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.scss";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import { useContext } from "react";

function CartWidget() {
  const { cart } = useContext(CartContext);
  console.log(cart)

  return (
    <div>
      {cart.length !== 0 ? 
        <NavLink className="cart" to={`/cart`}>
          <ShoppingCartIcon />{" "}
        </NavLink>
        : null
      }
      
    </div>
  );
}

export default CartWidget;
