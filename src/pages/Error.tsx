import { useRouteError, Link } from "react-router-dom"

export const Error = () => {

  const error: any = useRouteError();

  return (
    <div>
      <h1>{error.statusText}</h1>
      <h2>{error.message}</h2>

      <Link to="/">Go back to Home</Link>
    </div>
  )
}
