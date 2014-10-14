/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);


/*!
 * http://suyati.github.io/line-control
 * LineControl 1.1.0
 * Copyright (C) 2014, Suyati Technologies
 * This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.
This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
You should have received a copy of the GNU General Public License along with this library; if not, write to the Free Software Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
 *
*/

(function( $ ){ 
	var methods = {
		saveSelection: function() {
			//Function to save the text selection range from the editor
			$(this).data('editor').focus();
		    if (window.getSelection) {
		        sel = window.getSelection();
		        if (sel.getRangeAt && sel.rangeCount) {
		            $(this).data('currentRange', sel.getRangeAt(0));
		        }
		    } else if (document.selection && document.selection.createRange) {
		        $(this).data('currentRange',document.selection.createRange());
		    }
		    else
		    	$(this).data('currentRange', null);
		},

		restoreSelection: function(text,mode) {
			//Function to restore the text selection range from the editor
			var node;
			typeof text !== 'undefined' ? text : false;
			typeof mode !== 'undefined' ? mode : "";
			var range = $(this).data('currentRange');
		    if (range) {
		        if (window.getSelection) {
		        	if(text){
		            	range.deleteContents();
		            	if(mode=="html")
	            		{
    			            var el = document.createElement("div");
				            el.innerHTML = text;
				            var frag = document.createDocumentFragment(), node, lastNode;
				            while ( (node = el.firstChild) ) {
				                lastNode = frag.appendChild(node);
				            }
				            range.insertNode(frag);
	            		}
		            	else
            				range.insertNode( document.createTextNode(text) );

		            }
		            sel = window.getSelection();
		            sel.removeAllRanges();
		            sel.addRange(range);		            
		        }
		        else if (document.selection && range.select) {
		            range.select();
		            if(text)
		            {
		            	if(mode=="html")
		            		range.pasteHTML(text);
		            	else
		            		range.text = text;
		            }
		        }
		    }
		},

		restoreIESelection:function() {
			//Function to restore the text selection range from the editor in IE
			var range = $(this).data('currentRange');
		    if (range) {
		        if (window.getSelection) {
		            sel = window.getSelection();
		            sel.removeAllRanges();
		            sel.addRange(range);
		        } else if (document.selection && range.select) {
		            range.select();
		        }
		    }
		},

		insertTextAtSelection:function(text,mode) {
		    var sel, range, node ;
		    typeof mode !== 'undefined' ? mode : "";
		    if (window.getSelection) {
		        sel = window.getSelection();
		        if (sel.getRangeAt && sel.rangeCount) {
		            range = sel.getRangeAt(0);
		            range.deleteContents();
		            var textNode = document.createTextNode(text); 
		            
		            if(mode=="html")
		            { 
		                var el = document.createElement("div");
		                el.innerHTML = text;
		                var frag = document.createDocumentFragment(), node, lastNode;
		                while ( (node = el.firstChild) ) {
		                    lastNode = frag.appendChild(node);
		                }
		                range.insertNode(frag);
		            }
		            else
		            { 
		            	range.insertNode(textNode);
		            	range.selectNode(textNode);
		            }
		            sel.removeAllRanges();
		            range = range.cloneRange();		            
		            range.collapse(false);
		            sel.addRange(range);
		        }
		    } else if (document.selection && document.selection.createRange) { 
		        range = document.selection.createRange();
		        range.pasteHTML(text);
		        range.select();
		    }
		},

		imageWidget: function(){
			//Class for Widget Handling the upload of Files
			var row = $('<div/>',{
				"class":"row"
			}).append($('<div/>',{
				id :"imgErrMsg"
			}));
			var container = $('<div/>',{'class':"tabbable tabs-left"});
			var navTabs = $('<ul/>',
									{ class: "nav nav-tabs"
							}).append($('<li/>',
										{ class:"active"
									}).append($('<a/>',{
											"href":"#uploadImageBar",
											"data-toggle":"tab"
										}).html("From Computer")
							)).append($('<li/>').append($('<a/>',{
											"href":"#imageFromLinkBar",
											"data-toggle":"tab"
										}).html("From URL")));

			var tabContent 		= $("<div/>", {class:"tab-content"});
			var uploadImageBar  = $("<div/>",{
				id: "uploadImageBar",
				class: "tab-pane active"
			});

			handleFileSelect = function(evt) {
    			var files = evt.target.files; // FileList object
				var output = [];
				for (var i = 0, f; f = files[i]; i++) {
					//Loop thorugh all the files
					if(!f.type.match('image.*') || !f.name.match(/(?:gif|jpg|png|jpeg)$/)){ //Process only Images
						methods.showMessage.apply(this,["imgErrMsg","Invalid file type"]);
						continue;
					}
					var reader = new FileReader();
					reader.onload = (function(imageFile){
						return function(e){
							//Render Thumnails
							var li = $('<li/>',{class:"col-xs-12 col-sm-6 col-md-3 col-lg-3"});
							var a = $('<a/>',{
								href:"javascript:void(0)",
								class:"thumbnail"
							});
							var image = $('<img/>',{
								src:e.target.result,
								title:escape(imageFile.name)
							}).appendTo(a).click(function(){
								$('#imageList').data('current', $(this).attr('src'));
								});
							li.append(a).appendTo($('#imageList'));
						}
					})(f);
					reader.readAsDataURL(f);					
				}				
			}
			var chooseFromLocal = $('<input/>',{
				type: "file",
				class:"inline-form-control",
				multiple: "multiple"
			});
			chooseFromLocal.on('change', handleFileSelect);			
			uploadImageBar.append(chooseFromLocal);
			var imageFromLinkBar = $("<div/>",{
				id: "imageFromLinkBar",
				class: "tab-pane"
			});		
			var getImageURL = $("<div/>", {class:"input-group"});
			var imageURL = $('<input/>',{
				type: "url",
				class:'form-control',
				id:"imageURL",
				placeholder: "Enter URL"
			}).appendTo(getImageURL);
			var getURL = $("<button/>",{
				class:"btn btn-success",
				type:"button"
			}).html("Go!").click(function(){
				var url = $('#imageURL').val();
				if(url ==''){
					methods.showMessage.apply(this,["imgErrMsg","Please enter image url"]);
					return false;
				}
				var li = $('<li/>',{class:"span6 col-xs-12 col-sm-6 col-md-3 col-lg-3"});
				var a = $('<a/>',{
					href:"javascript:void(0)",
					class:"thumbnail"
				});
				var image = $('<img/>',{
					src:url,
				}).error(function(){
				  	methods.showMessage.apply(this,["imgErrMsg","Invalid image url"]); 
				  	return false;
				}).load( function() { $(this).appendTo(a).click(function(){
					$('#imageList').data('current', $(this).attr('src'));
				});
				li.append(a).appendTo($('#imageList'));
			});
			}).appendTo($("<span/>", {class:"input-group-btn form-control-button-right"}).appendTo(getImageURL));

			imageFromLinkBar.append(getImageURL);
			tabContent.append(uploadImageBar).append(imageFromLinkBar);
			container.append(navTabs).append(tabContent);						

			var imageListContainer = $("<div/>",{'class': 'col-xs-12 col-sm-12 col-md-12 col-lg-12'});
			var imageList = $('<ul/>',{"class":"thumbnails padding-top list-unstyled",
										"id": 'imageList'
			}).appendTo(imageListContainer);
			row.append(container).append(imageListContainer);
			return row;
		},

		tableWidget: function(mode){
			//Function to generate the table input form
			var idExtn ='';
			if(typeof mode!=='undefined')
				idExtn = "Edt";
					
			var tblCntr = $('<div/>',{ //Outer Container Div
				class:"row-fluid"
				}).append($('<div/>',{ //Err Message Div
				 	id :"tblErrMsg"+idExtn 
				})).append($('<form/>',{ //Form 
					id:"tblForm"+idExtn 
					}).append($('<div/>',{ //Inner Container Div
						class:"row" 
						}).append($('<div/>',{ //Left input Container Div
							id :"tblInputsLeft"+idExtn,
							class:"col-xs-12 col-sm-6 col-md-6 col-lg-6"
							}).append($('<label/>',{ for:"tblRows"+idExtn,	text:"Rows"}
							)).append($('<input/>',{
								id:"tblRows"+idExtn,
								type:"text",
								class:"form-control form-control-width",
								value:2
							})).append($('<label/>',{ for:"tblColumns"+idExtn,	text:"Columns"}
							)).append($('<input/>',{
								id:"tblColumns"+idExtn,
								type:"text",
							 	class:"form-control form-control-width",
							 	value:2
							})).append($('<label/>',{ for:"tblWidth"+idExtn, text:"Width"}
							)).append($('<input/>',{
								id:"tblWidth"+idExtn,
								type:"text",
								class:"form-control form-control-width",
								value:400
							})).append($('<label/>',{ for:"tblHeight"+idExtn, text:"Height"}
							)).append($('<input/>',{ 
								id:"tblHeight"+idExtn,
								type:"text",
								class:"form-control form-control-width", 
							}))
						).append($('<div/>',{ //Right input Container Div
							id :"tblInputsRight"+idExtn,
							class:"col-xs-12 col-sm-6 col-md-6 col-lg-6"
							}).append($('<label/>',{ for:"tblAlign"+idExtn, text:"Alignment"}
							)).append($('<select/>',{ id:"tblAlign"+idExtn, class:"form-control form-control-width"}
								).append($('<option/>',{ text:"Choose", value:""}
								)).append($('<option/>',{ text:"Left", value:"left"}
								)).append($('<option/>',{ text:"Center", value:"center"}
								)).append($('<option/>',{ text:"Right",	value:"right"}))
							).append($('<label/>',{	for:"tblBorder"+idExtn, text:"Border size"}
							)).append($('<input/>',{ 
								id:"tblBorder"+idExtn,
								type:"text",
								class:"form-control form-control-width",
								value:1
							})).append($('<label/>',{ for:"tblCellspacing"+idExtn,	text:"Cell spacing"}
							)).append($('<input/>',{
								id:"tblCellspacing"+idExtn,
								type:"text", 
								class:"form-control form-control-width",
								value:1
							})).append($('<label/>',{ for:"tblCellpadding"+idExtn,	text:"Cell padding"}
							)).append($('<input/>',{
								id:"tblCellpadding"+idExtn,
								type:"text",
								class:"form-control form-control-width",
								value:1
							}))
						)
					)
				)																	
			return tblCntr;
		},

		imageAttributeWidget: function(){

			var edtTablecntr=$('<div/>',{ 
				class:"row-fluid"}
				).append($('<div/>',{ //Err Message Div
				 	id :"imageErrMsg" 
				})).append($('<input/>',{ 
						id:"imgAlt",
						type:"text",
						class:"form-control form-control-link ",
						placeholder:"Alt Text",
					})).append($('<input/>',{
						id:"imgTarget",
						class:"form-control form-control-link ",
						type:"text",
						placeholder:"Link Target"
					})).append($('<input/>',{
						id:"imgHidden",
						type:"hidden"						
					}))
					
				return edtTablecntr;

		},

		getHTMLTable: function(tblRows,tblColumns,attributes){
			//Function to generate html table. Supplied arguments: tablerows-no.of rows, no.of columns, table attributes.
			var tableElement = $('<table/>',{ class:"table" });
			for (var i = 0; i < attributes.length; i++){
				if(attributes[i].value!=''){
					if(attributes[i].attribute=="width" || attributes[i].attribute=="height")
	                  	tableElement.css(attributes[i].attribute,attributes[i].value);
					else
						tableElement.attr(attributes[i].attribute,attributes[i].value);
				}
			}
			for(var i=1; i<=tblRows; i++){
				var tblRow = $('<tr/>');
			 	for(var j=1; j<=tblColumns; j++){
			 		var tblColumn = $('<td/>').html('&nbsp;');
			 		tblColumn.appendTo(tblRow);
			 	}				
				tblRow.appendTo(tableElement);
			}
			return tableElement;
		},

		init : function( options )
		{
			var fonts = { "Sans serif"	 : "arial,helvetica,sans-serif",
						  "Serif"	 	 : "times new roman,serif",
						  "Wide"	 	 : "arial black,sans-serif",
						  "Narrow"	 	 : "arial narrow,sans-serif",
						  "Comic Sans MS": "comic sans ms,sans-serif",
						  "Courier New"  : "courier new,monospace",
						  "Garamond"	 : "garamond,serif",
						  "Georgia"	 	 : "georgia,serif",
						  "Tahoma" 		 : "tahoma,sans-serif",
						  "Trebuchet MS" : "trebuchet ms,sans-serif",
						  "Verdana" 	 : "verdana,sans-serif"};

			var styles = {  "Heading 1":"<h1>",
							"Heading 2":"<h2>",
							"Heading 3":"<h3>",
							"Heading 4":"<h4>",
							"Heading 5":"<h5>",
							"Heading 6":"<h6>",
							"Paragraph":"<p>" };

			var fontsizes = {	"Small"	:"2",
								"Normal":"3",
								"Medium":"4",
								"Large"	:"5",
								"Huge"	:"6" };

			var colors = [	{ name: 'Black', hex: '#000000' },
							{ name: 'MediumBlack', hex: '#444444' },
							{ name: 'LightBlack', hex: '#666666' },
							{ name: 'DimBlack', hex: '#999999' },
							{ name: 'Gray', hex: '#CCCCCC' },
							{ name: 'DimGray', hex: '#EEEEEE' },
							{ name: 'LightGray', hex: '#F3F3F3' },
							{ name: 'White', hex: '#FFFFFF' },

							{ name: 'libreak', hex: null },

							{ name: 'Red', hex: '#FF0000' },
							{ name: 'Orange', hex: '#FF9900' },
							{ name: 'Yellow', hex: '#FFFF00' },
							{ name: 'Lime', hex: '#00FF00' },
							{ name: 'Cyan', hex: '#00FFFF' },
							{ name: 'Blue', hex: '#0000FF' },
							{ name: 'BlueViolet', hex: '#8A2BE2' },
							{ name: 'Magenta', hex: '#FF00FF' },

							{ name: 'libreak', hex: null },
							
							{ name: 'LightPink', hex: '#FFB6C1'},
							{ name: 'Bisque', hex: '#FCE5CD'},
							{ name: 'BlanchedAlmond', hex: '#FFF2CC'},
							{ name: 'LightLime', hex: '#D9EAD3'},
							{ name: 'LightCyan', hex: '#D0E0E3'},
							{ name: 'AliceBlue', hex: '#CFE2F3'},
							{ name: 'Lavender', hex: '#D9D2E9'},
							{ name: 'Thistle', hex: '#EAD1DC'},

							{ name: 'LightCoral', hex: '#EA9999' },
							{ name: 'Wheat', hex: '#F9CB9C' },
							{ name: 'NavajoWhite', hex: '#FFE599' },
							{ name: 'DarkSeaGreen', hex: '#B6D7A8' },
							{ name: 'LightBlue', hex: '#A2C4C9' },
							{ name: 'SkyBlue', hex: '#9FC5E8' },
							{ name: 'LightPurple', hex: '#B4A7D6' },
							{ name: 'PaleVioletRed', hex: '#D5A6BD' },

							{ name: 'IndianRed', hex: '#E06666' },
							{ name: 'LightSandyBrown', hex: '#F6B26B' },
							{ name: 'Khaki', hex: '#FFD966' },
							{ name: 'YellowGreen', hex: '#93C47D' },
							{ name: 'CadetBlue', hex: '#76A5AF' },
							{ name: 'DeepSkyBlue', hex: '#6FA8DC' },
							{ name: 'MediumPurple', hex: '#8E7CC3' },
							{ name: 'MediumVioletRed', hex: '#C27BA0' },

							{ name: 'Crimson', hex: '#CC0000' },
							{ name: 'SandyBrown', hex: '#E69138' },
							{ name: 'Gold', hex: '#F1C232' },
							{ name: 'MediumSeaGreen', hex: '#6AA84F' },
							{ name: 'Teal', hex: '#45818E' },
							{ name: 'SteelBlue', hex: '#3D85C6' },
							{ name: 'SlateBlue', hex: '#674EA7' },
							{ name: 'VioletRed', hex: '#A64D79' },

							{ name: 'Brown', hex: '#990000' },
							{ name: 'Chocolate', hex: '#B45F06' },
							{ name: 'GoldenRod', hex: '#BF9000' },
							{ name: 'Green', hex: '#38761D' },
							{ name: 'SlateGray', hex: '#134F5C' },
							{ name: 'RoyalBlue', hex: '#0B5394' },
							{ name: 'Indigo', hex: '#351C75' },
							{ name: 'Maroon', hex: '#741B47' },

							{ name: 'DarkRed', hex: '#660000' },
							{ name: 'SaddleBrown', hex: '#783F04' },
							{ name: 'DarkGoldenRod', hex: '#7F6000' },
							{ name: 'DarkGreen', hex: '#274E13' },
							{ name: 'DarkSlateGray', hex: '#0C343D' },
							{ name: 'Navy', hex: '#073763' },
							{ name: 'MidnightBlue', hex: '#20124D' },
							{ name: 'DarkMaroon', hex: '#4C1130' } ];

			var specialchars = [{ name:"Exclamation ", text:"!"},
								{ name:"At", text:"@"},
								{ name:"Hash", text:"#"},
								{ name:"Percentage", text:"%"},
								{ name:"Uppercase", text:"^"},
								{ name:"Ampersand", text:"&"},
								{ name:"Asterisk", text:"*"},
								{ name:"OpenBracket", text:"("},
								{ name:"CloseBracket", text:")"},
								{ name:"Underscore", text:"_"},
								{ name:"Hiphen", text:"-"},
								{ name:"Plus", text:"+"},
								{ name:"Equalto", text:"="},
								{ name:"OpenSquareBracket", text:"["},
								{ name:"CloseSquareBracket", text:"]"},
								{ name:"OpenCurly", text:"{"},
								{ name:"CloseCurly", text:"}"},
								{ name:"Pipe", text:"|"},
								{ name:"Colon", text:":"},
								{ name:"Semicolon", text:";"},
								{ name:"Single quote", text:"&#39;"},
								{ name:"Double quote", text:"&#34;"},
								{ name:"Left single curly quote", text:"&lsquo;"},
								{ name:"right single curly quote", text:"&rsquo;"},
								{ name:"Forward-slash", text:"&#47;"},
								{ name:"Back-slash", text:"&#92;"},
								{ name:"LessThan", text:"<"},
								{ name:"GreaterThan", text:">"},
								{ name:"QuestionMark", text:"?"},
								{ name:"Tilda", text:"~"},
								{ name:"Grave accent", text:"`"},
								{ name:"Micron", text:"&micro;"},
								{ name:"Paragraph sign", text:"&para;"},
								{ name:"Plus/minus", text:"&plusmn;"},
								{ name:"Trademark", text:"&trade;"},
								{ name:"Copyright", text:"&copy;"},
								{ name:"Registered", text:"&reg;"},
								{ name:"Section", text:"&sect;"},
								{ name:"right double angle quotes", text:"&#187;"},
								{ name:"fraction one quarter", text:"&#188;"},
								{ name:"fraction one half", text:"&#189;"},
								{ name:"fraction three quarters", text:"&#190;"},
								{ name:"Dollar", text:"$"},
								{ name:"Euro", text:"&euro;"},
								{ name:"Pound", text:"&pound;"},
								{ name:"Yen", text:"&yen;"},
								{ name:"Cent", text:"&#162;"},
								{ name:"IndianRupee", text:"&#8377;"},];
			
			var menuItems = { 'fonteffects': true,
							  'texteffects': true,
							  'aligneffects': true,
							  'textformats':true,
							  'actions' : true,
							  'insertoptions' : true,
							  'extraeffects' : true,
							  'advancedoptions' : true,
							  'screeneffects':true,

							  'fonts'	: { "select":true,
											"default": "Font",
											"tooltip": "Fonts",
											"commandname": "fontName",
											"custom":null },

							  'styles'	: { "select":true,
											"default": "Formatting",
											"tooltip": "Paragraph Format",
											"commandname": "formatBlock",
												"custom":null },

							 'font_size': {	"select":true,
											"default": "Font size",
											"tooltip": "Font Size",
											"commandname":"fontSize", 
											"custom":null },

							  'color'	: { "text":"A",
											"icon": "se se-font", 
											"tooltip": "Text/Background Color",
											"commandname":null,
											"custom":function(button){
													var flag = 0;
													var paletteCntr   = $('<div/>',{id:"paletteCntr",class:"activeColour", css :{"display":"none","width":"335px"}}).click(function(event){event.stopPropagation();});
													var paletteDiv    = $('<div/>',{id:"colorpellete"});
													var palette       = $('<ul />',{id:"color_ui"}).append($('<li />').css({"width":"145px","display":"Block","height":"25px"}).html('<div>Text Color</div>'));
													var bgPalletteDiv = $('<div/>',{id:"bg_colorpellete"});
													var bgPallette    = $('<ul />',{id:"bgcolor_ui"}).append($('<li />').css({"width":"145px","display":"Block","height":"25px"}).html('<div>Background Color</div>'));
													if($('#contentarea').data("colorBtn")){
														flag = 1;
														$('#contentarea').data("colorBtn",null);
													}
													else
														$('#contentarea').data("colorBtn",1);
													if(flag==0){														
														for (var i = 0; i < colors.length; i++){
															if(colors[i].hex!=null){
															    palette.append($('<li />').css('background-color', colors[i].hex).mousedown(function(event){ event.preventDefault();}).click(function(){															
																var hexcolor = methods.rgbToHex.apply(this,[$(this).css('background-color')]);
																methods.restoreSelection.apply(this);
																methods.setStyleWithCSS.apply(this);
																document.execCommand('forecolor',false,hexcolor);
																$('#paletteCntr').remove();
																$('#contentarea').data("colorBtn",null);															
																}));

																bgPallette.append($('<li />').css('background-color', colors[i].hex).mousedown(function(event){ event.preventDefault();}).click(function(){															
																var hexcolor = methods.rgbToHex.apply(this,[$(this).css('background-color')]);
																methods.restoreSelection.apply(this);
																methods.setStyleWithCSS.apply(this);
																document.execCommand('backColor',false,hexcolor);
																$('#paletteCntr').remove();
																$('#contentarea').data("colorBtn",null);
																}));
															}
															else{
																palette.append($('<li />').css({"width":"145px","display":"Block","height":"5px"}));
																bgPallette.append($('<li />').css({"width":"145px","display":"Block","height":"5px"}));
															}
														} 
														palette.appendTo(paletteDiv);
														bgPallette.appendTo(bgPalletteDiv);
														paletteDiv.appendTo(paletteCntr);
														bgPalletteDiv.appendTo(paletteCntr)																												
														paletteCntr.insertAfter(button);
														$('#paletteCntr').slideDown('slow');
													}
													else 
														$('#paletteCntr').remove();
												}},
							
							  'bold'	: { "text": "B", 
											"icon": "se se-bold", 
											"tooltip": "Bold", 
											"commandname":"bold", 
											"custom":null },

						      'italics'	: { "text":"I", 
											"icon":"se se-italic", 
											"tooltip":"Italics", 
											"commandname":"italic",
											"custom":null },

						     'underline': { "text":"U", 
											"icon":"se se-underline", 
											"tooltip":"Underline", 
											"commandname":"underline",
											"custom":null },
											
						     'strikeout': { "text": "Strikeout", 
											"icon":"se se-strikethrough", 
											"tooltip": "Strike Through", 
											"commandname":"strikeThrough", 
											"custom":null },

						     'ol'		: { "text": "N", 
											"icon": "se se-list-ol", 
											"tooltip": "Insert/Remove Numbered List", 
											"commandname":"insertorderedlist", 
											"custom":null },

						     'ul'		: { "text": "Bullet", 
											"icon": "se se-list-ul", 
											"tooltip": "Insert/Remove Bulleted List", 
											"commandname":"insertunorderedlist", 
											"custom":null },

						     'undo'		: { "text": "undo", 
											"icon": "se se-undo", 
											"tooltip": "Undo", 
											"commandname":"undo", 
											"custom":null },

						     'redo'		: { "text": "redo", 
											"icon": "se se-repeat", 
											"tooltip": "Redo", 
											"commandname":"redo", 
											"custom":null },

						     'l_align'	: { "text": "leftalign", 
											"icon": "se se-align-left", 
											"tooltip": "Align Left", 
											"commandname":"justifyleft", 
											"custom":null },

						     'r_align'	: { "text": "rightalign", 
											"icon": "se se-align-right", 
											"tooltip": "Align Right", 
											"commandname":"justifyright", 
											"custom":null },

						     'c_align'	: { "text": "centeralign", 
											"icon": "se se-align-center", 
											"tooltip": "Align Center", 
											"commandname":"justifycenter", 
											"custom":null },

						     'justify'	: { "text": "justify", 
											"icon": "se se-align-justify", 
											"tooltip": "Justify", 
											"commandname":"justifyfull", 
											"custom":null },

							  'unlink'	: { "text": "Unlink", 
											"icon": "se se-unlink", 
											"tooltip": "Unlink", 
											"commandname":"unlink", 
											"custom":null },

						   'insert_link': { "modal": true,
						   					"modalId": "InsertLink", 
											"icon":"se se-link", 
											"tooltip": "Insert Link", 
											"modalHeader": "Insert Hyperlink",
											"modalBody": $('<div/>',{   class:"form-group"
																	}).append($('<div/>',{
																		id :"errMsg"
																	})).append($('<input/>',{
																		type:"text",
																		id:"inputText",
																		class:"form-control form-control-link ",
																		placeholder:"Text to Display",
																	})).append($('<input/>',{
																		type:"text",
																		id:"inputUrl",
																		required:true,
																		class:"form-control form-control-link",
																		placeholder:"Enter URL"
																	})),
											"beforeLoad":function(){ 
												$('#inputText').val("");
												$('#inputUrl').val("");
												$(".alert").alert("close");
												if($(this).data('currentRange')!=''){ 
													$('#inputText').val($(this).data('currentRange'));
												}
											},
											"onSave":function(){
												var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
												var targetText = $('#inputText').val();
												var targetURL  = $('#inputUrl').val();
												var range      = $(this).data('currentRange');
												if(targetURL ==''){
													methods.showMessage.apply(this,["errMsg","Please enter url"]);
													return false;
												}												
												if(!targetURL.match(urlPattern)){
													methods.showMessage.apply(this,["errMsg","Enter valid url"]);
													return false;
												}													
												if(range=='' && targetText==''){ 
													targetText =targetURL;	
												}
												if(navigator.userAgent.match(/MSIE/i)){	
													var targetLink='<a href="'+targetURL+'" target="_blank">'+targetText+'</a>';
													methods.restoreSelection.apply(this,[targetLink,'html']);
												}
												else{
												    methods.restoreSelection.apply(this, [targetText]);																																		
													document.execCommand('createLink',false,targetURL);
												}
												$('#contentarea').find('a[href="'+targetURL+'"]').each(function(){ $(this).attr("target", "_blank"); });												
												$(".alert").alert("close");
												$("#InsertLink").modal("hide");
												$('#contentarea').focus();
												return false;
											}},

						   'insert_img'	: { "modal": true,
						   					"modalId": "InsertImage", 
											"icon":"se se-picture-o", 
											"tooltip": "Insert Image", 
											"modalHeader": "Insert Image",
											"modalBody": methods.imageWidget.apply(this),
											"beforeLoad":function(){ 
												$('#imageURL').val("");
												$("#uploadImageBar :input").val("");
												$('#imageList').data('current',"");																																				
											},
											"onSave": function(){
												methods.restoreSelection.apply(this);												
												if($('#imageList').data('current')){
													if(navigator.userAgent.match(/MSIE/i)){
														var imageStr = '<img src="'+$('#imageList').data('current')+'"/>'
														methods.restoreSelection.apply(this,[imageStr,'html'])
													}
													else{
														document.execCommand('insertimage', false, $('#imageList').data('current'));
													}
												}
												else{
													methods.showMessage.apply(this,["imgErrMsg","Please select an image"]);
													return false;
												}
												$("#InsertImage").modal("hide");
												$('#contentarea').focus();
											}},

						'insert_table'	: { "modal": true,
					   						"modalId": "InsertTable", 
											"icon":"se se-table", 
											"tooltip": "Insert Table", 
											"modalHeader": "Insert Table",
											"modalBody":methods.tableWidget.apply(this),
											"beforeLoad":function(){ 													
												$('#tblForm').each (function(){ this.reset(); });																																	
											},
											"onSave": function(){
												methods.restoreSelection.apply(this);
												var tblRows        = $('#tblRows').val();
												var tblColumns     = $('#tblColumns').val();
												var tblWidth       = $('#tblWidth').val();
												var tblHeight      = $('#tblHeight').val();
												var tblAlign       = $('#tblAlign').val();
												var tblBorder      = $('#tblBorder').val();
												var tblCellspacing = $('#tblCellspacing').val();
												var tblCellpadding = $('#tblCellpadding').val();
												var intReg 		   = /^[0-9]+$/;
												var cssReg 		   = /^auto$|^[+-]?[0-9]+\.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc)?$/ig;
												var numReg 		   = /^[0-9]+\.?([0-9])?$/;
												
												if(!tblRows.match(intReg)){
													methods.showMessage.apply(this,["tblErrMsg","Rows must be a positive number"]);
													return false;
												}													
												if(!tblColumns.match(intReg)){
													methods.showMessage.apply(this,["tblErrMsg","Columns must be a positive number"]);
													return false;
												}
												if(tblWidth!="" && !tblWidth.match(cssReg)){
													methods.showMessage.apply(this,["tblErrMsg","Please enter positive number with or without a valid CSS measurement unit (px,em,ex,%,in,cm,mm,pt,pc)"]);
													return false;
												}
												if(tblHeight!="" && !tblHeight.match(cssReg)){
													methods.showMessage.apply(this,["tblErrMsg","Please enter positive number with or without a valid CSS measurement unit (px,em,ex,%,in,cm,mm,pt,pc)"]);
													return false;
												}
												if(tblBorder!="" && !tblBorder.match(numReg)){
													methods.showMessage.apply(this,["tblErrMsg","Border size must be a positive number"]);
													return false;
												}
												if(tblCellspacing!="" && !tblCellspacing.match(numReg)){
													methods.showMessage.apply(this,["tblErrMsg","Cell spacing must be a positive number"]);
													return false;
												}
												if(tblCellpadding!="" && !tblCellpadding.match(numReg)){
													methods.showMessage.apply(this,["tblErrMsg","Cell padding must be a positive number"]);
													return false;
												}

												var htmlTableCntr = $('<div/>');
												var tblAttributes = [	
																		{attribute:"align",value:tblAlign},
																		{attribute:"border",value:tblBorder},
																		{attribute:"cellspacing",value:tblCellspacing},
																		{attribute:"cellpadding",value:tblCellpadding},
																		{attribute:"width",value:tblWidth},
																		{attribute:"height",value:tblHeight},
																	];
												var htmlTable     = methods.getHTMLTable.apply(this, [tblRows, tblColumns, tblAttributes]);
												htmlTable.appendTo(htmlTableCntr);
												if(navigator.userAgent.match(/MSIE/i))
												methods.restoreSelection.apply(this,[htmlTableCntr.html(),'html']);
												else
												document.execCommand('insertHTML', false, htmlTableCntr.html());
												$("#InsertTable").modal("hide");
												$('#contentarea').focus();
											}},

						   'hr_line'	: { "text": "HR", 
											"icon":"se se-minus", 
											"tooltip": "Horizontal Rule", 
											"commandname":"insertHorizontalRule", 
											"custom":null },

						   'block_quote': { "text": "Block Quote", 
											"icon":"se se-quote-right", 
											"tooltip": "Block Quote", 
											"commandname":null, 
											"custom":function(){ 
												methods.setStyleWithCSS.apply(this);
												if(navigator.userAgent.match(/MSIE/i)){													 
													document.execCommand('indent', false, null); 	
												}
												else{
													document.execCommand('formatBlock', false, '<blockquote>');
												}
											}},						   

						   'indent'		: { "text": "Indent", 
											"icon":"se se-indent", 
											"tooltip": "Increase Indent", 
											"commandname":"indent", 
											"custom":null },

						   'outdent'	: { "text": "Outdent", 
											"icon":"se se-outdent", 
											"tooltip": "Decrease Indent", 
											"commandname":"outdent", 
											"custom":null },

							'print'		: { "text": "Print", 
											"icon":"se se-print", 
											"tooltip": "Print", 
											"commandname":null, 
											"custom":function(){
											oDoc = document.getElementById("contentarea");
											var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=yes,toolbar=no,location=no,scrollbars=yes");
											oPrntWin.document.open();
											oPrntWin.document.write("<!doctype html><html><head><title>Print<\/title><\/head><body onload=\"print();\">" + oDoc.innerHTML + "<\/body><\/html>");
											oPrntWin.document.close();
											}},

							'rm_format'	: { "text": "Remove format", 
											"icon":"se se-eraser", 
											"tooltip": "Remove Formatting", 
											"commandname":"removeformat", 
											"custom":null },

							'select_all': { "text": "Select all", 
											"icon":"se se-file-text", 
											"tooltip": "Select All", 
											"commandname":null, 
											"custom":function(){ 
												document.execCommand("selectall", null, null);												    
											}},

							'togglescreen':{ "text": "Toggle Screen",
											 "icon": "se se-arrows-alt",
											 "tooltip": "Toggle Screen",
											 "commandname":null,
											 "custom":function(button, parameters){
												$(".Editor-container").toggleClass('fullscreen');
												var statusdBarHeight=0;
												if($("#statusbar").length)
												{
													statusdBarHeight = $("#statusbar").height();
												}
						                        if($(".Editor-container").hasClass('fullscreen'))                     
						                        	$("#contentarea").css({"height":$(".Editor-container").height()-($("#menuBarDiv").height()+statusdBarHeight)-13});
						                        else
						                        	$("#contentarea").css({"height":""});
						                    }},

							'splchars'	: { "text": "S", 
											"icon": "se se-asterisk", 
											"tooltip": "Insert Special Character", 
											"commandname":null, 
											"custom":function(button){
													methods.restoreIESelection.apply(this);
													var flag =0;
													var splCharDiv = $('<div/>',{id:"specialchar", class:"specialCntr", css :{"display":"none"}}).click(function(event) { event.stopPropagation();});
													var splCharUi  = $('<ul />',{id:"special_ui"});
													if($('#contentarea').data("splcharsBtn")){
														flag = 1;
														$('#contentarea').data("splcharsBtn", null);
													}
													else
														$('#contentarea').data("splcharsBtn", 1);
													
													if(flag==0){
														for (var i = 0; i < specialchars.length; i++){															
															splCharUi.append($('<li />').html(specialchars[i].text).attr('title',specialchars[i].name).mousedown(function(event){ event.preventDefault();}).click(function(event){
																if(navigator.userAgent.match(/MSIE/i)){
																	var specCharHtml = $(this).html();
																	methods.insertTextAtSelection.apply(this,[specCharHtml,'html']);
																}
																else{
																	document.execCommand('insertHTML',false,$(this).html());
																}
																$('#specialchar').remove();
																$('#contentarea').data("splcharsBtn", null);																																											
															}));
														}														
														splCharUi.prependTo(splCharDiv);
														splCharDiv.insertAfter(button)
														$('#specialchar').slideDown('slow');
													}
													else
														$('#specialchar').remove();
											}},

							'source'	: { "text": "Source", 
											"icon":"se se-code", 
											"tooltip": "Source", 
											"commandname":null, 
											"custom":function(button, params){ methods.getSource.apply(this, [button, params]) } },
											"params": {"obj":null},
										   };

			var menuGroups = {'texteffects' : ['bold', 'italics', 'underline', 'color'],
							  'aligneffects': ['l_align','c_align', 'r_align', 'justify'],
							  'textformats': ['indent', 'outdent', 'block_quote', 'ol', 'ul'],
							  'fonteffects' : ['fonts', 'styles', 'font_size'],
							  'actions' : ['undo', 'redo'],
							  'insertoptions' : ['insert_link', 'unlink', 'insert_img', 'insert_table'],
							  'extraeffects' : ['strikeout', 'hr_line', 'splchars'],
							  'advancedoptions' : ['print', 'rm_format', 'select_all', 'source'],
							  'screeneffects' : ['togglescreen']
							};

			var settings = $.extend({				
				'texteffects':true,
				'aligneffects':true,
				'textformats':true,
				'fonteffects':true,
				'actions' : true,
				'insertoptions' : true,
				'extraeffects' : true,
				'advancedoptions' : true,
				'screeneffects':true,
				'bold': true,
				'italics': true,
				'underline':true,
				'ol':true,
				'ul':true,
				'undo':true,
				'redo':true,
				'l_align':true,
				'r_align':true,
				'c_align':true,
				'justify':true,
				'insert_link':true,
				'unlink':true,
				'insert_img':true,
				'hr_line':true,
				'block_quote':true,
				'source':true,
				'strikeout':true,
				'indent':true,
				'outdent':true,
				'fonts':fonts,
				'styles':styles,
				'print':true,
				'rm_format':true,
				'status_bar':true,
				'font_size':fontsizes,
				'color':colors,
				'splchars':specialchars,
				'insert_table':true,
				'select_all':true,
				'togglescreen':true
			},options);

	       	var containerDiv = $("<div/>",{ class : "row-fluid Editor-container" });
			var $this = $(this).hide();	       	
	       	$this.after(containerDiv); 

	       	var menuBar = $( "<div/>",{ id : "menuBarDiv",
								  		class : "row-fluid"
							}).prependTo(containerDiv);
	       	var editor  = $( "<div/>",{	class : "Editor-editor",
										css : {overflow: "auto"},
										contenteditable:"true",								
										id:'contentarea'
						 	}).appendTo(containerDiv);
	       	if(settings['status_bar']){
	       		var statusBar = $( "<div/>",{ 	id:"statusbar",
												class : "row-fluid",								
												unselectable:"on",
								}).appendTo(containerDiv);
				$('#contentarea').keyup(function(event){ 
					var wordCount = methods.getWordCount.apply(this);               
                	$("#statusbar").html('<div class="label">'+'Words : '+wordCount+'</div>');
            	});
	        }	        
	       	$(this).data("menuBar", menuBar);
	       	$(this).data("editor", editor);
	       	$(this).data("statusBar", statusBar);
	       	
	       	
	       	for(var item in menuItems){
	       		if(!settings[item] ){ //if the display is not set to true for the button in the settings.	       		
	       			if(settings[item] in menuGroups){
	       				for(var each in menuGroups[item]){
	       					settings[each] = false;
	       				}
	       			}
	       			continue;
	       		}
	       		if(item in menuGroups){
	       			var group = $("<div/>",{class:"btn-group"});	       			
	       			for(var index=0;index<menuGroups[item].length;index++){
	       				var value = menuGroups[item][index];	       				
	       				if(settings[value]){
       						var menuItem = methods.createMenuItem.apply(this,[menuItems[value], settings[value], true]);
       						group.append(menuItem);
       					}
       					settings[value] = false;
	       			}
	       			menuBar.append(group);	       				       			
	       		}
	       		else{
	       			var menuItem = methods.createMenuItem.apply(this,[menuItems[item], settings[item],true]);
	       			menuBar.append(menuItem);
	       		}	       		
	       	}

	       	//For contextmenu	       	
		    $(document.body).mousedown(function(event) {
		        var target = $(event.target);
		        if (!target.parents().andSelf().is('#context-menu')) { // Clicked outside
		            $('#context-menu').remove();
		        } 
		        if (!target.parents().andSelf().is('#specialchar') && (target.closest('a').html()!='<i class="se se-asterisk"></i>')) { //Clicked outside
		        	if($("#specialchar").is(':visible'))
		            {
		            	$('#contentarea').data("splcharsBtn", null);
		            	$('#specialchar').remove();		           		
		           	}
		        }
		        if (!target.parents().andSelf().is('#paletteCntr') && (target.closest('a').html()!='<i class="se se-font"></i>')) { //Clicked outside
		        	if($("#paletteCntr").is(':visible'))
		            {
		            	$('#contentarea').data("colorBtn", null);
		            	$('#paletteCntr').remove();		           		
		           	}
		        }
		    });
	       	$('#contentarea').bind("contextmenu", function(e){
	       		if($('#context-menu').length)
	       			$('#context-menu').remove();
	       		var cMenu 	= $('<div/>',{id:"context-menu"
	       						}).css({position:"absolute", top:e.pageY, left: e.pageX, "z-index":9999
	       						}).click(function(event){
								    event.stopPropagation();
								});
	       		var cMenuUl = $('<ul/>',{ class:"dropdown-menu on","role":"menu"});
	       		e.preventDefault();
	       		if($(e.target).is('a')){
	       			methods.createLinkContext.apply(this,[e,cMenuUl]);
	       			cMenuUl.appendTo(cMenu);
	       		    cMenu.appendTo('body');
	       		}
	       		else if($(e.target).is('td')){
	       			methods.createTableContext.apply(this,[e,cMenuUl]);
	       			cMenuUl.appendTo(cMenu);
	       		    cMenu.appendTo('body');
	       		}
	       		else if($(e.target).is('img')){
	       				       			
	       			methods.createImageContext.apply(this,[e,cMenuUl]);
	       			cMenuUl.appendTo(cMenu);
	       			cMenu.appendTo('body');
	       		}
	       	});
		},
		createLinkContext: function(event,cMenuUl){
			var cMenuli = $('<li/>').append($('<a/>',{
				id:"rem_link",
				"href":"javascript:void(0)",
				"text":"RemoveLink"
			}).click(function(e){
				return function(){
				$(e.target).contents().unwrap();
				$('#context-menu').remove();
			}}(event)));
			cMenuli.appendTo(cMenuUl);

		},

		createImageContext: function(event,cMenuUl){
			var cModalId="imgAttribute";
			var cModalHeader="Image Attributes";
			var imgModalBody=methods.imageAttributeWidget.apply(this,["edit"]);
			var onSave = function(){
				var urlPattern = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
				var imageAlt = $('#imgAlt').val();
				var imageTarget = $('#imgTarget').val();
				if(imageAlt==""){
					methods.showMessage.apply(this,["imageErrMsg","Please enter image alternative text"]);
					return false;
				}
				if(imageTarget!=""&& !imageTarget.match(urlPattern)){
					methods.showMessage.apply(this,["imageErrMsg","Please enter valid url"]);
					return false;
				}
				if($("#imgHidden").val()!=""){
                        var imgId = $("#imgHidden").val();
	       				$("#"+imgId).attr('alt',imageAlt);
	       				if(imageTarget!="")
	       				{
	       				 if($("#wrap_"+imgId).length)
	       				 $("#wrap_"+imgId).attr("href",imageTarget);	
	       				 else
					     $("#"+imgId).wrap($('<a/>',{ id:"wrap_"+imgId,href:imageTarget,target:"_blank"}));
					    }
					    else
					    {
					    	if($("#wrap_"+imgId).length)
					    	$("#"+imgId).unwrap();
					    }
	       		}	       		
				$("#imgAttribute").modal("hide");
				$('#contentarea').focus();
			};
			methods.createModal.apply(this,[cModalId,cModalHeader, imgModalBody, onSave]);
			var modalTrigger = $('<a/>',{	href:"#"+cModalId,
       										"text":"Image Attributes",
											"data-toggle":"modal"
			}).click( function(e){ 
				return function(){	
			        $('#context-menu').remove();
			        var stamp   = (new Date).getTime();			        
			        $('#imgAlt').val($(e.target).closest("img").attr("alt"));
			        $('#imgTarget').val('');

			        if(typeof $(e.target).closest("img").attr("id")!=="undefined"){	
			            var identifier = $(e.target).closest("img").attr("id");		        	
			        	$('#imgHidden').val(identifier);
			        	if($('#wrap_'+identifier).length)
			        		$('#imgTarget').val($('#wrap_'+identifier).attr("href"));
			        	else
			        	 	$('#imgTarget').val('');	
			        }
			    	else{			    		
			    		$(e.target).closest("img").attr("id","img_"+stamp)
			    		$('#imgHidden').val("img_"+stamp);
			    	}
					
			}}(event));
			cMenuUl.append($('<li/>').append(modalTrigger))
					.append($('<li/>').append($('<a/>',{text:"Remove Image"}).click( 
						function(e) { return function(){ 
								$('#context-menu').remove();
								$(e.target).closest("img").remove(); 
						}}(event))));
		},

		createTableContext: function(event,cMenuUl){
			$('#editProperties').remove();
			var modalId="editProperties";
       		var modalHeader="Table Properties";
       		var tblModalBody= methods.tableWidget.apply(this,["edit"]);
       		var onSave = function(){ 
       			var tblWidthEdt			= $('#tblWidthEdt').val();
       			var tblHeightEdt		= $('#tblHeightEdt').val();
       			var tblBorderEdt		= $('#tblBorderEdt').val();
       			var tblAlignEdt	        = $('#tblAlignEdt').val();
       			var tblCellspacingEdt	= $('#tblCellspacingEdt').val();
       			var tblCellpaddingEdt	= $('#tblCellpaddingEdt').val();
				var tblEdtCssReg 		= /^auto$|^[+-]?[0-9]+\.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc)?$/ig;
				var tblEdtNumReg 		= /^[0-9]+\.?([0-9])?$/;
				if(tblWidthEdt!="" && !tblWidthEdt.match(tblEdtCssReg)){
					methods.showMessage.apply(this,["tblErrMsgEdt","Please enter positive number with or without a valid CSS measurement unit (px,em,ex,%,in,cm,mm,pt,pc)"]);
					return false;
				}
				if(tblHeightEdt!="" && !tblHeightEdt.match(tblEdtCssReg)){
					methods.showMessage.apply(this,["tblErrMsgEdt","Please enter positive number with or without a valid CSS measurement unit (px,em,ex,%,in,cm,mm,pt,pc)"]);
					return false;
				}
				if(tblBorderEdt!="" && !tblBorderEdt.match(tblEdtNumReg)){
					methods.showMessage.apply(this,["tblErrMsgEdt","Border size must be a positive number"]);
					return false;
				}
				if(tblCellspacingEdt!="" && !tblCellspacingEdt.match(tblEdtNumReg)){
					methods.showMessage.apply(this,["tblErrMsgEdt","Cell spacing must be a positive number"]);
					return false;
				}
				if(tblCellpaddingEdt!="" && !tblCellpaddingEdt.match(tblEdtNumReg)){
					methods.showMessage.apply(this,["tblErrMsgEdt","Cell padding must be a positive number"]);
					return false;
				}
				$(event.target).closest('table').css('width',tblWidthEdt);
				if(tblHeightEdt!="")
				$(event.target).closest('table').css('height',tblHeightEdt);
			    $(event.target).closest('table').attr('align',tblAlignEdt);
			    $(event.target).closest('table').attr('border',tblBorderEdt);
			    $(event.target).closest('table').attr('cellspacing',tblCellspacingEdt);
			    $(event.target).closest('table').attr('cellpadding',tblCellpaddingEdt);
			    $("#editProperties").modal("hide");
				$('#contentarea').focus();
       		};
       		methods.createModal.apply(this,[modalId,modalHeader, tblModalBody, onSave]);
       		var modalTrigger = $('<a/>',{	href:"#"+modalId,
       										"text":"Table Properties",
											"data-toggle":"modal"
			}).click( function(e){ return function(){	
			        $('#context-menu').remove();			
					$('#tblRowsEdt').val($(e.target).closest('table').prop('rows').length);			
				    $('#tblColumnsEdt').val($(e.target).closest('table').find('tr')[0].cells.length);
				    $('#tblRowsEdt').attr('disabled','disabled');   
				    $('#tblColumnsEdt').attr('disabled','disabled');
				    $('#tblWidthEdt').val($(e.target).closest('table').get(0).style.width);
				    $('#tblHeightEdt').val($(e.target).closest('table').get(0).style.height);
				    $('#tblAlignEdt').val($(e.target).closest('table').attr("align"));
				    $('#tblBorderEdt').val($(e.target).closest('table').attr("border"));
				    $('#tblCellspacingEdt').val($(e.target).closest('table').attr("cellspacing"));
				    $('#tblCellpaddingEdt').val($(e.target).closest('table').attr("cellpadding"));

				    
			}}(event));
       		
			cMenuUl.append($('<li/>',{class:"dropdown-submenu",css:{display:"block"}})
       						.append($('<a/>',{"tabindex":"-1", href:"javascript:void(0)","text":"Row"}))
       						.append($('<ul/>',{class:"dropdown-menu"})
       								.append($('<li/>').append($('<a/>',{
											id:"tbl_addrow",
											"href":"javascript:void(0)",
											"text":"Add Row"
											}).click(function(e){
												return function(){
													var row = $(e.target).closest('table').prop('rows').length;
													var columns = $(e.target).closest('table').find('tr')[0].cells.length;
													var newTblRow = $('<tr/>');
													for(var j=1; j<=columns; j++){
												 		var newTblCol = $('<td/>').html('&nbsp;');
												 		newTblCol.appendTo(newTblRow);
												 	}
											 		newTblRow.appendTo($(e.target).closest('table'));
											 		$('#context-menu').remove();
												}
											}(event))))
       								.append($('<li/>').append($('<a/>',{text:"Remove Row"}).click( 
											function(e) { return function(){ 
													$('#context-menu').remove();
													$(e.target).closest("tr").remove(); 
											}}(event))))
       			)).append($('<li/>',{class:"dropdown-submenu",css:{display:"block"}})
   						.append($('<a/>',{"tabindex":"-1", href:"javascript:void(0)","text":"Column"}))
   						.append($('<ul/>',{class:"dropdown-menu"})
   								.append($('<li/>').append($('<a/>',{
										id:"tbl_addcolumn",
										"href":"javascript:void(0)",
										"text":"Add Column",
										}).click(function(e){
											return function(){
												var row = $(e.target).closest('table').prop('rows').length;
												var columns = $(e.target).closest('table').find('tr')[0].cells.length;
												$(e.target).closest('table').find('tr').each(function(){
										 			$(this).append($('<td/>'));
										 		});
										 		$('#context-menu').remove();
											}
										}(event))))
   								.append($('<li/>').append($('<a/>',{text:"Remove Column"}).click( 
										function(e) { return function(){ 
												$('#context-menu').remove();
												var colnum = $(e.target).closest("td").length;
												$(e.target).closest("table").find("tr").each(function(){ 
													$(this).find("td:eq(" + colnum + ")").remove()}); 
										}}(event))))
   						));
			cMenuUl.append($('<li/>').append(modalTrigger))
					.append($('<li/>',{class:"divider"}))
					.append($('<li/>').append($('<a/>',{text:"Remove Table"}).click( 
						function(e){ return function(){ 
								$('#context-menu').remove();
								$(e.target).closest("table").remove(); 
						}}(event))));

		},

		createModal: function(modalId, modalHeader, modalBody, onSave){
			//Create a Modal for the button.		
			var modalTrigger = $('<a/>',{	href:"#"+modalId,
											role:"button",
											class:"btn btn-default",
											"data-toggle":"modal"
			});
			var modalElement = $('<div/>',{ id: modalId,
								           class: "modal fade",
								              tabindex: "-1",
								              role: "dialog",
								              "aria-labelledby":"h3_"+modalId,
								              "aria-hidden":"true"
								          }).append($('<div>',{
								            	class:"modal-dialog"
								         		}).append($('<div>',{
							            			class:"modal-content"
									         		}).append($('<div>',{
									           			class:"modal-header"
									           			}).append($('<button/>',{
										                	type:"button",
										                	class:"close",
										                	"data-dismiss":"modal",
										                	"aria-hidden":"true"
										               		}).html('x')
									            		).append($('<h3/>',{
									                		id:"h3_"+modalId
									           				}).html(modalHeader))
									         		).append($('<div>',{
									           			class:"modal-body"
									           			}).append(modalBody)
									          		).append($('<div>',{
									            		class:"modal-footer"
									         			}).append($('<button/>',{
									                		type:"button",
									                		class:"btn btn-default",
									                		"data-dismiss":"modal",
									                		"aria-hidden":"true"
									               			}).html('Cancel')
								           	  			).append($('<button/>',{
								                			type:"button",
								                			class:"btn btn-success",
								               				}).html('Done').mousedown(function(e){
								                			e.preventDefault();
								               				}).click(function(obj){return function(){onSave.apply(obj)}}(this)))
	         								  		)
       											)	
       									);	
			modalElement.appendTo("body");
			return modalTrigger;
		},

		createMenuItem: function(itemSettings, options, returnElement){
			//Function to perform multiple actions.supplied arguments: itemsettings-list of buttons and button options, options: options for select input, returnelement: boolean.
			//1.Create Select Options using Bootstrap Dropdown.
			//2.Create modal dialog using bootstrap options
			//3.Create menubar buttons binded with corresponding event actions
			typeof returnElement !== 'undefined' ? returnElement : false;

			if(itemSettings["select"]){
				var menuWrapElement = $("<div/>", {class:"btn-group"});
				var menuElement 	= $("<ul/>", {class:"dropdown-menu"});
				menuWrapElement.append($('<a/>',{
										class:"btn btn-default dropdown-toggle",
										"data-toggle":"dropdown",
										"href":"javascript:void(0)",
										"title":itemSettings["tooltip"]
										}).html(itemSettings["default"]).append($("<span/>",{class:"caret"})).mousedown(function(e){
											e.preventDefault();
										}));
				$.each(options,function(i,v){
					var option = $('<li/>')
		            $("<a/>",{
		              tabindex : "-1",
		              href : "javascript:void(0)"
		            }).html(i).appendTo(option);

		            option.click(function(){
		            	$(this).parent().parent().data("value", v);
		            	$(this).parent().parent().trigger("change")
		            });
		            menuElement.append(option);		            
		        });
				var action = "change";
		    }
		    else if(itemSettings["modal"]){
		    	var menuWrapElement = methods.createModal.apply(this,[itemSettings["modalId"], itemSettings["modalHeader"], itemSettings["modalBody"], itemSettings["onSave"]]);		    			    	
		    	var menuElement = $("<i/>");
		    	if(itemSettings["icon"])
					menuElement.addClass(itemSettings["icon"]);
				else
					menuElement.html(itemSettings["text"]);
				menuWrapElement.append(menuElement);
				menuWrapElement.mousedown(function(obj, methods, beforeLoad){
					return function(e){
						e.preventDefault();
						methods.saveSelection.apply(obj);
						if(beforeLoad){		    	    
							beforeLoad.apply(obj); 					
				    	}
					}
				}(this, methods,itemSettings["beforeLoad"]));
				menuWrapElement.attr('title', itemSettings['tooltip']);
				return menuWrapElement;
		    }
			else{
				var menuWrapElement = $("<a/>",{href:'javascript:void(0)', class:'btn btn-default'});
				var menuElement = $("<i/>");
				if(itemSettings["icon"])
					menuElement.addClass(itemSettings["icon"]);
				else
					menuElement.html(itemSettings["text"]);
				var action = "click";
			}
			if(itemSettings["custom"]){
				menuWrapElement.bind(action, (function(obj, params){
						return function(){
						methods.saveSelection.apply(obj);
						itemSettings["custom"].apply(obj, [$(this), params]);
						}
					})(this, itemSettings['params']));
			}
			else{
				menuWrapElement.data("commandName", itemSettings["commandname"]);
				menuWrapElement.data("editor", $(this).data("editor"));				
				menuWrapElement.bind(action, function(){ methods.setTextFormat.apply(this) });
			}
			menuWrapElement.attr('title', itemSettings['tooltip']);
			menuWrapElement.css('cursor', 'pointer');
			menuWrapElement.append(menuElement);
			if(returnElement)
				return menuWrapElement;
			$(this).data("menuBar").append(menuWrapElement);
		},

		setTextFormat: function(){			
			//Function to run the text formatting options using execCommand.
			methods.setStyleWithCSS.apply(this);
			document.execCommand($(this).data("commandName"), false, $(this).data("value") || null);
			$(this).data("editor").focus();
			return false;
		},

		getSource: function(button, params){
			//Function to show the html source code to the editor and toggle the text display.
			var flag = 0;
			if(button.data('state')){
				flag = 1;
				button.data('state', null);
			}
			else
				button.data('state', 1);
			var editor = $(this).data('editor');
			var content;
			if(flag==0){ //Convert text to HTML			
				content = document.createTextNode(editor.html());
				editor.empty();
				editor.attr('contenteditable', false);
				preElement = $("<pre/>",{
					contenteditable: true					
					});
				preElement.append(content);				
				editor.append(preElement);
				button.parent().siblings().hide();
				button.siblings().hide();
			}
			else{
				var html='';
				ch = editor.find(">:first-child").contents().filter(function() { 
					return (this.nodeType == 3); 
				});
				ch = ch[0];
				if(typeof ch!='undefined'){
					html = ch.textContent;
				}				
				editor.html(html);
				editor.attr('contenteditable', true);
				button.parent().siblings().show();
				button.siblings().show();
			}
		},

		countWords: function(node){
			//Function to count the number of words recursively as the text grows in the editor.
			var count = 0			
    		var textNodes = node.contents().filter(function() { 
				return (this.nodeType == 3); 
			});			
			for(var index=0;index<textNodes.length;index++){
				text = textNodes[index].textContent;
				text = text.replace(/[^-\w\s]/gi, ' ');
				text = $.trim(text);
				count = count + text.split(/\s+/).length;
			}
			var childNodes = node.children().each(function(){
				count = count + methods.countWords.apply(this, [$(this)]);
			});
			return count
		},

		getWordCount: function(){
			//Function to return the word count of the text in the editor
			return methods.countWords.apply(this, [$('#contentarea')]); 
		},

		rgbToHex: function(rgb){
			//Function to convert the rgb color codes into hexadecimal code
			rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			return "#" +
			("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
			("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
		},

		showMessage: function(target,message){
			//Function to show the error message. Supplied arguments:target-div id, message-message text to be displayed.
			var errorDiv=$('<div/>',{ class:"alert alert-danger"	}
				).append($('<button/>',{
									type:"button",
									class:"close",
									"data-dismiss":"alert",
									html:"x"
				})).append($('<span/>').html(message));
			errorDiv.appendTo($('#'+target));
			setTimeout(function() { $('.alert').alert('close'); }, 3000);								
		},
		
		getText: function(){
			//Function to get the source code.
			var src = $($(this).parent()).find("#contentarea").html();
			return src;
		},

		setText: function(text){
			//Function to set the source code
			$($(this).parent()).find("#contentarea").html(text);
		},

		setStyleWithCSS:function(){
			if(navigator.userAgent.match(/MSIE/i)){	//for IE10
				try {
                	Editor.execCommand("styleWithCSS", 0, false);
            	} catch (e) {
	                try {
	                    Editor.execCommand("useCSS", 0, true);
	                } catch (e) {
	                    try {
	                        Editor.execCommand('styleWithCSS', false, false);
	                    }
	                    catch (e) {
	                    }
	                }
            	}
			}
			else{
				document.execCommand("styleWithCSS", null, true);
			}
		},				

	}

	$.fn.Editor = function( method ){

		if ( methods[method] ) {
			return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.Editor' );
		}    
	}; 
})( jQuery );
