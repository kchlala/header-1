var header = document.getElementById("header")
window.onscroll=function() {
  if (this.scrollY >80) {
    header.classList.add("header-active")
  }
  else {
    header.classList.remove("header-active")
  }
}

 var loading = document.querySelector(".loading")
 window.onload= function() {
   setInterval(() => {
     loading.classList.add("d-none")
     document.body.style.overflowY="scroll"
   }, 2000);
 }