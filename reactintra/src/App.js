import './App.css';
import GuessNumAdd from "./components/GuessNumAdd/GuessNumAdd";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GuessNumTable from "./components/GuessNumTable/GuessNumTable";

function App() {
  return (
    <div className="container px-3 py-4 rounded shadow-lg mt-5">
        <div className="m-auto">
            <h1 className="text-center">Examen Intra</h1>
            <GuessNumAdd />
        </div>
        <GuessNumTable />
    </div>
  );
}

export default App;
