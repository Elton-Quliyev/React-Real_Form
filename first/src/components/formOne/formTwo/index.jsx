import { useState } from "react";
import "./style1.css"

const FormTwo = ()=>{

    const [name , setName]= useState('')
    const [gender , setGender] = useState('')
    const [select, setSelect] = useState('')
    const [number, setNumber] = useState('')
    const [date, setDate] = useState('')

    const [nameError , setNameError]= useState('')
    const [genderError , setGenderError] = useState('')
    const [selectError, setSelectError] = useState('')
    const [numberError, setNumberError] = useState('')
    const [dateError, setDateError] = useState('')


    const handleSubmit = (e)=> {
        e.preventDefault()


        if(name.trim()===''){
            setNameError("Full nameni duzgun daxil edin")
        }
        if(gender.trim()===''){
            setGenderError("Birini secmelisiniz !")
        }
        if(select.trim()===''){
            setSelectError("Bir olke nomresi secin")
        }
        if(number.trim()===''){
            setNumberError("Nomrenizi daxil edin")
        }
        if(date.trim()===''){
            setDateError("Dogum gununuzu daxil edin")
        }

        const data = {

            name,
            gender,
            select,
            number,
            date



        }
        console.log(data);
    }


    


    return(

        <section >

            <div className="container" >
                <div className="header">
                    <h2>Personal information</h2>
                    <h2 style={{color:"green"}}>2 of 3</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Full name" 
                        onChange={
                            (e) =>{ setName(e.target.value); setNameError("")}}
                        />
                    {nameError && <span>{nameError}</span>}
                    <div className="gender">

                        <span >Gender:</span>

                        <input 
                            type="radio"  
                            name="gender"
                            value="Male"
                            onChange={(e)=> {setGender(e.target.value); setGenderError("")}}/>
                        <label htmlFor="gender">Male</label>


                        <input 
                            type="radio"  
                            name="gender"
                            value="Female"

                            onChange={(e)=>{ setGender(e.target.value); setGenderError("")}}/>
                        <label htmlFor="gender">Female</label>


                    </div>
                    {genderError && <span>{genderError}</span>}


                    <h4>ⓘ The phone number and birthday are only visible to you</h4>



                    <div className="number">
                        <select  onChange={(e)=> {setSelect(e.target.value); setSelectError("")}}>
                            <option value="+994">+994</option>
                            <option value="+777">+777</option>
                            <option value="+0551">+0551</option>
                        </select>
                        

                        <input 
                            type="number"  
                            name="number" 
                            placeholder="Phone number"
                            onChange={(e)=>{ setNumber(e.target.value); setNumberError("")}}/> 

                    </div>
                        {  numberError && <span>{numberError}</span>}
                    <input 
                        type="date" 
                        name="date"  
                        placeholder="birthday"
                        onChange={(e) => {setDate(e.target.value); setDateError("")}}/>
                        {dateError && <span>{dateError}</span>}


                    <span className="spn">Let us know about your birthday so as not to miss a gift</span>

                    <button className="form-btn" type="submit">Save information</button>

                </form>
            </div>

        </section>


    )
}

export default FormTwo;