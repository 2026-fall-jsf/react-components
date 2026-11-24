import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PizzaToppings } from './PizzaToppings';
import { JebashelComponent } from './JebashelComponent';
import { MlyComponent } from './MlyComponent';
import { ELeeComponent } from './ELeeComponent';
import { EgaritaluisComponent } from './egaritaluisComponent';
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
      <EgaritaluisComponent />
      <ELeeComponent />
      <MlyComponent />      
      <JebashelComponent />
    </div>
  );
};

export default App;
