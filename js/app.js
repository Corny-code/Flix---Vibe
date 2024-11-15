$(document).ready(function(){
//Start Header

// Start Back To Top
    $('.btn-backtotops').hide();
    $(window).scroll(function(){
    var getscrolltops = $(this).scrollTop();

    if(getscrolltops >= 370){
        $('.btn-backtotops').fadeIn(1000);
    }else{
        $('.btn-backtotops').fadeOut(1000);
    }
});
// End Back To Top

//Start Nav Bar
  $(window).scroll(function(){

  let position = $(this).scrollTop();
 //   console.log(position);

    if(position >= 200){
        $('.navbar').addClass('navmenus');

    }else{
        $('.navbar').removeClass('navmenus');
    }
});

  $('.navbuttons').click(function(){
    $(this).toggleClass('crossxs');
});
//End Nav Bar

//Start Toggle Ball
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll("header,.navbar,.h3,.menuitems,.toggle,.movie-list-container,.title,.movie-list-title,.bannerheaders,.bannerheaders .display-3,.bannerparagraphs,.subscribes,.subscribes .display-4");

ball.addEventListener("click",()=>{
  items.forEach(item=>{
    item.classList.toggle("active");
  })
  ball.classList.toggle("active");
})
//End Toggle Ball
//End Header 

//Start Movie Section
let rightarrows = document.querySelectorAll(".rightarrow");
let leftarrows = document.querySelectorAll(".leftarrow");
let movielists = document.querySelectorAll(".movie-list");

rightarrows.forEach((rightarrow,i)=>{
  let itemNumber = movielists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  rightarrow.addEventListener("click",() => {
    const ratio = Math.floor(window.innerWidth / 350);
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4 - ratio) >= 0){
      // movielists[i].style.backgroundColor = "gray"
      movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value-300}px)`;
    } else{
      movielists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  // console.log(movielists[i].querySelectorAll("img").length);

  console.log(Math.floor(window.innerWidth/270));
});


leftarrows.forEach((leftarrow,i)=>{
  let itemNumber = movielists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  leftarrow.addEventListener("click",() => {
    const ratio = Math.floor(window.innerWidth / 350);
    clickCounter++;
    if(itemNumber - (4 + clickCounter) + (4 - ratio) <= 0){
      // movielists[i].style.backgroundColor = "gray"
      movielists[i].style.transform = `translateX(${movielists[i].computedStyleMap().get("transform")[0].x.value300}px)`;
    } else{
      movielists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  // console.log(movielists[i].querySelectorAll("img").length);

  console.log(Math.floor(window.innerWidth/270));
});


// Start Trendings menulists
      $('.menulists').click(function(){
         
        // $(this).addClass('activeitems');
        $(this).addClass('activeitems').siblings().removeClass('activeitems');

        let filtervalue = $(this).attr('data-filter');
            filtervalue = $(this).data('filter');
        // console.log(filtervalue);

        if(filtervalue === 'trendings'){
          $('.filters').show();
        }else{
          $('.filters').hide();
        }

      });

// End Trendings menulists
 
//End Movie Section

// Start Footer  Section 

const getyear = document.getElementById('getyear');
const getfullyear = new Date().getUTCFullYear();
    
getyear.textContent = getfullyear;

// End Footer Section 

});


function searchPage() {
  const input = document.getElementById('search').value;
  const pages = {
      "animation": "./project/animation.html", //animation start
      "elemental": "./project/elemental.html",
      "my oni girl": "./project/MyOniGirl.html",
      "kung fu panda 4": "./project/KungFuPanda.html",
      "the wild robot": "./project/ThewildRobot.html",
      "inside out 2": "./project/insideout2.html",
      "wish": "./project/Wish.html",
      "transformers one": "./project/Transformersone.html",
      "horror": "./project/horror.html", //horror start
      "annabelle": "./project/Annabelle.html",
      "the nun": "./project/TheNun1.html",
      "the nun 2": "./project/TheNun2.html",
      "the witch": "./project/TheWitch.html",
      "the conjuring 1": "./project/TheConjuring1.html",
      "the conjuring 2": "./project/TheConjuring2.html",
      "hereditary": "./project/Hereditary.html",
      "action": "./project/action.html", //action start
      "badl and hunters": "./project/BadlandHunters.html",
      "deadpool": "./project/deadpool.html",
      "london has fallen": "./project/LondonHasFallen.html",
      "war": "./project/War.html",
      "vanguard": "./project/Vanguard.html",
      "triple frontier": "./project/TripleFrontier.html",
      "extraction": "./project/Extraction.html",
      "chinese": "./project/chinese.html", //chinese start
      "Go East": "./project/goeast.html",
      "one and only": "./project/oneandonly.html",
      "hidden blade": "./project/hiddenblade.html",
      "dashing youth": "./project/dashingyouth.html",
      "go east": "./project/goeast.html",
      "are you the one": "./project/areyoutheone.html",
      "the old guard": "./project/Theoldguard.html",
      "korean": "./project/drama.html", // k drama start
      "no gain no love": "./project/NogainNolove.html",
      "lovely runner": "./project/lovelyrunner.html",
      "queen of tears": "./project/queenoftears.html",
      "our beloved summer": "./project/ourbrlovedsummer.html",
      "love next door": "./project/lovenextdoor.html",
      "the judge from hell": "./project/TheJudgefromHell.html",
      "twenty five twenty one": "./project/twentyfivetwentyone.html",
      "twinkling watermelon": "./project/twinklingwatermelon.html",
      "doctor slump": "./project/doctorslump.html",
      "thailand": "./project/drama1.html", // Thai start
      "loneliness society": "./project/lonelinesssociety.html",
      "you touch my heart": "./project/youtouchmyheart.html",
      "rak rai": "./project/rakrai.html",
      "23.5": "./project/thai23.5.html",
      "beauty newbei": "./project/beautynewbei.html",
      "royal doctor": "./project/royaldoctor.html",
      "how to make millions before grandma dies": "./project/howtomakemillion.html",
  };

  const page = pages[input.toLowerCase()];
    if (page) {
        window.location.href = page; // Redirects to the selected page
    } else {
        alert("Page not found");
    }
}


function searchPages() {
  const input = document.getElementById('search').value;
  const pages = {
      "animation": "./animation.html", //animation start
      "elemental": "./elemental.html",
      "my oni girl": "./MyOniGirl.html",
      "kung fu panda 4": "./KungFuPanda.html",
      "the wild robot": "./ThewildRobot.html",
      "inside out 2": "./insideout2.html",
      "wish": "./Wish.html",
      "transformers one": "./Transformersone.html",
      "horror": "./horror.html", //horror start
      "annabelle": "./Annabelle.html",
      "the nun": "./TheNun1.html",
      "the nun 2": "./TheNun2.html",
      "the witch": "./TheWitch.html",
      "the conjuring 1": "./TheConjuring1.html",
      "the conjuring 2": "./TheConjuring2.html",
      "hereditary": "./Hereditary.html",
      "action": "./action.html", //action start
      "badl and hunters": "./BadlandHunters.html",
      "deadpool": "./deadpool.html",
      "london has fallen": "./LondonHasFallen.html",
      "war": "./War.html",
      "vanguard": "./Vanguard.html",
      "triple frontier": "./TripleFrontier.html",
      "extraction": "./Extraction.html",
      "chinese": "./chinese.html", //chinese start
      "Go East": "./goeast.html",
      "one and only": "./oneandonly.html",
      "hidden blade": "./hiddenblade.html",
      "dashing youth": "./dashingyouth.html",
      "go east": "./goeast.html",
      "are you the one": "./areyoutheone.html",
      "the old guard": "./Theoldguard.html",
      "korean": "./drama.html", // k drama start
      "no gain no love": "./NogainNolove.html",
      "lovely runner": "./lovelyrunner.html",
      "queen of tears": "./queenoftears.html",
      "our beloved summer": "./ourbrlovedsummer.html",
      "love next door": "./lovenextdoor.html",
      "the judge from hell": "./TheJudgefromHell.html",
      "twenty five twenty one": "./twentyfivetwentyone.html",
      "twinkling watermelon": "./twinklingwatermelon.html",
      "doctor slump": "./doctorslump.html",
      "thailand": "./drama1.html", // Thai start
      "loneliness society": "./lonelinesssociety.html",
      "you touch my heart": "./youtouchmyheart.html",
      "rak rai": "./rakrai.html",
      "23.5": "./thai23.5.html",
      "beauty newbei": "./beautynewbei.html",
      "royal doctor": "./royaldoctor.html",
      "how to make millions before grandma dies": "./howtomakemillion.html",
  };

  const page = pages[input.toLowerCase()];
    if (page) {
        window.location.href = page; // Redirects to the selected page
    } else {
        alert("Page not found");
    }
}
