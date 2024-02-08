import { useState } from 'react';
import './App.css';
import FormOne from './components/formOne';
import FormTwo from './components/formOne/formTwo';
import FormThree from './components/FormThree';
import FormFive from './components/FormFive';
import FormFor from './components/FormFor';


const App = () => {

  // const [showFormTwo, setShowFormTwo] = useState(false);

  // const handleFormOneButtonClick = () => {
  //   setShowFormTwo(true);
  // };



  return (
    <div>
      

      {/* {showFormTwo ? <FormTwo /> : <FormOne onButtonClick={handleFormOneButtonClick} />} */}
      <FormOne/>
      <FormTwo/>
      <FormThree/>
      <FormFor/>
      <FormFive/>
    </div>
  );


  
}

export default App