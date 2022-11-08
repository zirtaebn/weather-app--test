import './Arrow.css';
const arrow = require('../../assets/images/arrow.png');

export const Arrow = () => {

    return(

        <div 
            className="arrow" 
            aria-label='Go back button' 
            style = {{

                backgroundImage: `url(${arrow})`,
            
            }}
        >
           
        </div>
    )
}