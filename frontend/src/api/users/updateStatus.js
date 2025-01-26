import axios from "axios";

const updateStatus = async (userIds, status, token) => {
    console.log(userIds);
    console.log(status);
    try {
        await axios.put("/api/users/status", {
            userIds: userIds,
            status: status
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(function (response) {

            console.log(response)
        })
    } catch (error) {
        console.log(error);
    }

}

export default updateStatus