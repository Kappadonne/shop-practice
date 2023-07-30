import AddItemForm from "../../components/AddItemToShop/AddItemForm";

const AddItem = () => {
  const addItemHandler = async (enteredItemData) => {
    const response = await fetch("./api/addItem", {
      method: "POST",
      body: JSON.stringify(enteredItemData),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
  };
  return <AddItemForm onAddItem={addItemHandler}></AddItemForm>;
};
export default AddItem;
