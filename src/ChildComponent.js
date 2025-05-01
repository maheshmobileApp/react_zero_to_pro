const ChildComponent = (props) => {
    console.log(props.userData);
    const {name, age,address} = props.userData;
    return (
        <div>
            <h1>Child Component</h1>
            <p> Name: {name} </p>
            <p> Age: {age} </p>
            <p> City: {address.city} </p>
        </div>)

}
export default ChildComponent;

/*
const userDetails = {
    name: "John",
    age: 35,
    address: {
        city: "New York",
        state: "NY",
        country: "USA"
    }
}

const { name, age, address: { city, state, country } } = userDetails;
*/