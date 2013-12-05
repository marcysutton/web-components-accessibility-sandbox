document.addEventListener 'DOMContentLoaded', (event) ->
ShadowTemplate = require './ShadowTemplate'
CustomDropdown = require './CustomDropdown'

  shadowTemplate = new ShadowTemplate('.shadow-element', 'template')

  elDropdowns = document.querySelectorAll('.custom-dropdown')
  new CustomDropdown(el) for el in elDropdowns
