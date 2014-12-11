(function() {
  Polymer('bottom-drawer', {
    ready: function() {
      return console.log('ready');
    },
    onNewHeight: function(e, d, s) {
      return this.style.height = d + 'px';
    }
  });

}).call(this);
