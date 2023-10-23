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
    num = 1;
    $.ajax({
        url: 'http://localhost:8080/app/images',
        dataType: 'json',
        method:'get',
        success: function (images) {
            var tableBody = $('#imageTableBody');
            tableBody.empty();

            images.forEach(function (image) {
                var number = num;
                console.log(num);

                tableBody.append("<tr><td>" + number + "</td><td>" + image + "</td><td><img src='http://localhost:8080/app/images/" + image + " width='100px' height='100px'></td></tr>");
                $('#imgTable').css("background-image", "url(/Users/achintha/Desktop/Images/" + image + ")");
                num++;
            });
        },
        error: function () {
            alert('Failed to load images.');
        }
    });
}


// function loadImages() {
//     $("#imageTableBody").empty();
//     $.ajax({
//         url: 'http://localhost:8080/app/images',
//         method: 'get',
//         dataType: 'json',
//         success: function (resp) {
//             let url = resp[resp.length - 1];
//
//             $("#display").css({
//                 "background": `url(${url})`,
//                 "background-size": "cover",
//                 "height": "300px"
//             });
//
//             for (let i in resp) {
//                 let row = `<tr><td>1</td><td>jjjjj</td><td><img src="${url + resp[i]}" width="100px"></td></tr>`;
//                 $("#table").append(row);
//             }
//
//         },
//         error: function (err) {
//             console.log(err);
//         }
//     });
// }
