import React from 'react';
import AppBar from './AppBar.jsx'
import '../styles/colors.scss';
import '../styles/index.css';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
    const navigate = useNavigate();
    function handleRegistration() {
        navigate('/role');
    }

    return (
        <>
            <AppBar />

            <div className="min-h-screen bg-[var(--dull-white)] p-8">

                <header className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-[var(--deep-blue)] animate-fadeIn">
                        Welcome to the STUDENT-ALUMNI Connecting Portal!
                    </h1>
                    <p className="mt-4 text-xl text-[var(--navy)] animate-slideIn">
                        Bridging the Gap Between Students and Alumni
                    </p>
                </header>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-slideIn">
                    <h2 className="text-2xl font-semibold text-[var(--deep-blue)]">Connect, Learn, Grow: Your Alumni Network</h2>
                    <p className="mt-4 text-gray-700">
                        Empowering Students and Alumni Together
                    </p>
                    <div className='flex justify-center gap-4'>
                        <img
                            src="https://alumniportal.my/storage/uploads/featuresSetting/5101718349502.jpg"
                            alt="Students and Alumni"
                            className="rounded-lg shadow-lg mt-4 sm:w-1/2"
                        />
                        <img
                            src="https://d1bltcifwhkdae.cloudfront.net/uploads/Header-OnlineLearning-1-1024x735.png"
                            alt="Students and Alumni"
                            className="hidden sm:block sm:w-1/2 rounded-lg shadow-lg mt-4"
                        />
                    </div>
                    <div className="text-center mt-6">
                        <button className='primary-btn mr-5' onClick={handleRegistration}>
                            JOIN OUR COMMUNITY
                        </button>

                    </div>
                </section>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-fadeIn">
                    <h2 className="text-2xl font-semibold text-[var(--deep-blue)]">About Us:</h2>
                    <div className="mt-4 flex flex-col md:flex-row">
                        <img
                            src="https://alumniportal.my/storage/uploads/frontend-section/641719989850.jpg"
                            alt="About Us"
                            className="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-4"
                        />
                        <div className="text-[var(--navy)]">
                            <p>
                                The STUDENT-ALUMNI Connecting Portal is an initiative by the Technical Education Department, Govt. of Rajasthan. It aims to centralize alumni-student interactions, offering a platform for mentorship, career guidance, and lifelong learning. Here, you’ll find opportunities to connect with peers, gain industry insights, and build lasting relationships.
                            </p>
                            <p className="mt-4">
                                <strong>Benefits of Joining:</strong>
                                <ul className="list-disc list-inside mt-2">
                                    <li>Access to expert advice and mentorship from seasoned professionals.</li>
                                    <li>Opportunities to participate in career-enhancing events and discussions.</li>
                                    <li>Expand your professional network and explore job opportunities.</li>
                                </ul>
                            </p>
                            <div className="mt-4">
                                <h3 className="text-xl font-semibold text-[var(--deep-blue)]">Testimonials:</h3>
                                <blockquote className="italic text-gray-700 mt-2">
                                    “The mentorship I received here was invaluable in shaping my career.” – Recent Graduate
                                </blockquote>
                                <blockquote className="italic text-gray-700 mt-2">
                                    “Reconnecting with my institution and helping students has been incredibly rewarding.” – Alumnus
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-slideIn">
                    <h2 className="text-2xl font-semibold text-[var(--deep-blue)]">Features:</h2>
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-[var(--navy)]">
                        <div>
                            <h3 className="text-xl font-semibold">Mentorship:</h3>
                            <p>Connect with experienced alumni mentors for personalized guidance.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Networking:</h3>
                            <p>Build professional relationships with alumni from various industries.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Job Board:</h3>
                            <p>Explore career opportunities and internships.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Events:</h3>
                            <p>Participate in alumni meetups, webinars, and workshops.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Resources:</h3>
                            <p>Access valuable resources like industry reports, webinars, and articles.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-slideIn">
                    <div className="flex flex-col gap-5 md:flex-row">

                        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <img
                                src="https://alumniportal.my/storage/uploads/howItsWork/5001718158099.png"
                                alt="Alumni Spotlight"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-4">
                            <h2 className="text-2xl mb-2 font-semibold text-[var(--deep-blue)]">Connecting Alumni As Mentor</h2>
                            <p className="text-[var(--navy)]">
                                Our platform allows alumni to connect with mentors or coaches who can provide invaluable guidance, advice, or feedback on their personal or professional goals. Enhance your alumni's career and personal growth through structured mentorship programs.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-slideIn">
                    <div className="flex flex-col gap-5 md:flex-row">
                        <div className="block sm:hidden md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <img
                                src="https://alumniportal.my/storage/uploads/howItsWork/2151718349683.jpg"
                                alt="Alumni Spotlight"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-4">
                            <h2 className="text-2xl mb-2 font-semibold text-[var(--deep-blue)]">Event Creation and Management</h2>
                            <p className="text-[var(--navy)]">
                                Our platform allows alumni to connect with mentors or coaches who can provide invaluable guidance, advice, or feedback on their personal or professional goals. Enhance your alumni's career and personal growth through structured mentorship programs.
                            </p>
                        </div>
                        <div className="hidden sm:block md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <img
                                src="https://alumniportal.my/storage/uploads/howItsWork/2151718349683.jpg"
                                alt="Alumni Spotlight"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-slideIn">
                    <div className="flex flex-col gap-5 md:flex-row">
                        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <img
                                src="https://alumniportal.my/storage/uploads/howItsWork/5511718349391.jpg"
                                alt="Alumni Spotlight"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-4">
                            <h2 className="text-2xl mb-2 font-semibold text-[var(--deep-blue)]">Job Postings and Applications</h2>
                            <p className="text-[var(--navy)]">
                                Empower your alumni with career opportunities. Alumni can search and apply for jobs directly through the portal, receiving notifications about new job postings that match their interests or qualifications.
                            </p>
                        </div>

                    </div>
                </section>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-slideIn">
                    <div className="flex flex-col gap-5 md:flex-row">
                    <div className="block sm:hidden md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <img
                                src="https://sayyessyracuse.org/content/uploads/2024/06/Student-Spotlight-_-Trevor-1920px-1080-px.jpg"
                                alt="Alumni Spotlight"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="md:w-1/2 md:pr-4">
                            <h2 className="text-2xl mb-2 font-semibold text-[var(--deep-blue)]">Student Spotlight:</h2>
                            <p className="text-[var(--navy)]">
                                Feature success stories of students who have benefited from the platform. Highlight achievements, internships, or job placements secured through alumni connections.
                            </p>
                        </div>

                        <div className="hidden sm:block md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <img
                                src="https://sayyessyracuse.org/content/uploads/2024/06/Student-Spotlight-_-Trevor-1920px-1080-px.jpg"
                                alt="Alumni Spotlight"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-slideIn">
                    <div className="flex flex-col gap-5 md:flex-row">
                        <div className="md:w-1/2 md:pl-4 mt-4 md:mt-0">
                            <img
                                src="https://lh3.googleusercontent.com/proxy/scy2PzTv5sO1K03Xb9TtroAyAXjSbMaKWg28nBO34vFZK7Wwz7Tx_D4LlfjDU4cZLxw-Ncb0-gC8Fo6bavXsuxil_EMmxjYt"
                                alt="Alumni Spotlight"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pr-4">
                            <h2 className="text-2xl mb-2 font-semibold text-[var(--deep-blue)]">Alumni Spotlight:</h2>
                            <p className="text-[var(--navy)]">
                                Showcase inspiring alumni who have made significant contributions to their fields. Feature their career journeys, advice for students, and involvement in the community.
                            </p>
                        </div>
                    </div>
                </section>


                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md mb-8 animate-fadeIn">
                    <h2 className="text-2xl font-semibold text-[var(--deep-blue)]">Latest News and Updates:</h2>
                    <p className="mt-4 text-[var(--navy)]">
                        Keep users informed about upcoming events, new features, and important announcements.
                    </p>
                </section>

                <section className="bg-[var(--white)] p-6 mb-8 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-[var(--deep-blue)]">Join Now:</h2>
                    <p className="mt-4 text-[var(--navy)]">
                        A prominent call to action button for students and alumni to register or log in. Provide clear instructions for registration.
                    </p>
                    <div className="text-center mt-6">
                        <button className='primary-btn mr-5' onClick={handleRegistration}>
                            Register
                        </button>
                        <button className='primary-btn'>
                            Login
                        </button>
                    </div>
                </section>

                <section className="bg-[var(--white)] p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-[var(--deep-blue)]">Contact Us:</h2>
                    <p className="mt-4 text-[var(--navy)]">
                        Have questions or need assistance? We’re here to help. Reach out to us at <a href="mailto:studentalumniconnect@gmail.com" className="text-[var(--sky-blue)] underline">studentalumniconnect@gmail.com</a> or follow us on social media for the latest updates.
                    </p>
                </section>
            </div>
        </>
    );
};

export default HomePage;

