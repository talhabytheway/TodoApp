function addTodo() {
    let input = document.getElementById('Input');
    let text = input.value.trim();
    input.value = ""
    // https://github.com/talhabytheway
    if (text.length <= 0) return

        // Get ul element
        let ul = document.getElementById('todo-container')

        // Create li element and add inner Text to text
        let li = document.createElement('li');
        li.innerHTML = `<div onclick="this.classList.toggle('checked');"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16" >
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    </svg><span>${text}</span> </div>

    <span onclick="rem()" class="close">
        <svg class="cross" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16" >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
    </span>`

        ul.appendChild(li)

}
    // https://github.com/talhabytheway
let elem = document.getElementById("Input");
elem.onkeyup = function(e){
    if(e.keyCode == 13){
       validate(e);
    }
}
function validate(e) {
    const text = e.target.value;
    addTodo()
}

    // https://github.com/talhabytheway
function rem(){
    var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
}