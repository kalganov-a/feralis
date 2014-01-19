var flag1=0,flag2=0,flag3=0;

$('#m1').hover(function(){
	$(this).css('background','url("img/left-menu.gif") 0 0');				  
						  },function(){	
						  if (flag1==0) {
	$(this).css('background','url("img/left-menu.gif") -115px 0');				  
						  }
});
$('#m2').hover(function(){
	$(this).css('background','url("img/left-menu.gif") 0 -115px');				  
						  },function(){	
						  if (flag2==0) {
	$(this).css('background','url("img/left-menu.gif") -115px -115px');				  
						  }
});
$('#m3').hover(function(){
	$(this).css('background','url("img/left-menu.gif") 0 -230px');				  
						  },function(){	if (flag3==0) {					  
	$(this).css('background','url("img/left-menu.gif") -115px -230px');				  
						  }
});

$('#m1').click(function(){
	$(this).css('background','url("img/left-menu.gif") 0 0');
	flag1=1;
	flag2=0;
	flag3=0;
	$('#m2').css('background','url("img/left-menu.gif") -115px -115px');				  
	$('#m3').css('background','url("img/left-menu.gif") -115px -230px');					  
});
$('#m2').click(function(){
	$(this).css('background','url("img/left-menu.gif") 0 -115px');
	flag1=0;
	flag2=1;
	flag3=0;
	$('#m1').css('background','url("img/left-menu.gif") -115px 0');				  
	$('#m3').css('background','url("img/left-menu.gif") -115px -230px');					  
});

$('#m3').click(function(){
	$(this).css('background','url("img/left-menu.gif") 0 -230px');		
	flag1=0;
	flag2=0;
	flag3=1;
	$('#m1').css('background','url("img/left-menu.gif") -115px 0');				  
	$('#m2').css('background','url("img/left-menu.gif") -115px -115px');					  
});
