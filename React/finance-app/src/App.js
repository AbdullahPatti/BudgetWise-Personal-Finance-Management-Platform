import React, { useState, useEffect } from "react";
import api from "./api";
import "./App.css";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
    is_income: false,
    date: "",
  });

  const fetchTransactions = async () => {
    try {
      const response = await api.get("/transactions/");
      setTransactions(response.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleInputChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/transactions/", {
        ...formData,
        amount: parseFloat(formData.amount),
      });
      fetchTransactions();
      setFormData({
        amount: "",
        category: "",
        description: "",
        is_income: false,
        date: "",
      });
    } catch (error) {
      console.error("Submit Error:", error);
    }
  };

  const totalIncome = transactions
    .filter((t) => t.is_income)
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => !t.is_income)
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="app-container">
      <header className="header">
        <h1>Finance Tracker</h1>
      </header>

      <section className="balance-section">
        <div className="balance-card">
          <h3>Total Balance</h3>
          <p className={`balance-amount ${balance >= 0 ? "positive" : "negative"}`}>
            ${balance.toFixed(2)}
          </p>
        </div>
        <div className="income-card">
          <h4>Income</h4>
          <p className="income-amount">${totalIncome.toFixed(2)}</p>
        </div>
        <div className="expense-card">
          <h4>Expense</h4>
          <p className="expense-amount">${totalExpense.toFixed(2)}</p>
        </div>
      </section>

      <section className="form-section">
        <h2>Add Transaction</h2>
        <form onSubmit={handleFormSubmit} className="transaction-form">
          <input
            name="amount"
            type="number"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />

          <input
            name="category"
            type="text"
            placeholder="Category"
            value={formData.category}
            onChange={handleInputChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleInputChange}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />

          <label className="checkbox-label">
            Income
            <input
              type="checkbox"
              name="is_income"
              checked={formData.is_income}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit" className="submit-btn">
            Add Transaction
          </button>
        </form>
      </section>

      <section className="table-section">
        <h2>Transactions</h2>
        {transactions.length === 0 ? (
          <p className="no-transactions">No transactions yet.</p>
        ) : (
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.category}</td>
                  <td>{t.description}</td>
                  <td className={t.is_income ? "income" : "expense"}>
                    ${t.amount.toFixed(2)}
                  </td>
                  <td>{t.is_income ? "Income" : "Expense"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default App;
