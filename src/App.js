import { useState } from 'react';
import data from './data';
import Tours from './components/Tours';
function App() {

  const[plans,setPlans]=useState(data);
  function removePlan(id){
    const newplans=plans.filter(plan=>plan.id!==id);
    setPlans(newplans);
  }
  if (plans.length==0)
  {
    return(
      <div className="refresh-container">
          <div className="refresh">
            <h2>No Tours Left</h2>
            <button className='refresh-btn' onClick={()=>setPlans(data)}>Refresh</button>
          </div>
      </div>
    )
  } 
  return (
    <div className="App">
        <Tours plans={plans} removePlan={removePlan}></Tours>
    </div>      
  );
}
 
export default App;
