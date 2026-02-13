export default function Filter ({region, setRegion}) {
    const regions = ["Americas", "Africa", "Asia", "Europe", "Oceania"]
    return (
        <div className="mx-auto">
            <select 
                name="region" 
                id="region" 
                className="bg-blue-400 rounded-md px-4 py-2.5 text-blue-50 shadow-md"
                value={region}
                onChange={(e) => {
                    e.preventDefault();
                    setRegion(e.target.value)
                }}
            >
                <option value="">All</option>
                {
                    regions.map((region) => {
                        return (
                            <option key={region} value={region} className="text-blue-50">{region}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}