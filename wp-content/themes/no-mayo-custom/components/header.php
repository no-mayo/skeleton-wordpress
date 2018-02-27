<!DOCTYPE html>
<html>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <title><?php bloginfo('name') ?></title>
    <meta name="description" content="<?php bloginfo('description') ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/images/favicon.png">

    <?php wp_head(); ?>
  </head>

  <body <?php body_class(); ?>>

    <header class="site-header" role="banner">
      <p>[site header]</p>
    </header>

    <main>