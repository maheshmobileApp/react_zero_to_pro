
import SubChildComponent from './SubChildComponent';
import {createContext,useContext} from 'react' // step 1 : imporrt createContext and useContext
const UserContext = createContext(); // step 2 : create context
export const useUserData = () => useContext(UserContext); // step 3 : create a custom hook

const UserDataComponent = () => {
    const user = { name: "John", age: 30, city: "New York" };
    return (
        <div>
            <h1>User Data Component</h1>
            {/* // step 4 : provide the context value */}
            <UserContext.Provider value={user}> 
                <ParentComponent />
                </UserContext.Provider>
        </div>)

}
export default UserDataComponent;


const ParentComponent = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent/>
        </div>)

}


const ChildComponent = () => {

    return (
        <div>
            <h1>Child Component</h1>
            <SubChildComponent  />
        </div>)

}





















/* app -> Parent -> Child -> SubChild

const UserDataComponent = () => {
    const user = { name: "John", age: 30, city: "New York" };
    return (
        <div>
            <h1>User Data Component</h1>
            <ParentComponent data={user} />
        </div>)

}
export default UserDataComponent;

const ParentComponent = ({ data }) => {
    return (
        <div>
            <h1>Parent Component</h1>
            <p>Name: {data.name}</p>
            <ChildComponent data={data} />
        </div>)

}

const ChildComponent = ({ data }) => {

    return (
        <div>
            <h1>Child Component</h1>
            <SubChildComponent data={data} />
        </div>)

}

const SubChildComponent = ({ data }) => {

    return (
        <div>
            <h1>SubChildComponent</h1>
            <p>Name: {data.name}</p>
            <p>Age: {data.age}</p>
            <p>City: {data.city}</p>
        </div>)

}

*/