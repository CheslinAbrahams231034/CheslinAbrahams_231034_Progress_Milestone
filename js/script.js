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



    // why isnt its WORKINGGGGGGG!
    document.addEventListener('DOMContentLoaded', (event) => {
        const modal = document.getElementById('cartModal');
        const btn = document.getElementById('viewCartButton');
        const span = document.getElementsByClassName('close-button')[0];
        const continueBtn = document.getElementById('continueShoppingButton');
        const checkoutBtn = document.getElementById('checkoutButton');
    
        // When the user clicks the button, open the modal
        btn.onclick = function() {
            modal.style.display = 'block';
        }
    
        // When the user clicks on <span> (x), close the modal
        span.onclick = function() {
            modal.style.display = 'none';
        }
    
        // When the user clicks the "Continue Shopping" button, close the modal
        continueBtn.onclick = function() {
            modal.style.display = 'none';
        }
    
        // When the user clicks the "Check Out" button, navigate to the homepage
        checkoutBtn.onclick = function() {
            window.location.href = '/';
        }
    
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });
    