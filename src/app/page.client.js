"use client"; 
import { useState, useEffect } from 'react';
import DisplayData from './Button.js';
import OpenAI from "openai";



function CheckData({ data, apkey}) {
    const [pressedButtons, setPressedButtons] =  useState({});
    const [activeButton, setActiveButton] = useState(null);


    const handleButtonClick = (key, value) => {
        const alreadyPressedButtons = {...pressedButtons};
        // separating this so can perform css actions later separately
        if( key in alreadyPressedButtons){
            alreadyPressedButtons[key] = value;
        } else {
            alreadyPressedButtons[key] = value;
        }
        setPressedButtons(alreadyPressedButtons);
        // setPressedButtons.key = value;
        // setPressedButtons(prevButtons => ({...prevButtons, key: value }));
        setActiveButton(key);        
        // console.log(key);
        // console.log(alreadyPressedButtons[key]);
    
    }
    const sendToGPT = async () => {
        // const apiEndpoint = 'https://api.openai.com/v1/chat/completions';
        // const requestOptions = {
        //     method: 'POST',
        //     headers: {
        //       Authorization: `Bearer ${apiKey}`,
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //       prompt: 'HIYAYAY',
        //       max_tokens: 50,
        //     }),
        //  };
        
        //   try {
        //     const response = await fetch(apiEndpoint, requestOptions);
        
        //     if (response.ok) {
        //       const data = await response.json();
        //       const generatedText = data.choices[0].text;
        //       console.log(generatedText);
        //     } else {
        //       // Handle API request errors here
        //       console.error('API request failed');
        //     }
        //   } catch (error) {
        //     // Handle network or other errors here
        //     console.error('API request error:', error);
        //   }
        
        let message = "Hi, I want you to help me decide what tool I would enjoy learning the most out of Adobe Illustrator, Adobe Photoshop, Canva, React/Next JS, Blender, Adobe Premiere, and any tool of your choice based on some of things I like. Answer briefly in 2-3 lines.  ";
        message += "I like" + pressedButtons[0] + ", " + pressedButtons[1] + ", " + pressedButtons[2] + ", " + pressedButtons[3] + ", " + pressedButtons[4] + ", " + pressedButtons[5] + ", " + pressedButtons[6] + ", " + pressedButtons[7] + ", ";
        console.log(message);
        const openai = new OpenAI({apiKey: apkey, dangerouslyAllowBrowser: true});
        const completion = await openai.chat.completions.create({
          messages: [{ role: "system", content: message }],
          model: "gpt-4",
        });
      
        console.log(completion.choices[0]);
    }
    
    return (
        
        <div>
            <DisplayData data={data} onButtonClick={handleButtonClick} pressedButtons={pressedButtons} />
            <button className='submit-button' onClick={sendToGPT}>Submit</button>
        </div>
    )
    ;
}



export default CheckData;