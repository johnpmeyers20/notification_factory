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
  // console.log(data);
  const handleDragStart = e => {
    e.dataTransfer.setData("text", e.target.id);
    // console.log(e.target.id);
  }
  const handleDragEnterLeave = e => {
    if(e.type === "dragenter") {
      e.target.classList.add('drag-enter');
      console.log(e.target.id, e.target.className);
    } else {
      e.target.classList.remove('drag-enter');
      console.log(e.target.id, e.target.className)
    }
  }
  const handleOverDrop = e => {
    e.preventDefault(); 
    //Depending on the browser in use, not using the preventDefault() could cause any number of strange default behaviours to occur.
    if (e.type !== "drop") {
      return; //Means function will exit if no "drop" event is fired.
    }
    //Stores dragged elements ID in var draggedId
    var draggedId = e.dataTransfer.getData("text");
    //Stores referrence to element being dragged in var draggedEl
    var draggedEl = document.getElementById(draggedId);
  
    //if the event "drop" is fired on the dragged elements original drop target e.i..  it's current parentNode, 
    //then set it's css class to ="" which will remove dotted lines around the drop target and exit the function.
    if (draggedEl.parentNode === e.target) {
      e.target.className = "";
      return; //note: when a return is reached a function exits.
    }
    //Otherwise if the event "drop" is fired from a different target element, detach the dragged element node from it's
    //current drop target (i.e current perantNode) and append it to the new target element. Also remove dotted css class. 
    draggedEl.parentNode.removeChild(draggedEl);
    e.target.appendChild(draggedEl); //Note: "this" references to the current target div that is firing the "drop" event.
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
