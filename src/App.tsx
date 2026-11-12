import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaToppings } from './PizzaToppings';

const App = () => {

  return (
    <div>
      <h1>Our React components...</h1>
      <p>Munchlax, Barboach, Skitty</p>
      <PizzaToppings />
    </div>
  );
};

export default App;
