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
    const status = parseInt(response.data.status);
    let pair = { [status]: status };
    response.data = { ...response.data, ...pair };
    if (response.data.message) toast.success(response.data.message);
    return response.data || "Something went wrong";
  } catch (error) {
    if (error.response.data.save) {
      for (const key in error.response.data.save) {
        localStorage.setItem(key, error.response.data.save[key]);
      }
    }

    const status = parseInt(error.response.status);
    let pair = { [status]: status };
    error.response.data = { ...error.response.data, ...pair };

    if (error.response.data.message) toast.error(error.response.data.message);
    return error.response.data || "Something went wrong";
  }
}
