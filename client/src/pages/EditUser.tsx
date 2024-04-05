// import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import ClientForm from "../components/clients/ClientForm";

const EditUser = () => {
  const { client_id } = useParams();

  return (
    <section className=" bg-gray-200 text-gray-900 font-sans">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-xl md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Edit Client
          </span>

          <ClientForm clientId={client_id || ""} />
        </div>
      </div>
    </section>
  );
};

export default EditUser;
