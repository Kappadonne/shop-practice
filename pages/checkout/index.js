import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import classes from "./index.module.scss";
import { addItem, deleteItem } from "../../store/checkoutSlice";
import UserDataForm from "../../components/userDataForm/UserDataForm";

const Checkout = () => {
  const choosenItems = useSelector((state) => state.checkout.items);
  const totalPrice = useSelector((state) => state.checkout.totalPrice);
  const itemsInCheckout = useSelector((state) => state.checkout.itemQuantity);
  const dispatch = useDispatch();

  const addOrderHandler = async (enteredOrderData) => {
    const response = await fetch("./api/checkout", {
      method: "POST",
      body: JSON.stringify(enteredOrderData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
  };

  return (
    <div className={classes.container}>
      {itemsInCheckout === 0 ? (
        <h4 className={classes.orderTitle}>Choose items in the Shop first</h4>
      ) : (
        <h4 className={classes.orderTitle}>Here is your final order:</h4>
      )}

      <ul>
        {choosenItems.map((item) => (
          <li className={classes.order} key={item.id}>
            <div className={classes.orderName}>
              <h2>{item.title}</h2>
              <div className={classes.imageContainer}>
                <Image
                  className={classes.image}
                  width={100}
                  height={100}
                  src={item.img}
                  alt="sneakers image"
                ></Image>
              </div>
            </div>
            <div className={classes.orderDetails}>
              <p>price: {item.price}$</p>
              <p>quantity: {item.totalQuantity}</p>
              <div className={classes.buttonActions}>
                <button
                  onClick={() => {
                    dispatch(
                      addItem({
                        img: item.img,
                        titile: item.title,
                        discount: item.discount,
                        price: item.price,
                        id: item.id,
                        totalQuantity: item.totalQuantity,
                        onDetails: item.onDetails,
                        firstPrice: item.firstPrice,
                      })
                    );
                  }}
                  className={classes.button}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    dispatch(
                      deleteItem({
                        img: item.img,
                        titile: item.title,
                        discount: item.discount,
                        price: item.price,
                        id: item.id,
                        totalQuantity: item.totalQuantity,
                        onDetails: item.onDetails,
                        firstPrice: item.firstPrice,
                      })
                    );
                  }}
                  className={classes.button}
                >
                  -
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.orderOptions}>
        <h3>Your total price is: {totalPrice}$</h3>
      </div>
      {itemsInCheckout === 0 ? null : (
        <UserDataForm onOrder={addOrderHandler}></UserDataForm>
      )}
    </div>
  );
};
export default Checkout;
