import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import TodosPage from "./pages/todosPage/TodosPage";
import AboutPage from "./pages/aboutPage/AboutPage";

function App() {
  return (
    <div className={"pages"}>
        <MainPage/>
        <TodosPage/>
        <AboutPage/>
    </div>
  );
}

export default App;
