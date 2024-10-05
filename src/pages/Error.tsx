import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <h4 className=' w-full h-screen text-3xl font-semibold pt-4'>
            There was an error...
        </h4>
    );
};
export default Error;
