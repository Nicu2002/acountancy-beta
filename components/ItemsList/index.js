import {LoadingOutlined} from "@ant-design/icons";
import useItemsListHook from "./useItemsListHook";


const ItemsList = ({data}) => {
    const {isLoading, renderItems} = useItemsListHook(data);

    return (
        <div className="overflow-y-scroll mt-16 w-2/3 border-b h-[75vh]">
            {isLoading ? <LoadingOutlined className="text-4xl ml-96"/> : null}
            {renderItems().length === 0 ? <h1>No content!</h1> : renderItems()}
        </div>
    );
}

export default ItemsList;