
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
const ChangePwd = () => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const body = {
            token: JSON.parse(localStorage.getItem("token")),
            password: data.password,
        };
        await axios
          .post(process.env.REACT_APP_CHANGE_PASSWORD, body)
          .then((res) => {
            console.log(res);
            navigate('/')
            localStorage.removeItem('token')
          })
          .catch((err) => {
            console.log(err);
          });
      };
  return (
   <><Header linkColor="black" iconColor="black" position="relative" />
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
         <label htmlFor="password">TYPE YOUR NEW PASSWORD*</label>
         <input type="password" name="password" {...register("password")} />
         <button>CHANGE PASSWORD</button>
       </form>
     </div>
   </div>
 </section></> 
  )
}

export default ChangePwd