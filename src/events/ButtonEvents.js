const ButtonEvent = () => {

 const buttonClick = () => {
    console.log('Button Clicked');

 }
    return (
        <div>
            <button onClick={buttonClick}>Click Me </button>
        </div>
    );

}

export default ButtonEvent;

//event.preventDefault() 