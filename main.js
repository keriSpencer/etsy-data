// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let sum = 0
  for (let i = 0; i < data.length; i++) {
    sum += data[i].price
  }
  console.log(sum / data.length)
}

// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let midPrice = []
  // Answer:
  for (let i = 0; i < data.length; i++)
    if (data[i].price >= 14 && data[i].price <= 18) {
      midPrice.push(data[i].title)
    }
  console.log(midPrice)
}

// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let currency = []
  // Answer:
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      currency.push(data[i].title)
    }
  }
  console.log(currency)
}

// 4: Display a list of all items who are made of wood.
let woodStuff = [];
function question4 () {
  // Answer:
  for (let i = 0; i < data.length; i++) {
    let materials = data[i].materials
    for (let j = 0; j < materials.length; j++) {
      if (materials[j] === "wood") {
        woodStuff.push(data[i].title)
      }
    }
  }
  console.log(woodStuff)
}

// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
let eightItems
function question5 () {
  // Answer:
  for (i = 0; i < data.length; i++) {
    let materials = data[i].materials
    if (materials.length === 8 || materials.length > 8) {
      console.log(data[i].title + materials.length + materials)
    }
  }
}

// 6: How many items were made by their sellers?
// Answer:
let totalItems = 0
function question6 () {
  // Answer:
  for (i = 0; i < data.length; i++) {
    let maker = data[i].who_made
    if ( maker === "i_did" )
    totalItems += 1
  }
  console.log(totalItems)
}
