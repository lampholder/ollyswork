function _(id){ return document.getElementById(id); }

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function formIsValid() {
	var dateOfBirth = _("DOB").value;
	if (getAge(dateOfBirth) < 18) {
		alert ("Sorry, you have to be 18 or over to use this site for some reason.");
		return false;
	}
	return true;
}

function submitForm(){
	if (formIsValid()) {
		_("mybtn").disabled = true;
		_("status").innerHTML = 'please wait ...';
		var formdata = new FormData();
		formdata.append( "firstName", _("firstName").value );
		formdata.append( "lastName", _("lastName").value );
		formdata.append( "DOB", _("DOB").value );
		formdata.append( "email", _("email").value );
		var ajax = new XMLHttpRequest();
		ajax.open( "POST", "ajax/contact.php" );
		ajax.onreadystatechange = function() {
			if(ajax.readyState == 4 && ajax.status == 200) {
				var responseObject = JSON.parse(ajax.responseText);
				if(responseObject.success == true) {
					alert("Hi " + _("firstName").value + "; " + responseObject.message);
					_("status").innerHTML = "Submitted successfully!";
				}
				else {
					_("mybtn").disabled = false;
					_("status").innerHTML = "Submission failed :(";
				}
			}
		}
		ajax.send( formdata );
	}
}