
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

})
