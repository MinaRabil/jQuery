$('.openNav').click(function(){
    $('.sidenav').animate({width:'250px'} , 50)
    $(".contentBox").animate({marginLeft :'250px'},50)
})
$('.closebtn').click(function(){
    $('.sidenav').animate({width:'0px'} , 50)
    $(".contentBox").animate({marginLeft :'0px'},50)
})




$("#menu a").click(function(e){
    const sectionOffset = $(e.target.getAttribute('href')).offset().top
    console.log(sectionOffset)

    $('html, body').animate({'scrollTop': sectionOffset }, 2000)
})

$('.slider').click(function(){
     $(this).next().slideToggle(500);
    $('.slider').next().not($(this).next()).slideUp(500);
});

function calTime(){
    let calcTime="10 october 2026 9:56:00"
    let now= new Date();
    now= (now.getTime()/1000)
let futer= new Date(calcTime)
futer=futer.getTime()/1000
let differ=(futer - now)

let days = Math.floor(differ/(24*60*60))
let hours = Math.floor((differ-(days*(24*60*60)))/3600)
let min= Math.floor((differ-(days*(24*60*60))-(hours*3600))/60)
let sec= Math.floor(differ-(days*(24*60*60))-((hours*3600))-(min*60))


document.getElementById("dayss").innerHTML=`${days} D`
document.getElementById("hours").innerHTML=`${hours} h`
document.getElementById("mins").innerHTML=`${min} m`
document.getElementById("secon").innerHTML=`${sec} s`

}
setInterval(calTime , 100)



var maxLength = 100;
$('textarea').on("keyup" , function() {
  var length = $(this).val().length;
  var AmountLeft = maxLength-length;
  if(AmountLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $("#chars").text(AmountLeft);
        }
});

