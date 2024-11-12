
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  const navigation = useNavigation();
  return (

    <div>
      <Header></Header>
      {navigation.state === 'loading' ? 'Loading.....': <Outlet></Outlet>}
      <Footer></Footer>
    </div>


  )
}
export default App;