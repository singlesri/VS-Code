import Course from './Course';
import Footer from './Footer';
import Html from './assets/t1.jpeg';
import tshirt from './assets/t2.jpeg';
import tee from './assets/t3.jpeg';

function CourseList() {
    const courses = [
        {
            id:3,
            name: "srinithish",
            price: 300,
            image: tshirt,
            rating: 5,
        },
        {
            id: 2,
            name: "HTML",
            price: 199,
            image: Html,
            rating: 5,
        },
        {
            id: 1,
            name: "CSS",
            price: 99,
            image: tshirt,
            rating: 5,
        },
        {
            id: 2,
            name: "JS",
            price: 299,
            image: tee,
            rating: 4,
        }
    ];

    courses.sort((x,y) => y.price - x.price)

    const vfmCourses = courses.filter((course)=> course.price<200)

    const coursesList = vfmCourses.map(
        (course, index) => 
        <Course key={index} name={course.name} 
        image={course.image} 
        price={course.price}
        rating={course.rating} />
    );

    return (
        <>
            {coursesList}
        </>
    );
}

export default CourseList;
