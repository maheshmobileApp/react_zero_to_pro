/*
Logical && Operator
The logical && operator is used to conditionally render a component or element based on a boolean expression.
{condition && <Component />}
*/

const LogicalAndOperatorComponent = (props) => {
    const { isLoggedIn } = props;
    return (
        <div>
            <h1>LogicalAndOperatorComponent</h1>
            {isLoggedIn && <p>You are logged </p>}
            </div>)
}
export default LogicalAndOperatorComponent;