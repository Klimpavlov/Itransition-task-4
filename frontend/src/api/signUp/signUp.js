import axios from "axios";

const postSignUp = async (name, email, password) => {
    console.log(name, email, password)
    try {
        await axios.post("/api/register", {
            name: name,
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

export default postSignUp