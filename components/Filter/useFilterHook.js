import {useState} from "react";
import {useDispatch} from "react-redux";
import {setFilter} from "../../store/usersSlice";


const useFilterHook = () => {
    const [term, setTerm] = useState('');
    const [filterName, setFilterName] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(setFilter({term, filterName}));
    }

    const onChangeFilter = (filterName) => {
        setFilterName(filterName);
    }

    const onClearFilter = () => {
        dispatch(setFilter({term: '', filterName: ''}));
    }
    return {term, setTerm, onSubmit, onChangeFilter, onClearFilter};
};

export default useFilterHook;