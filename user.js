
if (
  localStorage.getItem("loginDetalis") == null ||
  localStorage.getItem("loginDetalis") === "false"
) {
  alert("Please login first");
  window.location = "./index.html";
}


let searchInputEl = document.getElementById("searchInput");
let talbleRootEl = document.getElementById('talbleRoot');
let reseEl = document.getElementById("reseEl")


let displayResults = function (value) {
  for (let i of value) {
    let tableRowEl = document.createElement('tr');
    tableRowEl.classList.add("tbodttr");
    tableRowEl.id = i.id;
    let tdel1 = document.createElement('td');
    tdel1.classList.add("UserList_SecondaryText");
    tdel1.textContent = i.id;
    tableRowEl.appendChild(tdel1);

    let tdel2 = document.createElement('td');
    tdel2.classList.add("UserList_PrimaryText");
    let imgel = document.createElement('img');
    imgel.src = i.profilePic
    tdel2.appendChild(imgel)
    tableRowEl.appendChild(tdel2);
    talbleRootEl.appendChild(tableRowEl)

    let tdel3 = document.createElement('td');
    tdel3.classList.add("UserList_SecondaryText");
    tdel3.textContent = i.fullName;
    tableRowEl.appendChild(tdel3);


    let tdel4 = document.createElement('td');
    tdel4.classList.add("UserList_PrimaryText");
    tdel4.textContent = i.dob;
    tableRowEl.appendChild(tdel4);
    talbleRootEl.appendChild(tableRowEl)

    let tdel5 = document.createElement('td');
    tdel5.classList.add("UserList_SecondaryText");
    tdel5.textContent = i.gender;
    tableRowEl.appendChild(tdel5);

    let tdel6 = document.createElement('td');
    tdel6.classList.add("UserList_SecondaryText");
    tdel6.textContent = `${i.currentCity}, ${i.currentCountry}`;
    tableRowEl.appendChild(tdel6);

  }
}



function gobackend() {
  let url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users"
  let options = {
    method: "GET"
  };

  fetch(url, options)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonData) {
      displayResults(jsonData);

    });
}

gobackend();



function searchuser(event) {
  if (event.key === "Enter") {
    event.preventDefault()
    let searchInput = searchInputEl.value;
    if (searchInput.length>= 2) {
      talbleRootEl.textContent = ""
      let url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users?fullName=" + searchInput;
      let options = {
        method: "GET"
      };

      fetch(url, options)
        .then(function (response) {
          return response.json();
        })
        .then(function (jsonData) {
          displayResults(jsonData)

        });
    }
    else {
      alert('input is maxmum two leters')
      talbleRootEl.textContent = ""
      gobackend()
    }

  }
}

searchInputEl.addEventListener("keydown", searchuser);



let resetfun = function (event) {
  searchInputEl.value = ""
  talbleRootEl.textContent = ""
  gobackend()

}

reseEl.addEventListener('click', resetfun)


$("#logout").click(function () {
  localStorage.setItem("loginDetalis", false);
  window.location = "./index.html";
});


