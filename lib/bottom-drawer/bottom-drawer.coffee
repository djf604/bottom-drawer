Polymer 'bottom-drawer',
  observe:
    opened: 'openedChanged'

  openedChanged: ->
    #triggers css reflow
    @offsetHeight
    h = @$.height
    h.classList.remove('notransition')

    if @opened
      h.style.height = @height + 'px'
    else
      h.style.height = '0'

  toggle: ->
    @opened = !@opened

  open: (height) ->
    @height =  if height then height else (@getContentHeight() + 50)
    @opened = true

  getContentHeight: ->
    @$.content.offsetHeight

  close: ->
    @opened = false

  onNewHeight: (e,d,s) ->
    h = @$.height
    h.classList.add('notransition')
    h.style.height = d + 'px'
