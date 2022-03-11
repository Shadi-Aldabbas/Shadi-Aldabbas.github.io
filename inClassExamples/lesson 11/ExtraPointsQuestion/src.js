/*  Attach a directly bound event handler */
$("#list a").on("click", function(event) {

    /*  Attach a delegated event handler--handles dynamically added items */
    //$( "#list" ).on( "click", "a", function( event ) {
  
    event.preventDefault(); //don't want to follow the link for this example
    console.log($(this).text());
    $("#container").append("<div id='list'>Article Title: <a href='http://domain1.com'>Click to add a new article</a> <br /></div>");
    /* avoid html hacking 
    const $a = $('<a>', {href: 'http://newdomain.com', text: 'Item #5'});
    const $lia = $('<li>').append($a);
    $( "#list" ).append($lia ); */
  
  });
  
  /* moved the a part from the selector to the second parameter position of the .on() method. This second, selector parameter tells the handler to listen for the specified event, and when it hears it, check to see if the triggering element for that event matches the second parameter.
  https://learn.jquery.com/events/event-delegation/ */
  