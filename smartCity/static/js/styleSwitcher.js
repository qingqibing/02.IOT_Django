/*====================================
      Author: speakitnow
      Template: MERA Personal Portfolio Template
      Version: 1.0
  ======================================*/

(function ($) {
    "use strict";
    var mainAppNew = {

        main_fun: function () {

            /*=====================================
             THEME SWITCHER SCRIPTS 
            ===================================*/
            jQuery('#switch-panel').click(function () {
                if (jQuery(this).hasClass('show-panel')) {
                    jQuery('.switcher').css({'left': '-50px'});
                    jQuery('#switch-panel').removeClass('show-panel');
                    jQuery('#switch-panel').addClass('hide-panel');
                } else if (jQuery(this).hasClass('hide-panel')) {
                    jQuery('.switcher').css({'left': 0});
                    jQuery('#switch-panel').removeClass('hide-panel');
                    jQuery('#switch-panel').addClass('show-panel');
                }
            });

            $('#pink').click(function () {
                $('#mainCSS').attr('href', '../static/css/themes/pink.css');
            });
            $('#green').click(function () {
                $('#mainCSS').attr('href', '../static/css/themes/green.css');
            });
            $('#blue').click(function () {
                $('#mainCSS').attr('href', '../static/css/themes/blue.css');
            });
            $('#brown').click(function () {
                $('#mainCSS').attr('href', '../static/css/themes/brown.css');
            });

        },

        initialization: function () {
            mainAppNew.main_fun();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainAppNew.main_fun();
    });

}(jQuery));

/*function switcher(self) {
        const color = {'color': self}; //获取要传到后台的数据
        $.ajax({
            type: "GET", url: 'theme/', //后台处理函数的url
            data: color, success: function (result) { //获取后台处理后传过来的result
                //alert(result) //对返回数据处理
            },
        });
    }*/
