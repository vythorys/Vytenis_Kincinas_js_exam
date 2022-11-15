

function weightConverter(valNum) {
  document.getElementById("outputPounds").innerHTML=valNum * 2.2046;
  document.getElementById("outputOunce").innerHTML=valNum * 35.274;
  document.getElementById("outputGrams").innerHTML=valNum * 1000;
}