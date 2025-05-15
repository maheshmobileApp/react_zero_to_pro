import { useUserData } from "./useContext";

const SubChildComponent = () => {
    const user = useUserData();
    return (
        <div>
            <h1>SubChildComponent</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
        </div>)

}



export default SubChildComponent;

