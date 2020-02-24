import $ from 'jquery'

// check for click or enter/space keypress
function a11yClick (event) {
    if (event.type === 'click' || event.type === 'mouseover') {
        return true
    } else if (event.type === 'keypress') {
        let code = event.charCode || event.keyCode
        if ((code === 32) || (code === 13)) {
            return true
        }
    } else {
        return false
    }
}

$(function () {
    $.each($('.modal-trigger'), function () {
        let $modal = $(this)
        let $modalID = $modal.data('id')
        let $modalOverlay = $('.modal-overlay')
        let $modalTitle = $('.modal-title')

        if ($modal.length) {
            $modal.on('keypress click', function (event) {
                if (a11yClick(event) === true) {
                    event.preventDefault()
                    $modalOverlay.fadeIn()
                    $('#' + $modalID).fadeIn()
                    $modalTitle.focus()
                }
            })

            $('.close-modal, .modal-overlay').on('keypress click', function (event) {
                event.preventDefault()
                if (a11yClick(event) === true) {
                    hideModal()
                }
            })
        }

        function hideModal () {
            $('#' + $modalID).fadeOut()
            $modalOverlay.fadeOut()
        }
    })
})
