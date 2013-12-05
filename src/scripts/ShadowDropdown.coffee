class ShadowDropdown extends ShadowTemplate

  constructor: (shadowHost) ->
    super shadowHost

    console.log shadowHost

    # new CustomDropdown(@clone.querySelector shadowHost)
    # SD widget now works but I'd like to get this code out of here
    # dropdown = @clone.querySelector(shadowHost)
    # if dropdown
    #   new CustomDropdown(dropdown)

module.exports = ShadowDropdown
