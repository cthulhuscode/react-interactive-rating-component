import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { images } from "../../constants";
import "./Thank.scss";

export const Thank = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  
  useEffect(() => {    
    // If user hasn't rated
    // if(!state){
    //   navigate("/");
    // }    
  }, []) 

  return (
    <div className="card card-thank">
      {/* {state?.wasRated 
        ? <h1>Thanks for your feedback</h1> 
        : <h1>Pls give us a rate</h1>
      } */}

    <img className="card-thank__image" src={images.thank} alt="phone" />
    <h2 className="card-thank__secondary-text">You selected 4 out of 5</h2>
    <h1 className="card-thank__primary-text">Thank you!</h1>
    <p className="card-thank__tertiary-text">We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in
      touch!</p>
    </div>
  )
}
