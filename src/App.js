import ExpenseItem from "./components/ExpenseItem";

function App() {
  // Imperative approach by giving step-by-step instructions
  const para = document.createElement('p');
  para.textContent = 'She take the world off my shoulders, if it was ever hard to move';
  document.getElementById('root').append(para);

  return (
    <div className="App">
      <header className="App-header">
        <p>Glimpse of us - Joji</p>
        <ExpenseItem></ExpenseItem>
      </header>
    </div>
  );
}

export default App;
