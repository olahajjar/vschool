$("#btn").click(function() {
  var counterh = 0;
  var counterm = 1;
  var counters = 20;
  var repeat = setInterval(function() {
      counters--;
    if(counters<= 0 && counterm>0) {
    counterm--;
    counters = 59;
    }else if(counterm<= 0 && counterh>0) {
    counterh--;
    counterm = 59;
    }else if(counterm<=0 && counterh<=0 && counters<=0) {
    $("#boom").html("the world has ended");
        clearInterval(repeat);
    }
    $("#hour").html(counterh);
      $("#min").html(counterm);
      $("#sec").html(counters);
  }, 1000)
});