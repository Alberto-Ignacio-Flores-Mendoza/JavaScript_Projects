(function () {

    //get variable with document.queryselector
    const customerImage = document.querySelector('.img-card');
    const customerName = document.querySelector('.customer-name');
    const customerText = document.querySelector('#customer-text');

    //target buttons
    const buttons = document.querySelectorAll('.btn');

    //set index and an empty array
    let index = 0;
    const customers = []; 


    //customer constructor
    function Customer(img, name, text ){

        this.img = img;
        this.name = name;
        this.text = text;

    }

    function createCustomer(img, name, text){
        let Img = `${img}.jpg`; //change image
        let customer = new Customer(Img, name, text); //create customer
        customers.push(customer); // push customer into array

    }

    createCustomer(0, 'John', '  0 text text text text text text text text text text text text text text text text text text ');
       
    customerImage.src=customers[index].img;
    customerName.textContent=customers[index].name;
    customerText.textContent=customers[index].text;
    
    createCustomer(1, 'Robert', ' 1 text text text text text text text text text text text text text text text text text text ');
    createCustomer(2, 'wanda', ' 2 text text text text text text text text text text text text text text text text text text ');
    createCustomer(3, 'max', ' 3 text text text text text text text text text text text text text text text text text text ');
    createCustomer(4, 'linda', ' 4 text text text text text text text text text text text text text text text text text text ');
    



    buttons.forEach( function(button){

        button.addEventListener('click', function(){
            

            if(button.classList.contains('prevBtn')){
               
                if(index === 0){
                    index=customers.length;
                }
                index--;
                
                customerImage.src=customers[index].img;
                customerName.textContent=customers[index].name;
                customerText.textContent=customers[index].text;
            }

            if(button.classList.contains('nextBtn')){
              

                index++;
                
                if(index === customers.length){
                    index= 0;
                }
               
                customerImage.src=customers[index].img;
                customerName.textContent=customers[index].name;
                customerText.textContent=customers[index].text;
            }
        })
    });


    

}) ()