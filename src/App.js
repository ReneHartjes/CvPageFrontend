import Navbar from "./components/Navbar";
import Body from "./components/Body"
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Commentary from "./Commentary";
import CommentOP from "./components/CommentOP";

import "./index.css"
import Mypro from "./Myprojects";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Mainp from "./Mainp";
import Projectmcbot from "./components/Projectsides/Projectmcbot";
import Graphicdesigns from "./components/Projectsides/Graphicdesigns";
import Shop from "./components/Shop";
import ProjectIclog from "./components/Projectsides/ProjectIclog";
import ProjectVoiceToText from "./components/Projectsides/ProjectVoiceToText";
import ProjectVoiceC from "./components/Projectsides/ProjectVoiceC";
import Projectafkbot from "./components/Projectsides/Projectafkbot";
import ProjectStepper from "./components/Projectsides/ProjectStepper";
import MyCVpage from "./components/MyCVpage";
import Searchbar from "./components/Searchbar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>

   
    
      <Switch>
        
      <Route path="/projects" component={Mypro}>
      </Route>
      <Route path="/comments" component={Commentary}>
      </Route>
      <Route path="/" component={Mainp} exact></Route>
      
      <Route path ="/mcbot" component={Projectmcbot} ></Route>
      <Route path ="/voicerec" component={ProjectVoiceC} ></Route>
      <Route path ="/iclogger" component={ProjectIclog} ></Route>
      <Route path ="/graphicdesign" component={Graphicdesigns} ></Route>
      <Route path ="/antiafk" component={Projectafkbot} ></Route>
      <Route path ="/arduinothings" component={ProjectStepper} ></Route>
      <Route path ="/cvpage" component={MyCVpage} ></Route>
      <Route path ="/search" component={Searchbar} ></Route>

      <Route path ="/voicetotext" component={ProjectVoiceToText} ></Route>

      


     </Switch>
      

      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
