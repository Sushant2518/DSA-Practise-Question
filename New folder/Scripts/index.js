// Write code related to Home page here 
let userData=JSON.parse(localStorage.getItem("task-list"))||[]
let  userForm=document.getElementById("user_form")
userForm.addEventListener("submit",submitUser)
function submitUser(e){
e.preventDefault();
 const name=document.getElementById("name").value;
 const description=document.getElementById("desc").value;
 const startDate=document.getElementById("start").value;
 const endDate=document.getElementById("end").value;
 const priority=document.getElementById("priority").value
 const user={name,description,startDate,endDate,priority}
  userData.push(user)
  localStorage.setItem("task-list",JSON.stringify(userData))


}