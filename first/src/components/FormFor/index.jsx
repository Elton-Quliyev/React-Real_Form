import { useState } from "react"
import "./style.css"

const FormFor = () =>{

    
        const [street, setStreet] = useState("");
        const [apartment, setApartment] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("");
        const [zip, setZip] = useState("");
      
        const [streetError, setStreetError] = useState("");
        const [apartmentError, setApartmentError] = useState("");
        const [cityError, setCityError] = useState("");
        const [stateError, setStateError] = useState("");
        const [zipError, setZipError] = useState("");
      
        const handleFunction = (e) => {
          e.preventDefault();
      
          if (street.trim() === "") {
            setStreetError("Inputu bos saxlamayin !");
          }
          if (apartment.trim() === "") {
            setApartmentError("Inputu bos saxlamayin !");
          }
          if (city.trim() === "") {
            setCityError("Inputu bos saxlamayin !");
          }
          if (state.trim() === "") {
            setStateError("Inputu bos saxlamayin !");
          }
          if (zip.trim() === "") {
            setZipError("Inputu bos saxlamayin !");
          }
      
          const data = {
            street,
            apartment,
            city,
            state,
            zip,
          };
      
          console.log(data);
        
      
    }



    return(

        <section>

            <div className="container">
                <div className="header"> 
                    <h2>Add adress</h2>
                    <h2 style={{color:"green"}}>3 of 3</h2>
                </div>

                <form onSubmit={handleFunction} >
                    <input type="text" placeholder="Street adress" onChange={(e)=>{ setStreet(e.target.value); setStreetError('') }}/>
                    {streetError && <span>{streetError}</span>}

                    <input type="text" placeholder="Apartament" onChange={(e)=>{ setApartment(e.target.value); setApartmentError('') }} />
                    {apartmentError && <span>{apartmentError}</span>}

                    <input type="text" placeholder="City" onChange={(e)=>{ setCity(e.target.value); setCityError('') }} />
                    {cityError && <span>{cityError}</span>}


                    <div className="yarisi">
                        <input type="text" className="yarisi-state" placeholder="State" onChange={(e)=>{ setState(e.target.value); setStateError('') }} />

                        <input type="number" className="yarisi-zip" placeholder="Zip code" onChange={(e)=>{ setZip(e.target.value); setZipError('') }} />

                    </div>
                        {stateError && <span>{stateError}</span>}
                        {zipError && <span>{zipError}</span>}

                    <button className="btn-information">Save information</button>
                </form>
            </div>
        </section>

    )
}

export default FormFor;