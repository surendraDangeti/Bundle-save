document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const inputRadio = card.querySelector('input[type="radio"]');
        const selectOptionsSection = card.querySelector('.select_options_section');

        inputRadio.addEventListener('change', () => {
            if (inputRadio.checked) {
                cards.forEach(data => {
                    const cInputRadio = data.querySelector('input[type="radio"]');
                    cInputRadio.checked = false;
                    data.classList.remove('active');
                     //It Removes 'active' class from all cards
                });
                inputRadio.checked = true;
                cards.forEach(c => c.querySelector('.select_options_section').style.display = 'none');
                selectOptionsSection.style.display = 'block';
                card.classList.add('active'); 
                //It is for Adding the 'active' class to the selected card
            } else {
                selectOptionsSection.style.display = 'none';
                card.classList.remove('active');
                 //It Remove 'active' class if radio is unchecked
            }
        });
    });
});
