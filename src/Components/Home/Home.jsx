import { useState, useEffect } from "react";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        // Set loading to true when fetching starts
        setIsLoading(true);
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => {
                setRecipes(data.meals.slice(0, 8));
                setIsLoading(false); // Set loading to false when data is fetched
            })
            .catch(() => setIsLoading(false)); // Handle error
    }, []); // Fetch only once on component mount

    const handleViewAllButton = () => {
        navigate('/recipes');
    };

    return (
        <div>
            <div
                className="hero h-[80vh] md:h-[90vh]"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/Rb3rwM3/hero-1.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-40 bg-black"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-4xl md:text-5xl font-bold text-white uppercase">Bite Into Happiness</h1>
                        <p className="mb-8 text-gray-100">
                            Big flavors, bold taste, and good vibes
                        </p>
                        <button onClick={handleViewAllButton} className="btn bg-orange-600 text-white border-none text-[16px] font-semibold">Taste the Difference</button>
                    </div>
                </div>
            </div>

            <div className="py-20">
                <h2 className="font-bold uppercase text-black text-4xl text-center pb-5">Latest Items</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 container mx-auto relative">
                    {isLoading ? (
                        
                            <div className="absolute top-0 left-[50%] loading loading-dots loading-lg"></div>

                    ) : (
                        recipes.map(recipe => <SingleRecipe key={recipe.id} recipe={recipe}></SingleRecipe>)
                    )}
                    
                </div>
                <button onClick={handleViewAllButton} className="py-5 px-4 bg-black rounded font-semibold mx-auto block mt-5">View All</button>
            </div>
        </div>
    );
};

export default Home;
