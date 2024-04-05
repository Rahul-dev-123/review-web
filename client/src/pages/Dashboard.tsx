import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientTable from "../components/clients/ClientTable";
import QRCodeModal from "../components/common/QRCodeModal";
import { handleQRModalPropsType } from "../types";

// import handleQ
const Dashboard = () => {
  const push = useNavigate();

  const [showQR, setShowQR] = useState(false);
  const [linkQR, setLinkQR] = useState("");

  const handleQRModal = ({ link, isOpen }: handleQRModalPropsType) => {
    setShowQR(isOpen);
    setLinkQR(link);
  };
  return (
    <div className="bg-gray-200 h-screen">
      <button onClick={() => push("/dashboard/create")}>Create Client</button>
      <ClientTable handleQRModal={handleQRModal} />
      {showQR && <QRCodeModal linkQR={linkQR} handleQRModal={handleQRModal} />}
    </div>
  );
};

export default Dashboard;
