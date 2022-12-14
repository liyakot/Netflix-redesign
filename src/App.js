import Popular from "./components/Pages/Popular/Popular";
import Films from "./components/Pages/Films/Films";
import Cartoons from "./components/Pages/Cartoons/Cartoons";
import MyList from "./components/Pages/MyList/MyList";
import All from "./components/Pages/All/All";
import Form from "./components/Form/Form";
import NotFoundPage from "./components/Pages/NotFoundPage/NotFoundPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/popular/:id" element={<Popular />} />
        <Route path="/films/:id" element={<Films />} />
        <Route path="/cartoons/:id" element={<Cartoons />} />
        <Route path="/myList/:id" element={<MyList />} />
        <Route path="/All/:id" element={<All />} />
        <Route path="/Form" element={<Form />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
