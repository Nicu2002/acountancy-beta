import {useState} from 'react';
import { useDispatch } from 'react-redux';


import {onAddItem, onValueChange} from '../../Services/addFormServices';

const itemObj = { name: '', job: '', city: '', email: '', phoneNumber: '', id: ''};

const AddForm = () => {
    const [dataState, dataSetState] = useState(itemObj);
    const dispatch = useDispatch();

    const { name, job, city, email, phoneNumber } = dataState;

    return(
        <div className="w-1/4 h-max px-4 py-3 border border-solid border-black bg-zinc-100">
            <h3 className="text-2xl font-bold mb-3">Add new item</h3>
            <form className="flex flex-col items-end">
                <input type="text"
                       onChange={(e) => onValueChange(e, dataState, dataSetState)}
                       className="border border-solid mt-2 h-9 pl-3 w-full"
                       placeholder="name"
                       name="name"
                       value={name}/>
                <input type="text"
                       onChange={(e) => onValueChange(e, dataState, dataSetState)}
                       className="border border-solid mt-2 h-9 pl-3 w-full"
                       placeholder="job"
                       name="job"
                       value={job} />
                <input type="text"
                       onChange={(e) => onValueChange(e, dataState, dataSetState)}
                       className="border border-solid mt-2 h-9 pl-3 w-full"
                       placeholder="city"
                       name="city"
                       value={city}/>
                <input type="text"
                       onChange={(e) => onValueChange(e, dataState, dataSetState)}
                       className="border border-solid mt-2 h-9 pl-3 w-full"
                       placeholder="email"
                       name="email"
                       value={email} />
                <input type="text"
                       onChange={(e) => onValueChange(e, dataState, dataSetState)}
                       className="border border-solid mt-2 h-9 pl-3 w-full"
                       placeholder="phone number"
                       name="phoneNumber"
                       value={phoneNumber}/>
                <button
                    type="button"
                    className="mt-2 w-24 h-7 border border-solid bg-white float-right"
                    onClick={() => onAddItem(dataState, dispatch)}
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddForm;