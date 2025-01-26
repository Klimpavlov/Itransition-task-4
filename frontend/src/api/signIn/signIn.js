import axios from "axios";

const postSignIn = async (email, password) => {
    console.log(email, password)
    try {
        await axios.post("/api/login", {
            email: email,
            password: password
        }).then(function (response) {
            console.log(response)
            const token = response.data.token;
            localStorage.setItem('token', token);
            console.log(token)
        })
    }
    catch (error) {
        console.log(error);
    }

}

export default postSignIn