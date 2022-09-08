import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-368bd-default-rtdb.firebaseio.com";

const storeExpense = async (expenseData) => {
  const response = await axios.post(
    BACKEND_URL + "/expenses.json",
    expenseData
  );
  const id = response.data.name;
  return id;
};

const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + "/expenses.json");
  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }

  return expenses;
};

const updateExpense = (id, expenseData) => {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

const deleteExpense = (id) => {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`);
};

module.exports = {
  storeExpense,
  fetchExpenses,
  updateExpense,
  deleteExpense,
};
