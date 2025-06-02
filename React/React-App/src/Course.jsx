import HTML from './assets/t1.jpeg'

const course1 = "This a javascript string implement Method in React"

function Course(props) {
    return (
        <div className="card">
            <img src={props.image} alt="" />
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    );
}

Course.defaultProps = {
    name : "Sample Default",
    price : "Not set",
    image : HTML
};

export default Course
