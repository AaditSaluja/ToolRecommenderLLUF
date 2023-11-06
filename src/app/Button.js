import React from 'react';

function DisplayData({ data, onButtonClick, pressedButtons }) {
    return (
      <div>
        {data.map((item, index) => (
          
          <div key={index}>
            {/* <button>{JSON.stringify(item)}</button>
            {JSON.stringify(item)} */}
            {Object.keys(item)
            .map(key => (
              <button key={key}
              className= {`button ${item[key] === pressedButtons[index] ? 'active-button' : ''}`}
               style = {{
                padding: "10px",
                margin: "10px",
                borderRadius: "10px",
                width: "20vw",
              }}
              onClick={() => onButtonClick(index, item[key])}
              >
                {item[key]}
              </button>
            ))
          }
          </div>
        ))}
      </div>
    );
  }
  
  export default DisplayData;