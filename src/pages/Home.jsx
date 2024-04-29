import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { Typewriter } from 'react-simple-typewriter';
import ContactUs from "../components/ContactUs";
import Features from "../components/Features";
import Slider from "../components/Slider";
import SpotCard from "../components/SpotCard";

const Home = () => {


    const touristSpots = useLoaderData();

    const [country, setCountry] = useState([])


    useEffect(() => {
        fetch('https://server-10-theta.vercel.app/country-name')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])


    return (
        <div className="container mx-auto">
            <Helmet><title>Dream Wander | Home</title></Helmet>
            <Slider></Slider>
            <h2 className="text-center mt-16 text-2xl md:text-4xl font-bold"> <Typewriter loop={0} typeSpeed={80} words={['Best tourist Spots']} /> </h2>
            <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    touristSpots.slice(0, 6).map(spot => <SpotCard spot={spot} key={spot._id}></SpotCard>)
                }
            </div>
            <h2 className="text-center mt-16 text-2xl md:text-4xl font-bold"> <Typewriter loop={0} typeSpeed={80} words={['Choose Your Countriy']} /></h2>
            <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-3 gap-8">

                {
                    country.map(item => (
                        <div>
                            <Link id="clickable" to={`/countryBaseSpot/${item.country}`} key={item._id} className="card transition-all hover:scale-105 bg-base-100 shadow-xl">
                                <figure><img className="h-48 w-full" src={item.image} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">{item.country}</h2>
                                    <p>{item.description}</p>

                                </div>
                            </Link>
                            <Tooltip anchorSelect="#clickable" clickable>
                                <button>Click For Details</button>
                            </Tooltip>
                        </div>
                    ))
                }
            </div>

            <Features></Features>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;