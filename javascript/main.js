

function myFunction() {
    var count = document.getElementsByClassName("countlike");
    console.log(count[0].innerHTML);
    var sodem = parseInt(count[0].innerHTML) + 1;
    document.querySelector(".countlike").innerHTML = sodem;
    console.log(sodem);
  }