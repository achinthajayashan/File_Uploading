// loadImages();
$('#btnUpload').click(function () {
    console.log("Clicked");

    var fileReader = new FileReader();

    var fileInput = document.getElementById('inputField');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file',file);

    fileReader.onload =function (e) {
        $('#showImg').css("background-image","url("+e.target.result+")");
    };
    fileReader.readAsDataURL(file);

    // console.log(imagePath);


    $.ajax({
        url: 'http://localhost:8080/app/images',
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
    num =1;
    $.ajax({
        url: 'http://localhost:8080/app/images',
        success: function(images) {
            var tableBody = $('#imageTableBody');
            tableBody.empty();

            images.forEach(function(image) {
                var number = num;
                console.log(num);
                tableBody.append("<tr><td>"+number+"</td><td>"+image+"</td><td><img src='/Users/achintha/Desktop/Images/" + image + "' width='100px'></td></tr>");
                num++;
            });
        },
        error: function() {
            alert('Failed to load images.');
        }
    });
}
