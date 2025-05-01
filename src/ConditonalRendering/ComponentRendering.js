// JSX <h1>Welcome User</h1

const ComponentVariableRendering = (props) => {
    const  { isLoggedIn } = props; // True or False
    let component;
    if (isLoggedIn) {
        component = <h1>Welcome User</h1>
    } else {
        component = <h1>Please Login into application</h1>
    }

    return (
        <div>
            {component}
        </div>
    );


}

export default ComponentVariableRendering;