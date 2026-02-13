import { useEffect, useState } from "react"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function CountryCard({ country }) {
    const [isFavorite, setFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const exists = favorites.find((item) => item.cca3 === country.cca3);
        if (exists) {
            setFavorite(true);
        }
    }, [country])

    const handleSaveToLocalStorage = async () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const exists = favorites.find((item) => 
            item.cca3 === country.cca3
        )

        if (exists) {
            const updatedFavorites = favorites.filter(
                (item) => item.cca3 !== country.cca3
            );
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
            setFavorite(false);
        } else {
            favorites.push(country);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            setFavorite(true);
        }
    }

    return (
        <div className="rounded-md p-4 flex gap-4 items-center justify-center my-4">
            <div>
                <img src={country.flags.png || null} alt={country.name.common} className="rounded-md shadow-sm" />
            </div>
            <div className="my-2 grid grid-rows gap-3">
                <div className="flex gap-4">
                    <h2 className="text-semibold text-blue-700 w-60 turnace">
                        {country.name.official || "No name!"}
                    </h2>
                    <button 
                        className={`text-blue-400 hover:text-yellow-400 transition-all ease-out duration-150 ${
                            isFavorite && "text-yellow-400"
                        }`}
                        onClick={handleSaveToLocalStorage}
                    >
                        {
                            isFavorite ? 
                            <FaStar size={20}/> : <FaRegStar size={20}/>
                        }
                    </button>
                </div>
                <div>
                    <p className="text-gray-400 text-small">Population : {country.population || "undefined"}</p>                
                </div>
                <div className="bg-blue-400 rounded-full p-2 w-20 hover:bg-blue-500 transition text-center duration-100 ease-in text-blue-50 shadow-sm border border-blue-500">
                    {country.region || "undefined"}
                </div>
            </div>
        </div>
    )
}