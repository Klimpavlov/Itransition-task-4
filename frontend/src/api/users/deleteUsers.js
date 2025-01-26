import axios from "axios";

const deleteUsers = async (userIds) => {
    console.log(userIds)
    try {
        await axios.delete("/api/users", {
            userIds: userIds
        }).then(function (response) {
            console.log(response)
        })
    }
    catch (error) {
        console.log(error);
    }

}

export default deleteUsers