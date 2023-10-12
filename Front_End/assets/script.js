
$('#btnUpload').click(function () {
    console.log("Clicked");

    var fileReader = new FileReader();

    var fileInput = document.getElementById('inputField');
    var file = fileInput.files[0];
    // var formData = new FormData();
    // formData.append('file',file);

    fileReader.onload =function (e) {
        $('#showImg').css("background-image","url("+e.target.result+")");
    };
    fileReader.readAsDataURL(file);

    console.log(imagePath);


    $.ajax({
        url: '/images/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            alert(response);
            loadImages();
        },
        error: function() {
            alert('Failed to upload image.');
        }
    });


})

function loadImages() {
    $.ajax({
        url: '/list-images',
        success: function(images) {
            var tableBody = $('#imageTableBody');
            tableBody.empty();
            var num =1;
            images.forEach(function(image) {
                tableBody.append("<tr><td>num</td><td>image</td><td><img src='user_uploaded_images/" + image + "' width='100'></td></tr>");
                num++;
            });
        },
        error: function() {
            alert('Failed to load images.');
        }
    });
}
