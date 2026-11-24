import { apiRequest } from "./apiClient";
import { SIGNUP_URL, LOGIN_URL, USER_PROFILE, USER_PROFILE_UPDATE, USER_PASSWORD_UPDATE } from "./api";

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

export async function userLogin(params) {
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
export async function getUserProfile(id) {
    return apiRequest(`${USER_PROFILE}/${id}`)
}
export async function updateUserProfile(id, params) {
    return apiRequest(`${USER_PROFILE_UPDATE}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    })
}

export async function changeUserPassword(id, params) {
    return apiRequest(`${USER_PASSWORD_UPDATE}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    })
}