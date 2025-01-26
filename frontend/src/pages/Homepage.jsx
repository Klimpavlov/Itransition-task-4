
import EnhancedTable from "../components/table";
import {getAllUsers} from "../api/users/getAllUsers";
import {useEffect, useState} from "react";
import ButtonUnblock from "../components/unblockButton";
import ButtonBlock from "../components/blockButton";
import blockUser from "../api/users/blockUser";
import unBlockUser from "../api/users/unblockUser";

const Homepage = () => {

    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([]);
    // const [userIds, setUserIds] = useState([]);


    async function getUsers() {
        // const accessToken =  Cookies.get('accessToken');
        const usersData = await getAllUsers(token);
        console.log(usersData)
        setUsers(usersData);
    }

    useEffect(() => {
        getUsers();
    }, []);

    async function updateStatusBlock() {
        await blockUser([7], token)
    }

    async function updateStatusUnblock() {
        await unBlockUser([7], token)
    }

    return (
            <div>
                <div className="flex ml-4 my-4">
                    <div className="px-2">
                        <ButtonBlock text="Block" onClick={updateStatusBlock}/>
                    </div>
                    <div className="px-2">
                        <ButtonUnblock text="Unblock" onClick={updateStatusUnblock}/>
                    </div>
                </div>
                <EnhancedTable users={users}/>
            </div>
    )
}

export {Homepage}