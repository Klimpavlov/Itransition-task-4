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
        console.error(error);
        throw error;
    }
}
