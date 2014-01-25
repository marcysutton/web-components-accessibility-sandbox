ShadowTemplate = require './ShadowTemplate'

class ShadowElement extends ShadowTemplate

	constructor: (shadowHost) ->
		super

	shadowCreatedCallback: () =>
		super

		@attachClone()

	attachClone: () ->
		super

module.exports = ShadowElement
