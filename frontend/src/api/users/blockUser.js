import axios from "axios";

const blockUser = async (userIds, token) => {
    console.log(userIds)
    const blocked = "blocked";
    console.log(blocked);
    try {
        await axios.put("/api/users/status", {
            userIds: userIds,
            status: blocked
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

export default blockUser