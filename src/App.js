import { Provider } from "react-redux";
import "../src/App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const appRouter = createBrowserRouter([{
  path: '/',
  element: <Body />,
  children: [{
    path: '/',
    element: <MainContainer />
  },{
    path: 'watch',
    element: <WatchPage />
  }]
}])

function App() {
  return (
    
    <Provider store={store}>
      
    <div className="App bg-purple-100 min-h-screen overflow-hidden">
      <Head />
      <RouterProvider router={appRouter} />
    </div></Provider> 
  );
}

export default App;
