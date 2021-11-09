window.addEventListener('load',()=> {
    
    document.getElementById('button-task').addEventListener('click', ()=> {
        let noThings = document.getElementById('number-task').value;
        //creating the object 
        let obj = {"number" : noThings };
        //stringify the object
        let jsonData = JSON.stringify(obj);
        //fetch to route noCups
        fetch('/noThings', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: jsonData
        })
        .then(response => response.json())
        .then(data => {
            
            
        });

          
        
    })

    
})