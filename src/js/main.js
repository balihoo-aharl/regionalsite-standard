$(function() {
  equalHeightDivs('.affiliate');

  ///////////////////////////////
  /// Load location data in modal
  $('#contactModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    // Extract info from data-* attributes
    var location = button.data('displayname');
    var aemail = button.data('aemail');
    // Update the modal's content.
    var modal = $(this);
    modal.find('.modal-title').text('Contact ' + location);
    modal.find('input[name=affiliateemail]').val(aemail);
  });
  $('#contactModal').on('hide.bs.modal', function (event) {
    // Update the modal's content.
    var modal = $(this);
    modal.find('.modal-title').text('Contact');
    modal.find('input[name=affiliateemail]').val('');
    modal.find('.alert').addClass('hidden');
  });

  ///////////////////
  /// Form Validation
  $('#contactForm').validator().on('submit', function (e) {
    if(e.isDefaultPrevented()) {
      console.log('Invalid Form');
    } else {
      console.log('Valid Form');
      e.preventDefault();
      // Field values
      var fname = $('input[name=fName]'),
          lname = $('input[name=lName]'),
          mail = $('input[name=email]'),
          city = $('input[name=city]'),
          state = $('input[name=state]'),
          zip = $('input[name=zip]'),
          // Hidden field values
          list = $('input[name=listname]'),
          affiliate = $('input[name=affiliatecompanyid]'),
          aemail = $('input[name=affiliateemail]');

      // data object
      var formData = {
        firstname: fname.val(),
        lastname: lname.val(),
        email: mail.val(),
        other: 'Location: ' + city + ', ' + state + ' ' + zip,
        listname: list.val(),
        affiliatecompanyid: affiliate.val(),
        affiliateemail: aemail.val(),
        returnurl: document.URL
      };

      $.ajax({
        url: $('input[name=processURL]').val(),
        type: 'POST',
        data: formData,
        success: function(data) {
          // formSuccess();
          $('.form-success').removeClass('hidden');
          $('.form-error').addClass('hidden');
        },
        error: function(request, status, error) {
          $('.form-error').removeClass('hidden');
        }
      }); //ajax
    }

  }); // validator
});

google.maps.event.addDomListener(window, 'load', function() {
  initializeMap(partners);
});
