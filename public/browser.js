
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
        .post("/create-item", { reja: createField.value })
        .then((response) => {
            document
                .getElementById("item_ul")
                .insertAdjacentHTML("beforeend", itemTemplate(response.data));
            createField.value = "";
            createField.focus();


        })
        .catch((err) => {
            console.log("please try again", err);
        });

})

document.addEventListener("click", function (e) {
    //delete section
    console.log(e.target);

    if (e.target.classList.contains("delete")) {
        if (confirm("You want delete?")) {
            axios
                .post("/delete-item", { id: e.target.getAttribute("data-id") })
                .then((response) => {
                    console.log(response.data);
                    e.target.parentElement.parentElement.remove();

                })
                .catch((err) => {
                    console.log("please try again", err);
                });

        }
    }
    // edit section

    if (e.target.classList.contains("edit")){
        let userInput =   prompt("O'zgartirish kiriting", e.target.parentElement.parentElement.querySelector(".item-text").innerHTML);
        if (userInput){
           axios.post("/edit-item", {id: e.target.getAttribute("data-id"),
       new_input: userInput,
         })
         .then( response => {
           console.log(response.data);
           e.target.parentElement.parentElement.querySelector(".item-text").innerHTML = userInput;
         } )
         .catch( err => {
           console.log("qayta harakat qiling");
         } )
        }
       }
   });
   
   document.querySelector(".clean-all").addEventListener("click", function() {
   axios.post("/delete-all", {delete_all: true }).then(response => {
       alert(response.data.state);
       document.location.reload();
   })

});


