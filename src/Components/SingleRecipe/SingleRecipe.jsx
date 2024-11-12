import { Link } from 'react-router-dom';
import './SingleRecipe.css'
const SingleRecipe = ({ recipe }) => {
    
    const { strMealThumb, strArea, strCategory, strMeal,idMeal } = recipe;

    return (
        <div>
            <div className="p-5  rounded singleRecipeBox">
                <img className="rounded-2xl w-full h-[300px] object-fill" src={strMealThumb} alt={strMealThumb} />
                <div className="inforamtion p-4">
                    <h2 className="text-center font-semibold text-gray-800 text-2xl my-3">{strMeal}</h2>
                    <div className="flex justify-between py-4">
                        <p className='font-semibold text-gray-500'>Area: {strArea}</p>
                        <p className='font-semibold text-gray-500'>Category: {strCategory}</p>
                    </div>
                    <Link to={`/recipe/${idMeal}`}><button className='hover:bg-orange-500 px-8 rounded mt-3 font-semibold text-lg text-white py-3 block mx-auto bg-orange-600'>See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;