// toggle password visibility
// see pages/Forms.vue or pages/FormsLogin.vue for implementation examples
function togglePasswordVisibility (element) {
    let $input = element.nextElementSibling.firstElementChild
    if ($input.getAttribute('type') === 'password') {
        $input.setAttribute('type', 'text')
        $input.parentElement.previousElementSibling.classList.add('visible')
    } else {
        $input.setAttribute('type', 'password')
        $input.parentElement.previousElementSibling.classList.remove('visible')
    }
}

for (const i of document.querySelectorAll('.toggle-password')) {
    i.addEventListener('click', function () {
        togglePasswordVisibility(i)
    })
    i.addEventListener('keypress', function (event) {
        event.preventDefault()
        let code = event.charCode || event.keyCode
        if ((code === 32) || (code === 13)) {
            togglePasswordVisibility(i)
        }
    })
}

// on check of the checkbox, set the billing fields equal to the shipping fields
function setBillingSameAsShipping () {
    document.getElementById('billing-firstName').value = document.getElementById('firstName').value
    document.getElementById('billing-lastName').value = document.getElementById('lastName').value
    document.getElementById('billing-country').value = document.getElementById('country').value
    document.getElementById('billing-address1').value = document.getElementById('address1').value
    document.getElementById('billing-address2').value = document.getElementById('address2').value
    document.getElementById('billing-city').value = document.getElementById('city').value
    document.getElementById('billing-state').value = document.getElementById('state').value
    document.getElementById('billing-zip').value = document.getElementById('zip').value
}

function clearBillingInformation () {
    document.getElementById('billing-firstName').value = ''
    document.getElementById('billing-lastName').value = ''
    document.getElementById('billing-country').value = ''
    document.getElementById('billing-address1').value = ''
    document.getElementById('billing-address2').value = ''
    document.getElementById('billing-city').value = ''
    document.getElementById('billing-state').value = ''
    document.getElementById('billing-zip').value = ''
}

for (const i of document.querySelectorAll('.billingSameAsShipping')) {
    i.addEventListener('click', function () {
        if (this.checked) {
            setBillingSameAsShipping()
        } else {
            clearBillingInformation()
        }
    })
    i.addEventListener('keypress', function (event) {
        event.preventDefault()
        let code = event.charCode || event.keyCode
        if ((code === 32) || (code === 13)) {
            if (this.checked) {
                setBillingSameAsShipping()
            } else {
                clearBillingInformation()
            }
        }
    })
}
