let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/assets/js/app.js', 'public/js')
/*	 .js('resources/assets/js/js_scripts/myscripts.js', 'public/js')
	 .js('resources/assets/js/js_scripts/myscripts.js', 'public/js')*/
	 .scripts([
					 		'resources/assets/js/js_scripts/myscripts.js', 
					 		'resources/assets/js/js_scripts/homepage.js',
					 		'resources/assets/js/js_scripts/playlist.js'
					 	], 
					 		'public/js/myscripts.js'
	 	)
	 .scripts([
	 		'resources/assets/js/js_scripts/library.js'
	 	],
	 		'public/js/compile.js'
	 	)
   .sass('resources/assets/sass/app.scss', 'public/css')
   .copy('node_modules/jquery-colorbox/example1/colorbox.css', 'public/css/colorbox.css')
   .copy('node_modules/jquery-colorbox/jquery.colorbox-min.js','public/js/colorbox.min.js')


;
   
/*.sass('resources/assets/sass/style.sass', 'public/css')*/