
const scooters = [

{
    brand: "TVS",
    model: "Jupiter 125",
    dp: "₹4,999",
    image: "images/jupiter125.png",
    badge: "BEST SELLER"
},

{
    brand: "TVS",
    model: "Ntorq 125",
    dp: "₹4,999",
    image: "images/ntorq-red.png",
    badge: "SPORTY"
},

{
    brand: "TVS",
    model: "Ntorq Race XP",
    dp: "₹4,999",
    image: "images/ntorq-yellow.png",
    badge: "NEW"
},

{
    brand: "Suzuki",
    model: "Burgman Street",
    dp: "₹4,999",
    image: "images/burgman.png",
    badge: "PREMIUM"
}

];

const inventoryGrid = document.getElementById("inventoryGrid");

function displayVehicles(list){

    inventoryGrid.innerHTML="";

    list.forEach(vehicle=>{

        inventoryGrid.innerHTML += `

        <div class="vehicle-card">

            <span class="badge">${vehicle.badge}</span>

            <img src="${vehicle.image}" alt="${vehicle.model}">

            <h3>${vehicle.model}</h3>

            <p>${vehicle.brand}</p>

            <h2>${vehicle.dp}</h2>

            <div class="buttons">

                <a class="details-btn"
                href="#">
                View Details
                </a>

                <a class="wa-btn"
                href="https://wa.me/919833666308?text=I am interested in ${vehicle.model}"
                target="_blank">

                WhatsApp

                </a>

            </div>

        </div>

        `;

    });

}

displayVehicles(scooters);

document.getElementById("searchBox").addEventListener("keyup",function(){

    const search=this.value.toLowerCase();

    const filtered=scooters.filter(vehicle=>

        vehicle.model.toLowerCase().includes(search) ||

        vehicle.brand.toLowerCase().includes(search)

    );

    displayVehicles(filtered);

});
