// Create a request variable and assign a new XMLHttpRequest
//object to it.
var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL
// endpoint
var url = null;

function show_reps() {
    const name = document.getElementById("name_container").value;

    url = `https://api.github.com/users/${name}/repos`;

    request.open('GET', url, true)

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);

        var statusHTML = '';

        $.each(data, function (i, status) {
            statusHTML += '<tr>';
            statusHTML += '<td>' + status.name + '</td>';
            statusHTML += '<td>' + status.url + '</td>';
            statusHTML += '<td>' + status.forks_count + ' / ' + status.watchers_count + '</td>';
            statusHTML += '<td>' + status.stargazers_count + '</td>';
            statusHTML += '</tr>';
        });

        $('tbody').html(statusHTML);
    }

// Send request
    request.send();

}

