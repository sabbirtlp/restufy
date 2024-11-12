const Recipe = () => {

    return (
        <div>
            <div
                className="hero h-[80vh] md:h-[60vh]"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/3SvD6LL/Pizza.jpg)",
                }}>
                <div className="hero-overlay bg-opacity-40 bg-black"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="mb-5 text-2xl md:text-3xl font-bold text-white uppercase">Explore Tasty Recipes for Every Craving</h1>
                        <p className="mb-8 text-gray-100">
                        Find your next favorite dish with recipes from all over the world. Simple, delicious, and perfect for any occasion!
                        </p>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Recipe;