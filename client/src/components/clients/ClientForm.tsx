import { useEffect, useState } from "react";
import { mutation, query } from "../../utils/useFetch";
import { useNavigate } from "react-router-dom";

type FormInputs = {
  name: string;
  email: string;
  mobile: string;
  link: string;
  cycle: string;
  status: string;
};
const UserForm = ({ clientId }: { clientId: string | null }) => {
  const navigate = useNavigate();
  const [clientForm, setClientForm] = useState<FormInputs>({
    name: "",
    email: "",
    mobile: "",
    link: "",
    cycle: "",
    status: "",
  });

  useEffect(() => {
    if (clientId) {
      query<{ data: FormInputs }>("/client/" + clientId)
        .then(({ data }) => setClientForm((pre) => ({ ...pre, ...data })))
        .catch(() => navigate(-1));
    }
  }, [clientId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    console.log("e.target", e.target.name, e.target.value);
    setClientForm({ ...clientForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(clientForm);
    await mutation<{ message: string }>({
      method: clientId ? "put" : "post",
      key: clientId ? `/client/${clientId}` : "client/create",
      data: clientForm,
    }).then((data) => {
      alert(data.message);
      navigate(-1);
    });
  };

  console.log("clientForm", clientForm);

  return (
    <form className="mb-4" onSubmit={handleSubmit}>
      <div className="mb-4 md:w-full">
        <label htmlFor="email" className="block text-xs mb-1">
          Full Name
        </label>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          type="text"
          name="name"
          id="full_name"
          placeholder="Full Name"
          value={clientForm.name}
          onChange={handleChange} // remove the
        />
      </div>

      <div className="mb-4 md:w-full">
        <label htmlFor="email" className="block text-xs mb-1">
          Email
        </label>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={clientForm.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4 md:w-full">
        <label htmlFor="email" className="block text-xs mb-1">
          Mobile
        </label>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          type="tel"
          name="mobile"
          id="mobile"
          placeholder="Mobile"
          value={clientForm.mobile}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4 md:w-full">
        <label htmlFor="google_link" className="block text-xs mb-1">
          Google Review Link
        </label>
        <input
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          type="text"
          name="link"
          id="google_link"
          placeholder="Google Review Link"
          value={clientForm.link}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4 md:w-full">
        <label htmlFor="cycle" className="block text-xs mb-1">
          Payment Cycle
        </label>
        <select
          id="cycle"
          name="cycle"
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          value={clientForm.cycle}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="month">Month</option>
          <option value="quarter">Quarter</option>
          <option value="half">Half Year</option>
          <option value="full">Full Year</option>
        </select>
      </div>

      <div className="mb-4 md:w-full">
        <label htmlFor="status" className="block text-xs mb-1">
          Status
        </label>
        <select
          id="status"
          name="status"
          className="w-full border rounded p-2 outline-none focus:shadow-outline"
          value={clientForm.status}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <button
        className="bg-green-500 mt-5 w-full hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
        type="submit"
      >
        Save
      </button>
      <button
        className="bg-red-500 w-full mt-2 hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
        onClick={() => navigate(-1)}
        type="button"
      >
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
