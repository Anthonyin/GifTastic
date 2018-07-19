$(document).ready(function() {
  $('button').on('click', function() {
    var animal = $(this).attr('data-animal');
    var queryURL =
      'https://api.giphy.com/v1/gifs/search?q=' +
      animal +
      '&api_key=dc6zaTOxFJmzC&limit=10';
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $('<div>');
        var p = $('<p>').text('Rating: ' + results[i].rating);
        var animalImage = $('<img>');
        animalImage.addClass('animalImg');
        animalImage.attr('src', results[i].images.fixed_height.url);
        animalImage.attr(
          'data-still',
          results[i].images.fixed_height_still.url
        );
        animalImage.attr('data-animate', results[i].images.fixed_height.url);
        animalImage.attr('data-state', 'still');
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $('#gifs-appear-here').prepend(animalDiv);
      }
      $('.animalImg').on('click', function() {
        var state = $(this).attr('data-state');
        console.log(this);
        if (state == 'still') {
          $(this).attr('src', $(this).data('animate'));
          $(this).attr('data-state', 'animate');
        } else {
          $(this).attr('src', $(this).data('still'));
          $(this).attr('data-state', 'still');
        }
      });
    });
  });

  $('#button').on('click', function(e) {
    e.preventDefault();
    var animalButton = $('#gif-input').val();
    var newButton = $('<button>')
      .addClass('btn btn-primary')
      .attr('data-animal', animalButton)
      .html(animalButton)
      .css({ margin: '10px' });
    $('#animalChoice').append(newButton);

    console.log('1');
    queryURL =
      'https://api.giphy.com/v1/gifs/search?q=' +
      animalButton +
      '&api_key=dc6zaTOxFJmzC&limit=10';
    console.log(animalButton);

    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $('<div>');
        var p = $('<p>').text('Rating: ' + results[i].rating);
        var animalImage = $('<img>');
        animalImage.addClass('animalImg');
        animalImage.attr('src', results[i].images.fixed_height.url);
        animalImage.attr(
          'data-still',
          results[i].images.fixed_height_still.url
        );
        animalImage.attr('data-animate', results[i].images.fixed_height.url);
        animalImage.attr('data-state', 'still');
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $('#gifs-appear-here').prepend(animalDiv);
      }
      $('.animalImg').on('click', function() {
        var state = $(this).attr('data-state');
        console.log(this);
        if (state == 'still') {
          $(this).attr('src', $(this).data('animate'));
          $(this).attr('data-state', 'animate');
        } else {
          $(this).attr('src', $(this).data('still'));
          $(this).attr('data-state', 'still');
        }
      });
    });
  });
});
