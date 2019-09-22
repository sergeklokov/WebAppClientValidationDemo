var Page = (function () {
    function ValidateFade() {
        $('span').text('Validated!').show().fadeOut(5000);
    }

    return {
        Init: function () {
            $("form").submit(function (event) {
                if ($("input").first().val() != "bad") {
                    $("span").text("Validated...").show().fadeOut(5000);
                    return;
                }

                $("span").text("Not valid!").show().fadeOut(5000);
                event.preventDefault();
            });



        }
    };
})();

$(document).ready(function () {
    Page.Init();
});

