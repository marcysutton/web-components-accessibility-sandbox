class CustomDropdown

  elCustomDropdown: null,
  elCustomDropdownUl: null,

  constructor: ->
    @elCustomDropdown = document.querySelector('.custom-dropdown')
    @elCustomDropdownUl = @elCustomDropdown.querySelector('ul')

    @elCustomDropdown.addEventListener 'click', @customDropdownToggle

    document.addEventListener 'keydown', @escapeKeyHandler

  escapeKeyHandler: (event) =>
    customDropdownToggle(event) if event.keyCode == 27

  customDropdownToggle: (event) =>
    ddClasslist = @elCustomDropdown.classList

    if ddClasslist.contains('active')
      ddClasslist.remove('active')
      @elCustomDropdownUl.setAttribute('aria-hidden', true)
    else
      ddClasslist.add('active')
      @elCustomDropdownUl.setAttribute('aria-hidden', false)

window.CustomDropdown = CustomDropdown
