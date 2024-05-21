//This was very mean to me

window.alert = function(message, timeout = null) {
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modal-message");
    const span = document.getElementsByClassName("close")[0];

    modalMessage.innerText = message;
    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    };

    if (timeout != null) {
        setTimeout(() => {
            modal.style.display = "none";
        }, Number(timeout));
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
};

function callAlert() {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const message = `Thank you, ${name}, for submitting your message!`;
    alert(message, 3000);
}



// Variables for the cart /*this will be for when someone adds an item to the cart and th icon number will increase or decrease.*/
/*let cartCount = 0;

/*
if (itemAddedToCart) {
    cartCount++; // Increase the cart count by 1
}
*/

// Display the cart count
// console.log("Cart Count:", cartCount);