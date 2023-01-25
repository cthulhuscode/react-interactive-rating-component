import { useNavigate } from "react-router-dom"
import { images } from "../../constants";
import "./Rate.scss"

export const Rate = () => {
  const navigate = useNavigate();

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
        <div className="rating__option rating__option-1">1</div>
        <div className="rating__option rating__option-2">2</div>
        <div className="rating__option rating__option-3">3</div>
        <div className="rating__option rating__option-4">4</div>
        <div className="rating__option rating__option-5">5</div>
      </div>
      <button className="card-rate__button">Submit</button>
    </div>
  )
}
