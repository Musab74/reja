console.log("Frontend ishga tushdi")

function itemTemplate(item) {
   return `<li 
   class="list-group-item d-flex align-items-center justify-content-between">
    <span class="item-text"> ${item.reja} 
    </span>    
    <div>
      <button data-id="${item._id}" class="edit btn btn-dark btn-sm">O'zgartirish</button>
      <button data-id="${item._id}" class="delete btn btn-dark btn-sm">O'chirish</button>
    </div>
  </li>`
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();

    axios
    .post("/create-item" , {reja: createField.value})
    .then((response) => {
        document
        .getElementById("item_ul")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data)); 
        createField.value = "";
        createField.focus();


    })
    .catch((err) => {
        console.log("please try again", err);
    } );

})