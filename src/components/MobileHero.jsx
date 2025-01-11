import "../index.css";
import Slider from "react-slick"; // Import Slider
import { AtSign, Github, Linkedin, Download, MoveRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MobileHero() {
    // Settings for react-slick slider
    const settings = {
        dots: true, // Show navigation dots
        infinite: true, // Loop the images
        speed: 500, // Transition speed
        slidesToShow: 1, // Number of slides visible at a time
        slidesToScroll: 1, // Number of slides to scroll at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Autoplay interval in milliseconds
    };

    return (
        <div className="relative w-full h-screen">
            {/* Carousel as Background */}
            <div className="absolute inset-0 z-0">
                <Slider {...settings}>
                    <div>
                        <img
                            src="/My-picture.png"
                            alt="Picture 1"
                            className="object-cover w-full h-screen"
                        />
                    </div>
                    <div>
                        <img
                            src="/My-pics2.jpg"
                            alt="Picture 2"
                            className="object-cover w-full h-screen"
                        />
                    </div>
                    <div>
                        <img
                            src="/My-image.jpg"
                            alt="Picture 3"
                            className="object-cover w-full h-screen"
                        />
                    </div>
                </Slider>
            </div>

            {/* Content Layer */}
            <main className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center md:px-10 md:text-left">
                <div className="w-full max-w-3xl p-6 text-white bg-black bg-opacity-50 rounded-lg md:p-10">
                    <h3 className="text-3xl font-bold md:text-5xl">Hi, I am</h3>
                    <h1 className="my-4 text-5xl font-bold md:text-7xl">Adebayo Peter</h1>
                    <p className="text-lg font-bold text-gray-300 md:text-2xl">
                        Front-end Web Developer | Mobile Developer
                    </p>
                    <a
                        href="public/Peter_updated-Resume.pdf"
                        className="inline-block px-6 py-3 my-6 text-white transition bg-gray-700 rounded-md hover:bg-gray-600">
                        <span className="flex items-center justify-center gap-2">
                            Download Resume <Download />
                        </span>
                    </a>

                    <div className="flex flex-wrap items-center justify-center gap-6 my-6 md:justify-start">
                        <p className="flex gap-1 font-bold">
                            Connect with me <MoveRight />
                        </p>
                        <a href="mailto:adebayopetergvmc68@gmail.com">
                            <AtSign className="p-2 transition bg-gray-700 rounded-lg hover:bg-gray-600" />
                        </a>
                        <a href="https://github.com/Petersticks1">
                            <Github className="p-2 transition bg-gray-700 rounded-lg hover:bg-gray-600" />
                        </a>
                        <a href="http://www.linkedin.com/in/adebayo-peter-390074319">
                            <Linkedin className="p-2 transition bg-gray-700 rounded-lg hover:bg-gray-600" />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default MobileHero;
