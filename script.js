
// ----------------------------add to chart-------------
let items = [
    {
        itemName: "Lily Plant",
        itemImage: "plant1.jpg",
        itemPrice: "15"
    },
    {
        itemName: "Achillea Desert Eve Deep Rose",
        itemImage: "plant2.jpg",
        itemPrice: "11.5"
    },
    {
        itemName: "African Daisy ",
        itemImage: "plant3.jpg",
        itemPrice: "9.5"
    },
    {
        itemName: "African Lily",
        itemImage: "plant4.jpg",
        itemPrice: "12"
    },
    {
        itemName: "African Marigold",
        itemImage: "plant5.jpg",
        itemPrice: "18"
    },{
        itemName: "Alpenrose",
        itemImage: "plant6.jpg",
        itemPrice: "15.5"
    },
    {
        itemName: "Amaryllis",
        itemImage: "plant7.jpg",
        itemPrice: "12.5"
    },
    {
        itemName: "American Lotus",
        itemImage: "plant8.jpg",
        itemPrice: "12.6"
    },
    {
        itemName: "American Wisteria",
        itemImage: "plant9.jpg",
        itemPrice: "9.5"
    },
    {
        itemName: "Angels Fishing Rod",
        itemImage: "plant10.jpg",
        itemPrice: "19"
    },
    {
        itemName: "Anise Hyssop",
        itemImage: "plant11.jpg",
        itemPrice: "13"
    },
    {
        itemName: "Backet Of Gold",
        itemImage: "plant12.jpg",
        itemPrice: "18.5"
    }

]
let addToCartItems = []
function addItems() {
    document.querySelector(".cardContainer").innerHTML = ""
    for (var i = 0; i < items.length; i++) {
        document.querySelector(".cardContainer").innerHTML += `
            <div class="col-md-3">
                <div class="card shadow card${i}">
                    <div class="cardImage">
                        <img src="img/${items[i].itemImage}" alt="${items[i].itemName}">
                    </div>
                    <div class="cardContent">
                        <h3>${items[i].itemName}</h3>
                        <p>$${items[i].itemPrice}</p>
                        <button class=" but" type="button" onclick="addToCart('${i}')">add to cart</button>
                    </div>
                </div>
            </div>
        `
    }
}
addItems()
cartItemsFetch()
function addToCart(elementId){
    addToCartItems.push(items[elementId])
    cartItemsFetch()
}
function deleteItem(elementId){
    addToCartItems.splice(elementId,1);
    cartItemsFetch()
}
function cartItemsFetch(){
    if(addToCartItems.length == 0){
        document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = `
            <div class="card shadow-3">
                <div class="alert alert-danger w-100 text-center m-0">Your cart is empty!!!</div>
            </div>
        `
        document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = 0
        document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = 0
        document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = "none"
    } else {
        let total = 0
        document.querySelector(".mainContainer .addToCartContainer .toggler .cartCount").innerHTML = addToCartItems.length
        document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML = ""
        for(var i=0; i<addToCartItems.length; i++){
            document.querySelector(".mainContainer .addToCartContainer .addedItems").innerHTML += `
            <div class="card shadow cardItem${i}">
            <div class="cardImage">
            <img src="img/${addToCartItems[i].itemImage}" alt="${addToCartItems[i].itemName}">
            </div>
            <div class="cardContent">
            <h3>${addToCartItems[i].itemName}</h3>
            <div class="group">
            <p>$. <span>${addToCartItems[i].itemPrice}</span>/-</p>
            <button class="but" type="button" onclick="deleteItem('${i}')"><i class="fas fa-trash"></i></button>
            </div>
                </div>
            </div>
            `
            total+=parseInt(addToCartItems[i].itemPrice)
        }
        document.querySelector(".mainContainer .addToCartContainer .totalContainer span").innerHTML = total
        document.querySelector(".mainContainer .addToCartContainer .totalContainer").style.display = ""
    }
}
function cartToggler(){
    document.querySelector(".mainContainer .addToCartContainer").classList.toggle("active")
    if(document.querySelector(".mainContainer .addToCartContainer").classList.contains("active")){
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-times")
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-cart-plus")
    } else {
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.remove("fa-times")
        document.querySelector(".mainContainer .addToCartContainer .toggler i").classList.add("fa-cart-plus")
    }
}