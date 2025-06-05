import PropTypes from 'prop-types';
import HTML from './assets/t1.jpeg'

const course1 = "HTML"

function Course(props) {

        return (
            props.name && <div className="card">
                <img src={props.image} alt="" />
                <h3>{props.name}</h3>
                <p>{props.price}</p>
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
