/*
//random user axios ile çekip görsel tasarladım.
import React from "react"
import {useState,useEffect} from "react"
import axios from 'axios'
import SingleUser from "./SingleUser"

const UserList = () =>{
    const [users,setUsers] = useState([])

    const fetchUsers = async () => {
        const response = await axios.get("https://randomuser.me/api/?results=5")
        setUsers(response.data.results)
    }

    useEffect(() =>{
        fetchUsers()
    },[])
    
    return(
        <div className="user-list">
            <ul >
                {users.map((user)=>(
                    <li>
                        <SingleUser user={user} key={user.toString}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList
*/