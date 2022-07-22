$(document).ready(function () {

    
    // var test = $('.forminput').val(value);
    
    $('#send').click(function (e) { 
        e.preventDefault();
   

        // alert('yes');
        var msg = ''; // variable contenant le message  
        var input = document.getElementsByClassName('forminput'); // variable contenant les données des inputs

        // console.log(input.length);

        
        for (const i in input) {
            let element = '';
            
            element += input[i].value;

            if (element == '') {
                var msg = 'Veuillez remplir tous les champs';
            } else {
                msg = 'Opération réussie';
            }

            
        }
        
        // $('.popup').css('display', 'flex');
        // Popup function
        function showPopUp () {  
            $('.popup').css('display', 'flex');
            document.getElementById('message').innerHTML = msg;
            // $('#message').text(msg);
        }

        // Popup launch time limits
        window.setTimeout(showPopUp, 500);

        // Close Popup
        $('#close').click(function (e) { 
            e.preventDefault();
            
            $('.popup').css('display', 'none');
        });
    });
    

    // console.log(typeof(test));
});