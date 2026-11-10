import { apiRequest } from "./apiClient";
import { SIGNUP_URL, LOGIN_URL } from "./api";

export async function signUpUser(params) {
    console.log("I am signup user")
    return apiRequest(SIGNUP_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });
}

export async function userLogin(params){
     const formData = new URLSearchParams();

    formData.append("username", params.username);
    formData.append("password", params.password);



    return apiRequest(LOGIN_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
    });
}