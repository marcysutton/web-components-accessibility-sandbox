document.addEventListener 'DOMContentLoaded', (event) ->


  shadowDropdownClass = 'shadow-dropdown'

  if supportsCustomElements()
    dropdownProto = Object.create HTMLElement.prototype,
      createdCallback:
          value: ->
            new ShadowDropdown(this)

    customDropdown = document.register shadowDropdownClass, prototype: dropdownProto
  else
    customTag = document.querySelector(shadowDropdownClass)
    parentEl = customTag.parentNode
    newDiv = document.createElement('div')
    newDiv.setAttribute('class', shadowDropdownClass)
    parentEl.appendChild(newDiv)

    new ShadowDropdown(newDiv)

  elDropdowns = document.querySelectorAll('.custom-dropdown')
  new CustomDropdown(el) for el in elDropdowns

supportsCustomElements = ->
  'register' of document
