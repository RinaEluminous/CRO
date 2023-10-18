var waitForjQuery = setInterval(function() {
  if (typeof jQuery != 'undefined') {
  	console.log("%c Bromwich&Smith005: Book A Consultation", "background:blue;color: white;padding:10px");

	if(jQuery('.webform-submission-form').length > 0){
	
		jQuery('.webform-submission-form .js-form-item #edit-first-name').attr('placeholder','First Name');
		jQuery('.webform-submission-form .js-form-item #edit-last-name').attr('placeholder','Last Name');
		jQuery(' .webform-submission-form .js-form-item #edit-email').attr('placeholder','Your Email');

		jQuery(' .webform-submission-form .js-form-item #edit-email').attr('placeholder','Your Email');

		jQuery('.webform-submission-form .js-form-item #edit-phone-number').attr('placeholder','Your Phone Number');

		jQuery('.webform-submission-form .js-form-item #edit-city').attr('placeholder','Your City');

		jQuery(".webform-submission-form .form-select.custom-select button[data-id='edit-province'] span.filter-option").text('Your Province');

		jQuery('.webform-submission-form .js-form-item #edit-postal-code').attr('placeholder','Postal Code');

		if(jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation label').length > 0){
			
			jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation label').text('How can we Help?');
			
			if(jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation textarea.form-control').length > 0){
				jQuery('.form-item-any-comments-you-would-like-to-add-regarding-your-debt-situation textarea.form-control').attr('placeholder','');
			}
	}

	jQuery('.webform-submission-form .js-form-submit.form-submit').val('Find out if you qualify');
	}

	/*if(jQuery('.webform-submission-form div[aria-label="Error message"] .alert-danger ul').length > 0){
		var formErrorHtml = jQuery('.webform-submission-form div[aria-label="Error message"] .alert-danger').html();
	}*/

	jQuery(document).on('click','.webform-submission-form .js-form-submit.form-submit', function() {
		//call html function here
  	});

  	clearInterval(waitForjQuery);
  }
}, 50);