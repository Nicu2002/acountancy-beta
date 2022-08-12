

const FilterMenu = ({onChangeFilter}) => {

    return (
        <div className="ml-32">
            <button
                className="text-white bg-black px-3 py-0.5 rounded"
                value="Name"
                onClick={(e) => onChangeFilter(e.target.value)}
            >
                Name
            </button>
            <button
                className="text-white bg-black px-3 py-0.5 ml-3 rounded"
                value="City"
                onClick={(e) => onChangeFilter(e.target.value)}
            >
                City
            </button>
            <button
                className="text-white bg-black px-3 py-0.5 ml-3 rounded"
                value="Email"
                onClick={(e) => onChangeFilter(e.target.value)}
            >
                Email
            </button>
            <button
                className="text-white bg-black px-3 py-0.5 ml-3 rounded"
                value="Job"
                onClick={(e) => onChangeFilter(e.target.value)}
            >
                Job
            </button>
            <button
                className="text-white bg-black px-3 py-0.5 ml-3 rounded"
                value="Date created"
                onClick={(e) => onChangeFilter(e.target.value)}
            >
                Date created
            </button>
            <button
                className="text-white bg-black px-3 py-0.5 ml-3 rounded"
                value="Phone Number"
                onClick={(e) => onChangeFilter(e.target.value)}
            >
                Phone Number
            </button>
        </div>
    );
};

export default FilterMenu;