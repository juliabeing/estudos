const menu = [
    {
        id: 1,
        title: "Coffe",
        category: "breakfast",
        price: 3.99,
        img: "./images/cafe.jpg",
        desc: `I'm a hot drink.`,
      },
      {
        id: 2,
        title: "Bread",
        category: "breakfast",
        price: 2.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 3,
        title: "Meat",
        category: "dinner",
        price: 25.99,
        img: "./images/item-.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 4,
        title: "Chicken",
        category: "dinner",
        price: 22.99,
        img: "./images/item-.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 5,
        title: "Fish and chips",
        category: "snacks",
        price: 11.99,
        img: "./images/item-.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
      {
        id: 6,
        title: "shirimp",
        category: "snacks",
        price: 16.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
      },
]
const container = document.querySelector(".section-head");
const sectionCenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
    displayMenuItems(menu);
  });
  function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title} />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
}