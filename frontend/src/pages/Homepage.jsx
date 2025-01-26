
import EnhancedTable from "../components/table";
import {getAllUsers} from "../api/users/getAllUsers";
import {useEffect, useState} from "react";

const Homepage = () => {
    const [users, setUsers] = useState([]);

    async function getUsers() {
        // const accessToken =  Cookies.get('accessToken');
        const token = localStorage.getItem('token');
        const usersData = await getAllUsers(token);
        console.log(usersData)
        setUsers(usersData);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
            <div>
                <EnhancedTable users={users}/>
            </div>
    )
}

export {Homepage}