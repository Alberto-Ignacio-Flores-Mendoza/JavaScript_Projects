(function(){
    const pictures = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6"

    ];

    const buttons = document.querySelectorAll(".btn"); //returns a node list with all the elements that match the selector
    const imgDiv = document.querySelector(".img-container");

    let counter = 0;

    //which button was pressed?

    buttons.forEach(function(button){
        //listen for when a button is clicked
        button.addEventListener("click", function(e) {
            if(button.classList.contains('btn-left')){
                counter--;
                if(counter< 0){
                    counter=pictures.length-1;
                }

                imgDiv.style.background = `url('${pictures[counter]}.jpeg') center/cover, fixed, no-repeat`
                
            }

            if(button.classList.contains('btn-right')){
                counter++;
                if(counter > pictures.length-1 ){
                    counter=0;
                }

                imgDiv.style.background = `url('${pictures[counter]}.jpeg ') center/cover, fixed, no-repeat`
            }
        })
    })

    
})();