import axios from "axios";
import toast from "react-hot-toast";

export default async function fetchData({ method, url, token, body, params }) {
  try {
    const response = await axios({
      method: method,
      headers: {
        Authorization: token,
      },
      url: url,
      data: body,
      params: params,
    });

    if (response.data.save) {
      for (const key in response.data.save) {
        localStorage.setItem(key, response.data.save[key]);
      }
    }
    response.data.status = response.status;
    if (response.data.message) toast.success(response.data.message);
    return response.data || "Something went wrong";
  } catch (error) {
    console.log("error in fetch data", error);
    if (error.response.data.save) {
      for (const key in error.response.data.save) {
        localStorage.setItem(key, error.response.data.save[key]);
      }
    }
    error.response.data.status = error.response.status;
    if (error.response.data.message) toast.error(error.response.data.message);
    return error.response.data || "Something went wrong";
  }
}
