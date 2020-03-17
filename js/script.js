var mytap = window.ontouchstart === null ? 'touchend' : 'click';

$('#js_button').on(mytap, function() {
    $('#js_result').html('JavaScriptは有効化されています！');
});