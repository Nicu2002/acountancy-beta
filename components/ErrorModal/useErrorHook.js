import {useDispatch, useSelector} from "react-redux";
import {setError} from "../../store/usersSlice";

const useErrorHook = () => {
    const error = useSelector(state => state.users.error);
    const dispatch = useDispatch();

    setTimeout(()=> dispatch(setError(null)), 2000)

    const display = error === null ? "hidden" : "block";
    const style = `absolute top-36 ml-[50%] translate-x-[-50%] w-[25%] h-[25%] bg-red-500 rounded text-center ${display}`;

    return {style, error}
};

export default useErrorHook;