import React from 'react';


export default function Speaker() {
    function speak() {
        let synth = window.speechSynthesis;
        let textbox = document.getElementById('textbox');
        let voice = new SpeechSynthesisUtterance(textbox.value);
        synth.speak(voice);
    }

    return (
        <div>
            <h1>Text-To-Speech</h1>
            <textarea id="textbox" rows="20" cols="60"></textarea>
            <button id="speakbtn" onClick={speak}>Speak</button>
        </div>
    );
}

