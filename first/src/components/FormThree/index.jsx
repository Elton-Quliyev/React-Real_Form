import { useState } from "react"
import "./style.css"

const FormThree = () =>{

    const [search , setSearch] = useState('')
    const [searchError , setSearchError] = useState('')


    const handleClick = (e)=>{
        e.preventDefault()

        if(search.trim() === ''){
            setSearchError("Neyise axdarisa verin")
        }


        const data = {

            search
        }

        console.log(data);
        
    }


    return(
        <section>
            <div className="container">

                <form onSubmit={handleClick}>

                    <div className="header">
                            <h2>Add adress</h2>
                            <h2 style={{color:"green"}}>3 of 3</h2>
                    </div>

                    <div className="adress">
                        <input 
                            className="adress-input" 
                            type="text" 
                            name="adress" 
                            placeholder="Search for adress" 
                            onChange={(e)=>{setSearch(e.target.value); setSearchError("")}}/>
                            {searchError && <span>{searchError}</span>}
                        <span className="adress-span">Your adress in not visible to other users</span>
                    </div>

                    <div className="btns">
                        <button className="btn-location">Use current location</button>
                        <button className="btn-add">Add mannualy</button>
                    </div>

                    <div className="contacts">
                        <h2 className="contacts-header">Sharing your adress shows:</h2>

                        <div className="contacts-show">#  People lear you</div>
                        <div className="contacts-show">/. Estimated delivery time</div>
                        <div className="contacts-show">$ Estimate shipping costs</div>
                    </div>
                </form>

            </div>
        </section>
    )
}

export default FormThree;