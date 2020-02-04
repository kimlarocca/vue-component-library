// accessible clicks
// check for enter or space keypress
// eslint-disable-next-line no-unused-vars
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
