

// active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}


// nav hide 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})



// counter design
document.addEventListener("DOMContentLoaded", ()=> {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(()=> {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1",0,1287,2000);
    counter("count2",0,5782,2500);
    counter("count3",0,1445,3000);
    counter("count4",0,6247,3000);
})






// main.js

// Get all elements with the class "order-now-btn"
const orderButtons = document.querySelectorAll('.order-now-btn');

// Loop through each button and add an event listener
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Prompt for the name of the order receiver
        const receiverName = prompt("Please enter your name:");

        if (receiverName) { // If the user entered a name
            // Get the parent card element
            const card = button.closest('.card');

            // Get the name from the card
            const itemName = card.querySelector('h4').innerText;

            // Extract the visible price from the span element and remove currency symbol
            const itemPriceSpan = card.querySelector('span');
            const itemPrice = parseFloat(itemPriceSpan.childNodes[0].nodeValue.trim().replace('₹', '')); // Convert to number and remove currency symbol

            // Display an alert with the receiver's name, item name, and price
            alert(`${receiverName} Order placed for ${itemName} at ₹${itemPrice}`);

            // Send the itemName, itemPrice, and receiverName to the server
            fetch('/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ itemName, itemPrice, receiverName })
            })
            .then(response => {
                if (response.ok) {
                    console.log('Order placed successfully');
                } else {
                    console.error('Failed to place order');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
});


