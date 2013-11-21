class CustomDropdown

  elCustomDropdown: null,
  elCustomDropdownUl: null,

  accessLabelExpanded: 'collapsed',
  accessLabelCollapsed: 'expanded',

  constructor: ($el, shadow=false) ->
    # Cache elements
    @elCustomDropdown = $el
    if $el
      @elDropdownTrigger = @elCustomDropdown.querySelector('button')
      @elCustomDropdownUl = @elCustomDropdown.querySelector('ul')
      @elFirstSelectItem = @elCustomDropdownUl.querySelector('a')
      @elAccessLabel = @elCustomDropdown.querySelector('.accessLabel')

      console.log @elCustomDropdown

      # Fill screen reader label
      @updateAccessLabel @accessLabelCollapsed

      # if shadow == true
        # @customDropdownToggle()

      # Event bindings
      @elCustomDropdown.addEventListener 'click', @customDropdownToggle
      document.addEventListener 'keydown', @escapeKeyHandler

  updateAccessLabel: (string) ->
    @elAccessLabel.textContent = "#{string} "

  escapeKeyHandler: (event) =>
    customDropdownToggle(event) if event.keyCode == 27

  customDropdownToggle: (event) =>
    console.log 'customDropdownToggle'

    ddClasslist = @elCustomDropdown.classList

    if ddClasslist.contains('active')
      ddClasslist.remove('active')
      @elCustomDropdownUl.setAttribute('aria-hidden', true)
      @updateAccessLabel @accessLabelExpanded
    else
      ddClasslist.add('active')
      @elFirstSelectItem.focus()
      @elCustomDropdownUl.setAttribute('aria-hidden', false)
      @updateAccessLabel @accessLabelCollapsed

window.CustomDropdown = CustomDropdown
