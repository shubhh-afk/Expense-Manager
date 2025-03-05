import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center p-4">
      <h1 className="text-xl font-bold">Expense Manager</h1>
      <div className="space-x-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/create-expense" className="hover:underline">Create Expense</Link>
        <Link to="/manage-expenses" className="hover:underline">Manage Expenses</Link>
      </div>
    </nav>
  );
}
