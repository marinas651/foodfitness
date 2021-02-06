 /* formula za izraćunavanje bmr za muškarca i ispis */

 $("#potvrdiM").click(function() {
    var muškoTežina = $("#muškoTežina").val();
    var muškoVisina = $("#muškoVisina").val();
    var muškoGodine = $("#muškoGodine").val();

    var bmr;

    bmr = ((10 * muškoTežina) + (6.25 * muškoVisina) - (5 * muškoGodine) + 5);
    $("#rezultatM").text(parseInt(bmr));
    

});
/* formula za ženu */
$("#potvrdiZ").click(function() {
    var ženskoTežina = $("#ženskoTežina").val();
    var ženskoVisina = $("#ženskoVisina").val();
    var ženskoGodine = $("#ženskoGodine").val();
  
    var bmr;

    bmr = ((10 * ženskoTežina) + (6.25 * ženskoVisina) - (5 * ženskoGodine) + 5);
    $("#rezultatZ").text(parseInt(bmr));

});


var bmrs=document.getElementById("bmr-section");
var bmis=document.getElementById("bmi-section");
var izracunajbmr=document.getElementById("izracunajbmr");
var izracunajbmi=document.getElementById("izracunajbmi");

izracunajbmi.addEventListener("click",()=>{
    bmis.classList.remove("d-none");
    bmis.classList.add("d-flex");
    bmrs.classList.remove("d-flex");
    bmrs.classList.add("d-none");
})

izracunajbmr.addEventListener("click",()=>{
    bmrs.classList.remove("d-none");
    bmrs.classList.add("d-flex");

    bmis.classList.remove("d-flex");
    bmis.classList.add("d-none");
})


/* BMI KALKULATOR */
$("#potvrdiBmi").click(function() {
    var rezultatbmi=document.getElementById("rezultatbmi");
    var bmiVisina = $("#bmi-visina").val() / 100;
    var bmiTežina = $("#bmi-tezina").val();
    var bmi;

    bmi = bmiTežina / (bmiVisina * bmiVisina);
   
    $("#bmirez").text(parseInt(bmi));
rezultatbmi.classList.remove("d-none");
    /* štampa samo do normalna ste težina if else ne radi na dalje */

    if (bmi < 18) {
        $("#bmitez").text("ste neuhranjeni!");
        document.getElementById("bmislika").src = "../images/neuhranjen.png";
    } else if (bmi >18 && bmi< 25) {
        $("#bmitez").text(" imate normalnu težinu!");
        document.getElementById("bmislika").src = "../images/normal.png";
    } else if (bmi>25 && bmi < 29) {
        $("#bmitez").text(" imate povišenu težinu!");
        document.getElementById("bmislika").src = "../images/podgojen.png";
    } else if(bmi>29) {
        $("#bmitez").text("ste gojazni!");
        document.getElementById("bmislika").src = "../images/gojazan.png";
    }

});
