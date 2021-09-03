import Navbar from "./components/Navbar";
import Body from "./components/Body"
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Commentary from "./Commentary";
import CommentOP from "./components/CommentOP";
import Frameforcode from "./components/Projectsides/Frameforcode";
import "./index.css"
import Mypro from "./Myprojects";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Mainp from "./Mainp";
import Projectmcbot from "./components/Projectsides/Projectmcbot";
import Graphicdesigns from "./components/Projectsides/Graphicdesigns";
import Shop from "./components/Shop";
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

      <Route path ="/iclogger" component={Frameforcode} ></Route>
      <Route path ="/graphicdesign" component={Graphicdesigns} ></Route>
      


     </Switch>
      

      
      </BrowserRouter>

      
    </div>
  );
}

export default App;
