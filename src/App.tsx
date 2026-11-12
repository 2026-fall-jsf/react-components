import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const PizzaToppings = () => (
  <h2>
    Choose your pizza toppings
  </h2>
);

const App = () => {
  

  return (
   <div>
      <h1>
        Our React components
      </h1>
      <PizzaToppings />
    </div>
  );
};

export default App;
