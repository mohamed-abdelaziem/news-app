import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./core/components/Navbar/Navbar";
import ChageCategoryContextProvider from "./core/Context/ChageCategory.context";
import News from "./core/pages/News/News";
import "./App.css"
function App() {
  return (
    <>
      <ChageCategoryContextProvider>
        <Navbar />
        <News />
      </ChageCategoryContextProvider>
    </>
  );
}

export default App;
