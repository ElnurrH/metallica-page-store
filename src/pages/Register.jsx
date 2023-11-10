import React from "react";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const navigate = useNavigate()
  const registerScheme = object({
    name: string().required("THIS FIELD IS REQUIRED.").trim(),
    surname: string().required("THIS FIELD IS REQUIRED.").trim(),
    email: string().required("THIS FIELD IS REQUIRED.").trim(),
    password: string()
      .required("THIS FIELD IS REQUIRED.")
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/,
        "PASSWORD DOES NOT MEET MINIMUM REQUIREMENTS."
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerScheme),
  });

  const formSubmit = async (data) => {
    await axios
      .post(process.env.REACT_APP_REGISTER, data)
      .then((res) => {
        toast.success('YOUR REGISTRATION IS SUCCESSFULL!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          navigate('/profile')
      })
      .catch((error) => {
        console.log(error);
        toast.error('REGISTRATION WAS UNSUCCESSFULL, PLEASE TRY AGAIN!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
      });
  };
  return (
    <>
      <Header linkColor="black" iconColor="black" position="relative"  />
      <section className="profile">
        <div className="container">
          <div className="row">
            <div className="left">
              <div className="info">
                <span>
                  <Link to="/profile">MY ACCOUNT</Link>
                </span>
                <span className="sign">&#62; </span>
                <span>LOGIN</span>
              </div>
              <div className="content-asset-top">
                <h3>ACCOUNT SETTINGS</h3>
                <Link to="/profile">CREATE ACCOUNT</Link>
              </div>
              <div className="content-asset-bottom">
                <h3>CUSTOMER SERVICE</h3>
                <Link to="/faq">FAQS</Link>
                <Link to="#">PRIVACY POLICY</Link>
              </div>
            </div>
            <div className="mid">
              <div className="heading">
                <h2>CREATE AN ACCOUNT AND BECOME A FIFTH MEMBER</h2>
                <span>*REQUIRED</span>
              </div>
              <div className="info">
                If you are a registered user, please enter your email and
                password.
              </div>
              <form method="post" onSubmit={handleSubmit(formSubmit)}>
                <label htmlFor="name">FIRST NAME*</label>
                <input type="text" name="name" {...register("name")} />
                {errors.name && <span>{errors.name.message}</span>}
                <label htmlFor="lname">LAST NAME*</label>
                <input type="text" name="surname" {...register("surname")} />
                {errors.surname && <span>{errors.surname.message}</span>}
                <label htmlFor="email">EMAIL ADDRESS*</label>
                <input type="email" name="email" {...register("email")} />
                {errors.email && <span>{errors.email.message}</span>}
                <label htmlFor="password">PASSWORD*</label>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
                {errors.password && <span>{errors.password.message}</span>}

                <div className="login">
                  <button>APPLY</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
      </section>
    </>
  );
};

export default Register;
