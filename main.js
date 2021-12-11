window.addEventListener('load', function () {
    const key = 'cAI9TqySqT6tRU5RqKYaTkfiHaTKYZvzpfSH7X0A'
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}`
    $.ajax({
        url: url,
        type: "GET",
        success: function (data) {
            console.log(data)
            let explanation = data.explanation
            let title = data.title

                if(data.media_type == "image"){
                    $('#video').hide();
                    $('#title').text(`${title}`);
                    $('#texto').text(`${explanation}`);
                    $('#pic').attr('src', data.url);
                    
                } else{
                    $('#pic').hide();
                    $('#video').show();
                    $('#title').text(`${title}`);
                    $('#texto').text(`${explanation}`);
                    $('#video').attr('src', data.url);
                    
                }
        }
    })
})



function disparar(){
    $('#btnSubmit').click(function(){
        let key = 'cAI9TqySqT6tRU5RqKYaTkfiHaTKYZvzpfSH7X0A'
        let apiNasaInfo = $('#data').val();
        $.ajax({
            type : 'GET',
            url : `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${apiNasaInfo}`,
            success : function(data){
                
                console.log(data)
                //if verifcar o media+type else
                let explanation = data.explanation
                let title = data.title

                if(data.media_type == "image"){
                    $('#video').hide();
                    $('#title').text(`${title}`);
                    $('#texto').text(`${explanation}`);
                    $('#pic').attr('src', data.url);
                    
                } else{
                    $('#pic').hide();
                    $('#video').show();
                    $('#title').text(`${title}`);
                    $('#texto').text(`${explanation}`);
                    $('#video').attr('src', data.url);
                    
                }

                
                
            }
        })

    })
}

