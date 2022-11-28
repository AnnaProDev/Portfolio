//Validation
export function validateForms(form){
	$(form).validate({
		rules: {
				name: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				},
				agree: "required",
		},
		messages: {
				name: {
					required: "Please specify your name",
					minlength: jQuery.validator.format("Enter {0} symbols!")
				},
				email: {
				required: "We need your email address to contact you",
				email: "Your email address must be in the format of name@domain.com"
				},
				agree: "Please accept our policy",
		}
	});
};
