import './App.css';
import Graph from './components/graph';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto text-center shadow-lg text-dark p-5" >
        <h1 className=" py-3 mb-4 bg-dark text-white rounded">Expense Tracker</h1>

        {/* Columns */}
        <div className="row g-4">
          <div className="col-md-6">
            <Graph />
          </div>
          <div className="col-md-6">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
