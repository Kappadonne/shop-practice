import { useRef, useState } from "react";
import classes from "./AddItemForm.module.scss";

const AddItemForm = (props) => {
  const [showMessage, setShowMessage] = useState(false);
  const titleRef = useRef();
  const imgRef = useRef();
  const priceRef = useRef();
  const discountRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const priceString = priceRef.current.value;

    const title = titleRef.current.value;
    const image = imgRef.current.value;
    const discount = discountRef.current.checked;
    const price = Number(priceString);
    const id = Math.floor(Math.random() * 10000) + 1;

    const itemData = {
      title: title,
      image: image,
      discount: discount,
      price: price,
      id: id,
    };
    setShowMessage(true);
    props.onAddItem(itemData);

    titleRef.current.value = "";
    imgRef.current.value = "";
    priceRef.current.value = "";
    discountRef.current.checked = false;
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      {showMessage && <h3>Success! Add more items to the shop?</h3>}
      <div>
        <p>Title</p>
        <label htmlFor="title"></label>
        <input
          onChange={(e) => setShowMessage(false)}
          type="string"
          required
          id="title"
          ref={titleRef}
        ></input>
      </div>
      <div>
        <p>Image URL</p>
        <label htmlFor="image"></label>
        <input
          onChange={(e) => setShowMessage(false)}
          type="string"
          required
          id="image"
          ref={imgRef}
        ></input>
      </div>
      <div>
        <p>Price</p>
        <label htmlFor="price"></label>
        <input
          onChange={(e) => setShowMessage(false)}
          type="number"
          required
          id="price"
          ref={priceRef}
        ></input>
      </div>
      <div className={classes.discount}>
        <p>Discount</p>
        <label htmlFor="discount"></label>
        <input type="checkbox" id="discount" ref={discountRef}></input>
      </div>

      <button className={classes.button}>submit</button>
    </form>
  );
};
export default AddItemForm;
