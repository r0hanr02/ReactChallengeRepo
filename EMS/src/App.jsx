/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Auth/Login";
import AdminDashBoard from "./components/dashBoard/AdminDashBoard";
import EmployeeDashboard from "./components/dashBoard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

function App() {
  const [user, setUser] = useState(null);
  const [LoggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setUser("employees");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employees", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashBoard changeUser={setUser} userData={userData}/>
      ) : (
        <EmployeeDashboard data={LoggedInUserData} changeUser={setUser} />
      )}
    </>
  );
}

export default App;
