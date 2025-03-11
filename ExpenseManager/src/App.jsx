import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import CreateExpense from "./Pages/Expense/CreateExpense";
import ManageExpenses from "./Pages/Expense/ManageExpenses";
import Layout from "./components/Layout";
import Profile from "./Pages/Profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/profile",
          element: <Profile/>,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/create-expense",
          element: <CreateExpense />,
        },
        {
          path: "/manage-expenses",
          element: <ManageExpenses />,
        },
      ],
    },
  ]);

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
