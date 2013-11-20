class CustomDropdown

  elCustomDropdown: null,
  elCustomDropdownUl: null,
  
  accessLabelExpanded: 'collapsed',
  accessLabelCollapsed: 'expanded',

  constructor: ->
    # Cache elements
    @elCustomDropdown = document.querySelector('.custom-dropdown')
    @elDropdownTrigger = @elCustomDropdown.querySelector('button')
    @elCustomDropdownUl = @elCustomDropdown.querySelector('ul')
    @elFirstSelectItem = @elCustomDropdownUl.querySelector('a')
    @elAccessLabel = @elCustomDropdown.querySelector('.accessLabel') 
    
    # Fill screen reader label  
    @updateAccessLabel @accessLabelCollapsed
    
    # Event bindings
    @elDropdownTrigger.addEventListener 'click', @customDropdownToggle
    document.addEventListener 'keydown', @escapeKeyHandler
    
  updateAccessLabel: (string) ->
    @elAccessLabel.textContent = "#{string} "
    
  escapeKeyHandler: (event) =>
    customDropdownToggle(event) if event.keyCode == 27

  customDropdownToggle: (event) =>
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
