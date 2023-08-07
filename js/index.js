const cardcontainer = document.getElementById("cardspace");
const mosse = document.getElementById("mossetext");
let mossecount = 0;
let primacartagirata = false;
const items = [
    {value: "bear", image:"img/bear.jpg"},
    {value: "capybara", image:"img/capybara.jpg"},
    {value: "cat", image:"img/cat.jpg"},
    {value: "cow", image:"img/cow.jpg"},
    {value: "dog", image:"img/dog.jpg"},
    {value: "jeko", image:"img/jeko.jpg"},
    {value: "horse", image:"img/horse.jpg"},
    {value: "panda", image:"img/panda.jpg"},
];

function caricamento(){
    mescolavet(items);
    const duplicateItems = [...items];
    const finalvet = items.concat(duplicateItems);
    mescolavet(finalvet); // FACCIO TUTTI STI GIRI PER ESSERE IL PUò CASUALE POSSIBILE

    for(let i=0; i<finalvet.length; i++){
        let card = `<div class="card-container" data-value="${finalvet[i].value}">
                    <div class="thefront" style="background-image: url(${finalvet[i].image}); background-size: 100px; background-position:center"></div>
                    <div class="theback" style="background-image: url(img/puntoint.png); background-size: 100px;background-position:center"></div>                          
                </div>`;

      cardcontainer.innerHTML+= card;

    }
    let cards = document.querySelectorAll(".card-container");
    let i =0;
    let cont = 0;
    var cardname;
    var dimentica = false;
    
    cards.forEach(card => {
        card.addEventListener("click", () => {
            
            if(!(card.classList.contains("matched") || card.classList.contains("flipped") || nonpuoi)){
                card.classList.add("flipped");                
                if(!primacartagirata){
                    primacartagirata = true;
                                       
                }else{
                    
                    if(!(card.getAttribute('data-value') == cardname)){
                        tempcard = card;
                        nonpuoi = true;
                        const myTimeout = setTimeout(myGreeting, 1500);
                    function myStopFunction() {
                    clearTimeout(myTimeout);
                    }
                    }else{
                        card.classList.add("matched");
                        cards.forEach(cardib => {
                            if(cardib.classList.contains("flipped")){
                                cardib.classList.add("matched");
                            }
                        });
                        conti=0;
                        cards.forEach(cardibi => {
                            
                            if(!(cardibi.classList.contains("matched"))){
                                conti++;
                            }
                        });
                        if(conti == 0){
                            wingame=true;
                            vittoria();
                        }                     
                    }
                    primacartagirata=false;
                    mossecounter();
                }
                          
            }
            
            cardname = card.getAttribute('data-value');
            if(dimentica){
                cardname = "";
            }
        })
       
    });
    
   
};

function vittoria(){
    let ris = document.getElementById("risultato");
    ris.innerHTML = `VITTORIA, mosse: ${mossecount} `;
    const myTimeout = setTimeout(refresh, 2000);
                    function myStopFunction() {
                    clearTimeout(myTimeout);
                    }
}
function refresh(){
    location.reload();
}

var nonpuoi = false;
var tempcard;
var wingame=false;
var conti =0;
function myGreeting() {
    let cards = document.querySelectorAll(".card-container");
    tempcard.classList.remove("flipped");
                        cards.forEach(card => {
                            if(card.classList.contains("flipped") && !(card.classList.contains("matched"))){
                                card.classList.remove("flipped"); 
                                dimentica = true;                               
                            }
                        });
                        tempcard = null;
                        nonpuoi=false;

}
const mossecounter = () => {
    mossecount += 1;
    mosse.innerHTML = mossecount;
};

function mescolavet(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

