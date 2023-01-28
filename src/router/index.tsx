import { createHashRouter } from "react-router-dom";
import { Rate, Thank, Error } from "../pages";

export const router = createHashRouter([
  {
    path: "/",
    element: <Rate />,
    errorElement: <Error />
  },
  {
    path: "/thank",
    element: <Thank />
  }
]);
