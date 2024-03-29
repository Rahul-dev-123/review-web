import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const push = useNavigate();
  return (
    <div>
      <button onClick={() => push("/dashboard/create")}>Create Client</button>
    </div>
  );
};

export default Dashboard;
