function executeMe(){
    console.log("Function says hello!")
    }
    setTimeout(executeMe, 3000);//sets the timer
    
    clearTimeout(timerId);//will remove the timer

    setInterval(executeMe,30000);//will keeep executing every 3secs