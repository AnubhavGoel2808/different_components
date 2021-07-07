import Login from "./components/Login";

import './styles/App.css'
import ParticlesBg from 'particles-bg'
import MainPage from "./components/MainPage";
import Signin from "./components/Signin";
import Forgot from "./components/Forgot";
function App() {
  return (
    
    <div className="App">
    <ParticlesBg type="random" bg={true} />
    {/* <div className="container login">
          <Login></Login>
    </div> */}
    <div>
      <MainPage></MainPage>
    </div>
    {/* <div className="container ">
          <Signin></Signin>
    </div> */}
    {/* <div className="container ">
          <Forgot></Forgot>
    </div> */}
    </div>
  );
}

export default App;
