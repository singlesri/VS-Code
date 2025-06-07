import PropTypes, { func } from 'prop-types';
import HTML from './assets/t1.jpeg'
import { useState } from 'react';

const course1 = "HTML"

function Course(props) {

    // let purchased = false;
    const [purchased, setPurchased] = useState(false);

    function BuyCourse(discount,) {
        console.log(props.name, "purchased with", discount, "% discount");
        setPurchased(true);
        console.log(purchased);
        
    }

        return (
            props.name && <div className="card">
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
                <button onClick={(event)=> {BuyCourse(20); console.log(event);}}>Buy Now</button>
                <button onClick={()=> props.delete(props.id)}>Delete</button>
                <p>{purchased ? "Already Purchased": "Get it Now"}</p>
                <br />
                <span>{props.rating}</span> 
            </div>
        );
}

Course.defaultProps = {
    name : "Sample Default",
    price : "Not set",
    image : HTML
};

Course.propTypes = {
    name : PropTypes.string,
    rating : PropTypes.number,
    show : PropTypes.bool
}

export default Course
