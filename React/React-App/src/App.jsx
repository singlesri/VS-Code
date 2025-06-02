import './App.css'
import Navbar from './Navbar';
import Course from './Course';
import Footer from './Footer';
import Html from './assets/t1.jpeg';
import tshirt from './assets/t2.jpeg';
import tee from './assets/t3.jpeg'


function App() {
  return (
    <>
    <Course name="HTML" price="199$" image={Html}/>
    <Course name="Butcher" price="$150" image={tshirt}/>
    <Course name="JSS" price="$300" image={tee}/>
    <Course />
    </>
  );
}

export default App
