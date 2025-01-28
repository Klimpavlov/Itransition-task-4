import apiClient from "../apiClient/apiClient";

const deleteUsers = async (userIds, reloadPage) => {
    console.log(userIds)
    try {
        await apiClient.delete("/api/users", {
            data: { userIds: userIds }
        }).then(function (response) {
            console.log(response);
            reloadPage();
        })
    }
    catch (error) {
        console.log(error);
    }

}

export default deleteUsers