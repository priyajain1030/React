import React, {useState} from 'react';


function CounterComponent(){
    const [counter,Setcounter] = useState(0);
    const IncrementCounter = (event) => {
         Setcounter(counter + 1);
    }

    const DecrementCounter = (event) => {
        Setcounter(counter - 1);
   }



    return(

        <div>
            <p>This is a counter : {counter}</p>
             <button onClick={IncrementCounter}> Increment</button> &nbsp;
             <button onClick={DecrementCounter}> Decrement</button>
    
        </div>
    )
}

export default CounterComponent;