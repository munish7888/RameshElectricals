function query_submit(e) {
    e.preventDefault();
    $.ajax({
        url: "https://app.bugcatstudio.ga/rameshelectricals/query.php",
        type: "POST",
        data: {
            name: $("#query_name").val(),
            phone: $("#query_phone").val(),
            messege: $("#query_messege").val()
        },
        success: function () {
            alert("Thank you for contacting us. We will help you shortly.");
        },
        error: function () {
            alert('Something went wrong. Please try again later.');
        }
    });
}