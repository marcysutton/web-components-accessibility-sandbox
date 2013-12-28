ShadowTemplate = require './ShadowTemplate'
CustomDropdown = require './CustomDropdown'

class ShadowDropdown extends ShadowTemplate

	constructor: (shadowHost) ->
		super

	shadowCreatedCallback: () =>
		super

		@shadowChildEl = @clone.querySelector '.custom-dropdown'

		new CustomDropdown @shadowChildEl

		@attachClone()

	attachClone: () ->
		super

module.exports = ShadowDropdown
