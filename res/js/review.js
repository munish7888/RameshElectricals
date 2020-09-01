function review_submit(e) {
    e.preventDefault();
    $.ajax({
        url: "https://app.bugcatstudio.ga/rameshelectricals/review.php",
        type: "POST",
        data: {
            type: "submit_review",
            name: $("#review_name").val(),
            email: $("#review_email").val(),
            description: $("#review_description").val()
        },
        success: function (data) {
            alert("Thanks for your feedback.");
            fetch_review();
        },
        error: function () {
            alert('Something went wrong. Please try again later.');
        }
    });
}
function fetch_review() {
    $.ajax({
        url: "https://app.bugcatstudio.ga/rameshelectricals/review.php",
        type: "POST",
        data: {
            type: "fetch_review"
        },
        success: function (data) {
            data = JSON.parse(data);
            $("#reviews").html('');
            for (i = 0; i < data.length; i++) {
                d = data[i].split("^");
                $('#reviews').append("<div class=\"bg-light p-3 m-3 rounded-lg\"><div class=\"h6\"><strong>" + d[0] + "</strong></div><p style=\"font-size: 14px;\">" + d[1] + "</p><p>" + d[2] + "</p></div>");
            }
        },
        error: function () {
            alert('Something went wrong. Please try again later.');
        }
    });
}
fetch_review();