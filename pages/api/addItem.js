// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://Maxmezwin:lIMYGIpwsYu4NBqN@cluster0.e1voexa.mongodb.net/shop?retryWrites=true&w=majority"
    );
    const db = client.db();

    const itemsCollection = db.collection("items");

    const result = await itemsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(200).json({ message: "item inserted" });
  }
}
