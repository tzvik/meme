'use strict'

// var image = [{
//     id: 1,
//     url: 'img/popo.jpg',
//     keywords: ['happy', 'crazy', 'sad', 'animal']
// }]

var gKeywords = {
    'happy': 12,
    'funny puk': 1
}

var gImgs = [{
    id: 1,
    url: 'img/1.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 2,
    url: 'img/2.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 3,
    url: 'img/3.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 4,
    url: 'img/4.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 5,
    url: 'img/5.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 6,
    url: 'img/6.png',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 7,
    url: 'img/7.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 8,
    url: 'img/8.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 9,
    url: 'img/9.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 10,
    url: 'img/10.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 11,
    url: 'img/11.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 12,
    url: 'img/12.jfif',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},
{
    id: 13,
    url: 'img/13.png',
    keywords: ['Poki','Merageshi','Muki','Ozmati']
},

];


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [{
        txt: 'תכתוב משו',
        size: 40,
        align: 'left',
        color: 'white',
        strokeColor: 'black',
        font: 'Suez One',
        pos: {
            x: 125,
            y: 125,
        }
    },
     ]
}

var gMoveY = gMeme.lines[gMeme.selectedLineIdx].pos.y

// CREATE

function addLine() {
    const line = createLine()
    gMeme.lines.push(line)
}


function createLine() {
   
    if (!gMeme.lines.length) {
        return {
            txt: 'Type here',
            size: 40,
            align: 'left',
            color: 'white',
            strokeColor: 'black',
            font: 'Suez One',
            pos: {
                x: 125,
                y: 125,
            }
        }
    } if (gMeme.lines.length === 1) {
        return {
            txt: 'עוד משו',
            size: 40,
            align: 'left',
            color: 'white',
            strokeColor: 'black',
            font: 'Suez One',
            pos: {
                x: 125,
                y: 415,
            }
        }
    } if (gMeme.lines.length > 1 ) {
        gMoveY = gMoveY + 30
        return {
            txt: 'ככה',
            size: 40,
            align: 'left',
            color: 'white',
            strokeColor: 'black',
            font: 'Suez One',
            pos: {
                x: 125,
                y: gMoveY,
            }
        }
    }

}



function getImageById(imgId) {
    var img = gImgs.find(function (img) {
        return imgId === img.id
    })
    return img
}




function getImgs() {
    return gImgs
}

function imageClicked(imgId) {
    gMeme.selectedImgId = +imgId;
   
    // return gMeme.selectedImgId
}


function moveText(diff) {
    var idx = gMeme.selectedLineIdx;
    gMeme.lines[idx].pos.y += diff

}

// Update gMeme with user Input 

function typedLine(txtInp) {
    var idx = gMeme.selectedLineIdx
    gMeme.lines[idx].txt = txtInp;

}
function changeFontSize(fontSize) {
    var idx = gMeme.selectedLineIdx
    gMeme.lines[idx].size += fontSize;
}

function sColorChange(color) {
    var idx = gMeme.selectedLineIdx
    var strokeColor = color
    gMeme.lines[idx].strokeColor = strokeColor;

}
function fColorChange(fcolor) {
    var idx = gMeme.selectedLineIdx
    var color = fcolor
    gMeme.lines[idx].color = color

}

function alignChange (align) {
    var idx = gMeme.selectedLineIdx
    var alignText = align
    gMeme.lines[idx].align = alignText

}


function fontSelect(font) {
    const idx = gMeme.selectedLineIdx
    gMeme.lines[idx].font = font
}

function deleteLine() {
    var idx = gMeme.selectedLineIdx
    if (gMeme.lines.length - 1 > 0) {
        changeSelectedLineIdx(-1)
        gMeme.lines.splice(idx, 1)
     }
}

function getLinePos(idx) {
    return gMeme.lines[idx].pos
}

function getFontSize() {
    var idx = gMeme.selectedLineIdx
    return gMeme.lines[idx].size
}


// get things from gMeme

// function getLineText(idx) {
//     var txt = gMeme.lines[idx].txt
//     return txt
// }


// function getFontColor() {
//     var idx = gMeme.selectedLineIdx
//     return gMeme.lines[idx].color
// }
// function getFont() {
//     var idx = gMeme.selectedLineIdx
//     return gMeme.lines[idx].font
// }

// function getStrokColor() {
//     var idx = gMeme.selectedLineIdx
//     return gMeme.lines[idx].strokeColor
// }


// function getAlignChange() {
//     var idx = gMeme.selectedLineIdx
//     return gMeme.lines[idx].align
// }


function switchLine() {
    if (gMeme.lines.length === 1 || gMeme.selectedLineIdx === gMeme.lines.length-1) {
        gMeme.selectedLineIdx = 0
        return
    }
    if (gMeme.selectedLineIdx < gMeme.lines.length-1) {
        gMeme.selectedLineIdx++

        return
    }
}

function resetSelectedLine () {
    gMeme.selectedLineIdx = 0
}

function changeSelectedLineIdx(diff) {
   gMeme.selectedLineIdx += diff
}
function getSelectedLine (){
    var selectedLine = gMeme.selectedLineIdx ;
    return selectedLine
}

function removeSelectedMark(){
    gMeme.selectedLineIdx = -1
}

// READ
function getMeme() {
    return gMeme
}