document = @document
mousePos = undefined
originalPos = undefined
height = 300

Polymer 'div-resizer',
  attached: ->
    @parent = if @parentNode.host then @parentNode.host else @parentNode

  startDrag: (e) ->
    height = @parent.clientHeight
    console.log 'startDrag'
    console.log 'height: ' + height

    originalPos = @mousePosition(e)

    document.addEventListener 'mousemove', @onMouseMove
    document.addEventListener 'mouseup', @endDrag

  onMousedown: (e,d,s) ->
    @startDrag(e)

  mousePosition: (e) ->  e.clientY + document.documentElement.scrollTop

  ready: ->
    @onMouseMove = (e,d,s) =>
      console.log 'onMouseMove'
      mousePos = @mousePosition(e)
      size = height + (originalPos - mousePos)
      @fire('new-height', size)

    @endDrag = =>
      console.log 'endDrag'

      height = @parent.clientHeight
      document.removeEventListener 'mousemove', @onMouseMove
      document.removeEventListener 'mouseup', @endDrag
