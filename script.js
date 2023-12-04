
const task = document.querySelector('.ToDoBox');
const inputBox = document.querySelector('#input');
const cross = document.querySelector('.cross');
const but = document.querySelector('.but');
const overlay = document.querySelector('.overlay');
const container = document.querySelector('.instruction-container')
const InsCross = document.querySelector('.instruction-cross')
const clearList = document.querySelector('.butIns')

inputBox.addEventListener('keyup', function(e){
    if(e.key == 'Enter'){
        addToDo(this.value)
        this.value = "";
    }
})
 
const addToDo = (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item} <i class="bi bi-x-circle cross"></i>`
    task.appendChild(listItem)

listItem.querySelector("i").addEventListener('click', function(e){
    listItem.remove() 
    
})

clearList.addEventListener('click', function(){
    document.querySelector('.ToDoBox').innerHTML = '';
})
}

but.addEventListener('click', function(){
    container.classList.remove('hidden')
    overlay.classList.remove('hidden')
})    

InsCross.addEventListener('click', function(){
    container.classList.add('hidden')
    overlay.classList.add('hidden')
})

document.addEventListener('keyup', function(e){
    if(e.key === 'Escape') {
    container.classList.add('hidden')
    overlay.classList.add('hidden')
}
})
