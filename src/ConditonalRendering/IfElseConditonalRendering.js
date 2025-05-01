/*
if(){

}else{
}
*/

const IfElseConditonalRenderingComponent = (pros) => {
    const { isLoggedIn } = pros;// True or False 
    if (isLoggedIn) {
        return (
            <div>
                
                <h1>Welcome User</h1>
                <p> You are logged in </p>
            </div>
        );
    }else {
        return (
            <div>
                <h1>Welcome User</h1>
                <p> Please Login into application</p>
            </div>)
    }

}

export default IfElseConditonalRenderingComponent;