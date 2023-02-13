// Write code related to dashboard page here
let done_list=JSON.parse(localStorage.getItem("done-list"))||[]
let tbody=document.getElementById("done_user_table")
 function showUser(){
tbody.innerHTML=""
done_list.forEach(function(user){
    let tr=document.createElement("tr")
    let name=document.createElement("td")
    let description=document.createElement("td")
    let startDate=document.createElement("td")
    let endDate=document.createElement("td")
    let priority=document.createElement("td")
    name.textContent=user.name;
    description.textContent=user.description;
    startDate.textContent=user.startDate
    endDate.textContent=user.endDate;
    priority.textContent=user.priority;
   
    tr.append(name,description,startDate,endDate,priority)
   tbody.append(tr)
})


 }

 showUser() 