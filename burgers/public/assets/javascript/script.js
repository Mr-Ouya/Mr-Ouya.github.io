$(function () {


    $(".form-group").on("submit", function (event) {
        event.preventDefault();

        var newburger = name = $("burger").val().trim();

       

            $.ajax("/api/burgers", {

                type: "POST",
                data: newburger
            }).then(function () {

                console.log("Burger up!")
                location.reload;
            })
        }
    })
