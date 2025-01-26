import axios from "axios";

const unBlockUser = async (userIds, token) => {
    console.log(userIds)
    const active = "active";
    console.log(active);
    try {
        await axios.put("/api/users/status", {
            userIds: userIds,
            status: active
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

export default unBlockUser