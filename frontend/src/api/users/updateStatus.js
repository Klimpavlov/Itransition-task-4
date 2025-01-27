import axios from "axios";

const updateStatus = async (userIds, status, token, reloadPage) => {
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

            console.log(response);
            reloadPage();
        })
    } catch (error) {
        console.log(error);
    }

}

export default updateStatus