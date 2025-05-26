<?php

function OMUS_enqueue($hook)
{
    // Frontend scripts
    if ($hook != 'post.php' && $hook != 'post-new.php') {
        //Grab dependencies
        $assets = include(get_template_directory() . '/build/frontend.asset.php');

        //Enqueue scripts
        wp_enqueue_script('omos-frontend-script', get_theme_file_uri('/build/frontend.js'), $assets['dependencies'], $assets['version'], true);

        //Enqueue styles
        wp_enqueue_style('omos-frontend-style', get_theme_file_uri('/build/frontend.css'));

        //Set translation
        //wp_set_script_translations('mptab-exhibitions', 'mptab-domain', plugin_dir_path(__FILE__) . '/languages');

    }
}
add_action('wp_enqueue_scripts', 'OMUS_enqueue');
