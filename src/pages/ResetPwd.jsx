import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const ResetPwd = () => {

 
    const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    const body = {
      token: JSON.parse(localStorage.getItem("token")),
      email: data.email,
    };
    await axios
      .post(process.env.REACT_APP_RESET_PASSWORD, body)
      .then((res) => {
        console.log(res);
        navigate('/otp')
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
   <>
    <Header linkColor="black" iconColor="black" position="relative" />
    <section className="form">
      <div className="container">
        <div className="row">
          <div className="heading">
            <h2>REQUEST TO RESET YOUR PASSWORD</h2>
            <p>
              Provide your account email address to receive an email to reset
              your password.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">EMAIL*</label>
            <input type="email" name="email" {...register("email")} />
            <button>SEND</button>
          </form>
        </div>
      </div>
    </section></>
  );
};

export default ResetPwd;
