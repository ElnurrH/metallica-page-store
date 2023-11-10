import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Auth } from "../utils/AuthContext";
import { useContext } from "react";


const Profile = () => {
  const { userIn, logOut, logIn, user } = useContext(Auth);
  console.log(user);
  
  const loginScheme = object({
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
    resolver: yupResolver(loginScheme),
  });

  const formSubmit = (data) => {
    logIn(data);
  };
  
  return (
    <>
      <Header linkColor="black" iconColor="black" position="relative" />
      <div className="profile">
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
                {!userIn && <h3>ACCOUNT SETTINGS</h3>}
                {userIn && <h3>MY ACCOUNT</h3>}
                {!userIn && <Link to="/register">CREATE ACCOUNT</Link>}
                {userIn && (
                  <>
                    <Link onClick={logOut}>Log Out</Link>
                    <Link Link to="/reset-password">
                      Change Password
                    </Link>
                  </>
                )}
              </div>
              <div className="content-asset-bottom">
                <h3>CUSTOMER SERVICE</h3>
                <Link to="/faq">FAQS</Link>
                <Link to="#">PRIVACY POLICY</Link>
              </div>
            </div>

            {!userIn && (
              <>
                <div className="mid">
                  <div className="heading">
                    <h2>SIGN INTO MY ACCOUNT</h2>
                    <span>*REQUIRED</span>
                  </div>
                  <div className="info">
                    If you are a registered user, please enter your email and
                    password.
                  </div>
                  <form method="post" onSubmit={handleSubmit(formSubmit)}>
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
                      <button>LOGIN</button>
                    </div>
                  </form>
                </div>
              </>
            )}
            {userIn && (
              <>
                <div className="mid-user">
                  <div className="heading">
                    <h2>{user.name + " " + user.surname}</h2>
                  </div>
                  <div className="card-container">
                   
                    <div className="top">
                      <Link to="#">
                        <div className="box-left">
                          <div className="heading">
                            <h4>PERSONAL INFORMATION</h4>
                            <p>Show or update your personal information.</p>
                          </div>
                          <span> &#8594;</span>
                        </div>
                      </Link>
                     
                    </div>
                 
                  </div>
                </div>
              </>
            )}

            {!userIn && (
              <>
                <div className="right">
                  <div className="heading">
                    <h2>NEW TO METALLICA.COM?</h2>
                    <p>
                      Creating an account is easy. Just fill out the fields and
                      enjoy the benefits of being a Fifth Member.
                    </p>
                  </div>
                  <Link to="/register">CREATE ACCOUNT NOW</Link>
                </div>
              </>
            )}
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
          theme="dark"
        />
      </div>
    </>
  );
};

export default Profile;
