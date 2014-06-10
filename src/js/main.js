var hide=false;
var color=1;
var BG='background';

//Left Menu logic...

var LM_Sizes = ['0', '-115px', '-230px'];
var LM_LastChoice = 1;
var LM_LastSize = LM_Sizes[LM_LastChoice - 1];
var LM_Name = '#m';
var LM_Way = "url('img/left-menu.gif')"; 


function LM_In (aMenuItem) {
	$(LM_Name + aMenuItem).css(BG,LM_Way+' 0 ' + LM_Sizes[aMenuItem - 1])
}
function LM_Out (aMenuItem) {
	if (LM_LastChoice!=aMenuItem) {
		$(LM_Name + aMenuItem).css(BG, LM_Way+' -115px ' + LM_Sizes[aMenuItem - 1])
	}
}
function LM_Click (aMenuItem) {
	if (LM_LastChoice != aMenuItem) {
		$(LM_Name + LM_LastChoice).css(BG, LM_Way + ' -115px ' + LM_LastSize);
		LM_LastChoice = aMenuItem;
		LM_LastSize = LM_Sizes[aMenuItem - 1];
	}
}

$('#m1').hover(function(){LM_In(1)}, function(){LM_Out(1)});
$('#m2').hover(function(){LM_In(2)}, function(){LM_Out(2)});
$('#m3').hover(function(){LM_In(3)}, function(){LM_Out(3)});

$('#m1').click(function(){LM_Click(1)});
$('#m2').click(function(){LM_Click(2)});
$('#m3').click(function(){LM_Click(3)});

///scrolling

function setScrollvalues() {
    headerOffset = $('#header').height();
    scrollPoses = [];
    for (var i = 0; i < $('a.section').length; i++) {
        scrollPoses.push(Math.max(Math.round($('a.section').eq(i).offset().top) - headerOffset, 0));
    }
}

$(document).ready(function(){
	setScrollvalues();
});

$(window).scroll(function(){
   var scrollTop = $(window).scrollTop();
   var WrapH = $('#wrapper').height();
   var WindH = $(window).height();
   if (scrollTop < scrollPoses[1]*3/4){LM_In(1); LM_Click(1);}
   if (scrollTop >= scrollPoses[1]*3/4 & scrollTop <= ((scrollPoses[2] - scrollPoses[1])*3/4 + scrollPoses[1]) ){LM_In(2); LM_Click(2);}
   if (scrollTop > ((scrollPoses[2] - scrollPoses[1])*3/4 + scrollPoses[1])){LM_In(3); LM_Click(3);}
   
   
						  });
 /*  if (scrollTop < scrollPoses[1]*3/4){
	   LM_In(1); LM_Click(1);
   } else if (scrollTop < (scrollPoses[2] - (scrollPoses[2]-scrollPoses[1])/4)){
	   LM_In(2); LM_Click(2);
   } else {
	   LM_In(3); LM_Click(3)
   }
});
*/

$ ('#buy').click(function(){
	$(this).css(BG, (color == 1) ? '#B73386' : '#C4007A');
	$(this).css('color', (color == 1) ? '#EBEBEB' : 'white');
	color = (color == 1) ? 2 : 1;

	$('#AroundBuyB').toggle(),('slow');
	$('#buyblock').toggle(),('slow');
});



$('#AroundBuyB').click(function(){
								color=1;
								$('#buy').css(BG,'#C4007A');
								$('#buy').css('color','white');
								$('#buyblock').hide(),('slow');
								$(this).hide(),('slow');
								});

$ ('#buy').hover(function(){		  
				$(this).css(BG,'#B73386');	
				$(this).css('color','#EBEBEB');
						  },
						  function(){
				if (color==1) { $(this).css(BG,'#C4007A');
								$(this).css('color','white');}			  
						            }
			      );
/////////////////////////////////////////////////////////////////////////////////////////
//extender Type 1 logic...


var T1_Sizes = ['0', '-80px', '-160px', '-240px', '-320px'];
var T1_LastChoice = 1;
var T1_LastSize = T1_Sizes[T1_LastChoice - 1];
var T1_Name = '#bb1_';
var T1_Way = 'url("img/1-sizes.gif")'; 

function T1_In (aExt1Item) {
	$(T1_Name + aExt1Item).css(BG,T1_Way + T1_Sizes[aExt1Item - 1] +' 0 ' )
}
function T1_Out (aExt1Item) {
	if (T1_LastChoice!=aExt1Item) {
		$(T1_Name + aExt1Item).css(BG, T1_Way + T1_Sizes[aExt1Item - 1] +' 74px ')
	}
}
function T1_Click (aExt1Item) {
	if (T1_LastChoice != aExt1Item) {
		$(T1_Name + T1_LastChoice).css(BG, T1_Way + T1_LastSize  + ' 74px ');
		T1_LastChoice = aExt1Item;
		T1_LastSize = T1_Sizes[aExt1Item - 1];
		$('#img1').attr('src','img/1-'+aExt1Item+'0.jpg'); 
	}
}

$('#bb1_1').hover(function(){T1_In(1)}, function(){T1_Out(1)});
$('#bb1_2').hover(function(){T1_In(2)}, function(){T1_Out(2)});
$('#bb1_3').hover(function(){T1_In(3)}, function(){T1_Out(3)});
$('#bb1_4').hover(function(){T1_In(4)}, function(){T1_Out(4)});
$('#bb1_5').hover(function(){T1_In(5)}, function(){T1_Out(5)});

$('#bb1_1').click(function(){T1_Click(1)});
$('#bb1_2').click(function(){T1_Click(2)});
$('#bb1_3').click(function(){T1_Click(3)});
$('#bb1_4').click(function(){T1_Click(4)});
$('#bb1_5').click(function(){T1_Click(5)});


//extender Type 2 logic...


var T2_Sizes = ['0', '-80px', '-160px', '-240px', '-320px'];
var T2_LastChoice = 2;
var T2_LastSize = T2_Sizes[T2_LastChoice - 1];
var T2_Name = '#bb2_';
var T2_Way = 'url("img/2-sizes.gif")'; 

function T2_In (aExt2Item) {
	$(T2_Name + aExt2Item).css(BG,T2_Way + T2_Sizes[aExt2Item - 1] +' 0 ')
}
function T2_Out (aExt2Item) {
	if (T2_LastChoice!=aExt2Item) {
		$(T2_Name + aExt2Item).css(BG, T2_Way + T2_Sizes[aExt2Item - 1] +' 74px ')
	}
}
function T2_Click (aExt2Item) {
	if (T2_LastChoice != aExt2Item) {
		$(T2_Name + T2_LastChoice).css(BG, T2_Way + T2_LastSize + ' 74px ');
		T2_LastChoice = aExt2Item;
		T2_LastSize = T2_Sizes[aExt2Item - 1];
		$('#img2').attr('src','img/2-'+aExt2Item+'0.jpg'); 
	}
}

$('#bb2_1').hover(function(){T2_In(1)}, function(){T2_Out(1)});
$('#bb2_2').hover(function(){T2_In(2)}, function(){T2_Out(2)});
$('#bb2_3').hover(function(){T2_In(3)}, function(){T2_Out(3)});
$('#bb2_4').hover(function(){T2_In(4)}, function(){T2_Out(4)});
$('#bb2_5').hover(function(){T2_In(5)}, function(){T2_Out(5)});

$('#bb2_1').click(function(){T2_Click(1)});
$('#bb2_2').click(function(){T2_Click(2)});
$('#bb2_3').click(function(){T2_Click(3)});
$('#bb2_4').click(function(){T2_Click(4)});
$('#bb2_5').click(function(){T2_Click(5)});
//extender Type 3 logic...


var T3_Sizes = ['0', '-80px', '-160px'];
var T3_LastChoice = 3;
var T3_LastSize = T3_Sizes[T3_LastChoice - 1];
var T3_Name = '#bb3_';
var T3_Way = 'url("img/3-sizes.gif")'; 

function T3_In (aExt3Item) {
	$(T3_Name + aExt3Item).css(BG,T3_Way + T3_Sizes[aExt3Item - 1] +' 0 ')
}
function T3_Out (aExt3Item) {
	if (T3_LastChoice!=aExt3Item) {
		$(T3_Name + aExt3Item).css(BG, T3_Way + T3_Sizes[aExt3Item - 1] +' 74px ')
	}
}
function T3_Click (aExt3Item) {
	if (T3_LastChoice != aExt3Item) {
		$(T3_Name + T3_LastChoice).css(BG, T3_Way + T3_LastSize + ' 74px ');
		T3_LastChoice = aExt3Item;
		T3_LastSize = T3_Sizes[aExt3Item - 1];
		$('#img3').attr('src','img/3-'+aExt3Item+'0.jpg'); 
	}
}

$('#bb3_1').hover(function(){T3_In(1)}, function(){T3_Out(1)});
$('#bb3_2').hover(function(){T3_In(2)}, function(){T3_Out(2)});
$('#bb3_3').hover(function(){T3_In(3)}, function(){T3_Out(3)});

$('#bb3_1').click(function(){T3_Click(1)});
$('#bb3_2').click(function(){T3_Click(2)});
$('#bb3_3').click(function(){T3_Click(3)});
