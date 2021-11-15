import './App.css';
import './components/TopHalf';
import TopHalf from './components/TopHalf';
import BottomHalf from './components/BottomHalf';


const data = [
  {
    name: 'Anna',
    telephone: '9173455445',
    email: 'john.meyers@mfa.gov.hu'
  },
  {
    name: 'Dzsoni',
    telephone: '3476965676',
    email: 'johnpmeyers20@yahoo.com'
  }
];



function App() {
  console.log(data);
  return (
    <div className="container">
      <div className="content">
        <h1>Notification Factory</h1>
        <TopHalf />
        <BottomHalf data={data} />
      </div>
    </div>
  );
}

export default App;
