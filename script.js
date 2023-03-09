const plusBtn=document.querySelector('#plus');
const input=document.querySelector("#inputText");


plusBtn.addEventListener('click', ()=> {
    let task=document.createElement('div');
    task.classList.add("task");
    document.body.appendChild(task);
    
    let li=document.createElement('li');
    li.textContent=`${input.value}`;
    li.classList.add("outputTextStyle")
    task.appendChild(li);

    let checkBtn=document.createElement('button');
    checkBtn.innerText="Done";
    checkBtn.classList.add('tick');
    li.append(checkBtn);
    checkBtn.addEventListener('click',()=> {
        li.classList.add('strikeThrough');
    })
   
    let deleteBtn=document.createElement('button');
    deleteBtn.innerText="delete";
    deleteBtn.classList.add('delete');
    li.append(deleteBtn);

    deleteBtn.addEventListener('click',()=> {
        task.remove();
        
    })

    input.value="";

})

