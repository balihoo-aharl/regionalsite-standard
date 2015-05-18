
QUnit.test 'Affiliates have email present for leads', (assert) ->
  # get all the affiliates
  affs = $ '.affiliate'

  for aff in affs
    affiliateName = $ aff
      .find '.contact-button'
      .data 'displayname'

    leadEmail = $ aff
      .find '.contact-button'
      .data 'aemail'

    assert.ok leadEmail, affiliateName + ' lead email present.'

QUnit.test 'Affiliate email populating in modal', (assert) ->
  done = assert.async()
  # Get the modal and button
  modal = $ '#contactModal'
  button = $ '.affiliate:first-of-type'
    .find '.contact-button'
  affiliateName = button.data 'displayname'
  # Open modal and test content
  button.trigger 'click'
  setTimeout () ->
    expected = button.data 'aemail'
    actual = modal.find 'input[name=affiliateemail]'
      .val()
    assert.strictEqual actual, expected, affiliateName + ' email populating in modal form'
    #clean up after test
    modal.modal 'hide'
    # finish async callback
    done()

  # This locks up when only a single modal is fired as well as when all are fired

  # Open modal and text content
  # for aff in affs
  #   button = $(aff).find('.contact-button')
  #   button.trigger('click')
  #   expected = button.data('aemail')
  #   actual = modal.find('input[name=affiliateemail]').val()
  #   assert.strictEqual actual, expected, button.data('displayname') + ' email populating in modal form'
  #   #clean up after each test
  #   modal.modal('hide')

