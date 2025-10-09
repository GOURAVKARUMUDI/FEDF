window.alert("Welcome to JS session");

        let x = prompt("enter x:");
        let num = parseInt(x);
        if(num > 0){
             document.getElementById("demo").innerText = "positive";

        }
        else if(num < 0){
       
            
           document.getElementById("demo").innerText = "negative";   

        }
        else{
            document.getElementById("demo").innerText = "0";   
        }