document.addEventListener 'DOMContentLoaded', (event) ->

  shadowTemplate = new ShadowTemplate('.shadow-element', 'template')

  elDropdowns = document.querySelectorAll('.custom-dropdown')
  new CustomDropdown(el) for el in elDropdowns
