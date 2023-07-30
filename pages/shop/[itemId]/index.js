import { useRouter } from "next/router";
import classes from "./index.module.scss";
import ItemCard from "../../../components/itemCard/ItemCard";
import { useSelector } from "react-redux";
const DetailsPage = () => {
  const allItems = useSelector((state) => state.items.allAvailableItems);
  console.log(allItems);
  const router = useRouter();
  const itemId = Number(router.query.itemId);
  const choosenItem = allItems.find((item) => item.id === itemId);

  return (
    <div className={classes.container}>
      <ItemCard
        key={choosenItem.id}
        id={choosenItem.id}
        img={choosenItem.image}
        title={choosenItem.title}
        price={choosenItem.price}
        discount={choosenItem.discount}
        onDetailsPage={true}
      ></ItemCard>
    </div>
  );
};

export default DetailsPage;
