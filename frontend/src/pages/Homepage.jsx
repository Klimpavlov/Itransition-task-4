import EnhancedTable from "../components/table";
import {getAllUsers} from "../api/users/getAllUsers";
import {useEffect, useState} from "react";
import ButtonUnblock from "../components/unblockButton";
import ButtonBlock from "../components/blockButton";
import updateStatus from "../api/users/updateStatus";
import deleteUsers from "../api/users/deleteUsers";
import {useNavigate} from "react-router-dom";
import {getUser} from "../api/users/getCurrentUser";

const Homepage = () => {

    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [userIds, setUserIds] = useState([]);

    const [currentUserStatus, setCurrentUserStatus] = useState([]);

    const navigate = useNavigate();

    async function getUsers() {
        // const accessToken =  Cookies.get('accessToken');
        const usersData = await getAllUsers(token);
        console.log(usersData)
        setUsers(usersData);
        setIsLoading(false);

    }

    async function getCurrentUser() {
        const currentUserData = await getUser(token);
        console.log(currentUserData.status);
        setCurrentUserStatus(currentUserData.status);

    }

    useEffect(() => {
        getUsers();
        getCurrentUser();
    }, []);

    async function updateUserStatus(status) {
        if (currentUserStatus === "blocked") {
            alert("You are blocked");
            setTimeout(() => {
                navigate("/signUp")
            }, 2000)
        } else {
            await updateStatus(userIds, status, token, successReload);
            getUsers();
        }
    }

    async function handleDeleteUsers() {
        if (currentUserStatus === "blocked") {
            alert("You are blocked");
            setTimeout(() => {
                navigate("/signUp")
            }, 2000)
        } else {
            await deleteUsers(userIds, successReload);
            console.log(userIds);
            getUsers();
        }
    }

    const handleSelectedChange = (newSelected) => {
        setUserIds(newSelected);
    };

    const successReload = () => {
        window.location.reload();
    }

    return (
            <div>
                <div className="flex ml-4 my-4">
                    <div className="px-2">
                        <ButtonBlock text="Block" onClick={()=> updateUserStatus("blocked")}/>
                    </div>
                    <div className="px-2">
                        <ButtonUnblock text="Unblock" onClick={()=> updateUserStatus("active")}/>
                    </div>
                </div>
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    <EnhancedTable users={users}
                                   onSelectedChange={handleSelectedChange}
                                   onDelete={handleDeleteUsers}/>
                )}
            </div>
    )
}

export {Homepage}