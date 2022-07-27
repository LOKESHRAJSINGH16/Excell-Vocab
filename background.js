
//this is background.js
//lokesh
chrome.runtime.onMessage.addListener(receiver);

window.word = "";

function receiver(req,sender,sendres){
    window.word = req.text
}