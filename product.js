if (
  localStorage.getItem("loginDetalis") == null ||
  localStorage.getItem("loginDetalis") === "false"
) {
  alert("Please login first");
  window.location = "./index.html";
}

var cardContiner=document.getElementById("cardContiner");

let productList = [];

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
      tdel2.textContent=i.medicineName;
      tableRowEl.appendChild(tdel2);
  
      let tdel3 = document.createElement('td');
      tdel3.classList.add("Homepage_SecondaryText");
      tdel3.textContent=i.medicineBrand
      tableRowEl.appendChild(tdel3);
  
  
      let tdel4 = document.createElement('td');
      tdel4.classList.add("Homepage_PrimaryText");
      tdel4.textContent = ` ${i.expiryDate}`;
      tableRowEl.appendChild(tdel4);
  
      let tdel5 = document.createElement('td');
      tdel5.classList.add("Homepage_SecondaryText");
      tdel5.textContent =`${i.unitPrice}` ;
      tableRowEl.appendChild(tdel5);

      
      let tdel6 = document.createElement('td');
      tdel6.classList.add("Homepage_SecondaryText");
      tdel6.textContent =`${i.stock}` ;
      tableRowEl.appendChild(tdel6);

      cardContiner.appendChild(tableRowEl)

  
    }
  }

let url = "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products"
    let options = {
      method: "GET"
    };
  
    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonData) {
        productList=jsonData
        displayResults(jsonData);
      });


      function filterValue(){
        let count = 0;
        let productDetails = [];
        const presentDate = new Date();
        if (productList.length > 0) {
          for (let i = 0; i < productList.length; i++) {
            if (
              !$("#expired").is(":checked") &&
              new Date(productList[i].expiryDate) < presentDate
            ) {
              continue;
            } else if (
              !$("#stock").is(":checked") &&
              productList[i].stock < 100
            ) {
              continue;
            } else {
              count+=1;
              productDetails.push( productList[i])
            }
          }
        }
        $(".ordersCountvalu").html(count);
        displayResults(productDetails);
      }



      $(".filteCheck").on("change",function(){
          filterValue()
      })


      $("#logout").click(function () {
        localStorage.setItem("loginDetalis", false);
        window.location = "./index.html";
      });
    
  
  

  




