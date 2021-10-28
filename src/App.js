import './App.css';
import './components/TopHalf';
import TopHalf from './components/TopHalf';
import BottomHalf from './components/BottomHalf';

function App() {
  return (
    <div className="container">
      <div className="content">
       <h1>Notification Factory</h1>
        <TopHalf />
        <BottomHalf />
      </div>
    </div>
  );
}

export default App;
