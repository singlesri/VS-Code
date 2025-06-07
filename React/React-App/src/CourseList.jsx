import { useState } from 'react';
import Course from './Course';
import Footer from './Footer';
import Html from './assets/t1.jpeg';
import tshirt from './assets/t2.jpeg';
import tee from './assets/t3.jpeg';

function CourseList() {
    const [courses, setCourse] = useState( [
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
            id: 4,
            name: "JS",
            price: 299,
            image: tee,
            rating: 4,
        }
    ]);

    function handleDelete(id){
        const newcourse = courses.filter((course)=> course.id != id)
        setCourse(newcourse);
    }

    courses.sort((x,y) => y.price - x.price)

    const vfmCourses = courses.filter((course)=> course.price<400)

    const coursesList = courses.map(
        (course) => 
        <Course key={course.id} name={course.name} 
        image={course.image} 
        price={course.price}
        rating={course.rating}
        delete={handleDelete}
        id={course.id} />
    );

    return (
        <>
            {coursesList}
        </>
    );
}

export default CourseList;
