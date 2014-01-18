
var flag1=0,flag2=0,flag3=0;
$('#home').hover(function(){
	$(this).css('background','url("img/left-menu.gif") 0 0');				  
						  },function(){	
						  if (flag1==0) {
	$(this).css('background','url("img/left-menu.gif") -115px 0');				  
						  }
});
$('#prev').hover(function(){
	$(this).css('background','url("img/left-menu.gif") 0 -115px');				  
						  },function(){	
						  if (flag2==0) {
	$(this).css('background','url("img/left-menu.gif") -115px -115px');				  
						  }
});
$('#next').hover(function(){
	$(this).css('background','url("img/left-menu.gif") 0 -230px');				  
						  },function(){	if (flag3==0) {					  
	$(this).css('background','url("img/left-menu.gif") -115px -230px');				  
						  }
});

$('#home').click(function(){
	$(this).css('background','url("img/left-menu.gif") 0 0');
	flag1=1;
	flag2=0;
	flag3=0;
	$('#prev').css('background','url("img/left-menu.gif") -115px -115px');				  
	$('#next').css('background','url("img/left-menu.gif") -115px -230px');					  
});
$('#prev').click(function(){
	$(this).css('background','url("img/left-menu.gif") 0 -115px');
	flag1=0;
	flag2=1;
	flag3=0;
	$('#home').css('background','url("img/left-menu.gif") -115px 0');				  
	$('#next').css('background','url("img/left-menu.gif") -115px -230px');					  
});

$('#next').click(function(){
	$(this).css('background','url("img/left-menu.gif") 0 -230px');		
	flag1=0;
	flag2=0;
	flag3=1;
	$('#home').css('background','url("img/left-menu.gif") -115px 0');				  
	$('#prev').css('background','url("img/left-menu.gif") -115px -115px');					  
});