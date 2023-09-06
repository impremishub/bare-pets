<?php 

add_action('acf/init', 'my_acf_init');
function my_acf_init() {
    
    // check function exists
    if( function_exists('acf_register_block') ) {
        
        // register a block

        // HERO
        acf_register_block(array(
            'name'              => 'hero',
            'title'             => __('Hero'),
            'description'       => __('A custom hero block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'images-alt2',
            'keywords'          => array( 'hero', 'banner' ),
        ));

        // TEXT WITH MEDIA
        acf_register_block(array(
            'name'              => 'text-with-media',
            'title'             => __('Text with Media'),
            'description'       => __('A custom text with media block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'embed-photo',
            'keywords'          => array( 'text', 'media', 'text with media' ),
        ));

        // TESTIMONIAL
        acf_register_block(array(
            'name'              => 'testimonial',
            'title'             => __('Testimonials'),
            'description'       => __('A custom testimonials block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'groups',
            'keywords'          => array( 'testimonial', 'quote' ),
        ));

        // NEWSLETTER
        acf_register_block(array(
            'name'              => 'newsletter',
            'title'             => __('Newsletter'),
            'description'       => __('A custom newsletter block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'email-alt2',
            'keywords'          => array( 'newsletter', 'form', 'subscribe' ),
        ));

        // RTE
        acf_register_block(array(
            'name'              => 'rte',
            'title'             => __('RTE'),
            'description'       => __('A custom RTE block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'media-text',
            'keywords'          => array( 'rte', 'text', 'content' ),
        ));

        // PAGE HEADER
        acf_register_block(array(
            'name'              => 'page-header',
            'title'             => __('Page Header'),
            'description'       => __('A custom Page Header block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'cover-image',
            'keywords'          => array( 'header', 'heading', 'banner' ),
        ));

        // LOGO CAROUSEL
        acf_register_block(array(
            'name'              => 'logos',
            'title'             => __('Logo Carousel'),
            'description'       => __('A custom Logo Carousel block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'images-alt',
            'keywords'          => array( 'logos', 'logo carousel' ),
        ));

        // FAQ
        acf_register_block(array(
            'name'              => 'faqs',
            'title'             => __('FAQ'),
            'description'       => __('A custom FAQs block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'list-view',
            'keywords'          => array( 'question', 'answer', 'faq' ),
        ));

        // CONTACT FORM
        acf_register_block(array(
            'name'              => 'contact-form',
            'title'             => __('Contact Form'),
            'description'       => __('A custom Contact Form block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'forms',
            'keywords'          => array( 'forms', 'contact', 'contact form' ),
        ));

        // TEXT SCROLLER
        acf_register_block(array(
            'name'              => 'text-scroller',
            'title'             => __('Text Scroller'),
            'description'       => __('A custom text scroller block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'leftright',
            'keywords'          => array( 'scroller', 'carousel', 'text carousel' ),
        ));

        // IMAGE CAROUSEL
        acf_register_block(array(
            'name'              => 'image-carousel',
            'title'             => __('Image Carousel'),
            'description'       => __('A custom image carousel block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'images-alt2',
            'keywords'          => array( 'scroller', 'carousel', 'image carousel' ),
        ));

        // TEXT BANNER
        acf_register_block(array(
            'name'              => 'text-banner',
            'title'             => __('Text Banner'),
            'description'       => __('A custom text banner block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'embed-generic',
            'keywords'          => array( 'scroller', 'text', 'text banner' ),
        ));

        // COMPARISON TABLE
        acf_register_block(array(
            'name'              => 'comparison-table',
            'title'             => __('Comparison Table'),
            'description'       => __('A custom comparison table block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'editor-table',
            'keywords'          => array( 'comparison', 'table' ),
        ));

        // HOW IT WORKS
        acf_register_block(array(
            'name'              => 'how-it-works',
            'title'             => __('How it Works'),
            'description'       => __('A custom how it works block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'editor-ol',
            'keywords'          => array( 'steps', 'how it works' ),
        ));

        // FEATURED PRODUCT
        acf_register_block(array(
            'name'              => 'featured-products',
            'title'             => __('Featured Products'),
            'description'       => __('A custom featured products block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'pets',
            'keywords'          => array( 'featured', 'products' ),
        ));

        // FEATURED SUBSCRIPTION
        acf_register_block(array(
            'name'              => 'featured-subscription',
            'title'             => __('Featured Subscription'),
            'description'       => __('A custom featured subscription block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'pets',
            'keywords'          => array( 'featured', 'products', 'subscription' ),
        ));

        // SAMPLE BLOCK
        acf_register_block(array(
            'name'              => 'sample-block',
            'title'             => __('Sample Block'),
            'description'       => __('A custom sample block.'),
            'render_callback'   => 'impremis_block_callback',
            'category'          => 'impremis',
            'icon'              => 'star-filled',
            'keywords'          => array( 'sample', 'block' ),
        ));
    }
}