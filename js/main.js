let colorOptions = document.getElementsByClassName('dropdown-item');
for(let i = 0; i < colorOptions.length; i++) {
    colorOptions[i].addEventListener('click', function(event) {
        document.getElementById('selected').innerText = this.getAttribute('data-color');
    });
}

function dropDownElementLeave(event) {
    let currentNode = event.target.closest('.dropdown');
    if (currentNode.classList.contains('active')) {
        this.classList.remove('active');
    }
}

function dropDownElementClick(event) {
    if (this.classList.contains('active')) {
        return false;
    } else {
        this.classList.add('active');
    }
}

let dropDownOptionSelector = document.getElementsByClassName('dropdown')[0];

dropDownOptionSelector.addEventListener('click', dropDownElementClick);
dropDownOptionSelector.addEventListener('mouseleave', dropDownElementLeave);

let radioButtons = document.getElementsByClassName('radio-item');
for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].addEventListener('click', function(event) {
        calculateTotalPrice(event.target.closest('.cell'));
    });
}

function calculateTotalPrice(cellNode) {
    let currentSizeFactor = parseFloat(cellNode.querySelector('input[type="radio"]:checked').getAttribute('data-factor'));
    let currentVolumeFactor = parseFloat(cellNode.querySelector('#counter').value);
    let basicPriceNodeElement = cellNode.querySelector('.price');
    let basicPrice = parseFloat(basicPriceNodeElement.getAttribute('data-basic'));

    basicPriceNodeElement.innerText = (currentSizeFactor * currentVolumeFactor * basicPrice) + ' грн';
}

let counterButtons = document.getElementsByClassName('btn-counter');
for(let i = 0; i < counterButtons.length; i++) {
    counterButtons[i].addEventListener('click', function(event) {
        let currentOperation = this.getAttribute('data-operation');
        let counterInput = document.getElementById('counter');
        let currentValue = parseInt(counterInput.value);

        if( currentOperation === 'plus' ) {
            currentValue++;
        } else {
            currentValue--;
        }

        if(currentValue < 1) {
            currentValue = 1;
        }

        counterInput.value = currentValue;

        calculateTotalPrice(event.target.closest('.cell'));
    });
}
