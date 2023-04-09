import pizza from "../Assets/pizza.png"
import Products from "../Pages/Products";
function Home(){
    return(
        <>
        <div className="hero py-16">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h6 className="text 1-xl md:text-2xl"><em>Jaani Bhook Lagy Ha?</em></h6>
                    <h1 className="text-2xl md:text-6xl font-bold">Intizaar Kis Baat Ka</h1>
                    <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600">Order Now</button>

                </div>
                <div className="w-1/2">
                    <img className="w-4/5" src={pizza}/>
                </div>
            </div>
        </div>
        <div className="pb-24">
            <Products/>
        </div>
        </>
    )
}
export default Home;