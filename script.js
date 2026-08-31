const sectionTitle= document.querySelector(".section-heading");
const categories=document.querySelectorAll(".category");
const eventCards=document.querySelectorAll(".event-card");
const searchInput=document.querySelector(".search-box input");
let selectedCategory = "All";
for(let category of categories){

    category.addEventListener("click",()=>{

        selectedCategory = category.textContent;

        filterEvents();

    });
}
searchInput.addEventListener("input", () => {

    filterEvents();

});
function filterEvents() {

    const searchText = searchInput.value.toLowerCase();

    for(let card of eventCards) {

        const cardText = card.textContent.toLowerCase();
        const cardCategory = card.dataset.category;

        const categoryMatch =
            selectedCategory === "All" ||
            selectedCategory === cardCategory;

        const searchMatch =
            cardText.includes(searchText);

        if(categoryMatch && searchMatch) {

            card.classList.remove("hidden");

        }
        else {

            card.classList.add("hidden");

        }
    }
} 


