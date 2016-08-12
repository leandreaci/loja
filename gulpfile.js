var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.styles([
    	'skin-purple.css',
        'resources/assets/css/bootstrap2.css',
        'bootstrap.css',
        'ionicons.css',
        'jquery-ui.css',
        'jquery-ui.theme.css',
        'style1.css',
        'font-awesome.css',
        'AdminLTE.css',
        'blue.css',
        'multiple-bootstrap.css',
        'jquery.gritter.css',
        'liniicons-style.css',
        'checkboximage.css',
        'swal2.css',
        'sweetalert.css',
        'sweetalert2.css',
        'select2.css',
    ],'public/assets/output/css');

      mix.scripts([
        'jquery-2.2.4.js',
        'jQueryUI/jquery-ui.js',
         'bootstrap.js',
         'chart.min.js',
         'fastclick/fastclick.js',
         'app.js',
        'slimScroll/jquery.slimscroll.js',
        'sweetalert.js',
        'sweetalert-dev.js',
        'jquery.validate.min.js',
        'functions-theme.js',
        'jquery.mask.min.js',
        'custom-mask.js',
        'select/select2.full.min.js',
        'resources/assets/js/filestyle.js',
        'resources/assets/js/additional-methods.min.js',

    ],'public/assets/output/js');
});
