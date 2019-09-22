$("form").submit(function (event) {
    if ($("input").first().val() === "correct") {
        $("span").text("Validated...").show();
        return;
    }

    $("span").text("Not valid!").show().fadeOut(1000);
    event.preventDefault();
});

function ValidateFade() {
    $('span').text('Validated!').show().fadeOut(5000);
}