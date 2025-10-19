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

  const handleMakeAdmin=()=>{
    console.log("handleMakeAdmin");
    
  }

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
              <th>Is Admin</th>
              <th>Delete User</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-base-300">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role === "admin" ? "Admin" : "Normal User"}</td>
                <td>
                  <button className="btn btn-sm btn-error btn-outline ">
                    Delete User
                  </button>
                </td>
                <td>
                  <button onClick={handleMakeAdmin} className="btn btn-primary btn-sm btn-outline">
                    Make Admin
                  </button>
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
