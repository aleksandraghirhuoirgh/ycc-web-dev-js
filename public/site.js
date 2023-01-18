
let mybtn = document.getElementById("get-btn")

mybtn.addEventListener('click', addItem)

function addItem(data) {
    let myInput = document.getElementById('do-it')
    let myList = document.getElementById('todo-list')

    if (myInput.value !== '') {
        let newItem = document.createElement('li')
        newItem.innerText = myInput.value
        myList.appendChild(newItem)
        myInput.value = ' ';

    }
}
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        addItem();
    }
})