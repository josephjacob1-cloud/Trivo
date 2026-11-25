export const logoutUser = () => {

    localStorage.removeItem("access_token");
    localStorage.removeItem("token_type");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("userID");
    localStorage.removeItem("token_type");
    // window.location.href = "/login";
    window.location.replace("/login");
};

export const loginUser=(data)=>{
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("role", data.role);
    localStorage.setItem("name", data.name);
    localStorage.setItem("userID", data.id);
    localStorage.setItem("token_type", data.token_type || "bearer");
}