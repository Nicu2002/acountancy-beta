import {v4 as uuid} from 'uuid';
import UsersService from './usersService';
import {addUser, setError} from '../store/usersSlice';

export const onAddItem = ({ name, job, city, email, phoneNumber}, dispatch) => {
    const userService = new UsersService();

    const item = {
        id: uuid(),
        job: job,
        city: city,
        name: name,
        email: email,
        phoneNumber: phoneNumber
    };
    const result = { // on server keys are with uppercase
        id: item.id,
        Job: job,
        City: city,
        Name: name,
        Email: email,
        "Phone Number": phoneNumber
    };

    fetch("http://localhost:3000/api/post", {
        method: "POST",
        body: JSON.stringify(result)
    }).then((res) => {
            if(res.status !== 200) {
                console.log("Something want wrong !");
                dispatch(setError("Post error"));
            }
            else {
                dispatch(addUser(item));
            }
        })
}

export const onValueChange = (e, dataState, dataSetState) => {
    dataSetState({ ...dataState, [e.target.name]: e.target.value });
}