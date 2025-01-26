import axios from "axios";

const postSignIn = async (email, password, successRedirect, setError) => {
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
            successRedirect();
        })
    }
    catch (error) {
        console.log(error.response.data.error);
        const errorMessage = error.response?.data?.error || "Something went wrong!";
        setError(errorMessage);
    }

}

export default postSignIn