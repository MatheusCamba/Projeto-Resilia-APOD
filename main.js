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
                let copyright = data.copyright
                $('#title').text(`${title}`)
                $('#texto').text(`${explanation}`)
                $('#pic').attr('src', data.url)
                $('#copyright').text(`${copyright}`)
                
            }
        })

    })
}

