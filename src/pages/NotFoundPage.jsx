import { Link } from "react-router-dom"

export const NotFoundPage = () =>{
    return (
        <div>
            <h2>The song's information is not found...</h2>
            <Link to='/'>Go home</Link>
        </div>
    )
}