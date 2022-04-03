function validate_form()
{
    if (document.form.full_name.value =="")
    {
        alert("Enter Your Name");
        return false;
    }
    if (document.form.email.value =="")
    {
        alert("Enter Email Address");
        return false;
    }

    if (document.form.phone.value =="")
    {
        alert("Enter Phone Number");
        return false;
    }
   
    if (document.form.feedback.value =="")
    {
        alert("Enter Your Feedback");
        return false;
    }
        alert("Sucessfully Submitted");
}

function validate_booking_form()
{
    if (document.bookingform.firstname.value =="")
    {
        alert("Enter Your First Name");
        return false;
    }
    if (document.bookingform.lastname.value =="")
    {
        alert("Enter Your Last Name");
        return false;
    }

    if (document.bookingform.address.value =="")
    {
        alert("Enter Your Address");
        return false;
    }

    if (document.bookingform.city.value =="")
    {
        alert("Enter Your City");
        return false;
    }
   
    if (document.bookingform.state.value =="")
    {
        alert("Enter Your State");
        return false;
    }

    if (document.bookingform.email.value =="")
    {
        alert("Enter Your E-mail");
        return false;
    }

    if (document.bookingform.phone.value =="")
    {
        alert("Enter Your Phone Number");
        return false;
    }

    if (document.bookingform.checkindate.value =="")
    {
        alert("Please Select Your Check-in Date");
        return false;
    }

    
    if (document.bookingform.checkintime.value =="")
    {
        alert("Please Select Your Check-in Time");
        return false;
    }

    
    if (document.bookingform.checkoutdate.value =="")
    {
        alert("Please Select Your Check-out Date");
        return false;
    }

    
    if (document.bookingform.checkouttime.value =="")
    {
        alert("Please Select Your Check-out Time");
        return false;
    }
       
    if (document.bookingform.adults.value =="")
    {
        alert("Please Write The Number Of Persons");
        return false;
    }
   
    alert("Sucessfully Submitted");
}