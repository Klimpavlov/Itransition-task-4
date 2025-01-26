import axios from "axios";
export async function getAllUsers(token) {
    try {
        const response = await axios.get('/api/users', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            window.location.href = '/signIn';
        } else {
            console.error(error);
            throw error;
        }
    }
}