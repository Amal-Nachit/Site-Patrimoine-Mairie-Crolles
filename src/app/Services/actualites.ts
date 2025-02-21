import axios from "axios";

export async function getAllActualites() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}api/patrimoine/actualites`;
  console.log("URL:",url);
  return axios.get(url, axiosConfig).then((res) => {
    return res;
  });
}

export async function getActualiteById(id: string) {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };
  let url = `${process.env.NEXT_PUBLIC_API_URL}api/patrimoine/actualite/${id}`;

  return axios.get(url, axiosConfig).then((res) => {
    return res.data;
  });
}
