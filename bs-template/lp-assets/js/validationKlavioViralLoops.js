//=======================================================
// Klaviyo start

KlaviyoSubscribe.attachToForms('#participation_form', {
    hide_form_on_success: true,
    success: function ($form) {
        participate(document.getElementById("fname").value, document.getElementById("email").value);
    }
});

KlaviyoSubscribe.attachToForms('#participation_form2', {
    hide_form_on_success: true,
    success: function ($form) {
        participate(document.getElementById("fname2").value, document.getElementById("email2").value);
    }
});
// Klaviyo end
//=======================================================


// Viral Loops start
// main function VL which capture emails
function participate(fname, email) {
    //submit the participant to Viral Loops
    campaign.identify({
        firstname: fname,
        email: email
    });
}

//redirect them to thank-you after signup
campaign.addHook("stageChange", function (e) {
    if (e.stage === "postIdentify") {
        location.href = "https://bearsqueeze.co/refer";
        // alert("redirect them to thank-you after signup")

    }
});

// if they are already registered, redirect them to the referral page
campaign.$(function () {
    if (this.user && this.user.referralCode) {
        location.href = "https://bearsqueeze.co/refer";
        // alert("if they are already registered, redirect them to the referral page")
    }
});
// Viral Loops end\
//=======================================================


//=======================================================
// validation forms start
var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,10}$/i;

function submitBtnChecker(form, inputEmail, submitBtn) {


    if (pattern.test($(inputEmail).val()) ) {
        console.log("trueee");
        $(submitBtn).submit();
    }
    else {
        console.log("error");
        form.addClass("notValid");

    }
}

function validInputs(form, inputEmail, submitBtn) {


    if ( pattern.test($(inputEmail).val())  ) {

        form.removeClass("notValid")
        form.addClass("valid");
    }
    else {
        console.log("error");

        form.removeClass("valid")
        form.addClass("notValid");
    }
}

function validateForm(form) {
    var inputEmail = form.find('input[type=email]');
    var submitBtn = form.find('button[type=submit]');

    $(submitBtn).click(function () {
        event.preventDefault();
        submitBtnChecker(form, inputEmail, submitBtn);
    });

    inputEmail.keyup(function () {
        validInputs(form, inputEmail, submitBtn);
    });

    inputEmail.blur(function () {
        validInputs(form, inputEmail, submitBtn);
    });



}

validateForm($('#participation_form'));
validateForm($('#participation_form2'));
// validation forms end
//=======================================================
