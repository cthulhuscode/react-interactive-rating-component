import { MouseEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { images } from "../../constants";
import "./Rate.scss"

export const Rate = () => {
  const navigate = useNavigate();
  const optionList: any = useRef(null);

  const [options, setOptions] = useState({
    1: {activeClass: false},
    2: {activeClass: false},
    3: {activeClass: false},
    4: {activeClass: false},
    5: {activeClass: false},    
  });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    let option = e.currentTarget.name!.split("-")[1];
      
    setOptions({...options, [option]:{activeClass: true}});
  }

  return (
    <div className="card card-rate">
      {/* <button onClick={() => navigate("/thank", {state: {wasRated: false}})}>Go to Thank</button> */}

      <div className="card-rate__star-container">
        <div className="card-rate__star-circle">
          <img className="card-rate__star" src={images.star} alt="star" />
        </div>
      </div>

      <h1 className="card-rate__primary-text">How did we do?</h1>

      <p className="card-rate__secondary-text">Please let us know how we did with your support request. All feedback is
        appreciated
        to help us improve our offering!</p>
      <div className="card-rate__rating">
        {Object.entries(options).map(option => (
          <button key={option[0]} className={`rating__option ${option[1].activeClass ? 'rating__option--selected' : ''}`} name={`option-${option[0]}`} onClick={handleClick}>{option[0]}</button>
        ))}
        {/* <button className="rating__option rating__option-2" name="option-2">2</button>
        <button className="rating__option rating__option-3" name="option-3">3</button>
        <button className="rating__option rating__option-4" name="option-4">4</button>
        <button className="rating__option rating__option-5" name="option-5">5</button> */}
      </div>
      <button className="card-rate__button">Submit</button>
    </div>
  )
}
