import apiClient from "../apiClient/apiClient";
export async function getUser(token) {
    try {
        const response = await apiClient.get(`/api/me`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = '/signIn';
        } else if (error.response && error.response.data.error === "No users found") {
            window.location.href = '/signUp';
        } else {
            console.error(error);
            throw error;
        }
    }
}