function generateName() {
    // Array of random supermarket items
    const items = [
      "Apple",
      "Banana",
      "Carrot",
      "Donut",
      "Eggs",
      "Fries",
      "Grapes",
      "Honey",
      "Iceberg",
      "Juice",
      "Ketchup",
      "Lemon",
      "Milk",
      "Noodles",
      "Olive",
      "Pasta",
      "Quinoa",
      "Rice",
      "Salmon",
      "Tomato",
      "Udon",
      "Vinegar",
      "Waffles",
      "XanthanGum",
      "Yogurt",
      "Zucchini"
    ];
  
    // Generate a random index within the range of the array length
    const randomIndex = Math.floor(Math.random() * items.length);
  
    // Return the item at the randomly generated index
    return items[randomIndex];
  }
  
  // Call the function to generate a random name
  console.log(generateName());
  
