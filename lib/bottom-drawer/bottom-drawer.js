(function() {
  Polymer('bottom-drawer', {
    heightPadding: 50,
    openedChanged: function() {
      var h;
      this.offsetHeight;
      h = this.$.height;
      h.classList.remove('notransition');
      return this.async(function() {
        if (this.opened) {
          if (this.height) {
            return h.style.height = this.height + 'px';
          } else {
            return h.style.height = this.scrollHeight + this.heightPadding + 'px';
          }
        } else {
          return h.style.height = '0px';
        }
      });
    },
    toggle: function() {
      return this.opened = !this.opened;
    },
    open: function(height) {
      this.height = height;
      return this.opened = true;
    },
    minimize: function() {
      return this.$.height.style.height = this.$.resizer.offsetHeight + 'px';
    },
    maximize: function() {
      return this.$.height.style.height = window.innerHeight + 'px';
    },
    getContentHeight: function() {
      return this.$.content.scrollHeight;
    },
    close: function() {
      return this.opened = false;
    },
    cancel: function() {
      this.opened = false;
      return this.$.height.style.height = '0px';
    },
    onNewHeight: function(e, d, s) {
      var h;
      this.opened = true;
      h = this.$.height;
      h.classList.add('notransition');
      return h.style.height = d + 'px';
    }
  });

}).call(this);
