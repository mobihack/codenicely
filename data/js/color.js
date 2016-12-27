var palettes=['material','flat'];

function reactiveColors(group,colortype) {
    var colorBlock=$('#colorBlock');
    var columnHeader=('<div class="columns">'),
        columnFooter=('</div>');
    var colorGroup=group;

    if(colortype==null)
        var colortype='material';

    $.getJSON('data/json/'+colortype+'.json', function(data) {

        var i=1,htmlData='<div class="fm_folderlist">';

        if(colortype=='material')
            var colors=data[colorGroup];
        else if(colortype=='flat')
            var colors=data;


        colors.forEach(function (theColor){

        if(i%4==1) {
            htmlData = htmlData + columnHeader;
        }
        if(colortype=='material')
            var color=theColor.color;
        else if(colortype=='flat')
            var color=theColor.hex;

            if(theColor.name=='back'){
                colorID='back';
            }else if(theColor.paletteid==null){
            colorID='noID_'+i;
        }
        else{
            colorID=theColor.paletteid;
        }

        var textColor;

        if(theColor.light==0)
            textColor='colorText-black';
        else
            textColor='colorText-white';


        htmlData = htmlData+('<div id="'+colorID+'" onclick="changeColor(\''+colorID+'\')" class="column is-3 is-1by1 has-text-centered colorBlock" style="background-color: '+color+'">' +
            '<span class="is-1by1 '+textColor+'">'+theColor.name+'</span>' +
            '</div>');

        //folder.appendTo(fileList);


        if (i % 4 == 0) {
            htmlData = htmlData+columnFooter;
        }
        else if(i==colors.length){
            htmlData = htmlData+columnFooter;
        }
        console.log(theColor);
        i++;
        });
        colorBlock.html(htmlData);
    });


}

reactiveColors('main');

function changePalette(palette) {
    reactiveColors('main',palette);


}

function changeColor(colorId) {
    if(colorId==='back'){
        reactiveColors('main');
    } else if(colorId!=='undefined')
        reactiveColors(colorId.replace('color_','sub_'));
}