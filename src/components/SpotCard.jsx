
const SpotCard = ({spot}) => {

    const {
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
                <p><span className="text-primary font-bold">Location:</span> {location}</p>
                <p className=" pt-3 border-t "><span className="text-sm font-bold">Total Visitors per Year:</span> {total_visitors_per_year}</p>
                <div className="flex text-sm justify-between">
                    <p><span className="font-bold">Average Cost:</span> {average_cost}</p>
                    <p><span className="font-bold">Travel Time:</span> {travel_time}</p>
                </div>
                <button className="w-full mt-5 btn bg-secondary">View Details</button>
            </div>
        </div>

    );
};

export default SpotCard;