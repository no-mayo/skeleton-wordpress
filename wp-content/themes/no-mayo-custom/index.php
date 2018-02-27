<?php /* A default/fallback page template */ ?>

<?php get_template_part( 'components/header' ); ?>

<main>

  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

    <h1><?php the_title(); ?></h1>
    <div class="content">
      <?php the_content(); ?>
    </div>

  <?php endwhile; ?>

  <?php else: ?>
      <h1>Not Found</h1>
      <p>We couldn't find that page.</p>
      <p><a href="<?php echo bloginfo('url'); ?>">Return to homepage.</a></p>
  <?php endif; ?>

</main>

<?php get_template_part( 'components/footer' ); ?>
