import axios from "axios";

export const AXIOS_BASE_CONFIG = {
  baseURL:
    import.meta.env.VITE_API_BASE_URL || "https://jsonplaceholder.typicode.com", // Fallback URL
  headers: { "Content-Type": "application/json" },
};

const createAxiosInstance = () => {
  const instance = axios.create(AXIOS_BASE_CONFIG);

  instance.interceptors.response.use(
    (response) => response,
    handleErrorResponse
  );

  return instance;
};

const handleErrorResponse = async (error) => {
  if (error?.response) {
    const { status, config } = error.response;

    if (status === 401 && !config.__isRetryRequest) {
      config.__isRetryRequest = true;
      return axios(config);
    } else {
      handleOtherErrors(error?.response);
    }
  } else if (error?.request) {
    handleNetworkError();
  } else {
    handleRequestSetupError();
  }

  return Promise.reject(error);
};

const handleOtherErrors = (response) => {
  console.error("Other Error:", response);
};

const handleNetworkError = () => {
  console.error("Network Error:");
};

const handleRequestSetupError = () => {
  console.error("Error in setting up the request");
};

const apiClient = createAxiosInstance();

export default apiClient;
