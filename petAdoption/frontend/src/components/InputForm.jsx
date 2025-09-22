import React, { useState } from "react";
import { InputBox } from "../components/inputBox/InputBox";
const InputForm = () => {
  const [petName, setPetName] = useState();
  const [petType, setPetType] = useState();
  const [breed, setBreed] = useState();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [phone, setPhone] = useState();
  return (
    <div className="form-main">
      <div className="form">
        {/* petName */}
        <InputBox
          onChange={(e) => setPetName(e.target.value)}
          label={"Pet Name"}
          placeholder={"pet Name"}
        />

        {/* petType */}
        <InputBox
          onChange={(e) => setPetType(e.target.value)}
          label={"Pet Type"}
          placeholder={"Dog"}
        />

        {/* Breed */}
        <InputBox
          onChange={(e) => setBreed(e.target.value)}
          label={"Breed"}
          placeholder={"Breed"}
        />

        {/* userName */}
        <InputBox
          onChange={(e) => setUserName(e.target.value)}
          label={"User Name"}
          placeholder={"pari"}
        />
        {/* User Email */}
        <InputBox
          onChange={(e) => setUserEmail(e.target.value)}
          label={"UserEmail"}
          placeholder={"abc@example.com"}
        />

        {/* phone number */}
        <InputBox
          onChange={(e) => setPhone(e.target.value)}
          label={"Phone Number"}
          placeholder={"995422...."}
        />
      </div>
    </div>
  );
};

export default InputForm;
