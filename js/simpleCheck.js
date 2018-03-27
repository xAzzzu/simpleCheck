(function ($) {

    function incompatibleInputException() {
        this.message = "This Plugin only works with input type 'checkbox' or 'radio'!";
    };

    function incompatibleSwitchInputException() {
        this.message = "You can only turn a checkbox into an switch!";
    };

    function inputNotReadyException() {
        this.message = "Please init simpleCheck first!";
    };

    function methodNotFoundException(method) {
        this.message = 'Method ' +  method + ' does not exist on jQuery.simpleCheck!';
    };

    var defaultSettings = {
        theme: 'light',
        isSwitch: false,
        checkbox: {
            defaultClass: 'simpleCheck',
            checkedClass: 'simpleCheck-checked',
            disabledClass: 'simpleCheck-disabled'
        },
        radio: {
            defaultClass: 'simpleCheck',
            radioClass: 'radio',
            checkedClass: 'simpleCheck-checked',
            disabledClass: 'simpleCheck-disabled'
        },
        switch: {
            defaultClass: 'simpleCheck',
            switchClass: 'switch',
            checkedClass: 'simpleCheck-checked',
            disabledClass: 'simpleCheck-disabled'
        },
        init: false
    },
    dataPrefix = '_simpleCheck',
    defaultProp = $.fn.prop,
    defaultAttr = $.fn.attr,
    methods = {
        init : function(options) {
            return this.each(function () {
                var that = $(this);
                if (that.attr('type') === 'radio' || that.attr('type') === 'checkbox') {
                    var settings = $.extend({}, defaultSettings, options || {});
                    settings.init = true;
                    $(this).data(dataPrefix, settings);

                    if (that.attr('type') === 'radio') {
                        that.addClass(settings.radio.defaultClass);
                        that.addClass(settings.radio.radioClass);
                    } else if (that.attr('type') === 'checkbox') {
                        that.addClass(settings.checkbox.defaultClass);
                        if (settings.isSwitch) {
                            that.addClass(settings.switch.switchClass);
                        }
                    }

                    if (settings.theme === 'dark') {
                       that.addClass('dark');
                    }

                    that.change(function () {
                        $(this).simpleCheck('update');
                    });

                    that.on('simpleUpdateNeeded', function () {
                        $(this).simpleCheck('update');
                    });
                    return that;
                } else {
                    throw new incompatibleInputException();
                }
            });
        },
        update: function(options) {
            return this.each(function () {
                var settings = $(this).data(dataPrefix);
                if (settings.init){
                    var that = $(this);
                    var change = false;
                    if (that.attr('type') === 'radio') {
                        $('input[name='+ that.attr('name') +']').each(function () {
                            var that = $(this);
                            //Checked State
                            if (that.prop('checked') === true) {
                                that.addClass(settings.radio.checkedClass);
                                that.trigger('simpleChecked');
                                that.trigger('simpleCheckStateChanged');
                            }
                            if (that.prop('checked') === false) {
                                that.removeClass(settings.radio.checkedClass);
                                that.trigger('simpleUnchecked');
                                that.trigger('simpleCheckStateChanged');
                            }

                            //Disabled State
                            if (that.prop('disabled') === true) {
                                that.addClass(settings.radio.disabledClass);
                                that.trigger('simpleEnabled');
                                that.trigger('simpleEnableStateChanged');
                            }
                            if (that.prop('disabled') === false) {
                                that.removeClass(settings.radio.disabledClass);
                                that.trigger('simpleDisabled');
                                that.trigger('simpleEnableStateChanged');
                            }
                        });
                    } else {
                        //Checked State
                        if (that.prop('checked') === true) {
                            that.addClass(settings.checkbox.checkedClass);
                            that.trigger('simpleChecked');
                            that.trigger('simpleCheckStateChanged');
                        }
                        if (that.prop('checked') === false) {
                            that.removeClass(settings.checkbox.checkedClass);
                            that.trigger('simpleUnchecked');
                            that.trigger('simpleCheckStateChanged');
                        }

                        //Disabled State
                        if (that.prop('disabled') === true) {
                            that.addClass(settings.checkbox.disabledClass);
                            that.trigger('simpleEnabled');
                            that.trigger('simpleEnableStateChanged');
                        }
                        if (that.prop('disabled') === false) {
                            that.removeClass(settings.checkbox.disabledClass);
                            that.trigger('simpleDisabled');
                            that.trigger('simpleEnableStateChanged');
                        }
                    }
                } else {
                    throw new inputNotReadyException();
                }
                return that;
            });
        },
        check: function(options) {
            return this.each(function() {
                var settings = $(this).data(dataPrefix);
                var that = $(this);
                if (settings.init) {
                    var checkedClass;
                    if (settings.isSwitch) {
                        checkedClass = settings.switch.checkedClass;
                    }
                    if (that.attr('type') === 'checkbox') {
                        checkedClass = settings.checkbox.checkedClass;
                    }
                    if (that.attr('type') === 'radio') {
                        checkedClass = settings.radio.checkedClass;
                    }
                    that.prop('checked', true);
                    that.addClass(checkedClass);
                    that.trigger('simpleChecked');
                    that.trigger('simpleCheckStateChanged');
                    return that;
                } else {
                    throw new inputNotReadyException();
                }
            });
        },
        uncheck: function(options) {
            return this.each(function() {
                var settings = $(this).data(dataPrefix);
                var that = $(this);
                if (settings.init) {
                    var checkedClass;
                    if (settings.isSwitch) {
                        checkedClass = settings.switch.checkedClass;
                    }
                    if (that.attr('type') === 'checkbox') {
                        checkedClass = settings.checkbox.checkedClass;
                    }
                    if (that.attr('type') === 'radio') {
                        checkedClass = settings.radio.checkedClass;
                    }
                    that.prop('checked', false);
                    that.removeClass(checkedClass);
                    that.trigger('simpleUnchecked');
                    that.trigger('simpleCheckStateChanged');
                    return that;
                } else {
                    throw new inputNotReadyException();
                }
            });
        },
        enable: function(options) {
            return this.each(function() {
                var settings = $(this).data(dataPrefix);
                var that = $(this);
                if (settings.init) {
                    var disabledClass;
                    if (settings.isSwitch) {
                        disabledClass = settings.switch.disabledClass;
                    }
                    if (that.attr('type') === 'checkbox') {
                        disabledClass = settings.checkbox.disabledClass;
                    }
                    if (that.attr('type') === 'radio') {
                        disabledClass = settings.radio.disabledClass;
                    }
                    that.prop('disabled', false);
                    that.removeClass(disabledClass);
                    that.trigger('simpleEnabled');
                    that.trigger('simpleEnableStateChanged');
                    return that;
                } else {
                    throw new inputNotReadyException();
                }
            });
        },
        disable: function(options) {
            return this.each(function() {
                var settings = $(this).data(dataPrefix);
                var that = $(this);
                if (settings.init) {
                    var disabledClass;
                    if (settings.isSwitch) {
                        disabledClass = settings.switch.disabledClass;
                    }
                    if (that.attr('type') === 'checkbox') {
                        disabledClass = settings.checkbox.disabledClass;
                    }
                    if (that.attr('type') === 'radio') {
                        disabledClass = settings.radio.disabledClass;
                    }
                    that.prop('disabled', true);
                    that.addClass(disabledClass);
                    that.trigger('simpleDisabled');
                    that.trigger('simpleEnableStateChanged');
                    return that;
                } else {
                    throw new inputNotReadyException();
                }
            });
        }
    }

    $.fn.simpleCheck = function(method) {
        if (methods[method]) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if(typeof method === 'object' || ! method){
            return methods.init.apply( this, arguments );
        } else {
            throw new methodNotFoundException(method);
        }
    };

    $.fn.prop = function(propertyName, value) {
        var settings = $(this).data(dataPrefix);
        var result = defaultProp.apply(this, arguments);
        if (value !== undefined && settings !== undefined) {
           this.trigger('simpleUpdateNeeded');
        }
        return result;
    };

    $.fn.attr = function(propertyName, value) {
        var settings = $(this).data(dataPrefix);
        var result = defaultAttr.apply(this, arguments);
        if (value !== undefined && settings !== undefined) {
           this.trigger('simpleUpdateNeeded');
        }
        return result;
    };



}( jQuery ));
