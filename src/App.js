import './App.css';
import Home from "./components/Home"
import Info from './components/Info';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Testimonial from './components/Testimonial';


function App() {
  return (
    <div className="App">
      <Home/>
      <Info/>
      <Services/>
      <Pricing/>
      <Testimonial/>
      <Blogs/>
      <Footer/>
      
    </div>
  );
}

export default App;
