import React from 'react'
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const Otp = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const body = {
            token: JSON.parse(localStorage.getItem("token")),
            otp: data.otp,
        };
        await axios
          .post(process.env.REACT_APP_VERIFY_OTP, body)
          .then((res) => {
            console.log(res);
            navigate('/change-pwd')
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
              Provide the code which has been sent to your email.
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">OTP*</label>
            <input type="text" name="otp" {...register("otp")} />
            <button>VERIFY OTP</button>
          </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default Otp