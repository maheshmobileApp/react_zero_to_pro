/*
success
error
loading
waring 

switch (condition) {
case 'success':
    return <h1>Success</h1>;
 caese 'error':
    return <h1>Error</h1>;


}
*/

const SwitchCaseRenderingComponent = (props) => {
    const { status } = props; // success, error, loading, warning
    switch (status) {
        case 'success':
           return <h1>Success</h1>; 
        case 'error':
            return <h1>Error</h1>;
        case 'loading':       
        return <h1>Loading</h1>;
        case 'warning':
            return <h1>Warning</h1>;
    }    

}

export default SwitchCaseRenderingComponent;
