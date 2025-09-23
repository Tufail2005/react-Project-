import { useEffect, useState } from "react";
import jack from "./assets/jack.png";
import axios from "axios";

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);


  const fetchUser = async()=>{
    setLoading(true);
    try {
      const res = await axios.get(`https://randomuser.me/api/?page=${page}&results=5`);
      setUser(prev => [...prev, ...res.data.results]);
    } catch (error) {
      console.log("Error fetching Users is : ", error);
    }
    setLoading(false)
  }


  useEffect( ()=>{
    fetchUser();
  }, [page])

  return (
<div>
 <h1>Random Users</h1>

    <div className="sub-main">
        {user.map((u,index)=>(
        
            <div className="user">
              <img src={u.picture.thumbnail} alt="" />
              <h3>{u.name.first} <span> {u.name.last}</span></h3>
          
          </div>
        )
         )}

  </div>         
 

    {loading ? (
      <p>Loading...</p>
    ) : (
        <button className="btn" onClick={() => setPage(p => p + 1)}>Load More</button>
      )}



</div>      
  );
}

export default App;
