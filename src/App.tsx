import { Toaster } from "react-hot-toast";
import "./App.css";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="flex items-center justify-center / w-full h-full">
      <Notifications />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;
