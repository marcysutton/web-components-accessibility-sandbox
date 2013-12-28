ShadowTemplate = require './ShadowTemplate'

class ShadowButton extends ShadowTemplate

	constructor: (shadowHost) ->
		super

		console.log shadowHost
		
	shadowCreatedCallback: () =>
		super

		@attachClone()

	attachClone: () ->
		super

module.exports = ShadowButton