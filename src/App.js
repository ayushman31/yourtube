import { Provider } from "react-redux";
import "../src/App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
    <div className="App bg-purple-100 min-h-screen ">
      <Head />
      <Body />
    </div></Provider>
  );
}

export default App;
