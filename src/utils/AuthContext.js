import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export const Auth = createContext();

export const AuthContext = ({ children }) => {
  const [userIn, setUserIn] = useState(false);
  const [user, setUser] = useState({})
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const data = {
      token: JSON.parse(localStorage.getItem("token")),
    };
    await axios
      .post(process.env.REACT_APP_CHECK_LOGIN, data)
      .then((res) => {
        setUser(res.data)
        setUserIn(true);
      })
      .catch((error) => {
        console.log(error);
        setUserIn(false);
      });
  };
  const navigate = useNavigate();
  const logIn = async (data) =>{
    await axios
    .post(process.env.REACT_APP_LOGIN, data)
    .then((res) => {
      localStorage.setItem("token", JSON.stringify(res.data.token));
      navigate("/");
      window.location.reload();
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
    
  }
  const logOut = async () => {
    localStorage.removeItem("token");
    setUserIn(false);
    navigate("/");
    window.location.reload();
  };

  const globalStates = { userIn, setUserIn,logIn, logOut,user, setUser };
  return <Auth.Provider value={globalStates}>{children}</Auth.Provider>;
};
