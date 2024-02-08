import { useState } from "react";
import Apple from "../../assets/icon/Apple.png"
import Facebook from "../../assets/icon/Facebook.png"
import Google from "../../assets/icon/Google.png"
import "./style.css"

function FormOne({ onButtonClick }){

    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [checkbox , setCheckbox] = useState(true)
    const [emailError , setEmailError] = useState("")
    const [passwordError , setPasswordError] = useState("")



    
    const handleClick = (e)=>{
        e.preventDefault()

        if(email.trim()===''){
            setEmailError("E-mail unvaninizi duzgun daxil edin")
        }
        if(password.trim()===''){
            setPasswordError("Password hesabinizi duzgun daxil edin")
        }

        
        const data = {
            email,
            password,
            checkbox
        }
        console.log(data);
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
            <form onSubmit={handleClick}>

                <div className="inpts">

                    <input type="email" name="name" placeholder="Email adress" onChange={(e)=>{ setEmail(e.target.value); setEmailError("")}}/>
                    {emailError && <span className="errorMessage">{emailError}</span>}
                    <input type="password" name="name" placeholder=" Password" onChange={(e)=> {setPassword(e.target.value); setPasswordError("")}}/>
                    {passwordError && <span className="errorMessage">{passwordError}</span>}
                    
                </div>

                <button onClick={onButtonClick} className="form-btn" type="submit">Create accound</button>

                <div className="checkbox">
                    <input type="checkbox" defaultChecked={true}  name="checkbox"  onChange={(e)=> setCheckbox(e.target.checked)}/>
                    <label htmlFor="checkbox">Send me news and promotions</label>
                </div>
                

            </form>

            <span className="end" >By continuing I agre with the <a href="#">Therms & Conditions, Privacy Policy</a></span>
        </div>
        </section>
    )
}


export default FormOne;