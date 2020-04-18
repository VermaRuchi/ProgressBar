import React, {useState} from 'react'
import '../../src/App.css'
function ProgressBar1() {
    return (
        <div>
            <header className="App-header">
                <p>
                    <h1>React Progress Bar</h1>
                </p>
                <Progress done={70}/>
                <Progress done={50}/>
                <Progress done={30}/>
                <Progress done={100}/>
            </header>
        </div>
    )
}

export default ProgressBar1

const Progress = ({done})=>{

    const [style,setStyle] = useState({});
  
    setTimeout(()=>{
      // here we can create a new style
      const newStyle = {
        opacity:1,
        width:`${done}%`,
        transition: 'width 0.3s ease-in-out'
      }
      setStyle(newStyle);
    },1000);
  
    return (
        <div className="progress">
          <div className="progress-done" style={style}>
            {/* wait a little bit and then apply the style. for the we r going to use hooks*/}
               {done}%
          </div>
        </div>
    )
}