import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Student.scss"
const Student = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8000/users");
    setUser(result.data.reverse());
  };
  const deleteUser = async id => {
    await axios.delete(`http://localhost:8000/users/${id}`);
    loadUsers();
  };

  return (
    <>
    <Header/>
    <div className="container">
      <div className="py-4">
        <h1>User</h1>
        <Link className="btn btn-outline-primary bn-on"to={"/student/add"}>Add user</Link>
        <table class="table border shadow">
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                <Link class="btn btn-primary mr-2 bn-tw" to={`/student/${user.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/student/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                <button className="btn btn-danger bn-th" onClick={()=>deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};
export default Student;
