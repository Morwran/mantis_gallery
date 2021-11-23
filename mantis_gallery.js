
var img_list;

$(document).ready(function(){
		
	console.log("loaded:", location.href);
	img_list = find_img();
	if(img_list.length){
		console.log("length", img_list.length);
		$('body').prepend(gallery_wrapper());

	}

})

function gallery_wrapper(){

	var html = '<div class="gallery_edit" style="display: none;">';

	html += '<div id = "gallery_wrapper_id" class="gallery_wrapper">';

	html += '<center>';

	html += '<div class="galleryTable">';
	html += '<div class="galleryTableBody">';
	html += '<div class="galleryTableRow">';
	
	html += '<div class="galleryTableCell img_summ" style="width: 95%;"></div>';
	html += '<div class="galleryTableCell gallery_exit gallery_border">X</div>';
	
	html += '</div>';
	html += '</div>';
	html += '</div>';
	
	
	html += '<div class="galleryTable">';
	html += '<div class="galleryTableBody">';
	html += '<div class="galleryTableRow">';
	html += '<div class="galleryTableCell gallery_content" style="position: relative;">';

    html += '<div class="img_nav" style="">';
    html += '   <div class="img_prev" href="" style="">';     
	html += '		<a id="btn_prev_id" style="';
    html += '			top: 40%;';
    html += '			position: relative;';
	html += '		"> < </a>';
    html += '	</div>';

    html += '   <div class="img_next" href="" style="">';
	html += '		<a id="btn_next_id" style="';
    html += '			top: 40%;';
    html += '			position: relative;';
	html += '		"> > </a>';
    html += '	</div>';
    html += '</div>';

    html += '<img class="img_src" src="">';

	html += '</div>';

	html += '</div>';

	html += '</div>';
	html += '</div>';
	html += '<style type="text/css">';
	
	html += '.weight_list_cls{';
	html += '	background-color: rgba(155, 79, 178, 0.67);';
	html += '    color: #ffffff;';
	html += '}';
	
	html += '.gallery_wrapper{';
	html += '	padding-top: 5%;';
	html += '    width: 90%;';
	html += '}';
		
	html += '.galleryTable{';
	html += '	display: table;';
	html += '	width: 90%;';
	html += '	min-width: 300px;';
	html += '  	opacity: 1;';
	html += '  	-moz-opacity: 1;';
	html += '  	padding-top: 7px;';
	html += '}';
	html += '.gallery_edit{';
	html += '    width: 100%;';
	html += '    height: 100%;';
	html += '    z-index: 9998;';
	html += '    position: absolute;';
	html += '    /* margin-top: 85px; */';
	html += '    /* top: 30%; */';
	html += '    left: 0;';
	html += '    /* bottom: 50%; */';
	html += '    right: 0;';
	html += '    margin: auto;';
	html += '    overflow: auto;';
	html += '}';
	html += '.gallery_edited{';
	html += '	width: 70%;';
	html += '	color: #ffffff;';
	html += '	font-size: 14pt;';
	html += '	padding: 5px;';
	html += '	text-align: left;';
	html += '}';
	html += '.gallery_del{';
	html += '	width: 20%;';
	html += '	color: #ffffff;';
	html += '	font-size: 14pt;';
	html += '}';
	html += '.gallery_exit{';
	html += '/*width: 10%;*/';
	html += 'color: #ffffff;';
	html += 'font-size: max(0.5em, min(1.1em, calc(100vw * 1.1 / 75)));';
	html += '-moz-user-select: none;';
  	html += '-khtml-user-select: none;';
  	html += '-webkit-user-select: none;';
  	html += 'user-select: none;';
  	html += 'vertical-align: middle;';
	html += '}';
	html += '.gallery_exit:hover {background-color: rgb(168 237 251 / 54%) !important; }';
	html += '.gallery_border{';
	html += '	border: 3px solid #ffffff87;';
	html += '	border-radius: 5px;';
	html += '	/*background-color: rgba(155, 79, 178, 0.67);*/';
	html += '}';
	html += '.gallery_num{';
	html += '	color: #ffffff;';
	html += '	text-align: center;';
	html += '	font-size: 14pt;';
	html += '	padding: 5px;';
	html += '	vertical-align: middle;';
	html += '	font-weight:bold;';
	html += '	border: 2px solid #ffffff87;';
	html += '	background-color: rgba(155, 79, 178, 0.67);';
	html += '    border-radius: 7px;';
	html += '}';
	html += '.gallery_num:hover{';
	html += '	background-color:#6875b9;';
	html += '}';
	html += '.galleryTableRow {';
	html += '	display: table-row;';
	html += '}';
	html += '.galleryTableHeading {';
	html += '	background-color: #EEE;';
	html += '	display: table-header-group;';
	html += '}';
	html += '.galleryTableCell, .galleryTableHead {';
	html += '	/*border: 1px solid #ffffff;*/';
	html += '	display: table-cell;';
	html += '	/*padding: 3px 10px;*/';
	html += '}';
	html += '.galleryTableHeading {';
	html += '	/*background-color: #EEE;*/';
	html += '	display: table-header-group;';
	html += '	font-weight: bold;';
	html += '}';
	html += '.galleryTableFoot {';
	html += '	background-color: #EEE;';
	html += '	display: table-footer-group;';
	html += '	font-weight: bold;';
	html += '}';
	html += '.galleryTableBody {';
	html += '	display: table-row-group;';
	html += '}';


	html +='.blackBackground {';
    html +='position: fixed !important;';
    html +='_position: absolute !important;';
    html +='height: 100%;';
    html +='width: 100%;';
    html +='top: 0;';
    html +='left: 0;';
    html +='border: 1px solid #cecece;';
    html +='z-index: 9997;';
    html +='background: rgba(0, 0, 0, 0.7);';
	html +='}';

	html +='.img_summ{';
	html +='	color: #ffffff;';
    html +='	font-size: max(0.5em, min(1.5em, calc(100vw * 1.5 / 75)));';
    html +='	font-weight: bold;';
    html +='	text-align: left;';
	html +='}';	

	html +='.img_src{';
	html +=' 	max-width: 100%;';
	html +=' 	border-radius: 3px;';
	html +='}';


	html +='.img_nav {';
    html +='	position: absolute;';
    html +='	left: 0;';
    html +='	top: 0;';
    html +='	z-index: 9999;';
    html +='	width: 100%;';
    html +='	height: 100%;';
	html +='}';	



	html +='.img_prev {';
    html +='	width: 34%;';
    html +='	left: 0;';
    html +='	float: left;';
    html +='	height: 100%;';
    html +='	text-align: center;';
    html +='	vertical-align: middle;';
    html +='	opacity: 0;';
    html +='	color: #ffffff;';
    html +='	font-size: max(0.5em, min(4em, calc(100vw * 4 / 75)));';
    html +='	font-weight: bold;';
    html +='	text-shadow: 1px 1px 6px #000;';
    html +='	background-color: rgb(0 0 0 / 12%);';
    html +='	text-decoration: none;';
    html +='	user-select: none;';
	html +='}';

	html +='.img_prev:hover {';
	html +='	opacity: 1;';
	html +='}';	

	html +='.img_next {';
    html +='	width: 34%;';
    html +='	right: 0;';
    html +='	float: right;';
    html +='	height: 100%;';
    html +='	text-align: center;';
    html +='	vertical-align: middle;';
    html +='	opacity: 0;';
    html +='	color: #ffffff;';
    html +='	font-size: max(0.5em, min(4em, calc(100vw * 4 / 75)));';
    html +='	font-weight: bold;';
    html +='	text-shadow: 1px 1px 6px #000;';
    html +='	background-color: rgb(0 0 0 / 12%);';
    html +='	text-decoration: none;';
    html +='	user-select: none;';
	html +='}';

	html +='.img_next:hover {';
	html +='	opacity: 1;';
	html +='}';

	html += '</style>';
	html += '</center>';
	html += '</div>';
			
	html += '</div>';

	//html += '</div>';

	html += '<div class="blackBackground" style="display: none;">&nbsp;</div>';

	return html;
}

function find_img(){
	var img_list = $('td a > img:not([src^="http://"])').filter(function() {
		return $(this).attr('src').indexOf('.png') < 0;
	});
	// расшифровка: нечётные (:odd) ссылки внутри li,
	// кроме тех (:not), у которых атрибут href начинается c http://
	console.log("img_list", img_list);
	img_list.each(function(){
		$(this).closest('a').removeAttr("href");
		if(!$(this).closest('a').hasClass('showGallery'))
			$(this).closest('a').addClass('showGallery');
		console.log("img :", $(this).attr('src'));
	});

	return img_list;
}

function ScrollById(name){
	var scroll2 = "#" + name;
	$('html, body').animate({ scrollTop: $(scroll2).offset().top }, 500);
}

function getImgId(src){
	var cnt = 0;
	img_list.each(function(){
		cnt++;
		console.log("src ", $(this).attr('src'), src);
		if($(this).attr('src') == src){
			console.log("equal! ", cnt);
			 return false;
		}
	});

	return cnt;
}

function exitGallery(){
	$('.gallery_edit, .blackBackground').fadeOut();
  	$('.gallery_edit').hide(500);
  	ScrollById('attachments');
}

function click_next()
{
	var img_id = getImgId($('.img_src').attr('src'));
	if(img_id < img_list.length){
		$('.img_prev').show();
		console.log("img_list[img_id]", img_list[img_id]);
		var img_summ = "Image " + (img_id + 1) + " of " + img_list.length;
		$('.img_src').attr('src', $(img_list[img_id]).attr('src'));
 		$('.img_summ').text(img_summ);
 		if((img_id + 1) == img_list.length)
 			$('.img_next').hide();
	}else{
		$('.img_next').hide();
	}	
}

function click_prev()
{
	var img_id = getImgId($('.img_src').attr('src'));
	if(img_id > 1){
		$('.img_next').show();
		var img_summ = "Image " + (img_id - 1) + " of " + img_list.length;
		$('.img_src').attr('src', $(img_list[img_id - 2]).attr('src'));
 		$('.img_summ').text(img_summ);
 		if((img_id - 1) == 1)
 			$('.img_prev').hide();
	}else{
		$('.img_prev').hide();
	}
}

$(function () {

	
	$('.showGallery').click(function(){

 		var img_id = getImgId($(this).children('img').attr('src'));
 		var img_summ = "Image " + img_id + " of " + img_list.length;

 		if(img_id == img_list.length)
 			$('.img_next').hide();

 		if(img_id == 1)
 			$('.img_prev').hide();

 		//$(this).attr('href', $(this).children('img').attr('src'));
 		$('.img_src').attr('src', $(this).children('img').attr('src'));
 		$('.img_summ').text(img_summ);
 		$('.gallery_edit').show(500);
 		$('.gallery_edit, .blackBackground').fadeIn();
 		ScrollById('gallery_wrapper_id');

	});

	$('.gallery_exit').click(function(){
		exitGallery();		
	});

	$('.img_next').click(function(){
		click_next();
	});

	$('.img_prev').click(function(){
		click_prev();
	});

	$(document).keydown(function(I) {
		if($('.gallery_edit').css("display") != "none"){

			switch(I.keyCode) {
				case 27: // escape
					exitGallery();
					break;
				case 39: // right
					click_next();
					I.preventDefault();
					break;
				case 37: // left
					click_prev();
					I.preventDefault();
					break;
				default:
					break;
			}
		}
	});
})

