
const UsersList = () => {

    const users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45 },
        { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 23 },
        { id: 1, name: 'John Doe', email: 'john@example.com', age: 28 },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32 },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45 },
        { id: 4, name: 'Alice Williams', email: 'alice@example.com', age: 23 }
    ];

    return (
        <div>
            <h1>Users List</h1>
            {
                users.map((userInfo) => {
                    return (
                        <UserCard key={userInfo.id} userData = {userInfo}></UserCard>
                    );
                })
            }
            
            {/* <UserCard userData={users[0]} ></UserCard>
            <UserCard userData={users[1]} ></UserCard>
            <UserCard userData={users[2]} ></UserCard> */}

        </div>
    );

}
export default UsersList;

const UserCard = (props) => {
    const { name, email, age } = props.userData;
    return (
        <div>
            <h1>User Card</h1>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Age: {age}</p>
            <p>................</p>
            </div>
        )
}