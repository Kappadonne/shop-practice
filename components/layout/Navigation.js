import Link from "next/link";
import classes from "./Navigation.module.scss";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const itemsInCheckout = useSelector((state) => state.checkout.itemQuantity);

  return (
    <header className={classes.header}>
      <nav className={classes.container}>
        <ul className={classes.navigation}>
          <div className={classes.navigationContainer}>
            <li>
              <Link className={classes.links} href="/">
                Info
              </Link>
            </li>
            <li>
              <Link className={classes.links} href="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className={classes.links} href="/addItem">
                Add Item
              </Link>
            </li>
            <li>
              <Link className={classes.links} href="/checks">
                Checks
              </Link>
            </li>
          </div>

          <div>
            <li className={classes.checkout}>
              <Link className={classes.links} href="/checkout">
                <span>Checkout</span>
                {itemsInCheckout === 0 ? null : (
                  <span className={classes.shopCart}>
                    <FontAwesomeIcon height={20} width={20} icon={faShop} />
                    <span className={classes.itemsAmount}>
                      {itemsInCheckout}
                    </span>
                  </span>
                )}
              </Link>
              <Link className={classes.links} href="/checkout"></Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};
export default Navigation;
