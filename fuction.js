let main = $(".form-main");

$("#login").on("click", function (e) {
    e.preventDefault();
    main = $(".form-main").html($("<h1>Success</h1>"));
})
