$(document).ready(function() {
    $(document).on('click', 'button', function() {
        var Colour = $(this).data('alt-src');
        $.get('localhost:5000', function(res) {
            $('img').attr('src', '{{ picture }}');
        })
    })
})