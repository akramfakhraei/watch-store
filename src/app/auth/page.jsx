"use client";
import { useState } from "react";
import SendOTPFrom from "./SendOTPFrom";
import http from "@/services/httpService";
function AuthPage() {
  const [phoneNumber, setPhoneNumber]=useState("");
  console.log(phoneNumber);
  const phoneNumberHandler = (e) => {
    setPhoneNumber(e.target.value);
  };
  const sendOTPHandler= async(e)=>{
    e.preventDefault();
    try {
      const data = await http.post("/user/get-otp",{phoneNumber})
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div className="flex justify-center">
      <div className="w-full sm:max-w-sm">
        <SendOTPFrom
        phoneNumber={phoneNumber}
        onChange={phoneNumberHandler}
        onSubmit={sendOTPHandler}/>
      </div>
    </div>
  );
}

export default AuthPage