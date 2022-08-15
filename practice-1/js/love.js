document.getElementById('yes-btn').addEventListener('click', function () {
    const text = document.getElementById('text');
    text.innerText = 'I Love You';
    
})
document.getElementById('no-btn').addEventListener('click', function () {
    const text = document.getElementById('text');
    text.innerText = 'I Hate You!!';
    
})


let count = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    count++;
    const inputField = document.getElementById('input-field').value

    const mainContainer = document.getElementById('content-container');
    const tableRow = document.createElement('tr')
    tableRow.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputField}</td>
    <td>
    <button class="border border-0 bg-primary text-white rounded delete-btn">Delete</button>
    <button class="border border-0 bg-secondary text-white rounded edit-btn">Edit</button>
    </td>
    `
    mainContainer.appendChild(tableRow);
    document.getElementById('input-field').value = '';
    const deleteBtn = document.getElementsByClassName('delete-btn');
    for (let button of deleteBtn) {
        button.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display='none'
        })
    }
    const editBtn = document.getElementsByClassName('edit-btn');
    for (let button of editBtn) {
        button.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.textDecorationLine='line-through'
        })
    }
    

})
    
  

