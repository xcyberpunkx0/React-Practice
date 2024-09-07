
import './App.css';

function PurchaseButton(){
  return (
  <button onClick={()=>{alert("Purchase Complete")}}>
      Purchase
    </button>
    );
  
}


function App() {
  return (
    <div>
      <h1>50% Sale</h1>
      <h2>Item: Small Shirt</h2>
      <PurchaseButton />
    </div>
  );
}

export default App;
