import './App.css';
import OrderTable from './components/OrderTable';
import { data } from './data/data';
import { formatOrder } from './utils/format-order';

function App() {
  const orders = formatOrder(data)
  return (
    <div className="App">
      <OrderTable orders={orders}></OrderTable>
    </div>
  );
}

export default App;
