var clipboard = new Clipboard('.yourReferralCode');

clipboard.on('success', function(e) {
    $('.copied').show();
    $('.copied').fadeOut(1000);
});
