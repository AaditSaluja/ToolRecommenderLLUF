"use client"; 
import { useState, useEffect } from 'react';
import DisplayData from './Button.js';
import OpenAI from "openai";

function WaitingScreen() {
    return <div>Waiting for GPT response...</div>;
}
  
function ResultScreen({ result }) {
    console.log(result.message.content);
    return (
        <div style = {{
            padding: "10px",
            margin: "10px",
            color: "#2F5858",
            width: "40vw",
          }}>
        <p> {result.message.content}</p>
        </div>
    );
    
}


function CheckData({ data, apkey}) {
    const [pressedButtons, setPressedButtons] =  useState({});
    const [activeButton, setActiveButton] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [gptResponse, setGptResponse] = useState(null);

    const handleButtonClick = (key, value) => {
        const alreadyPressedButtons = {...pressedButtons};
        // separating this so can perform css actions later separately
        if( key in alreadyPressedButtons){
            alreadyPressedButtons[key] = value;
        } else {
            alreadyPressedButtons[key] = value;
        }
        setPressedButtons(alreadyPressedButtons);
        setActiveButton(key);        

    
    }
    const sendToGPT = async () => {
        let message = "Hi, I want you to help me decide what tool I would enjoy learning the most out of Adobe Illustrator, React/Next JS, Blender, Adobe Premiere, Adobe Photoshop, Canva, Adobe After Effects, Unity, Powerpoint and any tool of your choice based on some of things I like. Answer briefly in 2-3 lines.  ";
        for(let i = 0; i < data.length; i++){
            if(pressedButtons[i] == null){
                console.log("Please select all options");
                return;
            }
            message += "I prefer " + pressedButtons[i] + " between " + data[i][Object.keys(data[i])[0]] + ' and ' + data[i][Object.keys(data[i])[1]] + ". ";
        }

        setIsLoading(true);
        
        const openai = new OpenAI({apiKey: apkey, dangerouslyAllowBrowser: true});
        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: message }],
          model: "gpt-4",
        });
      
        setGptResponse(completion.choices[0]);
        setIsLoading(false);
    }
    
    return (
        
        <div>
            
            {isLoading ? <WaitingScreen /> : (gptResponse ? <ResultScreen result={gptResponse} /> : <DisplayData data={data} onButtonClick={handleButtonClick} pressedButtons={pressedButtons} /> )}
            {isLoading ? null: (gptResponse ? null : <button className='submit-button' onClick={sendToGPT}>Submit</button>)}
        </div>
    )
    ;
}



export default CheckData;