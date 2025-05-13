/*
flex-direction property can have one of the following values:

row
column
row-reverse
column-reverse

The flex-wrap property specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line.

The flex-wrap property can have one of the following values:

nowrap
wrap
wrap-reverse


The justify-content property is used to align the flex items when they do not use all available space on 
the main-axis (horizontally).

The justify-content property can have one of the following values:

center
flex-start
flex-end
space-around
space-between
space-evenly

*/
const FlexContainer  = () => {
    const flexContainerStyle = {
        width: '100px',
        height: '100px',
        backgroundColor: '#f0f0f0',
        margin: "10px",
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',  
        border: '1px solid #000',        
    };

    const parentDivStyle = { display: 'flex',
        //  flexDirection: 'column',
          height: '30vh',
           backgroundColor: '#78f0f0',
        // flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        
        }
    return (
        <div>
            <h1>Flex Container</h1>
          <div style={parentDivStyle}>
                <div style={flexContainerStyle} >1</div>
                <div style={flexContainerStyle} >2</div>
                <div style={flexContainerStyle} >3</div> 
         </div  >     
        </div>
    );
}

export default FlexContainer;
