import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading/Loading";

const AllUsers = () => {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    setLoading(false);
  });

  const handleMakeAdmin = (user) => {
    const agree = window.confirm(`Are you sure ${user.name} Will be Admin?`);
    if (agree) {
      fetch(`http://localhost:5000/users/admin/${user._id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            alert("Successfully Admin Done!");
          }
        });
    }
  };

  const handleDeleteUser = (user) => {
    const agree = window.confirm(`Are you sure ${user.name} will Delete?`);
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Successfully Delete !");
          }
        });
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">All Users {users.length}</h1>
      <div className="overflow-x-auto shadow-lg mt-7">
        <table className="table">
          {/* head */}
          <thead className="bg-base-300">
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Delete User</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-base-300">
                <th>{i + 1} </th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-sm btn-error btn-outline "
                  >
                    Delete User
                  </button>
                </td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-primary btn-sm btn-outline"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
