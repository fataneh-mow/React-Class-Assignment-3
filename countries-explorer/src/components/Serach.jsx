import { IoIosSearch } from "react-icons/io";

export default function Search ({searchTerm, setSearchTerm}) {    
    return (
        <div className="mx-auto w-1/2">
            <div className="flex bg-gray-100 shadow-md rounded-md">
                <span className="mx-1 text-blue-400">
                    <IoIosSearch  className="mt-3"/>
                </span>
                <input 
                    type="text" 
                    placeholder="Search for country ..." 
                    className="bg-gray-100 my-2 focus:border-none focus:outline-none text-gray-400"
                    value={searchTerm}
                    onChange={(e) => 
                        // e.preventDefault();
                        setSearchTerm(e.target.value)
                    }
                />
            </div>
        </div>
    )
}