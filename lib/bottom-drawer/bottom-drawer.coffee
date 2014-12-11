Polymer 'bottom-drawer',
  ready: ->
    console.log 'ready'

  onNewHeight: (e,d,s) ->
    @style.height = d + 'px'
