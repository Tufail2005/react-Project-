import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import {Button} from "../components/Button";
import axios from "axios"
import {jwtDecode} from "jwt-decode"

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");
    const token = localStorage.getItem("token");
    let currentUserId = null;
    
    if (token) {
      const decoded = jwtDecode(token);
      currentUserId = decoded.userId;
    }

    useEffect(() => {
        axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter )
            .then(response => {              
        const filteredUsers = response.data.user.filter(
          u => u._id !== currentUserId // 👈 filter by id
        );
        setUsers(filteredUsers);
      });
  }, [filter, currentUserId]);

    return <>
        <div className="font-bold mt-6 text-lg">
            Users
        </div>
        <div className="my-2">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="w-full px-2 py-1 border rounded border-slate-200"></input>
        </div>
        <div>
            {users.map(u =><User key={u._id} user={u} />)} 
        </div>
    </>
}

 function User({user}) {
    const navigate = useNavigate();

    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0]}
                </div>
            </div>
            <div className="flex flex-col justify-center h-ful">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>
        </div>

        <div className="flex flex-col justify-center h-ful">
            <Button onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }} label={"Send Money"} />
        </div>
    </div>
}
 
