
QUnit.test "Affiliate email populating in modal", (assert) ->

  # Get the modal and the affiliates
  modal = $ '#contactModal'
  affs = $ '.affiliate'

  # Open modal and text content
  for aff in affs
    button = $(aff).find('.contact-button')
    button.trigger('click')
    expected = button.data('aemail')
    actual = modal.find('input[name=affiliateemail]').val()
    assert.strictEqual actual, expected, button.data('displayname') + ' email populating in modal form'
    #clean up after each test
    modal.modal('hide')
