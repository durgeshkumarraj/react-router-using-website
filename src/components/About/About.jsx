import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12 bg-yellow-300">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            👨‍💻 As a dedicated BE CSE student with a passion for technology, I thrive on the ever-evolving landscape of web development and Java programming. With a keen eye for detail and a commitment to excellence, I specialize in crafting dynamic and user-friendly web experiences while leveraging the power of Java to build robust, scalable applications.
                        </p>
                        <p className='p-4 #F8BBD0'>  My journey into the world of web development began with a curiosity to understand the intricate workings behind the websites we interact with daily. Through hands-on experience and continuous learning, I've honed my skills in HTML, CSS, JavaScript, and various web development frameworks, allowing me to transform ideas into immersive digital experiences that captivate audiences.</p>
                        <p className="mt-4 text-gray-600">

                            Java, with its versatility and robustness, has been a cornerstone of my development journey. From backend server-side development to Android app creation, I harness the power of Java to engineer solutions that not only meet but exceed expectations. My proficiency extends to frameworks like Spring and Hibernate, enabling me to streamline development processes and deliver high-performance applications.
                        </p>


                        <p> Complementing my technical prowess is a solid foundation in computer science fundamentals, acquired through my academic pursuits. I am adept at problem-solving, algorithm design, and data structures, skills that are instrumental in tackling complex challenges and innovating within the ever-evolving tech industry.</p>


                        <p >  Beyond coding, I am an avid advocate for continuous learning and collaboration. I actively seek out opportunities to expand my knowledge, engage with fellow developers, and contribute to the vibrant tech community. Whether it's through hackathons, open-source projects, or online forums, I am committed to pushing boundaries, embracing new technologies, and making a positive impact through my work.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}