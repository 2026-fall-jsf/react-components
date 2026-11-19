import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaToppings } from './PizzaToppings';
import { TsteeleComponent } from './TsteeleComponent';

const App = () => {

  return (
    <div
      className='p-3'
    >
      <h1>
        Our React components...
      </h1>
      <PizzaToppings />
      <TsteeleComponent />
    </div>
  );
};

export default App;
