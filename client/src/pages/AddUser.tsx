import ClientForm from "../components/clients/ClientForm";

const AddUser = () => {
  // const handleSubmit = () => {};
  return (
    <section className=" bg-gray-200 text-gray-900 font-sans">
      <div className="flex items-center h-screen w-full">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-xl md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Add Client
          </span>

          <ClientForm clientId={null} />
        </div>
      </div>
    </section>
  );
};

export default AddUser;
