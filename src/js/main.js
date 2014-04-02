

var flag1=1,flag2=0,flag3=0;
var color=1;
var ChSize1_1=1,ChSize2_1=0,ChSize3_1=0,ChSize4_1=0,ChSize5_1=0,ChSize1_2=0,ChSize2_2=1,ChSize3_2=0,ChSize4_2=0,ChSize5_2=0,ChSize1_3=0,ChSize2_3=0,ChSize3_3=1;
var NowPict1='img/1-10.jpg',NowPict2='img/2-20.jpg',NowPict3='img/3-30.jpg';


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

$ ('#buy').click(function(){
	
	if (color==1) {		
	    color=2;
	    $(this).css('background','#B73386');
		$(this).css('color','#EBEBEB');
	} else {
		color=1;
		$(this).css('background','#C4007A');
		$(this).css('color','white');
	}
	$('#buyblock').toggle().slow;
	                  	  });

$ ('#buy').hover(function(){		  
				$(this).css('background','#B73386');	
				$(this).css('color','#EBEBEB');
						  },
						  function(){
				if (color==1) { $(this).css('background','#C4007A');
								$(this).css('color','white');}			  
						            }
			      );
/////////////////////////////////////////////////////////////////////////////////////////
$('#bb1_1').hover(function(){
	$(this).css('background','url("img/1-sizes.gif") 0 0');				  
						  },function(){	if (ChSize1_1==0) {
	$(this).css('background','url("img/1-sizes.gif") 0 100px');				  
						  }
});
$('#bb2_1').hover(function(){
	$(this).css('background','url("img/1-sizes.gif") -110px 0');				  
						  },function(){	if (ChSize2_1==0) {
	$(this).css('background','url("img/1-sizes.gif") -110px 100px');				  
						  }
});
$('#bb3_1').hover(function(){
	$(this).css('background','url("img/1-sizes.gif") -220px 0');				  
						  },function(){	if (ChSize3_1==0) {					  
	$(this).css('background','url("img/1-sizes.gif") -220px 100px');				  
						  }
});
$('#bb4_1').hover(function(){
	$(this).css('background','url("img/1-sizes.gif") -330px 0');				  
						  },function(){	if (ChSize4_1==0) {					  
	$(this).css('background','url("img/1-sizes.gif") -330px 100px');				  
						  }
});
$('#bb5_1').hover(function(){
	$(this).css('background','url("img/1-sizes.gif") -440px 0');				  
						  },function(){	if (ChSize5_1==0) {					  
	$(this).css('background','url("img/1-sizes.gif") -440px 100px');				  
						  }
});


$('#bb1_1').click(function(){
	$(this).css('background','url("img/1-sizes.gif") 0 0');
	$('#img1').attr('src', $('#img1').attr('src').replace(NowPict1, 'img/1-10.jpg')); 
	NowPict1='img/1-10.jpg';
	ChSize1_1=1;
	ChSize2_1=0;
	ChSize3_1=0;
	ChSize4_1=0;
	ChSize5_1=0;
	$('#bb2_1').css('background','url("img/1-sizes.gif") -110px 100px');				  
	$('#bb3_1').css('background','url("img/1-sizes.gif") -220px 100px');
	$('#bb4_1').css('background','url("img/1-sizes.gif") -330px 100px');
	$('#bb5_1').css('background','url("img/1-sizes.gif") -440px 100px');
});
$('#bb2_1').click(function(){
	$(this).css('background','url("img/1-sizes.gif") -110px 0');
	$('#img1').attr('src', $('#img1').attr('src').replace(NowPict1, 'img/1-20.jpg'));
	NowPict1='img/1-20.jpg';
	ChSize1_1=0;
	ChSize2_1=1;
	ChSize3_1=0;
	ChSize4_1=0;
	ChSize5_1=0;
	$('#bb1_1').css('background','url("img/1-sizes.gif") 0 100px');				  
	$('#bb3_1').css('background','url("img/1-sizes.gif") -220px 100px');
	$('#bb4_1').css('background','url("img/1-sizes.gif") -330px 100px');
	$('#bb5_1').css('background','url("img/1-sizes.gif") -440px 100px');
					  
});

$('#bb3_1').click(function(){
						
	$(this).css('background','url("img/1-sizes.gif") -220px 0');	
	$('#img1').attr('src', $('#img1').attr('src').replace(NowPict1, 'img/1-30.jpg'));
	NowPict1='img/1-30.jpg';
	ChSize1_1=0;
	ChSize2_1=0;
	ChSize3_1=1;
	ChSize4_1=0;
	ChSize5_1=0;
	$('#bb2_1').css('background','url("img/1-sizes.gif") -110px 100px');				  
	$('#bb1_1').css('background','url("img/1-sizes.gif") 0 100px');
	$('#bb4_1').css('background','url("img/1-sizes.gif") -330px 100px');
	$('#bb5_1').css('background','url("img/1-sizes.gif") -440px 100px');
});

$('#bb4_1').click(function(){					
	$(this).css('background','url("img/1-sizes.gif") -330px 0');
	$('#img1').attr('src', $('#img1').attr('src').replace(NowPict1, 'img/1-40.jpg')); 
	NowPict1='img/1-40.jpg';
	ChSize1_1=0;
	ChSize2_1=0;
	ChSize3_1=0;
	ChSize4_1=1;
	ChSize5_1=0;
	$('#bb2_1').css('background','url("img/1-sizes.gif") -110px 100px');				  
	$('#bb3_1').css('background','url("img/1-sizes.gif") -220px 100px');
	$('#bb1_1').css('background','url("img/1-sizes.gif") 0 100px');
	$('#bb5_1').css('background','url("img/1-sizes.gif") -440px 100px'); 
});

$('#bb5_1').click(function(){
	$(this).css('background','url("img/1-sizes.gif") -440px 0');
	$('#img1').attr('src', $('#img1').attr('src').replace(NowPict1, 'img/1-50.jpg')); 
	NowPict1='img/1-50.jpg';
	ChSize1_1=0;
	ChSize2_1=0;
	ChSize3_1=0;
	ChSize4_1=0;
	ChSize5_1=1;
	$('#bb2_1').css('background','url("img/1-sizes.gif") -110px 100px');				  
	$('#bb3_1').css('background','url("img/1-sizes.gif") -220px 100px');
	$('#bb4_1').css('background','url("img/1-sizes.gif") -330px 100px');
	$('#bb1_1').css('background','url("img/1-sizes.gif") 0 100px');			  
});


/////////////////////////////////////////////////////////////////////////////////////////////
$('#bb1_2').hover(function(){
	$(this).css('background','url("img/2-sizes.gif") 0 0');				  
						  },function(){	if (ChSize1_2==0) {
	$(this).css('background','url("img/2-sizes.gif") 0 100px');				  
						  }
});
$('#bb2_2').hover(function(){
	$(this).css('background','url("img/2-sizes.gif") -110px 0');				  
						  },function(){	if (ChSize2_2==0) {
	$(this).css('background','url("img/2-sizes.gif") -110px 100px');				  
						  }
});
$('#bb3_2').hover(function(){
	$(this).css('background','url("img/2-sizes.gif") -220px 0');				  
						  },function(){	if (ChSize3_2==0) {					  
	$(this).css('background','url("img/2-sizes.gif") -220px 100px');				  
						  }
});
$('#bb4_2').hover(function(){
	$(this).css('background','url("img/2-sizes.gif") -330px 0');				  
						  },function(){	if (ChSize4_2==0) {					  
	$(this).css('background','url("img/2-sizes.gif") -330px 100px');				  
						  }
});
$('#bb5_2').hover(function(){
	$(this).css('background','url("img/2-sizes.gif") -440px 0');				  
						  },function(){	if (ChSize5_2==0) {					  
	$(this).css('background','url("img/2-sizes.gif") -440px 100px');				  
						  }
});


$('#bb1_2').click(function(){
	$(this).css('background','url("img/2-sizes.gif") 0 0');
	$('#img2').attr('src', $('#img2').attr('src').replace(NowPict2, 'img/2-10.jpg')); 
	NowPict2='img/2-10.jpg';
	ChSize1_2=1;
	ChSize2_2=0;
	ChSize3_2=0;
	ChSize4_2=0;
	ChSize5_2=0;
	$('#bb2_2').css('background','url("img/2-sizes.gif") -110px 100px');				  
	$('#bb3_2').css('background','url("img/2-sizes.gif") -220px 100px');
	$('#bb4_2').css('background','url("img/2-sizes.gif") -330px 100px');
	$('#bb5_2').css('background','url("img/2-sizes.gif") -440px 100px');
});
$('#bb2_2').click(function(){
	$(this).css('background','url("img/2-sizes.gif") -110px 0');
	$('#img2').attr('src', $('#img2').attr('src').replace(NowPict2, 'img/2-20.jpg')); 
	NowPict2='img/2-20.jpg';
	ChSize1_2=0;
	ChSize2_2=1;
	ChSize3_2=0;
	ChSize4_2=0;
	ChSize5_2=0;
	$('#bb1_2').css('background','url("img/2-sizes.gif") 0 100px');				  
	$('#bb3_2').css('background','url("img/2-sizes.gif") -220px 100px');
	$('#bb4_2').css('background','url("img/2-sizes.gif") -330px 100px');
	$('#bb5_2').css('background','url("img/2-sizes.gif") -440px 100px');
					  
});

$('#bb3_2').click(function(){
	$('#img2').attr('src', $('#img2').attr('src').replace(NowPict2, 'img/2-30.jpg')); 
	NowPict2='img/2-30.jpg';					
	$(this).css('background','url("img/2-sizes.gif") -220px 0');	
	ChSize1_2=0;
	ChSize2_2=0;
	ChSize3_2=1;
	ChSize4_2=0;
	ChSize5_2=0;
	$('#bb2_2').css('background','url("img/2-sizes.gif") -110px 100px');				  
	$('#bb1_2').css('background','url("img/2-sizes.gif") 0 100px');
	$('#bb4_2').css('background','url("img/2-sizes.gif") -330px 100px');
	$('#bb5_2').css('background','url("img/2-sizes.gif") -440px 100px');
});

$('#bb4_2').click(function(){
	$('#img2').attr('src', $('#img2').attr('src').replace(NowPict2, 'img/2-40.jpg')); 
	NowPict2='img/2-40.jpg';					
	$(this).css('background','url("img/2-sizes.gif") -330px 0');	
	ChSize1_2=0;
	ChSize2_2=0;
	ChSize3_2=0;
	ChSize4_2=1;
	ChSize5_2=0;
	$('#bb2_2').css('background','url("img/2-sizes.gif") -110px 100px');				  
	$('#bb3_2').css('background','url("img/2-sizes.gif") -220px 100px');
	$('#bb1_2').css('background','url("img/2-sizes.gif") 0 100px');
	$('#bb5_2').css('background','url("img/2-sizes.gif") -440px 100px'); 
});

$('#bb5_2').click(function(){
	$('#img2').attr('src', $('#img2').attr('src').replace(NowPict2, 'img/2-50.jpg')); 
	NowPict2='img/2-50.jpg';					
	$(this).css('background','url("img/2-sizes.gif") -440px 0');	
	ChSize1_2=0;
	ChSize2_2=0;
	ChSize3_2=0;
	ChSize4_2=0;
	ChSize5_2=1;
	$('#bb2_2').css('background','url("img/2-sizes.gif") -110px 100px');				  
	$('#bb3_2').css('background','url("img/2-sizes.gif") -220px 100px');
	$('#bb4_2').css('background','url("img/2-sizes.gif") -330px 100px');
	$('#bb1_2').css('background','url("img/2-sizes.gif") 0 100px');			  
});
////////////////////////////////////////////////////////////////////////////////////
$('#bb1_3').hover(function(){
	$(this).css('background','url("img/3-sizes.gif") 0 0');				  
						  },function(){	if (ChSize1_3==0) {
	$(this).css('background','url("img/3-sizes.gif") 0 100px');				  
						  }
});
$('#bb2_3').hover(function(){
	$(this).css('background','url("img/3-sizes.gif") -110px 0');				  
						  },function(){	if (ChSize2_3==0) {
	$(this).css('background','url("img/3-sizes.gif") -110px 100px');				  
						  }
});
$('#bb3_3').hover(function(){
	$(this).css('background','url("img/3-sizes.gif") -220px 0');				  
						  },function(){	if (ChSize3_3==0) {					  
	$(this).css('background','url("img/3-sizes.gif") -220px 100px');				  
						  }
});
$('#bb1_3').click(function(){
	$(this).css('background','url("img/3-sizes.gif") 0 0');
	$('#img3').attr('src', $('#img3').attr('src').replace(NowPict3, 'img/3-10.jpg')); 
	NowPict3='img/3-10.jpg';
	ChSize1_3=1;
	ChSize2_3=0;
	ChSize3_3=0;
	$('#bb2_3').css('background','url("img/3-sizes.gif") -110px 100px');				  
	$('#bb3_3').css('background','url("img/3-sizes.gif") -220px 100px');
});
$('#bb2_3').click(function(){
	$(this).css('background','url("img/3-sizes.gif") -110px 0');
	$('#img3').attr('src', $('#img3').attr('src').replace(NowPict3, 'img/3-20.jpg')); 
	NowPict3='img/3-20.jpg';
	ChSize1_3=0;
	ChSize2_3=1;
	ChSize3_3=0;
	$('#bb1_3').css('background','url("img/3-sizes.gif") 0 100px');				  
	$('#bb3_3').css('background','url("img/3-sizes.gif") -220px 100px');					  
});

$('#bb3_3').click(function(){
	$('#img3').attr('src', $('#img3').attr('src').replace(NowPict3, 'img/3-30.jpg')); 
	NowPict3='img/3-30.jpg';
	$(this).css('background','url("img/3-sizes.gif") -220px 0');	
	ChSize1_3=0;
	ChSize2_3=0;
	ChSize3_3=1;
	$('#bb2_3').css('background','url("img/3-sizes.gif") -110px 100px');				  
	$('#bb1_3').css('background','url("img/3-sizes.gif") 0 100px');
	});



/*$(window).scroll(function() {
			if ($('#page2 h2').data("top")){alert('YESS!!!!');}			  
						  }):
*/