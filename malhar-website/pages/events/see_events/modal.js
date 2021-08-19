$( document ).ready( function ()
{
    $( '.one button' ).click( function ()
    {
        document.querySelector( '[tabindex="-1"]' ).focus();
        $( '.first' ).addClass( 'is-clicked' )
        $( '.card' ).addClass( 'is-clicked' )
    } )
} )

$( document ).ready( function ()
{
    $( '.one-img' ).click( function ()
    {
        $( '.first' ).removeClass( 'is-clicked' )
        $( '.card' ).removeClass( 'is-clicked' )

    } )
} )

$( document ).ready( function ()
{
    $( '.two button' ).click( function ()
    {
        document.querySelector( '[tabindex="-1"]' ).focus();
        $( '.second' ).addClass( 'is-clicked' )
        $( '.card' ).addClass( 'is-clicked' )
    } )
} )

$( document ).ready( function ()
{
    $( '.two-img' ).click( function ()
    {
        $( '.second' ).removeClass( 'is-clicked' )
        $( '.card' ).removeClass( 'is-clicked' )
    } )
} )

$( document ).ready( function ()
{
    $( '.three button' ).click( function ()
    {
        document.querySelector( '[tabindex="-1"]' ).focus();
        $( '.third' ).addClass( 'is-clicked' )
        $( '.card' ).addClass( 'is-clicked' )
    } )
} )

$( document ).ready( function ()
{
    $( '.three-img' ).click( function ()
    {
        $( '.third' ).removeClass( 'is-clicked' )
        $( '.card' ).removeClass( 'is-clicked' )
    } )
} )

$( document ).ready( function ()
{
    $( '.four button' ).click( function ()
    {
        document.querySelector( '[tabindex="-1"]' ).focus();
        $( '.fourth' ).addClass( 'is-clicked' )
        $( '.card' ).addClass( 'is-clicked' )
    } )
} )

$( document ).ready( function ()
{
    $( '.four-img' ).click( function ()
    {
        $( '.fourth' ).removeClass( 'is-clicked' )
        $( '.card' ).removeClass( 'is-clicked' )
    } )
} )



$( document ).ready( function ()
{
    $( 'button' ).click( function ()
    {
        $( 'body' ).css( 'overflow-y', 'hidden' )
    } )
} )
$( document ).ready( function ()
{
    $( '.modal input' ).click( function ()
    {
        $( 'body' ).css( 'overflow-y', 'scroll' )
    } )
} )