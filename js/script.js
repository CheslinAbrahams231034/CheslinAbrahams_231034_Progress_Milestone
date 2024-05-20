window.alert = function(message, timeout=nul){
    const alert = document.createElement('div');
    alert.classList.add('alert');
    const alertButton = document.createElement('button');
    alertButton.innerText = 'OK';
    alert.setAttribute('style', ` 
    position:fixed;
    top: 100px%;
    left: 50%;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 10px 5px 0 #0000022;

`); 
alert.innerHTML = `<span>${message}</span>`;

/*const appendChild(alertButton);*/
    /*alert.innerText = message;*/
    alert.appendChild(alertButton);
    
    alertButton.addEventListener('click',  (e)=>{
        alert.remove();
    });

    if(time != null){
        setTimeout(()=>{
            alert.remove();  
        }, Number(timeout))
    }
    document.body.appendChild(alert);
        
}
            