var myVar = setInterval(myTimer, 1000);
$.getScript("https://ssiprojects.s3.amazonaws.com/ssiconsultancy/Tests/JSadi/buttonstrip.min.js", function( data, textStatus, jqxhr ) {
  //console.log("loaded button script"); // Data returnedco
})
function myTimer() {
var d = $('iframe').contents().find('.cm-question-wrapper').length
//console.log("d="+d)
if (parseInt(d)>0) {myStopFunction()}
}
function myStopFunction() {
  clearInterval(myVar);
  //START HERE
var myselect=$('iframe').contents()
 
$.getScript("https://ssiprojects.s3.amazonaws.com/ssiconsultancy/Tests/JSadi/jquery.highlighttextarea.js", function( data, textStatus, jqxhr ) {
  //console.log("loaded"); // Data returned
});

$('head').append('<link rel="stylesheet" type="text/css" href="https://ssiprojects.s3.amazonaws.com/ssiconsultancy/Tests/JSadi/jquery.highlighttextarea.css">');

$('head').append('<link rel="stylesheet" type="text/css" href="https://ssiprojects.s3.amazonaws.com/ssiconsultancy/Tests/JSadi/compareTXT_2.css">');

  var htmlappend="<table style='width:70%;margin-left:30px'><tr><td style='text-align:left;border-style:none'><div id='switchbutton'></div></td><td style='border-style:none'><span id='showdataCont'><input type='checkbox' id='showdata'>Show data</input></span></td></tr><tr><td style='border-style:none'><table id='toolCont'><tr><td valign='bottom' style='padding:10px;border-style:none'><div style='width:150px'>Legend:<div style='background-color:#ff6666'>Not found</div><div style='background-color:#42c8f5'>Found partial match</div><div style='background-color:#81f542'>Found</div><div style='background-color:#f5a742'>Found more than once</div></div></td><td style='border:none'><textarea type='text' id='pastetxt' width='400px' rows='15'></textarea></td></tr></table></td><td><table id='toolContCodes'><tr><td width='300px' style='border-style:none'><textarea type='text' id='pastetxtCodes' rows='15'></textarea></td><td width='20px' style='border-style:none;'></td><td valign='top' style='border-style:none'><div id='rescodes'></div></td></tr></table></td></tr></table>"
$('.frame-container').append(htmlappend)
$('#pastetxt').css('min-width',"400px")
$('#pastetxt').css('max-width',"400px")
$('#pastetxt').css('line-height',"inherit")
$('iframe').css("height","90%")


var instance = new ButtonStrip({
    id: 'mybutton'
});

$('#toolContCodes').hide()
instance.addButton('Text search', true, 'click', function(){
  $('#toolCont').show()
  $('#toolContCodes').hide()
});
instance.addButton('Codes match', false, 'click', function(){
  $('#toolCont').hide()
  $('#toolContCodes').show()
});

instance.append('#switchbutton');


$('#showdata').on('change',function(){
if($(this).is(':checked'))
{
$('.cm-simple-grid', frames[0].document).css("display","initial") 
$('.cm-simple-grid', frames[0].document).css("visibility","inherit") 
$('.cm-simple-grid', frames[0].document).css("height","inherit") 
$('.cm-simple-grid', frames[0].document).find('table').css("background-color","lightgrey")
}
else
{;
$('.cm-simple-grid', frames[0].document).css("display","none") 
$('.cm-simple-grid', frames[0].document).css("visibility","hidden") 
$('.cm-simple-grid', frames[0].document).css("height","0") 

}
}) 


$('#pastetxtCodes').on('input',  function(event) {

codescompare()
})


$('#pastetxt').on('input',  function(event) {
$('.cm-pageWrapper',frames[0].document).find('[style*="background-color"]').not('.simple-grid-response-codes,.question-code,.response-level-codes').css("background-color","")
$('[id*="CUSTOMSPAN"]', frames[0].document).each(function(){

	if ($(this).children().length==0 && $(this).contents().length==1 && $(this).contents()[0].nodeValue=="") {$(this).remove()} 
	
	else if ($(this).children().length==0 && !$(this).is('option')) {$(this).contents().filter(function() {
      return this.nodeType === 3;
    }).unwrap()}
	else {$(this).contents(":first-child").not('option').unwrap()}
})

$('.highlightTextarea-highlighter').remove()
$('#pastetxt').highlightTextarea('destroy')
mytxt=$('#pastetxt').val()
	var splittxt= mytxt.split('\n')
	for (var ff in splittxt)
	{
		splittxt[ff]=splittxt[ff].replace(/^(([0-9A-Za-z]{1,1}|[0-9]{1,}|[A-Za-z]{1,}[0-9]{1,}|[0-9]{1,}[.][A-Za-z]{1,}|[ivx]{2,})[.)]|\u2022|-|\u25CF)\s+/gi,'')
		splittxt[ff]=splittxt[ff].replace(/^[0-9]{1,}\t/gi,'')
			splittxt[ff]=splittxt[ff].replace(/[\uF06D]/g, '');
			splittxt[ff]=splittxt[ff].replace(/[\u25CB]/g, '')
			splittxt[ff]=splittxt[ff].replace(/[\u00A0]/g, ' ')
			splittxt[ff]=splittxt[ff].replace(/[\u0009]/g, ' ');
			splittxt[ff]=splittxt[ff].replace(/[\s]{2}/g, ' ');
		if (event.originalEvent.data!=" ") {splittxt[ff]=splittxt[ff].trim()}
	}
	mytxt=splittxt.join('\n')

	$('#pastetxt').val(mytxt)
	$('#pastetxt').focus()
})
$('#pastetxt').on('paste',  function() {
if ($('#pastetxt').val()) {$('#pastetxt').val($('#pastetxt').val()+'\n')}
if ($('#pastetxt').val()) {$('#pastetxt').val($('#pastetxt').val().replace('\n\n','\n'))}
})

document.onclick=function(e)
{
$('.icon-backwards,.icon-forwards').add($('#cm-NextButton', frames[0].document)).on('click',function(){
clearhigh()	
window.top.document.getElementById('showdata').checked=false
})
	
}


document.getElementsByTagName('iframe')[0].contentWindow.onclick=function(e)
{
$('#cm-NextButton,#cm-PrevButton').on('click',function(){
clearhigh()
})


}

document.onkeyup=function(e){
var e = e || window.event; 
//EXECUTE TEXT SEARCH alt+B
if(e.ctrlKey && e.keyCode == 66) {

$('[id*=CUSTOMSPAN]', frames[0].document).css('background-color','transparent')
comparetxt()
$('th').parents('[id*=CUSTOMSPAN]', frames[0].document).css('display','contents')

};

//Added shortcuts
	var e = e || window.event; // for IE to cover IEs window event-object
		//FORWARD = alt+A
			if(e.altKey && e.keyCode == 65) {
			window.frames[0].document.getElementById('cm-NextButton').click()
			//clearhigh()
			//return false;
		}
		//BACKWARD = alt+Z
		if(e.altKey && e.keyCode == 90) {
		$('.icon-backwards').click()
		//clearhigh()
		//return false;
		}

		//answer me = alt+R
		if(e.altKey && e.keyCode == 82) {
		$('.icon-forwards').click()
		//clearhigh()
		//return false;	
		}
}


document.getElementsByTagName('iframe')[0].onload=function()
{

document.getElementsByTagName('iframe')[0].contentWindow.onkeyup=function(r){
var r = r 
//EXECUTE TEXT SEARCH alt+B
if(r.ctrlKey && r.keyCode == 66) {

$('[id*=CUSTOMSPAN]', frames[0].document).css('background-color','transparent')
comparetxt()
$('th', frames[0].document).parents('[id*=CUSTOMSPAN]').css('display','contents')

};

//Added shortcuts
	var r = r  // for IE to cover IEs window event-object
		//FORWARD = alt+A
			if(r.altKey && r.keyCode == 65) {
			window.frames[0].document.getElementById('cm-NextButton').click()
			clearhigh()
			//return false;
		}
		//BACKWARD = alt+Z
		if(r.altKey && r.keyCode == 90) {
		window.top.document.getElementsByClassName("icon-backwards")[0].click()
		clearhigh()
		//return false;
		}

		//answer me = alt+R
		if(r.altKey && r.keyCode == 82) {
		window.top.document.getElementsByClassName("icon-forwards")[0].click()
		clearhigh()
		//return false;	
		}
}
}

}


function comparetxt()
{

var additionalhighlight =[]
$('.highlightTextarea-highlighter').remove()
$('#pastetxt').highlightTextarea('destroy')
	var surveytexts=[]
$('.cm-qtext,.cm-radio-label-text,.cm-instructions,.cm-checkbox-label-container,.cm-simple-grid,.selectBtn,.display-card,.cm-text-label-container,.cm-numeric-label-container,.cm-response-group-name,.cm-field-right-label', frames[0].document).find('*').not('.coordinate-response-codes,.simple-grid-response-codes,.cm-radio-input-container,.dataToggle,.response-level-codes,.cm-jumpable').add($('.cm-qtext,.cm-radio-label-text,.cm-instructions,.cm-grid-cell,.cm-response-group-name,.cm-field-right-label', frames[0].document)).not('style').filter(":visible").add($('.cm-dropdown-input,.display-card,.cm-grid-cell', frames[0].document).find('option[value!=""][value!="-1"]')).each(function(){
	//console.log("ELEM:"+ $(this).text())
	//console.log($(this))
	if ($(this).children('[id*=CUSTOMSPAN]').length==0 && (!["U","B","I","A","STRONG"].includes($(this).prop('nodeName')) || $(this).text().length==$(this).parents().not('b,u,i,style').eq(0).text().trim().length))
	{
		
	var chktext=$(this).clone().children().remove().end().text().trim()
	//console.log("chks"+chktext+';type='+$(this).prop('nodeName'));
	
	if (chktext)
	{
var splitelem=[]
if ($(this).children().not('b,u,i,.coordinate-response-codes,a,.simple-grid-response-codes,.cm-radio-input-container,strong').length==0 && !["TD"].includes($(this).prop('nodeName')))
{
//console.log($(this).text())
//console.log($(this).children())
splitelem.push($(this))	
}
else
{

var brcount=0
$(this).contents().each(function(){

if($(this).prop('nodeName')!='BR' && !$(this).hasClass('coordinate-response-codes') && !$(this).hasClass('simple-grid-response-codes') && $(this).prop('nodeName')!='DIV' && $(this).prop('nodeName')!='INPUT')
{
	//console.log("COMBINE"+this.nodeName+"--"+$(this) )
$(this).add($(this)).wrap('<span class=COMBINE'+brcount+'/>')}
else {brcount++}
})

$('[class*=COMBINE]', frames[0].document).each(function(){
if (!$(this).parent().attr('id') || $(this).parent().attr('id').substring(0,10)!='CUSTOMSPAN')
{
//console.log($(this).attr('class'))
myiindex =$(this).attr('class').toString().substring(7,99)
//console.log(myiindex)
//console.log($('[class=COMBINE'+myiindex+']'))
var myclassname = "CUSTOMSPAN"+Math.random().toString(36).substring(7);
$('[class=COMBINE'+myiindex+']', frames[0].document).wrapAll('<span id='+myclassname+'/>')
splitelem.push($('[id='+myclassname+']', frames[0].document))
}
})

$('[class*=COMBINE]', frames[0].document).each(function(){
	if ($(this).children().length==0) {$(this).contents().unwrap()}
	else {$(this).contents(":first-child").not('option').unwrap()}
	
})

}

//console.log("SPLIT:")
//console.log(splitelem)
	for (var kk=0;kk<splitelem.length;kk++)
	{
	//console.log("IN"+kk)
	//console.log($(splitelem[kk]))
	//console.log("IS QA="+$(splitelem[kk]).hasClass('qaCode'))
	//console.log("node="+$(splitelem[kk]).nodeName)
	var tmptxt = $(splitelem[kk]).clone().children('.response-level-codes,.coordinate-response-codes,.simple-grid-response-codes,style').remove().end().text()

	
	
	//console.log("tmptxt="+tmptxt)
	if (tmptxt.trim()!="")
	{
	//console.log("HAS TXT")
	var tmpselect = ""
	
	if ($(splitelem[kk]).attr('id'))
	{
	tmpselect="#"+$(splitelem[kk]).attr('id')
	}
	
	else if($(splitelem[kk]).prop('nodeName')=='OPTION')
	{
		$(splitelem[kk]).attr('id',"CUSTOMSPAN"+Math.random().toString(36).substring(7))
		tmpselect="#"+$(splitelem[kk]).attr('id')
	}

	else if (!$(splitelem[kk]).parents('span').eq(0).attr('id') || $(splitelem[kk]).parents('span').eq(0).attr('id').substring(0,10)!='CUSTOMSPAN' || $(splitelem[kk]).siblings().length>0 ) 
	{
	var myclassname = "CUSTOMSPAN"+Math.random().toString(36).substring(7);
	if ($(splitelem[kk]).parent().hasClass('cell')) {$(splitelem[kk]).parent().wrap('<span id='+myclassname+'/>');}
	else {$(splitelem[kk]).wrap('<span id='+myclassname+'/>');}
	tmpselect="#"+myclassname
	}
	
		else if ($(splitelem[kk]).parents('span').eq(0).attr('id') && $(splitelem[kk]).parents('span').eq(0).attr('id').substring(0,10)=='CUSTOMSPAN') 
	{
		tmpselect="#"+$(splitelem[kk]).parents('span').eq(0).attr('id')
		
	}
	//console.log("Selector="+tmpselect);
	if (!surveytexts.find(x => x.selector === tmpselect))
	{
	surveytexts.push({id:$(splitelem[kk]).attr('id'),text:tmptxt.trim(), for:$(this).attr('for'), selector:tmpselect,found:0})
	}
	}
	else if ($(splitelem[kk]).contents().length==1 && $(splitelem[kk]).children().length==0 && $(this).contents()[0].nodeValue==""){$(splitelem[kk]).remove()}
	}
	}
	}
	})
for (var tt in surveytexts)
{
$(surveytexts[tt].selector, frames[0].document).css('background-color','transparent')

}

//console.log(surveytexts)

	var pastedtexts=[]
	var pastedtextstmp=$('#pastetxt').val().split("\n")
	for (var k in pastedtextstmp)
	{
		if (pastedtextstmp[k].trim()!='')
	{pastedtexts.push({text:pastedtextstmp[k].replace('\t',''),found:0})}
	}

//console.log(pastedtexts)
wordstocolorgreen=[]
wordstocolorred=[]
wordstocolororange=[]
wordstocolorblue=[]
	for (var cc=0;cc<pastedtexts.length;cc++)
	{
	var pasteencode=encodetxt(pastedtexts[cc].text.trim())
	
	for (var m in surveytexts)
	{
	var surveyencode=surveytexts[m].text.replace(/[\u00A0]/g, ' ');
	surveyencode=surveyencode.replace(/[\s\n\r]/g, ' ');
	surveyencode=surveyencode.replace(/[\s]{2}/g, ' ');
	//console.log(pasteencode)
	//console.log(surveyencode);
	//console.log("emc"+pasteencode);
	if (pastedtexts[cc].text.trim()==surveyencode || pasteencode==surveyencode)
	{
		//console.log("IN");
//console.log(pastedtexts[cc].text)
//console.log(pasteencode)
//console.log(surveyencode)
	$(surveytexts[m].selector, frames[0].document).css('background-color','#81f542')
	surveytexts[m].found++
//console.log('Increased for '+	surveytexts[m].text + surveytexts[m].found)
	pastedtexts[cc].found++ 

	if (wordstocolorgreen.indexOf(pastedtexts[cc].text.trim())==-1)
	{wordstocolorgreen.push(pastedtexts[cc].text.trim())}
	}
	}
//	console.log(pastedtexts);
//	console.log(surveytexts)
}
	for (var cc=0;cc<pastedtexts.length;cc++)
	{
	var pasteencode=encodetxt(pastedtexts[cc].text.trim())
	for (var hh in surveytexts)
	{
	
	var surveyencode=surveytexts[hh].text.replace(/[\u00A0]/g, ' ');
	surveyencode=surveyencode.replace(/[\s\n\r]/g, ' ');
	surveyencode=surveyencode.replace(/[\s]{2}/g, ' ');
	 if(parseInt(surveytexts[hh].found)==0 && parseInt(pastedtexts[cc].found)==0 && (checkpartialmatch(pastedtexts[cc].text.trim(),surveyencode)[0]>0 || checkpartialmatch(pasteencode,surveyencode)[0]>0))
	{

	$(surveytexts[hh].selector, frames[0].document).css('background-color','#42c8f5')
	
	var mismatchresult= checkpartialmatch(pastedtexts[cc].text.trim(),surveyencode)[1] || checkpartialmatch(pasteencode,surveyencode)[1]
	additionalhighlight.push([pastedtexts[cc].text.trim(),mismatchresult])
	surveytexts[hh].found++
	pastedtexts[cc].found++	
//	console.log('Increased for '+	pasteencode + "*" +surveyencode)
//	console.log(mismatchresult)
	if (wordstocolorblue.indexOf(pastedtexts[cc].text.trim())==-1)
	{
		wordstocolorblue.push(pastedtexts[cc].text.trim())
	
	}
	}	
	
	}
	
	}

//	console.log(surveytexts);
//console.log(additionalhighlight)
//check for found more than once
for (var zz in surveytexts)
	{

	if (surveytexts[zz].found>1)
	{
		//console.log("in if for"+surveytexts[zz].text);
	$(surveytexts[zz].selector, frames[0].document).css('background-color','#f5a742')
	if (wordstocolororange.indexOf(surveytexts[zz].text)==-1)
	{wordstocolororange.push(surveytexts[zz].text)}
	if (wordstocolorgreen.indexOf(surveytexts[zz].text)>-1)
	{wordstocolorgreen.splice(wordstocolorgreen.indexOf(surveytexts[zz].text),1)}

	}
	
	if (surveytexts[zz].found==0)
	{
	$(surveytexts[zz].selector, frames[0].document).css('background-color','#ff6666')
	}
	
	
	}

//check for not found in pasted or found more than once
for (var f in pastedtexts)
	{
	if (pastedtexts[f].found==0)
	{
wordstocolorred.push(pastedtexts[f].text.trim())
	}
	
	if (pastedtexts[f].found>1)
	{
		//console.log("in if for pasted"+pastedtexts[f].text);
if (wordstocolorgreen.indexOf(pastedtexts[f].text.trim())>-1)
{wordstocolorgreen.splice(wordstocolorgreen.indexOf(pastedtexts[f].text.trim()),1)}
wordstocolororange.push(pastedtexts[f].text.trim())
	}
	}


//console.log("Green="+wordstocolorgreen)
//console.log("Red="+wordstocolorred)
//console.log("Orange="+wordstocolororange)


$('#pastetxt').highlightTextarea({
  words: [
   {
    color: '#42c8f5',
    words: wordstocolorblue
  },
  {
    color: '#ff6666',
    words: wordstocolorred
  }, {
    color: '#81f542',
    words: wordstocolorgreen
  }, {
    color: '#f5a742',
    words: wordstocolororange
  }]

});
//console.log(additionalhighlight)
for (var gg in additionalhighlight)
{
var tmtext=additionalhighlight[gg][0].replace("&","&amp;").replace("<","&lt;").replace(">","&gt;")
var tmpindex=additionalhighlight[gg][1]
$('mark').each(function(){
	//console.log(tmtext)
	//console.log($(this).text())
if ($(this).text()==tmtext)	
{
	$(this).html($(this).text().split("").slice(0,tmpindex-5<0?0:tmpindex-5).join("")+'<mark style="background-color:yellow">'+$(this).text().split("").slice(tmpindex-5<0?0:tmpindex-5,tmpindex+5).join("")+ ($(this).text().split("").length>tmpindex+5?"":"  ")+'</mark>'+$(this).text().split("").slice(tmpindex+5).join(""))
}
})
}



//fixes to overwrite background
$('[id*=CUSTOMSPAN]', frames[0].document).children().css('background-color','inherit')

}




function codescompare()
{
var additionalhighlight =[]
$('.restable').remove()
var surveylist=[]
var pastedlist=[]
$('div.response-level-codes', frames[0].document).each(function(){

surveylist.push({code:$(this).text().split("_").length>1?$(this).text().split("_")[$(this).text().split("_").length-1].trim():$(this).text().replace("[","").replace("]","").trim(),text:$(this).siblings().contents().text().trim(),found:0})
})

$('span.simple-grid-response-codes', frames[0].document).each(function(){
if ($(this).text().split("_").length==2)
{
surveylist.push({code:$(this).text().split("_")[1],text:$(this).parent().clone().children('.simple-grid-response-codes').remove().end().text().trim(),found:0})
}
})

$('table.cm-simple-grid__view',frames[0].document).each(function(){
var scaletxt=[]
$(this).find('thead').find('.cm-simple-grid__column-header').each(function(){
scaletxt.push($(this).text().trim())	
})

var myind=0
$(this).find('tbody').find('tr').eq(0).find('td.cm-simple-grid__cell').find('span.simple-grid-response-codes').each(function(){
surveylist.push({code:$(this).text().split("_")[2],text:scaletxt[myind],found:0})
myind++
	})

	
})


for (var mm in surveylist)
{
	surveylist[mm].text=surveylist[mm].text.replace(/[\s]{2}/g, ' ');
	surveylist[mm].text=surveylist[mm].text.replace(/{@.*@}/,"");
	surveylist[mm].text=surveylist[mm].text.replace(/{@.*@}/,"");
	surveylist[mm].text=surveylist[mm].text.replace(/<\/?[biu]>/g, "");  
}



mytxt=$('#pastetxtCodes').val()
var splittxt= mytxt.split('\n')
	for (var ff in splittxt)
	{
		splittxt[ff]=splittxt[ff].replace(/[\040]{2}/g, ' ');
		splittxt[ff]=splittxt[ff].replace(/[\t]{2}/g, '\t');
		if (splittxt[ff].match(/^([0-9]{1,}[.)] )+/gi)) 
		{
			splittxt[ff]=splittxt[ff].replace(/^([0-9]{1,}[.)]) /,"$1\t")
		}


			splittxt[ff]=splittxt[ff].replace(/^(\[r)(\d+){1,}(\]) /,"$2\t")
	
		splittxt[ff]=splittxt[ff].replace(/[\t]{2}/g, '\t');
		var splitbytab=splittxt[ff].split('\t')
		if (splitbytab.length>=2 && splitbytab[0]!="")
		{
			
		var placeofcode="left"
		if (isNaN(splitbytab[0]) && !splitbytab[0].match(/^\d+(?:[.)])/)) {placeofcode="right"}
		pastedlist.push({code:placeofcode=="left"?splitbytab[0].replace(".","").replace(")","").trim():splitbytab[1].replace(")","").trim(),text:placeofcode=="left"?splitbytab[1].trim():splitbytab[0].trim(),found:0,labelmatch:0,labellink:"",partialmatch:0,surveycode:0})
		}
}



for (var i=0;i<pastedlist.length;i++)
{
for (var k=0;k<surveylist.length;k++)
{
if (pastedlist[i].text==surveylist[k].text || encodetxt(pastedlist[i].text)==surveylist[k].text  || pastedlist[i].text.replace("&","&amp;")==surveylist[k].text)
{
pastedlist[i].found=1
surveylist[k].found=1
if (pastedlist[i].code==surveylist[k].code)
{
pastedlist[i].labelmatch=1
pastedlist[i].labellink=surveylist[k].code
}
else
{
	pastedlist[i].surveycode=surveylist[k].code
}
}
}
}


for (var rr=0;rr<pastedlist.length;rr++)
{
for (var tt=0;tt<surveylist.length;tt++)
{
var arrtexts=[pastedlist[rr].text,encodetxt(pastedlist[rr].text)]
for (var yy in arrtexts)
{
if (surveylist[tt].found!=1 && pastedlist[rr].found!=1 && checkpartialmatch(arrtexts[yy],surveylist[tt].text)[0]>0)
{
pastedlist[rr].found=1
surveylist[tt].found=1
pastedlist[rr].partialmatch=1
var mismatchresult= checkpartialmatch(arrtexts[yy],surveylist[tt].text)[1]
additionalhighlight.push([arrtexts[yy],mismatchresult])
if (pastedlist[rr].code==surveylist[tt].code)
{
pastedlist[rr].labelmatch=1
pastedlist[rr].labellink=surveylist[tt].code
}
else
{
pastedlist[rr].surveycode=surveylist[tt].code
}
}
}
}
}	

//console.log(surveylist)	
//console.log(pastedlist)	
//console.log(additionalhighlight)
var tabletoappend="<table class='restable'><tr><td><b>Item</b></td><td><b>Code in q-re</b></td><td><b>Code in link</b></td></tr>"

for (var i=0;i<pastedlist.length;i++)
{
tabletoappend+="<tr "
tabletoappend+="class="
if (pastedlist[i].labelmatch==1) {tabletoappend+="'greenmatch'"}
else {tabletoappend+="'redmatch'"}
tabletoappend+=">"

tabletoappend+="<td class="
if (pastedlist[i].partialmatch==1) {tabletoappend+="'bluematch'"}
tabletoappend+=">"
tabletoappend+=pastedlist[i].text
tabletoappend+="</td>"
tabletoappend+="<td>"
tabletoappend+=pastedlist[i].code
tabletoappend+="</td>"
tabletoappend+="<td>"
if (pastedlist[i].labellink!="") {tabletoappend+=pastedlist[i].labellink}
else if (pastedlist[i].found==1) {tabletoappend+=pastedlist[i].surveycode}
else {tabletoappend+="NOT FOUND"}
tabletoappend+="</td>"
tabletoappend+="</tr>"
}

if(pastedlist.length>0)
{
for (var k=0;k<surveylist.length;k++)
{
if (surveylist[k].found==0)
{
tabletoappend+="<tr class=redmatch>"
tabletoappend+="<td>"
tabletoappend+=surveylist[k].text
tabletoappend+="</td>"
tabletoappend+="<td>NOT FOUND</td>"
tabletoappend+="<td>"
tabletoappend+=surveylist[k].code

tabletoappend+="</td>"
tabletoappend+="</tr>"
}
}

tabletoappend+="</table>"
$('#rescodes').append(tabletoappend)
$('#rescodes').find('td').css("padding","2px 2px 2px 2px")
}
//console.log(additionalhighlight)
for (var gg in additionalhighlight)
{
var tmtext=additionalhighlight[gg][0].replace("&","&amp;")
var tmpindex=additionalhighlight[gg][1]


$('.bluematch').each(function(){
if ($(this).text()==tmtext || encodetxt($(this).text())==tmtext)	
{
	$(this).html($(this).text().split("").slice(0,tmpindex-5<0?0:tmpindex-5).join("")+'<span style="background-color:yellow">'+$(this).text().split("").slice(tmpindex-5<0?0:tmpindex-5,tmpindex+5).join("")+ ($(this).text().split("").length>tmpindex+5?"":"&nbsp;&nbsp;&nbsp;&nbsp;")+'</span>'+$(this).text().split("").slice(tmpindex+5).join(""))
}
})
}

}


function checkpartialmatch(str1,str2)
{
	var mimsmatchtype=0 //1=case mismatch,2=one symbol or word additional in one string,3=one symbol or word different in the two strings
		var mismatchpart=""
		var splitvars=[""," "]
		for (var z=0;z<splitvars.length;z++)
		{
		var longer = str1.length>str2.length?str1:str2
		var shorter = str1.length>str2.length?str2:str1
		for (var k=0;k<longer.split(splitvars[z]).length;k++)
		{
      
     	var cutwhole=longer.split(splitvars[z]).slice(0,k).join(splitvars[z])+longer.split(splitvars[z]).slice(k,k+1).join(splitvars[z])+longer.split(splitvars[z]).slice(k+1).join(splitvars[z])
		
		if (cutwhole==shorter)
		{
			mimsmatchtype=1
			var sliced=cutstr.split(splitvars[z]).slice(0,k).join(splitvars[z])
			if (sliced.length>0) {mismatchpart=z==0?k:sliced.length}	
			//console.log(mismatchpart);
		}
		
		var cutstr=longer.split(splitvars[z])
    	cutstr.splice(k,1)
    	cutstr=cutstr.join(splitvars[z])
		if (cutstr==shorter && cutstr.length>2 ) 
		{
			mimsmatchtype=2
			var sliced=cutstr.split(splitvars[z]).slice(0,k).join(splitvars[z])
			mismatchpart=z==0?k:sliced.length+5
			//console.log("AFT"+mismatchpart);
		}
		
else if (mismatchpart=="")
		{
		var cutstrshort=shorter.split(splitvars[z])
    	cutstrshort.splice(k,1)
    	cutstrshort=cutstrshort.join(splitvars[z])
    	if (cutstr==cutstrshort && cutstrshort.length>2) 
    	{
    		mimsmatchtype=3
    		var sliced=cutstrshort.split(splitvars[z]).slice(0,k).join(splitvars[z])
    		//console.log("IN"+sliced);
    		if (sliced.length>0) {mismatchpart=z==0?k:sliced.length+5}
    		//console.log(mismatchpart);
    	} 
		}
		}
		}
		
	
	//console.log("part="+mismatchpart);
	return [mimsmatchtype,mismatchpart]
}


function encodetxt(str)
{
	var encoded=str.replace(/[\u2018]/g, "'");
	encoded=encoded.replace(/[\u2019]/g, "'");
	encoded=encoded.replace(/[\u201C]/g, '"');
	encoded=encoded.replace(/[\u201D]/g, '"');
	encoded=encoded.replace(/[\u2013]/g, '-');
	encoded=encoded.replace(/[\u2026]/g, '...');
	encoded=encoded.replace(/[\u00A0]/g, ' ');
	encoded=encoded.replace(/[\u0009]/g, ' ');
	encoded=encoded.replace(/[\s]{2}/g, ' ');
	encoded=encoded.replace(/[\u200B]/g, '');
	return encoded
}



function clearhigh()
{
			window.top.$('.highlightTextarea-highlighter').remove()
			window.top.$('#pastetxt').highlightTextarea('destroy')
			window.top.$('#pastetxt').val("")
			window.top.$('#pastetxtCodes').val("")
			window.top.$('.restable').remove()
			window.top.$('.strip-button-text').eq(0).click()
}



	

	

