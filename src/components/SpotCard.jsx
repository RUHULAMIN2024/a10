import { Link } from "react-router-dom";

const SpotCard = ({spot}) => {

    const {
        _id,
        tourists_spot_name,
        country_Name,
        image,
        short_description,
        location,
        average_cost,
        seasonality,
        travel_time,
        total_visitors_per_year,
        userEmail,
        userName
    }=spot;
    return (

        <div className="card bg-base-100 shadow-xl">
            <figure><img className="h-52 w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{tourists_spot_name}</h2>
                <p><span className="text-primary font-bold">Country:</span> {country_Name}</p>
                <p className="pt-3 border-t text-sm "><span className=" font-bold">Location:</span> {location}</p>
                <p className=" text-sm "><span className=" font-bold">Seasonality:</span> {seasonality}</p>
                <p className="  text-sm  "><span className=" font-bold">Total Visitors per Year:</span> {total_visitors_per_year}</p>
                
                <div className="flex text-sm justify-between">
                    <p><span className="font-bold">Average Cost:</span> {average_cost}</p>
                    <p><span className="font-bold">Travel Time:</span> {travel_time}</p>
                </div>
                <Link to={`/details/${_id}`} className="w-full mt-5 btn bg-secondary">View Details</Link>
            </div>
        </div>

    );
};

export default SpotCard;