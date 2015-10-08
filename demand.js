(function ($) {
               jQuery.ajaxSetup({
                   cache: true
               });
               $._demanded = [];
               $.demand = function (name, func) {
                   return function (event)
                   {
                       if ($._demanded[name] == undefined) {
                           $.getScript(name)
                           .done(function (script, textStatus) {
                               $._demanded[name] = true;
                           })
                           .fail(function (jqxhr, settings, exception) {
                               console.error(exception, jqxhr);
                               return;
                           });
                       }
                       func();
                   }
               };
           }(jQuery));