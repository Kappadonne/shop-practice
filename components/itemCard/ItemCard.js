import Image from "next/image";
import classes from "./ItemCard.module.scss";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/checkoutSlice";
import { deleteItem } from "../../store/checkoutSlice";

const ItemCard = (props) => {
  const router = useRouter();
  const itemPage = () => {
    router.push(`/shop/${props.id}`);
  };
  const dispatch = useDispatch();
  const choosenItems = useSelector((state) => state.checkout.items);

  const id = props.id;
  const img = props.img;
  const title = props.title;
  const discount = props.discount;
  const price = props.price;
  const onDetails = props.onDetailsPage;

  const itemExists = choosenItems.filter((item) => item.id === id);
  const firstPrice = itemExists.map((data) => data.firstPrice);
  const totalQuantity = itemExists.map((data) => data.totalQuantity);

  const kek = itemExists.map((item) => item.totalQuantity);

  const add = () => {
    dispatch(
      addItem({
        img: img,
        title: title,
        discount: discount,
        price: price,
        onDetails: onDetails,
        id: id,
        totalQuantity: 1,
        firstPrice: price,
      })
    );
  };

  const deleteOne = () => {
    dispatch(
      deleteItem({
        img: img,
        titile: title,
        discount: discount,
        price: price,
        id: id,
        totalQuantity: totalQuantity,
        onDetails: onDetails,
        firstPrice: firstPrice,
      })
    );
  };

  return (
    <div className={classes.container}>
      <div>
        <Image src={img} width={250} height={250} alt="sneakers image"></Image>
        <p className={classes.title}>{title}</p>
        {discount ? <p className={classes.discount}>DISCOUNT!</p> : null}
      </div>
      <div className={classes.priceContainer}>
        <p className={classes.price}>{price}$</p>
        {itemExists.length >= 1 && <p>currently in cart: {kek}</p>}
      </div>
      <div className={classes.options}>
        <button onClick={add} className={classes.button}>
          Add to cart
        </button>

        {itemExists.length >= 1 && (
          <button onClick={deleteOne} className={classes.button}>
            Delete 1
          </button>
        )}
        {onDetails ? null : (
          <button href="/" className={classes.button} onClick={itemPage}>
            Item page
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
