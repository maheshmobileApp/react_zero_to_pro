/*
Props(Properties): are a way to pass data from one component to another component
Functional components receive props as an argument, making them resuable and flexible.
*/
import ChildComponent from "./ChildComponent";
const ParentComponent = () => {
    const userDetails = {
        name: "John",
        age: 35,
        address: {
            city: "New York",
            state: "NY",
            country: "USA"
        }
    }
    const userDetails1 = {
        name: "Raj",
        age: 40,
        address: {
            city: "Hyderabad",
            state: "NY",
            country: "USA"
        }
    }
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent userData={userDetails}></ChildComponent>
            <ChildComponent userData={userDetails1}></ChildComponent>

            </div>)

}
export default ParentComponent;