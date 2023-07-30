//access key for the api (from unsplash)
const accessKey = "2cfWkpvRMvSTgJ3ipSQijjYQEKvuPZ74PhNdBlHBS2Q";

// store the values from  all of our html elements into constants

const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");

// input data is from the the input tag with search-input id

let inputData= "";
let page= 1; 

//asyn cus of the fetch and response methods
async function searchImages(){ // async because url will fetch all the data from an api, for this we´ll need fetch and response methods
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`; //Dynamic variable, everything is ${} is dynamic, this is where we use our api. Itll use our key word saved in inputData and itll take from the first page by default
    
    // using our dynamic url, we have to use the fetch url then convert to json format
    //fetch method waits for a response from the server, it needs the url and it returns the data in json or xml. For this page it has to be in json
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if(page === 1 ){

        searchResults.innerHTML= "";

    }
    // map results
    //arrow function
    // creates new containers (imagewrapper)
    //second, it creates an image with the results
    // third, creates the links and the discription
    //finally it appends everything to our web page as childs 

    results.map((result) =>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        
        const image= document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement('a');
        imageLink.href= result.links.html;
        imageLink.taget= "_blank";
        imageLink.textContent = result.alt_description;

        //append elements
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);

    });
    //once the results show, increment page counter(so that when we click on show more it takes from the next page
    //show the show more button, alters the css 
    page++;
    if(page>1){
        showMore.style.display= "block";
    }

}
//event listener for the two buttons


formEl.addEventListener("submit", (event)=>{
    event.preventDefault();
    page=1;
    searchImages();
});

showMore.addEventListener("click", ()=>{
    searchImages();
});