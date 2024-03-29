import axios from "axios";

// console.log("import.meta.env.VITE_API_URL", import.meta.env.VITE_API_URL);
const fetchApi = axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

/**
 * Axios Interceptor
 */
fetchApi.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("A_T");

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

interface IUseQueryProps {
  key: string;
}

export const query = async ({ key }: IUseQueryProps) => {
  try {
    const result = await fetchApi.get(key);
    return result.data;
  } catch (error) {
    console.log("error", error);
  }
};

interface IUseMutationProps {
  key: string;
  method: "post" | "put" | "delete";
  data: unknown;
}

export const mutation = async <DATA>({
  method,
  key,
  data,
}: IUseMutationProps) => {
  try {
    const result = await fetchApi[method]<DATA>(key, data);
    // console.log("result", result);
    return result.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("error", error);
    alert(error?.response?.data.message || "");
  }
};
