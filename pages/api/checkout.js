import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Maxmezwin:lIMYGIpwsYu4NBqN@cluster0.e1voexa.mongodb.net/shop?retryWrites=true&w=majority"
    );
    const db = client.db();

    const orderCollection = db.collection("orders");

    const result = await orderCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(200).json({ message: "item inserted" });
  }
}
