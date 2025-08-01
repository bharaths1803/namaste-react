import {useRouteError} from "react-router-dom"
const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
      <h1>Error page</h1>
      <h1>From Namaste REact</h1>
      <p>{error.data}</p>
    </div>
  )
}

export default Error