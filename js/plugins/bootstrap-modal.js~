// Bootstrap: modal.js v3.0.0
// http://twbs.github.com/bootstrap/javascript.html#modals
// Copyright 2012 Twitter, Inc.

// ADD  ajax load (init modal)

+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))


    var transition = $.support.transition && that.$element.hasClass('fade')

     if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
     }

    that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)

  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

	window.history.back();

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(500) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide();

	var callback = $.Event('hide-modal')
	$('body').trigger(callback)

    that.$element.trigger('hidden.bs.modal')
  }

  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

	$(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
		var $this   = $(this),
			href    = $this.attr('href'),
			url     = $this.attr('data-target') || href

		e.preventDefault()

		if (url.indexOf('#') == 0) {
			var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
			var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

			$target
				.modal(option, this)
				.one('hide', function () {
					$this.is(':visible') && $this.focus()
				})
		} else {
			$('body').trigger('modal',[url, $this.is('[data-push="history"]')])
		}
	});

	$('body').on('modal', function (event, url, push) {
		var $this   = $(this),
			$container = $('<div class="modal fade loading" role="dialog"><div class="modal-dialog"><button type="button" class="btn-close" data-dismiss="modal" /><div class="modal-content js-modal-target" /></div></div>')

		$this.addClass('modal-open');

		$container
			.modal()
			.one('hidden.bs.modal', function () {
				$(this).remove();
			});

		$.ajax({
			url:url,
			cache:false
		}).done(function(data) {
			$('.js-modal-target',$container).html(data);
			$container.removeClass('loading');
			
			var state = {pjax: true, list: false, url: url}
			window.history.pushState(state,'popup',state.url);

			var callback = $.Event('show-modal')
			$this.delay(240).queue(function() {
				$(this).trigger(callback)
				$(this).dequeue();
			});
		});
	});

	$(document).on('click.bs.modal.data-api', '[data-toggle="modal-reload"]', function (e) {
		var $this   = $(this),
			href = $this.attr('href'),
			url = $this.attr('data-target') || href,
			$container = $(this).closest('.modal');

		e.preventDefault()
		$container.addClass('loading');

		$.ajax({
			url:url,
			cache:false
		}).done(function(data) {
			$('.js-modal-target',$container).html(data);
			$container.removeClass('loading');

			var callback = $.Event('show-modal')
			$('body').delay(240).queue(function() {
				$(this).trigger(callback)
				$(this).dequeue();
			});
		});
	});

  $(document)
    .on('show.bs.modal',  '.modal', function () { $('body').addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $('body').removeClass('modal-open') })


  $(document).on('click.bs.modal',  '.js-modal-scroll-top', function (event) { 
		$(this).blur();
		$('.modal').animate({scrollTop:0},500); 
	});



}(window.jQuery);
