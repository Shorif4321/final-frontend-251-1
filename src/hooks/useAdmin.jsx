import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
            // setIsAdmin(true)
        });
    }
  }, [email]);
};

export default useAdmin;
