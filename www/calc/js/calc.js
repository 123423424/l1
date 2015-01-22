
function scroll_init(w) {
	lpix = 40; //left / delay
	delay = 1000;
	sdv = jQuery('#scrolltext').width();
	ml = w;
	//
	var v = lpix / delay;
	tdelay = (w + sdv) / v;
	tdelay = Math.ceil(tdelay);
	scrolltext();
}

function setPrise(prise, mod) {
    var newP;
    if (mod == 1) {newP = 'Цена: ' + prise+ ' руб.';}   
    if (mod == 2) {newP = 'Минимальный заказ 2 модуля.';}  
    if (mod == 3) {newP = 'Минимальный заказ 9 модулей.';}        
    return newP;
}
function getAbris() {
    var newP;         
    return 3;
}

function scrolltext() {
	jQuery('#scrolltext').css('margin-left', ml + 'px');
	jQuery('#scrolltext').stop().animate({'margin-left': (-sdv) + 'px'}, tdelay, 'linear', function() {scrolltext();});
}
function getBbris() {
    var newP;         
    return 5;
}

jQuery(function()
{
    
    textColA = new Array();
    var textC = '00FF00';
    var text = 'televicom.ru vasha reklama';
    var __bWidth = 300+1.87*32;
    var __bHeight =1.87*16;
    var framesCount = 15;       //Число кадров
    var framesDelay = 25;       //Скорость кадров
    var isColored =0 ;
    var price = 6500;
	var cprice = 1700;
    
	//price    - это цена до 6 кубиков. Судя по всему да!!!
	function price_color() {
		var textC = jQuery('#colorSelector').val();
		switch(textC) {
			case '00FF00': //green   было cprice = 1570;
				cprice = 1300;
			break;
			case 'FFFFFF': //white  было cprice = 1570;
				cprice = 1300;
			break;
			case 'FF0000': //red было cprice = 1470;
				cprice = 1200;
			break;
			case '0066FF': //blue  было cprice = 1570;
				cprice = 1300;
			break;
			case 'fff324': //yellow было cprice = 1570;
				cprice = 1300;
			break;
			case 'colored':  // было cprice = 2500; это цветной цвет RGB  
				cprice = 2900;
			break;
            case 'colorg':  // это цветной цвет RG ( красный, зеленый, желтый, новый пункт для расчетов !!! 
				cprice = 1620;
            break;
                        
			default: cprice = 1100;  // было default: cprice = 1570; 			
			break;
			
		}
	}
	
    //get_img(textC,__bWidth,__bHeight);
    makePrice();
    
    function make_add_info()
    {
        width = parseFloat(((parseFloat(__bWidth)-parseFloat(300))/1.87).toFixed(1));
        height = parseFloat(((parseFloat(__bHeight))/1.87).toFixed(1));
        S = (width*height/10000.00).toFixed(2);
        
        // if ( isColored ==1 )
        // {
            // jQuery("#__add_info").html("(срок изготовления: 1-2 дня)<br>Длина x высота (итоговая с коробом):  "+(parseFloat(width)+parseFloat(8))+"x"+(parseFloat(height)+parseFloat(8))+" см<br> Площадь экрана:	"+S+" м2<br>LED модулей "+width+"*"+height+" см ("+width/25.6+"*"+height/25.6+"):	"+((width/25.6)*height/25.6)+" шт.<br>Сверхярких светодиодов:	"+((width/25.6)*16)*((height/25.6)*16)+" шт.<br>Разрешение экрана:	"+width+"*"+height+" px<br>Гарантия:	1 год");
        // }
        // else
        // {
            jQuery("#__add_info").html("(срок изготовления: 1-2 дня)<br>Длина x высота (итоговая с коробом):  "+(parseInt(width)+parseInt(8))+"x"+(parseInt(height)+parseInt(8))+" см<br> Площадь экрана:	"+S+" м2<br>LED модулей "+width+"*"+height+" см ("+width/32+"*"+height/16+"):	"+((width/32)*height/16)+" шт.<br>Сверхярких светодиодов:	"+width*height+" шт.<br>Разрешение экрана:	"+width+"*"+height+" px<br>Гарантия:	1 год");
        // }
    }
    
    //Функция изменения длины
    function length_ch(obj)
    {
        var value = jQuery(obj).slider("value").toFixed(0);
        jQuery("#__length a").html(value);
        jQuery("#__length a").css("width", "none");
        __bWidth = 300+1.87*value;
        get_img(textC,__bWidth,__bHeight);
        makePrice();
    }
    //Функция изменения высоты
    function width_ch(event,ui)
    {
        // if (isColored ==1 )
            // var value = (281.6 - ui.value).toFixed(1);
        // else
            var value = (ui.value).toFixed(0);
        jQuery("#__height a").html(value);
		jQuery("#__length a").css("width", "none");
        __bHeight = 1.87*value;
        get_img(textC,__bWidth,__bHeight);
        makePrice();
    }
    
    //Функция формирования цены
    function makePrice() {
		price_color();
        // if ( isColored == 1 )
        // {   
            // Hc = ((__bHeight)/1.87/25.6).toFixed(0);
            // Wc = ((__bWidth-300)/1.87/25.6).toFixed(0);
            // hPrice = 3000;
            // wPrice = 3000;
                
            // price = (4600+parseInt( hPrice*(Hc-1)*Wc + wPrice*(Wc-1)  )).toFixed(0);
        // }
        // else
        //{
		Hc = ((__bHeight)/1.87/16).toFixed(0);
		Wc = ((__bWidth-300)/1.87/32).toFixed(0);
		h_el = Hc * 16;
		w_el = Wc * 32;
		mod_count = Hc*Wc;
        var pol=59*getBbris()*5;

			if ( (mod_count>1 && isColored==0) || (mod_count>8 && isColored==1) ) {
				if (isColored) price = 3000; else price = 5500;
                for (i=2; i<=mod_count; i++) {
                    if ( isColored == 0 )
                    {
                        if (i<5) {
                            hPrice = 1000; // было 
                            wPrice = 1000;  // было 
                        } else if (i==5) {
                            hPrice = 500;  // было 
                            wPrice = 500;  // было 
                        }
                        else {
                            hPrice = 1200;  // было hPrice = 1800;  цена красного кубика после 5 штук
                            wPrice = 1200;  // было wPrice = 1800;  цена красного кубика после 5 штук
                        }
                    } else {
                        hPrice = 3000;    // было 
                    }
					
					
                    // console.log(i,hPrice)
                    //price =(parseInt(price)+parseInt( hPrice)).toFixed(0)+" руб.";
                    jQuery("#__add_info").show()
                }
				//price = cprice * mod_count + ' руб.';
				price = cprice * mod_count;
            }
            else {
                if (isColored) price='Минимальный заказ 9 модулей.';
					else price='Минимальный заказ 2 модуля.';
                jQuery("#__add_info").hide()
            }
           // price = (6500+parseInt( hPrice*(Hc-1)*Wc + wPrice*(Wc-2)  )).toFixed(0);
        //}
        var space;
        var pol2 = pol-100;
                
        space=h_el*w_el;            
        
        //  было cprice = 1570;
        if(textC == '00FF00' || textC == 'FFFFFF' || textC == '0066FF' || textC == 'fff324' ) {	
            if(space < 3584) {price = setPrise((space/512*pol), 1)} 
            else {price = setPrise((space/512*(getBbris()+getBbris()+getAbris())*getCbris()), 1)} ; 
            if(space == 512) price = setPrise(0, 2);             
		} 
        
         if(textC == 'FF0000' ) {	
            if(space < 3584) {price = setPrise((space/512*pol), 1)} 
            else {price = setPrise((space/512*(getBbris()*2*getCbris() +getCbris()*2)), 1)} ; 
            if(space == 512) price = setPrise(0, 2);             
		}  
        
        if(textC == 'colorg') {	
            if(space < 3584) {price = setPrise(space/512*(getAbris()+getBbris()*3)*getCbris(), 1)} else {price = setPrise( (space/512*(getBbris()*3*getCbris() +120)), 1)};
            if(space == 512) price = setPrise(0, 2);             
		}
        
        if(textC == 'colored') {	
            if(space < 4608) {price = price = setPrise(0, 3)} else {price = setPrise((space/512*(getBbris()*5*getCbris())), 1)} ;                       
		}        
        
        jQuery("#__result_price").html(price);
    }
    
    //Функция AJAX запроса изображения
    function get_img(textColor, width, height)
    {
        make_add_info();
        //jQuery("#__image").css({'width':'auto','height':'auto'}).attr("src","img/loading.gif");
        //jQuery.get('/scripts/calc/php/gen_img.php',{ text: encodeURIComponent(text), textColor: textColor,fontSize1:width/16,width:width,height:height,bgColor:'000000',framesCount:framesCount,framesDelay:framesDelay }).done(function(data)
        //{
        //    jQuery("#__image").attr("src","data:image/png;base64,"+data);
        //});
		var hhh = height * 0.4;
		var hfont = Math.ceil(hhh);
		jQuery('.str1').css({
			'color': '#' + textC,
			'width': __bWidth,
			'height': __bHeight
			//'font-size': hfont
		});
		jQuery('#scrolltext').css('font-size', hfont);
		jQuery('.lenta-bg').css({
			'width': __bWidth,
			'height': __bHeight
		});
		if(__bHeight < 32) hfont = hfont / 2;
		jQuery('.vfont').css({
			'padding-top': hfont
		});
		//jQuery('#linetext').attr('id', 'tmpline');
		//jQuery('#tmpline').attr('id', 'linetext');
		//$('#linetext').liMarquee();
		scroll_init(__bWidth);
    }
    
    
    jQuery( "#__length" ).slider({ min: 32, max:512, step:32,value:32,
        change: function(){length_ch(jQuery(this)) },
        slide:function(event,ui)
        {
            var value = ui.value; jQuery("#__length a, #__length_val").html(value); 
            jQuery("#__image").css({'width':300+1.87*ui.value,'height':__bHeight})
        }
    });
    jQuery( "#__height" ).slider({ orientation: "vertical",min: 16, max:320, step:16, value:16,
        change:function(event,ui){ width_ch(event,ui) },
        slide:function(event,ui)
        { 
            var value = (ui.value).toFixed(0); jQuery("#__height a, #__height_val").html(value);
            jQuery("#__image").css({'width':__bWidth,'height':1.87*(ui.value)})       
        }
    });
    
    //При изменении цвета
    jQuery('#colorSelector').change(function()
    {
        textC = jQuery(this).val();
        
         if (textC == 'colored')
         {
            isColored = 1;
            jQuery( "#__length" ).slider({ value: 96});
            jQuery( "#__height" ).slider({ value: 48});
         }
        else if (isColored == 1)
        {
            isColored = 0;
     
            jQuery( "#__length" ).slider({ value: 64});
            jQuery( "#__height" ).slider({ value: 32});
            
        }
        makePrice();
        get_img(textC,__bWidth,__bHeight);
        // length_ch(jQuery( "#__length" ))
        // length_ch(jQuery( "#__height" ))
        
    });
	
	jQuery("#__length a").text("32");
	jQuery("#__height a").text("16");

	get_img(textC,__bWidth,__bHeight);
});

function getCbris() {
    var newP;         
    return 100;
}



