const Contact = () => {
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
                        <h1 className="mb-5 text-2xl md:text-3xl font-bold text-white uppercase">Get In Touch</h1>
                        <p className="mb-8 text-gray-100">
                            Find your next favorite dish with recipes from all over the world. Simple, delicious, and perfect for any occasion!
                        </p>

                    </div>
                </div>
            </div>

            {/* Contact Information */}
            <div className="container mx-auto flex flex-col lg:flex-row flex-grow  justify-between gap-12 p-6 lg:p-0 my-10">
                {/* Contact Details */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-black mb-6">Get In Touch</h2>
                    <p className="text-gray-700 mb-4">
                        We’d love to hear from you! Reach out to us with any questions or feedback, and we'll get back to you as soon as possible.
                    </p>
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <span className="material-icons text-orange-600 mr-3">email</span>
                            <p className="text-gray-700">info@yourcompany.com</p>
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons text-orange-600 mr-3">phone</span>
                            <p className="text-gray-700">+123 456 7890</p>
                        </li>
                        <li className="flex items-center">
                            <span className="material-icons text-orange-600 mr-3">location_on</span>
                            <p className="text-gray-700">123 Main Street, City, Country</p>
                        </li>
                    </ul>
                </div>

                {/* Contact Form */}
                <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                                placeholder="Type your message here"
                            ></textarea>
                        </div>
                        <button type="submit" className="w-full py-3 px-4 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 focus:outline-none">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default Contact;