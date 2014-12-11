(function() {
  var document, height, mousePos, originalPos;

  document = this.document;

  mousePos = void 0;

  originalPos = void 0;

  height = 300;

  Polymer('div-resizer', {
    attached: function() {
      return this.parent = this.parentNode.host ? this.parentNode.host : this.parentNode;
    },
    startDrag: function(e) {
      height = this.parent.clientHeight;
      console.log('startDrag');
      console.log('height: ' + height);
      originalPos = this.mousePosition(e);
      document.addEventListener('mousemove', this.onMouseMove);
      return document.addEventListener('mouseup', this.endDrag);
    },
    onMousedown: function(e, d, s) {
      return this.startDrag(e);
    },
    mousePosition: function(e) {
      return e.clientY + document.documentElement.scrollTop;
    },
    ready: function() {
      this.onMouseMove = (function(_this) {
        return function(e, d, s) {
          var size;
          console.log('onMouseMove');
          mousePos = _this.mousePosition(e);
          size = height + (originalPos - mousePos);
          return _this.fire('new-height', size);
        };
      })(this);
      return this.endDrag = (function(_this) {
        return function() {
          console.log('endDrag');
          height = _this.parent.clientHeight;
          document.removeEventListener('mousemove', _this.onMouseMove);
          return document.removeEventListener('mouseup', _this.endDrag);
        };
      })(this);
    }
  });

}).call(this);
