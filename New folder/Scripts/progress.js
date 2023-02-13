// Write code related to dashboard page here
let done_list=JSON.parse(localStorage.getItem("done-list"))||[]
let priority_list=JSON.parse(localStorage.getItem("priority-list"))||[]
let tbody=document.getElementById("progress_user_table")
 function showUser(){
tbody.innerHTML=""
priority_list.forEach(function(user,index){
    let tr=document.createElement("tr")
    let name=document.createElement("td")
    let description=document.createElement("td")
    let startDate=document.createElement("td")
    let endDate=document.createElement("td")
    let priority=document.createElement("td")
    let add=document.createElement("td")
    name.textContent=user.name;
    description.textContent=user.description;
    startDate.textContent=user.startDate
    endDate.textContent=user.endDate;
    priority.textContent=user.priority;
    add.textContent="Add"
    add.addEventListener("click",function(){
     done_list.push(user)
     localStorage.setItem("done-list",JSON.stringify(done_list))
     priority_list.splice(index,1)
    localStorage.setItem("priority-list",JSON.stringify(priority_list))
   showUser()
    })
    tr.append(name,description,startDate,endDate,priority,add)
   tbody.append(tr)
})


 }

 showUser()