import { Link } from "react-router-dom"
function Restaurants(){
    return(
        <div>
        <nav>
            <div className="logo">PizaaGate</div>
            <div className="nav-cuts">
                <Link to={"/"} className="nav-links">Home</Link>
                <Link to={'/Pages/About'} className="nav-links">About</Link>
                <Link to={'/Pages/PizzaPage'} className="nav-links">Pizzas</Link>
                <Link to={'/Pages/Restaurants'} className="nav-links">Restaurants</Link>
                <Link to={'/Pages/MakeApizza'} className="nav-links">Make a pizza</Link>
            </div>
        </nav>
        </div>
    )
}
export default Restaurants