/*
Editableform based on Twitter Bootstrap 5
*/
(function ($) {
    "use strict";

    //store parent methods
    var pInitInput = $.fn.editableform.Constructor.prototype.initInput;

    $.extend($.fn.editableform.Constructor.prototype, {
        initTemplate: function() {
            this.$form = $($.fn.editableform.template);
            this.$form.find('.control-group');
            this.$form.find('.editable-error-block').addClass('help-block');
        },
        initInput: function() {
            pInitInput.apply(this);

            var inputSize = 'sm';

            if (this.input.options.inputsize) { inputSize = this.input.options.inputsize; }

            //bs5 add `form-control` class to standard inputs
            var stdtypes = 'text,textarea,password,email,url,tel,number,range,time,typeaheadjs'.split(',');
            if(~$.inArray(this.input.type, stdtypes)) {
                this.input.$input.addClass('form-control');
                if (inputSize === 'sm') { this.input.$input.addClass('form-control-sm'); }
                if (inputSize === 'lg') { this.input.$input.addClass('form-control-lg'); }
            }

            //bs5 add `form-select` class to select inputs
            if(~$.inArray(this.input.type, ['select'])) {
                this.input.$input.addClass('form-select');
                if (inputSize === 'sm') { this.input.$input.addClass('form-select-sm'); }
                if (inputSize === 'lg') { this.input.$input.addClass('form-select-lg'); }
            }

            //apply size class also to buttons (to fit size of control)
            var $btn = this.$form.find('.editable-buttons');
            if (inputSize === 'sm') { $btn.find('button').addClass('btn-sm'); }
            if (inputSize === 'lg') { $btn.find('button').addClass('btn-lg'); }
        }
    });

    //buttons
    $.fn.editableform.buttons =
      '<button type="submit" class="btn btn-primary editable-submit">'+
        '<i class="fa fa-check" aria-hidden="true"></i>'+
      '</button>'+
      '<button type="button" class="btn btn-default editable-cancel">'+
        '<i class="fa fa-times" aria-hidden="true"></i>'+
      '</button>';

    //error classes
    $.fn.editableform.errorGroupClass = 'has-error';
    $.fn.editableform.errorBlockClass = null;
    //engine
    $.fn.editableform.engine = 'bs4';
}(window.jQuery));