import {v4 as uuidv4} from 'uuid';
const ListAndUniqeKeysComponent = () => {
    const fruits = [
        { id: uuidv4(), name: 'Apple' },
        { id: uuidv4(), name: 'Banana' },
        { id: uuidv4(), name: 'Orange' },
        { id: uuidv4(), name: 'Mango' }
    ];
    console.log(fruits);
        return (
        <div>
            <h1>Fruits List</h1>
            <ul>
                {
                    fruits.map((value) => {
                        const {id, name} = value;
                        return <li key={id}> {name} </li>
                    }
                    )}
            </ul>
        </div>
    );

}
//Each child in a list should have a unique "key" prop.
export default ListAndUniqeKeysComponent;

/*
Hooks
useState
useEffect
function 
*/