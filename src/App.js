import './App.css';
import './components/TopHalf';
import TopHalf from './components/TopHalf';
import BottomHalf from './components/BottomHalf';

function App() {
  return (
    <div className="container">
      <h1>Notification Factory</h1>
      <TopHalf />
      <BottomHalf />
    </div>
  );
}

export default App;
