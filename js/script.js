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
    
        
        btn.onclick = function() {
            modal.style.display = 'block';
        }
    
      
        span.onclick = function() {
            modal.style.display = 'none';
        }
    
        
        continueBtn.onclick = function() {
            modal.style.display = 'none';
        }
    
   
        checkoutBtn.onclick = function() {
            window.location.href = '/';
        }
    
        
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    });

    


    //Search Bar Thingy

    document.addEventListener('DOMContentLoaded', function() {
        const searchBar = document.getElementById('searchBar');
    
        searchBar.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                const searchTerm = searchBar.value.toLowerCase().trim();
                
                // Mapping of search terms to section IDs
                const flightSections = {
                    'the classic mars': 'classicMars',
                    "neptune's cosmic drive": 'neptuneCosmicDrive',
                    'the giants journey': 'giantsJourney',
                    'ring around saturn': 'ringAroundSaturn',
                    'uranus uncharted': 'uranusUncharted',
                    'moonlight meander': 'moonlightMeander'
                };
    
                const sectionId = flightSections[searchTerm];
    
                if (sectionId) {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                } else {
                    alert('Flight not found');
                }
            }
        });
    });