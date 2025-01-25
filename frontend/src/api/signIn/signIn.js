import axios from "axios";

const postSignIn = async (email, password) => {
    console.log(email, password)
    try {
        await axios.post("/api/login", {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response)
        })
    }
    catch (error) {
        console.log(error);
    }

}

export default postSignIn