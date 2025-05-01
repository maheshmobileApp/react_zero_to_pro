// Ternary Operator : condition ?  expressionIfTrue : expressionIfFalse
// isLoggedIn == true ? <h1>Welcome User</h1> : <h1>Please Login into application</h1>
const TernaryOperatorRenderingComponent = (props) => {
    const { isLoggedIn } = props; // True or False
    return (
        <div>
            <h1>TernaryOperatorRenderingComponent</h1>
            <h1>Welcome User</h1>
            { isLoggedIn ? <p>You are logged in</p> : <p>Please login into application</p> }
        </div>
    );
}
export default TernaryOperatorRenderingComponent;