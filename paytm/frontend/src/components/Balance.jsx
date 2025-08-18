import { useEffect, useState } from "react";
import axios from "axios";

export const Balance = () => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        });
        setValue(res.data.balance); // make sure backend sends `balance`
      } catch (err) {
        console.error("Error fetching balance:", err);
      }
    };

  
    if(localStorage.getItem("token")){
      setValue("0")
    }

    fetchBalance();
  }, []);
  
  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">
        {value !== null ? `Rs ${Number(value).toFixed(2)}` : "Loading..."}
      </div>
    </div>
  );
};