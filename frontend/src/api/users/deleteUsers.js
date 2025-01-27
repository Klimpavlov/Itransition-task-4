import axios from 'axios';

const deleteUsers = async (userIds, reloadPage) => {
    console.log(userIds)
    try {
        await axios.delete("/api/users", {
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