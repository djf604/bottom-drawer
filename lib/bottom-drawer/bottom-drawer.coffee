Polymer 'bottom-drawer',

  heightPadding: 50

  openedChanged: ->
    #triggers css reflow
    @offsetHeight

    h = @$.height
    h.classList.remove('notransition')

    @async ->
      if @opened
        if @height
          h.style.height = @height + 'px'
        else
          h.style.height = @scrollHeight + @heightPadding + 'px'
      else
        h.style.height = '0px'

  toggle: -> @opened = !@opened

  open: (height) ->
    @height = height
    @opened = true

  minimize: ->
    @$.height.style.height = @$.resizer.offsetHeight + 'px'

  maximize: ->
    @$.height.style.height = window.innerHeight + 'px'

  getContentHeight: ->
    @$.content.scrollHeight

  close: -> @opened = false

  cancel: ->
    @opened = false
    @$.height.style.height = '0px'

  onNewHeight: (e,d,s) ->
    @opened = true
    h = @$.height
    h.classList.add('notransition')
    h.style.height = d + 'px'
