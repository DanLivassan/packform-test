import './App.css';
import { OrderPanel } from './components/Order';
import { ProviderOrder } from './context/orders.context';


function App() {

  return (
    <div className="App">
      <ProviderOrder>
        <OrderPanel></OrderPanel>
      </ProviderOrder>
    </div>
  );
}

export default App;
