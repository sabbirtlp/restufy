
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import { useState, useEffect } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setIsLoading(true)
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => {
                setRecipes(data.meals);
                setIsLoading(false)
            })
            .catch(() => setIsLoading(false))
    }, [])
    return (
        <div>
            <div
                className="hero h-[80vh] md:h-[60vh]"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/RStsyhr/Beef-Tacos.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-40 bg-black"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-2xl md:text-3xl font-bold text-white uppercase">Discover Delicious Recipes from Around the World</h1>
                        <p className="mb-8 text-gray-100">
                            Explore a curated selection of flavorful recipes spanning various cuisines and categories. Whether you're in the mood for a quick bite, a hearty meal, or something exotic, our recipes will inspire your next culinary adventure.
                        </p>

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

            </div>

        </div>

    );
};

export default Recipes;
