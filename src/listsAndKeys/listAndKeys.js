/* List And keys*/

const ListAndKeysComponent = () => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
    return (
        <div>
            <h1>Fruits List</h1>
            <ul>
                {
                    fruits.map((value, index)=> {
                      return  <li key={index}> {value} </li>
                    }
                )}
            </ul>
        </div>
    );

}
export default ListAndKeysComponent;