

const About = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="hero h-[70vh] md:h-[70vh] bg-cover bg-center"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/RStsyhr/Beef-Tacos.jpg)"
                }}>
                <div className="hero-overlay bg-opacity-40 bg-black"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase mb-5">About Us</h1>
                        <p className="text-xl md:text-2xl text-gray-100 mb-8">
                            We believe in delivering quality and building lasting relationships.
                        </p>
                    </div>
                </div>
            </div>

            {/* About Us Section */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Image Section */}
                    <div className="flex-1">
                        <img
                            src="https://i.ibb.co.com/Rb3rwM3/hero-1.jpg" // Replace with your image URL
                            alt="About Us Image"
                            className="w-full h-auto md:h-[400px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="max-w-xl flex-1">
                        <h2 className="text-3xl font-bold text-black text-center mb-6">Who We Are</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            At [Your Company Name], we are a dedicated team of professionals committed to providing exceptional services.
                            Our team is passionate about creating innovative solutions that meet the needs of our clients. With years of
                            experience in the industry, we strive to build relationships based on trust, integrity, and excellence.
                        </p>
                    </div>

                </div>
            </div>

            {/* Our Mission Section */}
            <div className="py-16 bg-gray-200">
                <div className="container mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center justify-center gap-12">
                    {/* Text Section */}
                    <div className="max-w-xl flex-1">
                        <h2 className="text-3xl font-bold text-black text-center mb-6">Our Mission</h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our mission is to transform ideas into reality by delivering high-quality services. We are driven by our desire to create lasting value for our clients.
                            With a customer-first approach, we ensure that every project we undertake is completed with the highest standards of quality and satisfaction.
                        </p>
                    </div>
                    {/* Image Section */}
                    <div className="flex-1">
                        <img
                            src="https://i.ibb.co.com/Rb3rwM3/hero-1.jpg" // Replace with your image URL
                            alt="Our Mission Image"
                            className="w-full h-auto md:h-[400px] rounded-lg shadow-lg object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="py-16 bg-gray-100">
                <h2 className="text-3xl font-bold text-black text-center mb-10">Meet Our Chefs</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 container mx-auto">
                    {/* Chef 1 */}
                    <div className="bg-white rounded-xl shadow-lg neumorphic p-6 text-center">
                        <img src="https://randomuser.me/api/portraits/men/5.jpg" alt="Chef" className="w-32 h-32 mx-auto rounded-full mb-4 shadow-xl" />
                        <h3 className="text-xl font-semibold text-gray-800">Chef Mario Rossi</h3>
                        <p className="text-gray-600">Executive Chef</p>
                    </div>
                    {/* Chef 2 */}
                    <div className="bg-white rounded-xl shadow-lg neumorphic p-6 text-center">
                        <img src="https://randomuser.me/api/portraits/women/6.jpg" alt="Chef" className="w-32 h-32 mx-auto rounded-full mb-4 shadow-xl" />
                        <h3 className="text-xl font-semibold text-gray-800">Chef Sofia Martinez</h3>
                        <p className="text-gray-600">Pastry Chef</p>
                    </div>
                    {/* Chef 3 */}
                    <div className="bg-white rounded-xl shadow-lg neumorphic p-6 text-center">
                        <img src="https://randomuser.me/api/portraits/men/7.jpg" alt="Chef" className="w-32 h-32 mx-auto rounded-full mb-4 shadow-xl" />
                        <h3 className="text-xl font-semibold text-gray-800">Chef Lin Chen</h3>
                        <p className="text-gray-600">Sous Chef</p>
                    </div>
                    {/* Chef 4 */}
                    <div className="bg-white rounded-xl shadow-lg neumorphic p-6 text-center">
                        <img src="https://randomuser.me/api/portraits/women/8.jpg" alt="Chef" className="w-32 h-32 mx-auto rounded-full mb-4 shadow-xl" />
                        <h3 className="text-xl font-semibold text-gray-800">Chef Emma Johnson</h3>
                        <p className="text-gray-600">Garde Manger</p>
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default About;
