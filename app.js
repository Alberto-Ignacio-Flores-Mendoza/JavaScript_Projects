
(function(){

    //Get values from html elements
    //querySelectorAll, call all the buttons only once
    //returns all elements with that class, basically makes a list of them
    let screen =document.querySelector('.screen');
    let buttons =document.querySelectorAll('.btn');
    let clear=document.querySelector('.btn-clear');
    let equal=document.querySelector('.btn-equal');

    // we iterate through the list of buttons
    //for each one we listen to when it is clicked
    //run a function when the button is clicked.
    //it will take the dataset value and assign it to a new var.
    // the value was assigned in the html
    //we'll push those values to the screen
    buttons.forEach(function(button){
    button.addEventListener('click', function(e){
        let value = e.target.dataset.num;
        screen.value +=value;
        })
    });


    // We'll use eval() to evaluate the string thats shown on the screen
    equal.addEventListener('click',function(e){
        if(screen.value===''){
            screen.value="Please enter";

        }
        else{
            let answer = eval(screen.value);
            screen.value= answer;
           
        }
    })

    clear.addEventListener('click',function(e){
        screen.value="";
    })
})();