import './App.css';
import './components/TopHalf';
import TopHalf from './components/TopHalf';
import BottomHalf from './components/BottomHalf';
import React from 'react';

function App() {
  //new code for backend below
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((i) => setData(i.data));
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
