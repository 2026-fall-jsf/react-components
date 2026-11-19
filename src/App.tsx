import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaToppings } from './PizzaToppings';
import { MlyComponent } from './MlyComponent';

const App = () => {

  return (
    <div
      className='p-3'
    >
      <h1>
        Our React components...
      </h1>
      <PizzaToppings />
      <MlyComponent />
    </div>
  );
};

export default App;
