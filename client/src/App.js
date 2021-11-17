import './App.css';
import './components/TopHalf';
import TopHalf from './components/TopHalf';
import BottomHalf from './components/BottomHalf';
import React from 'react';

// const data = [
//   {
//     name: 'Anna',
//     telephone: '9173455445',
//     email: 'john.meyers@mfa.gov.hu'
//   },
//   {
//     name: 'Dzsoni',
//     telephone: '3476965676',
//     email: 'johnpmeyers20@yahoo.com'
//   }
// ];

function App() {
  //new code for backend below
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  //new code for backend above

  const handleDragStart = e => {
    e.dataTransfer.setData("text", e.target.id);
  }
  const handleDragEnterLeave = e => {
    if(e.type === "dragenter") {
      e.target.classList.add('drag-enter');
    } else {
      e.target.classList.remove('drag-enter');
    }
  }
  const handleOverDrop = e => {
    e.preventDefault(); 
    if (e.type !== "drop") {
      return;
    }
    var draggedId = e.dataTransfer.getData("text");
    var draggedEl = document.getElementById(draggedId);
  
    if (draggedEl.parentNode === e.target) {
      e.target.className = "";
      return; 
    }
    draggedEl.parentNode.removeChild(draggedEl);
    e.target.appendChild(draggedEl); 
    e.target.className = "";
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Notification Factory</h1>
        <TopHalf
          handleDragEnterLeave={handleDragEnterLeave}
          handleOverDrop={handleOverDrop}
        />
        <BottomHalf data={data}
          handleDragStart={handleDragStart}
          handleDragEnterLeave={handleDragEnterLeave}
          handleOverDrop={handleOverDrop}
        />
      </div>
    </div>
  );
}

export default App;
