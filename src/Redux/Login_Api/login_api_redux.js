import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleResponse, requestTimeout } from "../../Helpers";

const LOGIN_URI =
  "https://apiidentity-dev.azurewebsites.net/authentication/authenticate";
export async function loginUser(form_data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(form_data),
  };

  return requestTimeout(
    15000,
    fetch(LOGIN_URI, requestOptions)
      .then(handleResponse)
      .then((response) => {
        let data = JSON.parse(response);
        sessionStorage.setItem("token", data.Token);
        sessionStorage.setItem("expirationDate", data.ExpirationDate);
        return { token: data.Token, expire: data.ExpirationDate };
      })
  );
}
