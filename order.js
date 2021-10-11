if (
  localStorage.getItem("loginDetalis") == null ||
  localStorage.getItem("loginDetalis") === "false"
) {
  alert("Please login first");
  window.location = "./index.html";
}

var cardContiner=document.getElementById("cardContiner");

let orderList = [];


let displayResults = function (value) {
    cardContiner.textContent=""
    for (let i of value) {
      let tableRowEl = document.createElement('tr');
      tableRowEl.classList.add("Homepage_TableRow");
      tableRowEl.id = i.id;

      let tdel1 = document.createElement('td');
      tdel1.classList.add("Homepage_SecondaryText");
      tdel1.textContent = i.id;
      tableRowEl.appendChild(tdel1);
  
      let tdel2 = document.createElement('td');
      tdel2.classList.add("Homepage_PrimaryText");
      tdel2.textContent=i.customerName;
      tableRowEl.appendChild(tdel2);
  
      let tdel3 = document.createElement('td');
      tdel3.classList.add("Homepage_PrimaryText");
      let parap1el=document.createElement('p')
      parap1el.textContent=` ${i.orderDate}`
      let parap1el1=document.createElement('p')
      parap1el1.textContent=`${i.orderTime}`
      parap1el1.classList.add('Homepage_SecondaryText')
      tdel3.appendChild(parap1el)
      tdel3.appendChild(parap1el1)
      tableRowEl.appendChild(tdel3);
  
  
      let tdel4 = document.createElement('td');
      tdel4.classList.add("Homepage_SecondaryText");
      tdel4.textContent = `$ ${i.amount}`;
      tableRowEl.appendChild(tdel4);
  
      let tdel5 = document.createElement('td');
      tdel5.classList.add("Homepage_PrimaryText");
      tdel5.textContent =`${i.orderStatus}` ;
      tableRowEl.appendChild(tdel5);

      cardContiner.appendChild(tableRowEl)

  
    }
  }

let url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders"
    let options = {
      method: "GET"
    };
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        orderList=jsonData
       displayResults(jsonData);
      });


  
  
  
  
  const getClicked = (data) => {
    let newOderList = [];
    if (orderList.length > 0) {
      for (let i = 0; i < data.length; i++) {
        orderList.filter((item) => {
          if (item.orderStatus == data[i]) {
            newOderList.push(item);
          }
        });
      }
    }

    $(".ordersCount").html(newOderList.length);
    displayResults(newOderList);
  };



  $(".filter_check").click(function () {
    let filterArr = $(".filter_check:checked")
      .map(function () {
        return this.value;
      })
      console.log(filterArr)
    getClicked(filterArr);
  });


  $("#logout").click(function () {
    localStorage.setItem("loginDetalis", false);
    window.location = "./index.html";
  });







  