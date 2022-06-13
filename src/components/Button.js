import React from 'react' ;
import {Link} from 'react-router-dom' ;
import './Button.css';

const styles = ['btn--primary', 'btn--outline'];
const size   = ['btn-medium', 'btn-large']

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0] ;
    const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0] ;

    return (
        <Link to='/sign-up' className='btn-mobie' >
            <button 
            className={`btn ${checkButtonSize} ${checkButtonStyle}`}
            onClick={onClick}
            type ={type}>
                {children}
            </button>
        </Link>
    )
}