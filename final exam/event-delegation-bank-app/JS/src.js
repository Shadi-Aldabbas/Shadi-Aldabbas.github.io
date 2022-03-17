/*  Attach a directly bound event handler */
$("#articlesList a").on("click", function(event) {

    event.preventDefault(); 
    $("#container").append(`
    <section id="articlesList">
        <article>
            <p>Here is an Account - 
                <a id="me" href="">Click to Add a new Account</a>
            </p>
        </article>
    </section>
`);
});
  