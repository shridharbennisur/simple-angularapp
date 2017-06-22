function validate() {
    var name = document.forms.name.value;
    var email = document.forms.email.value;
    var phone = document.forms.phone.value; 
    if (name == '' && email == '' && phone == '' ) {
        return false;
    } else {
        return true;
    }

}