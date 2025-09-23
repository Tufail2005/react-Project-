import React, { useState } from "react";
import axios from "axios";
import { InputBox } from "../components/inputBox/InputBox";
import { useNavigate } from "react-router-dom";
const InputForm = () => {
  const [petName, setPetName] = useState();
  const [petType, setPetType] = useState();
  const [breed, setBreed] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [phone, setPhone] = useState();

  const navigate = useNavigate();

  return (
    <div className="form-main">
      <div className="form">
        {/* petName */}
        <InputBox
          onChange={(e) => setPetName(e.target.value)}
          label={"Pet Name"}
          placeholder={"pet Name"}
          type={"text"}
        />

        {/* petType */}
        <InputBox
          onChange={(e) => setPetType(e.target.value)}
          label={"Pet Type"}
          placeholder={"Dog"}
          type={"text"}
        />

        {/* Breed */}
        <InputBox
          onChange={(e) => setBreed(e.target.value)}
          label={"Breed"}
          placeholder={"Breed"}
          type={"text"}
        />

        {/* userName */}
        <InputBox
          onChange={(e) => setUserName(e.target.value)}
          label={"User Name"}
          placeholder={"pari"}
          type={"text"}
        />
        {/* User Email */}
        <InputBox
          onChange={(e) => setUserEmail(e.target.value)}
          label={"UserEmail"}
          placeholder={"abc@example.com"}
          type={"text"}
        />

        {/* phone number */}
        <InputBox
          onChange={(e) => setPhone(e.target.value)}
          label={"Phone Number"}
          placeholder={"995422...."}
          type={"number"}
        />
        <div className="btns">
          <button
            className="btn"
            onClick={async () => {
              const response = await axios.post("http://localhost:3000/", {
                petName,
                petType,
                breed,
                userName,
                userEmail,
                phone: Number(phone),
              });
              navigate("/Table");
            }}
          >
            Submit
          </button>

          <button
            className="btn"
            onClick={() => {
              navigate("/Table");
            }}
          >
            Goto Table
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputForm;
