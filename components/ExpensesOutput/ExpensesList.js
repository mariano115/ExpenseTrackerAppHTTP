import { FlatList, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  return (
    <ExpenseItem
      id={itemData.item.id}
      description={itemData.item.description}
      amount={itemData.item.amount}
      date={itemData.item.date}
    />
  );
};

/* Exporting the component ExpensesList. */
export default ExpensesList = ({ expenses }) => {
  return (
    /* Rendering the data from the expenses array. */
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};
