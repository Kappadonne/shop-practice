import classes from "./index.module.scss";
import { MongoClient } from "mongodb";
const Checks = (props) => {
  return (
    <div className={classes.checkContainer}>
      <h3>
        Here you can see all orders information that are stored in a database
      </h3>
      {props.messages.map((infoArray) => {
        return <p>{infoArray.message}</p>;
      })}
    </div>
  );
};
export default Checks;

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Maxmezwin:lIMYGIpwsYu4NBqN@cluster0.e1voexa.mongodb.net/shop?retryWrites=true&w=majority"
  );
  const db = client.db();

  const orderCollection = db.collection("orders");

  const oders = await orderCollection.find().toArray();

  client.close();
  return {
    props: {
      messages: JSON.parse(JSON.stringify(oders)),
    },
    revalidate: 1,
  };
}
