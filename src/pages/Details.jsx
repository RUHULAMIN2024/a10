import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const Details = () => {

    const spot = useLoaderData();

    const {
        tourists_spot_name,
        country_Name,
        location,
        image,
        short_description,
        average_cost,
        seasonality,
        travel_time,
        total_visitors_per_year,
        userEmail,
        userName
    } = spot;

    return (
        <div className="container mx-auto my-12">

            <Helmet><title>Dream Wander | Details</title></Helmet>

            <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                <img src={image} alt="" className="max-h-80 dark:bg-gray-500 aspect-video" />
                <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                    <span className="text-xs uppercase dark:text-gray-600">Added By: {userName}</span>
                    <h3 className="text-3xl font-bold">{tourists_spot_name}</h3>
                    <p><span className="text-primary font-bold">Location:</span> {location}</p>

                    <p className="my-6 dark:text-gray-600">{short_description}</p>

                    <div className="pt-3 mb-3 flex-col md:flex-row border-t flex justify-between">
                        <p ><span className=" font-bold">Total Visitors per Year:</span> {total_visitors_per_year}</p>
                        <p ><span className=" font-bold">Seasonality:</span> {seasonality}</p>
                    </div>


                    <div className="flex flex-col md:flex-row justify-between">
                        <p><span className="font-bold">Average Cost:</span> {average_cost}</p>
                        <p><span className="font-bold">Travel Time:</span> {travel_time}</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Details;