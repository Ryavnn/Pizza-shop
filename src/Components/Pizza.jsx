import burger from "../public/assets/Burger.jpg"
function Pizza(){
    return(
        <section className="variety">
            <h1>PizzaGate</h1>
            <h1>Pizzas we offer at our Restaurant</h1>
            <div className="pizzas">
                <div className="container">
                    <img src={burger} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Pizza