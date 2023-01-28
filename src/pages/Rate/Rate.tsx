import { MouseEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"
import { images } from "../../constants";
import "./Rate.scss"

type OptionsType = {
  [key: number]:{activeClass: boolean}
}

export const Rate = () => {
  const navigate = useNavigate();
  const optionList: any = useRef();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const [options, setOptions] = useState<OptionsType>({
    1: {activeClass: false},
    2: {activeClass: false},
    3: {activeClass: false},
    4: {activeClass: false},
    5: {activeClass: false},    
  });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    let clickedOptionId = parseInt(e.currentTarget.name!.split("-")[1]);
    let changedOptions = {...options}

    if(selectedOption){
      changedOptions[selectedOption].activeClass = false;
    }    

    changedOptions[clickedOptionId].activeClass = true;   
    
    setSelectedOption(clickedOptionId);
    setOptions(changedOptions);
  }

  const handleSubmit = () => {
    if(selectedOption)
      navigate("/thank", {state: {rate: selectedOption}})
  }

  return (
    <div className="card card-rate">
      <div className="card-rate__star-container">
        <div className="card-rate__star-circle">
          <img className="card-rate__star" src={images.star} alt="star" />
        </div>
      </div>

      <h1 className="card-rate__primary-text">How did we do?</h1>

      <p className="card-rate__secondary-text">Please let us know how we did with your support request. All feedback is
        appreciated
        to help us improve our offering!</p>
      <div className="card-rate__rating" ref={optionList}>
        {Object.entries(options).map(option => (
          <button 
            key={option[0]} 
            className={`rating__option ${option[1].activeClass ? 'rating__option--selected' : ''}`} 
            name={`option-${option[0]}`}
            onClick={handleClick}>{option[0]}
          </button>
        ))}
      </div>
      <button className="card-rate__button" onClick={handleSubmit}>Submit</button>
    </div>
  )
}
