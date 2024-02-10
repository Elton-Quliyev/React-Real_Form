import { useState } from "react";
import Apple from "../../assets/icon/Apple.png"
import Facebook from "../../assets/icon/Facebook.png"
import Google from "../../assets/icon/Google.png"
import "./style.css"
import Validate from "../../helpers";

function FormOne(){

    const [formData , setFormData] = useState({
        email : '',
        password : '',
        check : ''
    })

    const [errors , setErrors] = useState({
        email : '',
        password : '',
        check : true
    })


    const handleChange = (e) =>{

        e.preventDefault()
        const { name, type, checked, value } = e.target;
    
        setFormData({
          ...formData,
          [name]: type === 'checkbox' ? checked : value
        })
    



        const error = Validate(name , value)

        setErrors({
            ...errors,
            [name]:error
        })
    }



    const handleSubmit = (e) =>{
        e.preventDefault()

        if(formData.email.length >0 && formData.password.length >0){
                console.log(formData);
        }else{
            console.log("formu tam doldurun");
        }
    }

    return(
        <section>
        <div className="container">
            <div className="header"> 
                <button className="btn-register">Register</button>
                <button className="btn-login">Log in</button>
            </div>
            <div className="icons">
                <img src={Apple} alt="apple" />
                <img src={Facebook} alt="facebook" />
                <img src={Google} alt="google" />
            </div>
            <form onSubmit={handleSubmit}>

                <div className="inpts">

                    <input type="email" name="email" placeholder="Email adress" onChange={handleChange}/>
                    {errors.email &&<span>{errors.email} </span>}
                    <input type="password" name="password" placeholder=" Password" onChange={handleChange}/>
                    {errors.password &&<span>{errors.password} </span>}

                    
                </div>

                <button  className="form-btn" type="submit">Create accound</button>

                <div className="checkbox">
                    <input type="checkbox" defaultChecked={true}  name="check"  onChange={handleChange}/>
                    <label htmlFor="checkbox">Send me news and promotions</label>
                </div>
                

            </form>

            <span className="end" >By continuing I agre with the <a href="#">Therms & Conditions, Privacy Policy</a></span>
        </div>
        </section>
    )
}


export default FormOne;