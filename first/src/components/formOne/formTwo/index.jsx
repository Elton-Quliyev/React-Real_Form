import { useState } from "react";
import "./style1.css";
import Validate from "../../../helpers";

const FormTwo = () => {
  const [formData2, setFormData2] = useState({
    name: "",
    gender: "",
    numberPrefix: "+994",
    phoneNumber: "",
    date: ""
  });

  const [errors2, setErrors2] = useState({
    name: "",
    gender: "",
    phoneNumber: "",
    date: ""
  });

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setFormData2({
      ...formData2,
      [name]: value
    });

    let error= Validate(name,value)

    setErrors2({
        ...errors2,
        [name]:error
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData2.name.length > 0 &&
      formData2.gender.length > 0 &&
      formData2.phoneNumber.length > 0 &&
      formData2.date.length > 0
    ) {
      console.log(formData2);
    } else {
      console.log("Formu tam doldurun");
    }
  };

  return (
    <section>
      <div className="container">
        <div className="header">
          <h2>Personal information</h2>
          <h2 style={{ color: "green" }}>2 of 3</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full name"
            onChange={handleChange}
          />
          {errors2.name && <span>{errors2.name}</span>}
          <div className="gender">
            <span>Gender:</span>

            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            <label htmlFor="gender">Male</label>

            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
          {errors2.gender && <span>{errors2.gender}</span>}

            <label htmlFor="gender">Female</label>
          </div>

          <h4>ⓘ The phone number and birthday are only visible to you</h4>

          <div className="number">
            <select
              name="numberPrefix"
              onChange={handleChange}
              value={formData2.numberPrefix}
            >
              <option value="+994">+994</option>
              <option value="+777">+777</option>
              <option value="+0551">+0551</option>
            </select>

            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone number"
              onChange={handleChange}
            />
          {errors2.phoneNumber && <span>{errors2.phoneNumber}</span>}

          </div>
          <input
            type="date"
            name="date"
            placeholder="birthday"
            onChange={handleChange}
          />
          {errors2.date && <span>{errors2.date}</span>}


          <span className="spn">
            Let us know about your birthday so as not to miss a gift
          </span>

          <button className="form-btn" type="submit">
            Save information
          </button>
        </form>
      </div>
    </section>
  );
};

export default FormTwo;
