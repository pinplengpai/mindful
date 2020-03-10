$(function(){
	var uploadpic = $('.uploadpic'), inputFile = $('#file'), img, btn, txt = 'Browse', txtAfter = 'Browse another pic';
			
	if(!uploadpic.find('#upload').length){
		uploadpic.find('.input').append('<div id="upload"><div class=upload-wrapper><i class="fas fa-mountain"></i><p class="pt-4"><b>Upload Artist Cover</p></b><p style="color: #E8E8E8">jpg, jpeg or gif, max 2 MB</p></div></div>');
		btn = $('#upload');
		uploadpic.prepend(' <span class="closed-button hidden"><i class="fas fa-times-circle"></i></span><img src="" class="hidden" alt="Uploaded file" id="uploadImg" width="100">');
		img = $('#uploadImg');
	}
			
	btn.on('click', function(){
		// img.animate({opacity: 0}, 300);
		inputFile.click();
	});

	inputFile.on('change', function(e){
		uploadpic.find('label').html( inputFile.val() );
		
		var i = 0;
		for(i; i < e.originalEvent.srcElement.files.length; i++) {
			var file = e.originalEvent.srcElement.files[i], 
				reader = new FileReader();

			reader.onloadend = function(){
				img.attr('src', reader.result).animate({opacity: 1}, 700);
			}
			reader.readAsDataURL(file);
            img.removeClass('hidden');
            $(".closed-button").removeClass('hidden');
            $(".uploadpic .input").hide();
		}
		
		btn.val( txtAfter );
    });
    
    $( ".closed-button .fa,.fas" ).click(function() {
        $(".uploadpic .input").show();
        img.addClass('hidden');
        $(".closed-button").addClass('hidden');
        $(".uploadpic input").val("");
      });
});