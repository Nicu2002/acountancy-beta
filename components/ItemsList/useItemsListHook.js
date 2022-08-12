import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {onDataLoaded, onDelete} from "../../Services/itemListService";
import UsersService from "../../Services/usersService";

const usersService = new UsersService();

const useItemsListHook = (data) => {
    const dispatch = useDispatch();
    const [isLoading, setisLoading] = useState(true);

    useEffect(()=>{
        onDataLoaded(data, dispatch, setisLoading);
    }, []);

    const {users, filter, filterName} = useSelector(state => state.users);
    useEffect(() => {
        if(users !== null) {
            setisLoading(true);
            const fetching = async() => {
                const res = await fetch(`/api/${filterName + ":" +  filter}`).then(res => res.json())
                onDataLoaded(res, dispatch, setisLoading)
            }
            fetching();
        }
    }, [filter, filterName]);

    const renderItems = ()=> {
        const display = isLoading ? "hidden" : "flex";
        const listStyle = `${display} justify-between items-center border border-b-0 px-6 h-16`
        const source = users !== null ? users : data;
        return source.map((item) =>
            <div
                className={listStyle}
                key={item.id}>
                <h5><b>{item.name}</b></h5>
                <div>
                    <div><b>{item.job}</b></div>
                    {item.city}
                </div>
                <div>
                    <b>Email : </b>{item.email}<br/>
                    <b>Phone number : </b>{item.phoneNumber}
                </div>
                <button
                    className="bg-red-500 px-4 h-8 rounded-sm text-white hover:bg-red-400"
                    onClick={() => onDelete(item.id, source, dispatch)}>
                    Delete
                </button>
            </div>
        )
    }

    return {isLoading, renderItems}
};

export default useItemsListHook;