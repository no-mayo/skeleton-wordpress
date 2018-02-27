<?php

  // Enqueue stylesheets and scripts for this theme.
  //
  // NOTE: For cache-busting, update the version numbers that are the last args
  // in the enqueue methods for the custom CSS and JS files.

  function no_mayo_custom_enqueue_style() {
    wp_enqueue_style( 'no-mayo-custom-style', get_stylesheet_uri(), array(), '0.1' );
  }

  add_action( 'wp_enqueue_scripts', 'no_mayo_custom_enqueue_style' );

  function no_mayo_custom_enqueue_script() {
    wp_enqueue_script( 'useragent', get_stylesheet_directory_uri() . '/scripts/vendor/express-useragent.min.js' );
    wp_enqueue_script( 'fastclick', 'https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js' );
    wp_enqueue_script( 'jquery' ); // the file is already included with WP
    wp_enqueue_script( 'no-mayo-custom-script', get_stylesheet_directory_uri() . '/scripts.js', array('jquery'), '0.1' );

    // we may need to localize our script in order to access ajax_object in frontend
    // wp_localize_script( 'no-mayo-custom-script', 'ajax_object', array( 'ajax_url' => admin_url( 'admin-ajax.php' ) ) );
  }

  add_action( 'wp_enqueue_scripts', 'no_mayo_custom_enqueue_script' );