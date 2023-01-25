import { createBrowserRouter } from "react-router-dom";
import { Rate, Thank, Error } from "../pages";

export const router = createBrowserRouter([
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
