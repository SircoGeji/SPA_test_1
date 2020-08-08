var request = new XMLHttpRequest()

var url = null;

function show_reps() {
    const name = document.getElementById("name_container").value;

    url = `https://api.github.com/users/${name}/repos`;

    request.open('GET', url, true)

    request.onload = function () {
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
    request.send();
}

