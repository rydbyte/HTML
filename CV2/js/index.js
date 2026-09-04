const buttons = document.querySelectorAll('#menu-buttons .button');
let activeButton = buttons[0];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (activeButton) {
            activeButton.querySelector('a').style.color = 'azure';
            activeButton.querySelector('.line').style.backgroundColor = 'azure';
            activeButton.querySelector('.line').style.width = '0px';
        }

        button.querySelector('a').style.color = '#D22B2B';
        button.querySelector('.line').style.backgroundColor = '#D22B2B';
        button.querySelector('.line').style.width = '150px';

        activeButton = button;
    });
});