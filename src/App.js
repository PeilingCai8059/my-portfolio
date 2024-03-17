import logo from './logo.svg';
import './index.css';
import AboutMe from './component/AboutMe/AboutMe';
import LeftContent from './component/left/LeftContent';
import RightContent from './component/right/RightContent';
import Resume from './component/left/Resume';

function App() {
  return (
    <div class="main">
      <div class= "content">
        <div class = "content-block"><LeftContent/></div>
        <div class = "content-block"> <RightContent/></div>
        <div class = "content-block"> <Resume/></div>
        
       
       
      </div>
    </div>
  );
}

export default App;
