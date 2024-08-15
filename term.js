document.getElementById("myBtn").onclick = function() {myDropdown()};
/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
 function myDropdown() {
   document.getElementById("myDropdown").classList.toggle("show");
 }



document.getElementById("ourServices").onclick = function() {ourServices()};

function ourServices(){
  document.getElementById("ourServices").classList.toggle=("show")
  
}


// FOOTER 
function myFunction(){
  document.getElementById("firstCode").innerHTML= "Hello world";

   document.getElementsByClassName("last-flex")[0].style.backgroundColor = "yellow";
}