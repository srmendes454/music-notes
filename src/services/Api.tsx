import axios from "axios";
import { toast } from "react-toastify";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BFF_URL,
  timeout: 2000000,
  headers: {
    "X-Custom-Header": "foobar",
    Authorization: localStorage.getItem("token" || ""),
  },
});

const send = (type: any, url: any, data: any) => {
  Axios.defaults.headers.Authorization = localStorage.getItem("token");

  return new Promise(function (resolve) {
    if (type === "POST") {
      Axios.post(url, data)
        .then((response) => {
          if (response) resolve(response.data);
          else
            toast.error("Erro interno, contate o administrador.", {
              position: "bottom-center",
              autoClose: 5000,
              theme: "dark",
            });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "bottom-center",
            autoClose: 5000,
            theme: "dark",
          });
        });
    }

    if (type === "GET") {
      Axios.get(url, data)
        .then((response) => {
          if (response) resolve(response.data);
          else
            toast.error("Erro interno, contate o administrador.", {
              position: "bottom-center",
              autoClose: 5000,
              theme: "dark",
            });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "bottom-center",
            autoClose: 5000,
            theme: "dark",
          });
        });
    }

    if (type === "PATCH") {
      Axios.patch(url, data)
        .then((response) => {
          if (response) resolve(response.data);
          else
            toast.error("Erro interno, contate o administrador.", {
              position: "bottom-center",
              autoClose: 5000,
              theme: "dark",
            });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "bottom-center",
            autoClose: 5000,
            theme: "dark",
          });
        });
    }

    if (type === "PUT") {
      Axios.put(url, data)
        .then((response) => {
          if (response) resolve(response.data);
          else
            toast.error("Erro interno, contate o administrador.", {
              position: "bottom-center",
              autoClose: 5000,
              theme: "dark",
            });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "bottom-center",
            autoClose: 5000,
            theme: "dark",
          });
        });
    }

    if (type === "DELETE") {
      Axios.delete(url, data)
        .then((response) => {
          if (response) resolve(response.data);
          else
            toast.error("Erro interno, contate o administrador.", {
              position: "bottom-center",
              autoClose: 5000,
              theme: "dark",
            });
        })
        .catch((error) => {
          toast.error(error.message, {
            position: "bottom-center",
            autoClose: 5000,
            theme: "dark",
          });
        });
    }
  });
};

export { Axios, send };
