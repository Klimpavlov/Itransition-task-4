import axios from "axios";

const postSignUp = async (name, email, password, successRedirect, setError) => {
    console.log(name, email, password)
    try {
        await axios.post("/api/register", {
            name: name,
            email: email,
            password: password
        }).then(function (response) {
            console.log(response)
            successRedirect();
        })
    }
    catch (error) {
        console.log(error);
        console.log(error.response.data.error);
        const errorMessage = error.response?.data?.error || "Something went wrong!";
        setError(errorMessage);
    }

}

export default postSignUp