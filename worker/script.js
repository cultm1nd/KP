//slider
let index = 0;
show();
function show() {
    let i;
    const images = document.getElementsByClassName("image");
    for (i = 0; i < images.length; i++) {
        images[i].style.display = "none";
        images[i].style.width = "450px";
        images[i].style.height = "500px";

    }
    index++;
    if (index > images.length) {
        index = 1;
    }
    images[index - 1].style.display = "block";
    setTimeout(show, 2500);
}

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let form = document.getElementById("myForm");
  let card = form.elements["usercard"].value;
  let text = form.elements["text"].value;
  let price = form.elements["price"].value;
  let number = form.elements["phonenumber"].value;
  let mail = form.elements["usermail"].value;

  if (card === "" || text === "" || price === "" || number === "" || mail === "") {
      alert("Пожалуйста, заполните все поля формы.");
  } else {
      let modal = new bootstrap.Modal(document.getElementById('exampleModal'), {
          keyboard: false
      });
      modal.show();
  }
});
