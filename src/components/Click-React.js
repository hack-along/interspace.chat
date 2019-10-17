var offsetLeft = 0;

function Click(e) {
  document.getElementById("roomTitle").innerHTML = this.dataset.zone;


  if (this.dataset.zone == "Living Room") {
    console.log("works");
    let pavle = document.getElementsByClassName("pavle");
    document.getElementById("pavle").style.top = 75 + "px";
    document.getElementById("pavle").style.left = 200 + "px";
  }
  else if (this.dataset.zone == "Dining Room") {
    console.log("works");
    let pavle = document.getElementsByClassName("pavle");
    document.getElementById("pavle").style.top = 75 + "px";
    document.getElementById("pavle").style.left = 300 + "px";
  }
  else if (this.dataset.zone == "Sunset Patio") {
    console.log("works");
    let pavle = document.getElementsByClassName("pavle");
    document.getElementById("pavle").style.top = 200 + "px";
    document.getElementById("pavle").style.left = 300 + "px";
  }
  else if (this.dataset.zone == "Portal Zone") {
    console.log("works");
    let pavle = document.getElementsByClassName("pavle");
    document.getElementById("pavle").style.top = 200 + "px";
    document.getElementById("pavle").style.left = 420 + "px";
  }
  else {
    console.log("works");

  }

}

let clickZones = document.getElementsByClassName("click-zone");
for (var i = 0; i < clickZones.length; i += 1) {
  clickZones[i].addEventListener("Click", Click);
  console.log("works");
}

export default Click;
