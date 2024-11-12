import { useLoaderData } from "react-router-dom";

const RecipeDetails = () => {
    const data = useLoaderData();
    const newSingleRecipe = data.meals;
    const {
        strArea,
        strCategory,
        strInstructions,
        strMeal,
        strMealThumb,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strSource,
        strTags,
        strYoutube
    } = newSingleRecipe[0];

    // Collecting non-empty ingredients
    const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
    ].filter(ingredient => ingredient); // Remove empty ingredients

    return (
        <div>
            {/* Hero Section */}
            <div
                className="hero h-[80vh] md:h-[60vh]"
                style={{
                    backgroundImage: `url(${strMealThumb})`,
                }}
            >
                <div className="hero-overlay bg-opacity-40 bg-black"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-2xl md:text-3xl font-bold text-white uppercase">{strMeal}</h1>
                        <div className="flex justify-between gap-5">
                            <p className="text-white font-semibold">Area: {strArea}</p>
                            <p className="text-gray-100">Category: {strCategory}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recipe Details Section */}
            <div className="bg-gray-100 min-h-screen flex flex-col items-center p-6">
                {/* Recipe Card */}
                <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-lg neumorphic">
                    {/* Image and Title */}
                    <div className="flex flex-col md:flex-col items-center gap-8">
                        <img
                            src={strMealThumb}
                            alt={strMeal}
                            className="w-full md:w-full object-cover md:h-[500px] rounded-xl shadow-lg"
                            style={{
                                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.1), -10px -10px 20px rgba(255, 255, 255, 0.7)",
                            }}
                        />
                       
                    </div>

                    {/* Ingredients Section */}
                    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner text-gray-800">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">Ingredients</h2>
                        <ul className="list-disc pl-6">
                            {ingredients.map((ingredient, index) => (
                                <li key={index} className="text-lg">{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Instructions Section */}
                    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-inner text-gray-800">
                        <h2 className="text-2xl font-bold text-orange-600 mb-4">Instructions</h2>
                        <p className="leading-relaxed">{strInstructions}</p>
                    </div>
                    <div className="mt-8 w-full max-w-4xl flex justify-around space-x-4">
                    {/* Source Button */}
                    <a
                        href={strSource}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neumorphic px-6 py-3 text-white text-lg bg-orange-600 hover:bg-orange-700 rounded-lg"
                    >
                        Source
                    </a>

                    {/* Tags Button */}
                    <div className="btn-neumorphic px-6 py-3 text-white text-lg bg-gray-800 hover:bg-gray-900 rounded-lg">
                        Tags: {strTags}
                    </div>

                    {/* YouTube Button */}
                    <a
                        href={strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-neumorphic px-6 py-3 text-white text-lg bg-red-600 hover:bg-red-700 rounded-lg"
                    >
                        Watch on YouTube
                    </a>
                </div>
                </div>

                {/* Links Section */}
                
            </div>
        </div>
    );
};

export default RecipeDetails;
