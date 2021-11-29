import logo from './logo.svg';
import './styles/output.css';
import { Button } from 'react-bootstrap';
import Header from './Component/Nav/Header';
import NavSlider from './Component/Slider/NavSlider';
import Body_part from './Component/Body_part/Body_part';



function App() {
  return (
  <div>
     <Header></Header>
    <NavSlider></NavSlider>
    <Body_part></Body_part>
  </div>
  );
}

export default App;
