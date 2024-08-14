 let input = document.getElementById('inputBox');
 let buttons = document.querySelectorAll('button');
 Math.SQRT1_2  // returns the square root of 1/2
 let string = "";
 let arr = Array.from(buttons); 
 arr.forEach(button =>   {
    button.addEventListener('click', (e) =>{
    if(e.target.innerHTML == '='){
        string = eval(string);
        input.value = string;
        arr = arr.replace(/\^/g,'**');
        input.value = string;
        }
    
    else if(e.target.innerHTML == 'AC'){
        string = "";
        input.value = string;
        }
    else if(e.target.innerHTML == 'DEL'){
        string = string.substring(0, string.length-1);
        input.value = string;
    }
    else if(e.target.innerHTML== '1/2'){
        input.value = string;
    }

    else{string += e.target.innerHTML;
            input.value = string;
            string = string.replace(/\^/g,'**');
            input.value = string;
           // string = string.replace(/\*/g,'***');
            //input.value = string;
        
        }     
    
    })
 
})
   