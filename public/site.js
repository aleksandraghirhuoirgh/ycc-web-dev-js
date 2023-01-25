
let mybtn = document.getElementById("get-btn")

mybtn.addEventListener('click', addItem)

function addItem(data) {
    let myInput = document.getElementById('do-it')
    let myList = document.getElementById('todo-list')

    if (myInput.value !== '') {
        let newItem = document.createElement('li')
        let h = document.getElementsByClassName('form-check-label');

        let newBlock =
            `<input onclick="finishTask(${h.length})" class="form-check-input me-1" type="checkbox" value="" id="ch-${h.length}">
       <label id="${h.length}" class="form-check-label" for="ch-${h.length}">${myInput.value}</labeh.lengthl>`


        newItem.innerHTML = newBlock

        newItem.classList.add("list-group-item")
        myList.appendChild(newItem)
        myInput.value = '';

    }
}
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        addItem();
    }
})
id

function finishTask(id) {
    let text = document.getElementById(id);

    if(text.classList.contains('item-completed')) {}
        else {

        }
    
    text.classList.add('item-completed');

}