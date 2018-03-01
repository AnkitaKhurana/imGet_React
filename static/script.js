$(function()
{
    $(document).on('click', '.btn-add', function(e)
    {
        e.preventDefault();

        var controlForm = $('.controls:first'),
            currentEntry = $(this).parents('.entry:first'),
            newEntry = $(currentEntry.clone()).appendTo(controlForm);

        newEntry.find('input').val('');
        controlForm.find('.entry:not(:last) .btn-add')
            .removeClass('btn-add').addClass('btn-remove')
            .removeClass('btn-success').addClass('btn-danger')
            .html('<span class="glyphicon glyphicon-minus"></span>');
    }).on('click', '.btn-remove', function(e)
    {
        $(this).parents('.entry:first').remove();

        e.preventDefault();
        return false;
    });

    $(document).on('click', '.saveImages', function(e)
    {
        console.log('Saving Files in Background');
        let files = $('input');
        for (file of files)
        {
             console.log(file.files[0].name)
        }

    })



});