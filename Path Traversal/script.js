document.addEventListener("DOMContentLoaded", function() {
  // Simulating loading of featured content
  const featuredContent = document.getElementById("featured-content");
  featuredContent.innerHTML = `
    <div>
      <h3>Featured Article</h3>
      <p>I like the style and layout of the web pages. What developer used to create this? </p>
    </div>
  `;

  // Simulating loading of cards
  const cardContainer = document.getElementById("card-container");
  const cardsData = [
    {
      imageUrl: "https://i.pinimg.com/564x/03/83/4a/03834a221dbebb51301c69a1bad3cf80.jpg",
      title: "Card 1",
      description: "This is card 1"
    },
    {
      imageUrl: "https://i.pinimg.com/564x/80/58/94/805894577cbf3f4f555b313c14335741.jpg",
      title: "Card 2",
      description: "This is card 2"
    },
    {
      imageUrl: "https://i.pinimg.com/564x/c9/d0/45/c9d045659e2fabd2729797a4b2c7657f.jpg",
      title: "Card 3",
      description: "This is card 3"
    },
    {
      imageUrl: "https://i.pinimg.com/564x/64/f3/74/64f374522d644552a7474e29128ed18e.jpg",
      title: "Card 4",
      description: "This is card 4"
    }
  ];

  cardsData.forEach(cardData => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${cardData.imageUrl}" alt="${cardData.title}">
      <h3>${cardData.title}</h3>
      <p>${cardData.description}</p>
    `;
    cardContainer.appendChild(card);
  });
});
