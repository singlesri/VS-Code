import Course from './Course';
import Footer from './Footer';
import Html from './assets/t1.jpeg';
import tshirt from './assets/t2.jpeg';
import tee from './assets/t3.jpeg'

function CourseList(){

    const courses = [
        {
            name: "HTML", 
            price: "199$", 
            image: Html, 
            rating: 5, 
        },
        {
            name: "CSS", 
            price: "99$", 
            image: tshirt, 
            rating: 5,
        },
        {
            name: "JS", 
            price: "299$", 
            image: tee, 
            rating: 4,
        }
    ]

    const coursesList = courses.map(
        (course) => 
        <Course name={course.name) image={course.image} price = {course.price} />)

    return(
    );
}

export default CourseList