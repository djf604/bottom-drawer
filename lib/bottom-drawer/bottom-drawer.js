(function() {
  Polymer('bottom-drawer', {
    observe: {
      opened: 'openedChanged'
    },
    openedChanged: function() {
      var h;
      this.offsetHeight;
      h = this.$.height;
      h.classList.remove('notransition');
      if (this.opened) {
        return h.style.height = this.height + 'px';
      } else {
        return h.style.height = '0';
      }
    },
    toggle: function() {
      return this.opened = !this.opened;
    },
    open: function(height) {
      this.height = height ? height : this.getContentHeight() + 50;
      return this.opened = true;
    },
    getContentHeight: function() {
      return this.$.content.offsetHeight;
    },
    close: function() {
      return this.opened = false;
    },
    onNewHeight: function(e, d, s) {
      var h;
      h = this.$.height;
      h.classList.add('notransition');
      return h.style.height = d + 'px';
    }
  });

}).call(this);
