import {initUsers} from '../store/usersSlice';

export const onDataLoaded = (newItems, dispatch, setisLoading) => {
    dispatch(initUsers(newItems))
    setisLoading(false);
}

export const onDelete = (id, users, dispatch) => {
    const data = users.filter(item => item.id !== id);
    dispatch(initUsers(data));
}