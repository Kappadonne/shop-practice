import ItemCard from "../../components/itemCard/ItemCard";
import classes from "./index.module.scss";
import { MongoClient } from "mongodb";
import { getData } from "../../store/itemsSlice";
import { useDispatch } from "react-redux";

const Shop = (props) => {
  const dispatch = useDispatch();
  const allItems = props.items.map((item) => item);

  dispatch(getData(allItems));

  return (
    <div className={classes.container}>
      {props.items.map((item) => (
        <ItemCard
          key={item.id}
          id={item.id}
          img={item.image}
          title={item.title}
          price={item.price}
          discount={item.discount}
        ></ItemCard>
      ))}
    </div>
  );
};
export default Shop;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Maxmezwin:lIMYGIpwsYu4NBqN@cluster0.e1voexa.mongodb.net/shop?retryWrites=true&w=majority"
  );
  const db = client.db();

  const itemsCollection = db.collection("items");

  const items = await itemsCollection.find().toArray();

  client.close();
  return {
    props: {
      items: items.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        discount: meetup.discount,
        price: meetup.price,
        id: meetup.id,
      })),
    },
    revalidate: 1,
  };
}
