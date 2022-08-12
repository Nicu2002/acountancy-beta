import useErrorHook from "./useErrorHook";

const ErrorModal = () => {
    const {style, error} = useErrorHook();
    return (
        <div
            className={style}
        >
            <h1
                className="mt-[30%]"
            >
                {error}
            </h1>
        </div>
    );
};

export default ErrorModal;