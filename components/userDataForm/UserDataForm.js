import classes from "./UserDataForm.module.scss";
import { orderItems } from "../../store/checkoutSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const UserDataForm = (props) => {
  const dispatch = useDispatch();
  const checkoutItems = useSelector((state) =>
    state.checkout.items.map((item) => item.title)
  );
  const itemQuantity = useSelector((state) => state.checkout.itemQuantity);
  const totalPrice = useSelector((state) => state.checkout.totalPrice);

  const [userName, setUserName] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const [nameError, setNameError] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const onlyLettersRegex = /^[A-Za-z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameInputHandler = (e) => {
    setUserName(e.target.value);
    setNameError(!onlyLettersRegex.test(e.target.value));
  };

  const surnameInputHandler = (e) => {
    setUserSurname(e.target.value);
    setSurnameError(!onlyLettersRegex.test(e.target.value));
  };

  const emailInputHandler = (e) => {
    setUserEmail(e.target.value);
    setEmailError(!emailRegex.test(e.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (nameError || surnameError || emailError) {
      return;
    }

    props.onOrder({
      message: `${userName} ${userSurname} ordered ${itemQuantity} items, total price is ${totalPrice}$. The items are ${checkoutItems}. Email to contact: ${userEmail}`,
    });

    setUserName("");
    setUserSurname("");
    setUserEmail("");

    dispatch(orderItems());
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <h3>Please, input your data here</h3>
      <div className={classes.formInputs}>
        <div>
          <p>Name</p>
          {nameError && <p>Имя введено неверно</p>}
          <label htmlFor="name"></label>
          <input
            onChange={nameInputHandler}
            value={userName}
            type="string"
            required
            id="name"
          ></input>
        </div>
        <div>
          <p>Surname</p>
          {surnameError && <p>Фамилия введена неверно</p>}
          <label htmlFor="surname"></label>
          <input
            value={userSurname}
            onChange={surnameInputHandler}
            type="string"
            required
            id="surname"
          ></input>
        </div>
        <div>
          <p>Email</p>
          {emailError && <p>Email введен неверно</p>}
          <label htmlFor="email"></label>
          <input
            value={userEmail}
            onChange={emailInputHandler}
            type="string"
            required
            id="email"
          ></input>
        </div>
      </div>
      <button className={classes.button}>Order!</button>
    </form>
  );
};

export default UserDataForm;
