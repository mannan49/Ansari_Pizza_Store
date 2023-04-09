import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { useContext } from "react";
import { CartContext } from "../CartContext";
function Navigation() {

  const {cart} = useContext(CartContext)

  return (
    <>
      <nav className="container sticky mt-3 md:mt-0 mx-auto flex items-center justify-between">
        <Link to="/">
          <img style={{height: 80}} src={logo} alt="" />
        </Link>
        <ul className="flex items-center gap-10">
          <li>
            <Link to="/" className="font-bold text-lg">Home</Link>
          </li>
          <li>
            <Link to="/products" className="font-bold text-lg">Products</Link>
          </li>
          <li>
            <Link to="/cart">
                <div className="flex items-center px-2 py-2  bg-yellow-500" style={{borderRadius: 15}}>
                    <span style={{fontSize: 16}}>{ cart.totalItems ? cart.totalItems : 0 }</span>
                    <img className="mr-2" src={cartIcon} alt="" srcset="" />
                </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navigation;
