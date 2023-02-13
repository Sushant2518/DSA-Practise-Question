// Write code related to dashboard page here
let userData = JSON.parse(localStorage.getItem("task-list")) || [];
let priority_list = JSON.parse(localStorage.getItem("priority-list")) || [];
let tbody = document.getElementById("dashboard_user_table");
let task_count = document.getElementById("task-count");
let dofilter = document.getElementById("filter");
dofilter.addEventListener("change", filterby);
function filterby() {
  let value = dofilter.value;
  userData = JSON.parse(localStorage.getItem("task-list"));
  if (value == "Low") {
    userData = userData.filter((user) => {
      return user.priority == "Low";
    });
    showUser();
  } else if (value == "High") {
    userData = userData.filter((user) => {
      return user.priority == "High";
    });
    showUser();
  } else if (value == "Medium") {
    userData = userData.filter((user) => {
      return user.priority == "Medium";
    });
    showUser();
  } else {
    userData = JSON.parse(localStorage.getItem("task-list"));
    showUser();
  }
}

function showUser() {
  task_count.textContent = userData.length;
  tbody.innerHTML = "";
  userData.forEach(function (user, index) {
    let tr = document.createElement("tr");
    let name = document.createElement("td");
    let description = document.createElement("td");
    let startDate = document.createElement("td");
    let endDate = document.createElement("td");
    let priority = document.createElement("td");
    let add = document.createElement("td");
    name.textContent = user.name;
    description.textContent = user.description;
    startDate.textContent = user.startDate;
    endDate.textContent = user.endDate;
    priority.textContent = user.priority;
    add.textContent = "Add";
    add.addEventListener("click", function () {
      priority_list.push(user);
      localStorage.setItem("priority-list", JSON.stringify(priority_list));
      userData.splice(index, 1);
      localStorage.setItem("task-list", JSON.stringify(userData));
      showUser();
    });
    tr.append(name, description, startDate, endDate, priority, add);
    tbody.append(tr);
  });
}

showUser();
