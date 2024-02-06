import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainNavbar from "./MainNavbar";
import ChatBotPharmaEasy from "./ChatBot";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const handleLoginClick = () => {
        navigate("/UserLogin")
    }
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    let url = 'https://kidshealth.org/en/teens/rx-refills.html',
     url1 = 'https://www.apolloclinic.com/for-patients/services/consultations',
     url2 = 'https://ahealthybalanceinc.com/workshops/'

    return (

        <div>
            <MainNavbar />
            <ChatBotPharmaEasy />
            <br />
            <br />
            <h1 className="text-xl font-bold mb-4 text-center">Pharma-Easy "Where Good Health Meets Convenience"</h1>
            <br />

            {/* login drop-down is not working so i addded these  */}
            {/* try h1 or p for tommorrow and add images for it and   */}
            {/* products should be side by side and replace What Our Customers Say 
              to any other  */}
            <br />

            <div className="relative h-96">
                <img
                    src="https://img.freepik.com/premium-photo/businessman-holding-smartphone-blue-cross_150455-2657.jpg?size=626&ext=jpg&ga=GA1.1.40795630.1700712467&semt=ais"
                    alt="Pharmacy Quote"
                    className="w-full h-full object-cover"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                    <h1 className="text-4xl font-extrabold mb-4">
                        "Your Health is Our Priority"
                    </h1>
                    <p className="text-lg">
                        Get your medications and other essentials delivered to your doorstep!
                    </p>
                </div>
            </div>

            {/* Carousel Section */}
            <section className="mt-8">
                <Slider {...carouselSettings}>
                    <div>
                        <img
                            src="https://www.cmss.gov.in/wp-content/uploads/2021/12/Slider-new-1.jpg"
                            alt="Carousel Image 1"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://apollouniversity.edu.in/blog/wp-content/uploads/2023/03/Biomedical-Sciences.jpg"
                            alt="Carousel Image 2"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.hi-techmedical.org/img/slides/coronavirus_stay_safe_save_lives_hi-tech_medical_Bhubaneswar.jpg"
                            alt="Carousel Image 3"
                            className="w-full h-64 object-cover"
                        />
                    </div>
                </Slider>
            </section>

            {/* Featured Products Section */}
            <section className="mt-8">
                <h2 className="text-3xl font-extrabold text-center mb-6">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-4 rounded-md shadow-md"> <br /><br />
                        <img
                            src="https://i1.wp.com/medigram.in/wp-content/uploads/2020/08/Dolo-650-Mg-tablet.png?fit=668%2C436&ssl=1"
                            alt="Product 1"
                            className="w-full h-30 object-cover mb-4 rounded-md"
                        />
                        <br />
                        <br />
                        <br />
                        <br />

                        <h3 className="text-xl font-semibold mb-2">
                            Dolo
                        </h3>
                        <p className="text-gray-700 mb-4">
                            For the cure of Viral Fever and Temparature Increase
                        </p>
                        <p className="text-blue-500 font-semibold">Rs:50</p>
                        <button
                            onClick={handleLoginClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                            Buy Now
                        </button>
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <img
                            src="https://5.imimg.com/data5/SELLER/Default/2023/6/313919346/XE/LP/SS/129748724/cheston-cold-tablet.jpeg"
                            alt="Product 1"
                            className="w-full h-29s object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-xl font-semibold mb-2">
                            Cheston
                        </h3>
                        <p className="text-gray-700 mb-4">
                            For the cure of severe cough and cold
                        </p>

                        <p className="text-blue-500 font-semibold">Rs:150</p>
                        <button
                            onClick={handleLoginClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                            Buy Now
                        </button>
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <img
                            src="https://www.pharma-gdd.com/media/cache/resolve/product_show/62617965722d6173706972696e652d64752d72686f6e652d3530306d672d32302d636f6d7072696d65732d6661636518127dd1.jpg"
                            alt="Product 1"
                            className="w-full h-29 object-cover mb-4 rounded-md"
                        />
                        <h3 className="text-xl font-semibold mb-2">
                            Aspirine
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Basic and Severe Pain Reliever
                        </p>
                        <p className="text-blue-500 font-semibold">Rs:70</p>
                        <button
                            onClick={handleLoginClick}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
                            Buy Now
                        </button>
                    </div>

                    {/* Add more featured product cards as needed */}
                </div>

            </section>

            {/* Our Services Section */}
            <section className="mt-8">
                <h2 className="text-3xl font-extrabold text-center mb-6">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">
                            Prescription Refills
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Easily refill your prescriptions online.
                        </p>
                        <button  className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={() => { window.location.href = url; }}>
                            Learn More</button>
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">
                            Health Consultations
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Schedule virtual health consultations with our experts.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={() => { window.location.href = url1; }}>
                            Learn More
                        </button>
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">
                            Wellness Workshops
                        </h3>
                        <p className="text-gray-700 mb-4">
                            Join our workshops for a healthier lifestyle.
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2" onClick={() => { window.location.href = url2; }} >
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* Additional sections */}
            {/* ... (any other sections you want to add) */}
            <section className="mt-8">
                <h2 className="text-3xl font-extrabold text-center mb-6">
                    What Our Customers Say
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-gray-700 mb-4">
                            "I had a fantastic experience with this service! The quick delivery and quality products exceeded my expectations. PharmaEasy is now my go-to for all my medical needs."
                        </p>
                        <p className="font-semibold">- Customer 1</p>
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-gray-700 mb-4">
                            "PharmaEasy has made getting my medications hassle-free. The user-friendly website and prompt customer service make it a reliable choice. I highly recommend it to everyone."
                        </p>
                        <p className="font-semibold">- Customer 2</p>
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-gray-700 mb-4">
                            "Exceptional service! The variety of products and brands available on PharmaEasy is impressive. The convenience of ordering online and having everything delivered to my doorstep makes my life so much easier. Thank you, PharmaEasy!"
                        </p>
                        <p className="font-semibold">- Customer 3</p>
                    </div>
                </div>
            </section>

            {/* Contact Us Section */}
            <section className="mt-8">
                <h2 className="text-3xl font-extrabold text-center mb-6">Contact Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                        <p className="text-gray-700 mb-4">
                            #41,Green Domain Layout,Bangloree,Karnataka
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                        <p className="text-gray-700 mb-4">Phone: (123) 456-7890</p>
                    </div>

                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                        <p className="text-gray-700 mb-4">info@examplepharmacy.com</p>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <footer className="mt-8 bg-green-800 text-white p-4">
                <div className="container mx-auto text-center">
                    <p>&copy; 2023 Pharmacy Easy. All rights reserved.</p>
                </div>
            </footer>
        </div>




    )
}

export default Welcome