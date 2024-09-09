$(document).ready(function () {

    $('#taskForm').submit(function (event) {
        event.preventDefault(); 

        var taskText = $('#taskInput').val();

        if (taskText) {
            var newTask = $('<li>').text(taskText).hide();
            $('#taskList').append(newTask);
            newTask.slideDown(200);

            $('#taskInput').val('');
        }
    });

    $(document).on('click', 'li', function () {
        $(this).toggleClass('completed');
    });

    $('#clearBtn').click(function () {
        $('#taskList li').slideUp(200, function() {
            $(this).remove();
        });
    });
});