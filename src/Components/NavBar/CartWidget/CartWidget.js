import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./CartWidget.scss";
import { NavLink } from "react-router-dom";

function CartWidget() {
  return (
    <div>
      <NavLink to={`/cart`}>
        <ShoppingCartIcon className="cart" />{" "}
      </NavLink>
    </div>
  );
}

export default CartWidget;
