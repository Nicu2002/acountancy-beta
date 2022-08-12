import FilterMenu from "../FilterMenu";
import useFilterHook from "./useFilterHook";


const Filter = () => {
    const {term, setTerm, onSubmit, onChangeFilter, onClearFilter} = useFilterHook();

    return (
        <>
            <form className="ml-40 mt-4 flex" onSubmit={onSubmit}>
                <input
                    className="w-2/5 h-8 border border-solid border-black px-4"
                    type="text"
                    name="term"
                    placeholder="Search"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}/>
                <button
                    className="w-16 h-8 bg-black text-white"
                    >
                    go
                </button>
            </form>
            <div className="flex mt-6 items-center">
                <FilterMenu onChangeFilter={onChangeFilter}/>
                <button
                    className="bg-red-600 text-white h-max py-1.5 ml-6 px-3 rounded hover:bg-red-700"
                    onClick={()=> onClearFilter()}
                >
                    Clear filter
                </button>
            </div>
        </>
    );
}

export default Filter;