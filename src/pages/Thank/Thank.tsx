import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"

export const Thank = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  
  useEffect(() => {    
    if(!state){
      navigate("/");
    }    
  }, []) 

  return (
    <div>
      {state?.wasRated 
        ? <h1>Thanks for your feedback</h1> 
        : <h1>Pls give us a rate</h1>
      }
    </div>
  )
}
