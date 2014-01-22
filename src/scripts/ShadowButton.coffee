ShadowTemplate = require './ShadowTemplate'

class ShadowButton extends ShadowTemplate

	constructor: (shadowHost) ->
		super

	shadowCreatedCallback: () =>
		super

		@attachClone()

	attachClone: () ->
		super

module.exports = ShadowButton