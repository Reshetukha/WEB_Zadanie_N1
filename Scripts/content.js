/* спрячем не сформированые элементы */
$("#myTable").hide();
$("#mainButton").hide();

/* Кол-во Груп выбираемых параметров */
var kolvoParam;

/* Место, для хранения массива массивов выбраных данных */
var data = [];

var quizStepOne = () => {
    btnGroup = $("#quiz").children()[1].children;
    for ( let i = 0; i < btnGroup.length; i++){
        if ( btnGroup[i].children[0].checked ){
            kolvoParam = i + 1;
            /*console.log(kolvoParam);*/
        }
    }
    $( "#quiz" ).hide(250);
    $( "#quiz" ).empty();
}

var quizStepTwo = () => {
    let appendingString = "";
    /* Adding some text */
    appendingString += '<div id="labelWrapper"><label>Choose your destiny!!!</label></div>';
    /*Opening Button Group wrapper */
    appendingString += '<div id="groupWrapper">';
    for ( let i = 0; i < kolvoParam; i++){
        appendingString += '<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary"><input type="checkbox"autocomplete="off"> Checkbox 1</label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Checkbox 2</label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Checkbox 3</label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Checkbox 4</label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Checkbox 5</label><label class="btn btn-primary"><input type="checkbox" autocomplete="off"> Checkbox 6</label></div>';
    }
    /*Closing Button Group wrapper */
    appendingString += '</div>';
    /* Adding button */
    appendingString += '<div id="buttonWrapper"><button onclick="unlock()" type="button" class="btn btn-primary">Continue</button></div>';
    $( "#quiz" ).append(appendingString);
    $( "#quiz" ).show(250);
}

/* show Main Button */
var unlock = () => {
    $("#mainButton").show(300);
}

/* forming object variety */
var formTable = () => {
    /* get button groups scope */
    var grwr = $("#groupWrapper");
    /* place for data */
    data = [];
    /* getting Data arrays */
    for ( let i = 0; i < kolvoParam; i++ ){
        let temp = [];
        for ( let j = 0; j < 6; j++ ){
            if ( grwr[0].children[i].children[j].children[0].checked ){
                temp[temp.length] = grwr[0].children[i].children[j].textContent;
            }
        }
        data[data.length] = temp;
    }
    
    /* Fixing empty Data     */
    for ( let i = 0; i < data.length; i++) {
	if ( data[i].length == 0 ){
		data[i] = " ";
    }
}
    
    
    console.log(data);
}
var objects = [];
/* BE AWARE --- ARMAGEDDON */
var formObjects = () => {
    objects = [];
    for ( let q = 0; q < data[0].length; q++ ){
        let tempobject = [];
        if ( data[1] != undefined ){
            for ( let w = 0; w < data[1].length; w++ ){
                if ( data[2] != undefined ){
                    for ( let e = 0; e < data[2].length; e++ ){
                        if ( data[3] != undefined ){
                            for ( let r = 0; r < data[3].length; r++ ){
                                if ( data[4] != undefined ){
                                    for ( let t = 0; t < data[4].length; t++ ){
                                        if ( data[5] != undefined ){
                                            for ( let y = 0; y < data[5].length; y++ ){
                                                tempobject[tempobject.length] = data[0][q];
                                                tempobject[tempobject.length] = data[1][w];
                                                tempobject[tempobject.length] = data[2][e];
                                                tempobject[tempobject.length] = data[3][r];
                                                tempobject[tempobject.length] = data[4][t];
                                                tempobject[tempobject.length] = data[5][y];
                                                objects[objects.length] = tempobject;
                                                tempobject = [];
                                            }
                                        } else {
                                            tempobject[tempobject.length] = data[0][q];
                                            tempobject[tempobject.length] = data[1][w];
                                            tempobject[tempobject.length] = data[2][e];
                                            tempobject[tempobject.length] = data[3][r];
                                            tempobject[tempobject.length] = data[4][t];
                                            objects[objects.length] = tempobject;
                                            tempobject = [];
                                        }
                                    }
                                } else {
                                    tempobject[tempobject.length] = data[0][q];
                                    tempobject[tempobject.length] = data[1][w];
                                    tempobject[tempobject.length] = data[2][e];
                                    tempobject[tempobject.length] = data[3][r];
                                    objects[objects.length] = tempobject;
                                    tempobject = [];
                                }
                            }
                        } else {
                            tempobject[tempobject.length] = data[0][q];
                            tempobject[tempobject.length] = data[1][w];
                            tempobject[tempobject.length] = data[2][e];
                            objects[objects.length] = tempobject;
                            tempobject = [];
                        }
                    }
                } else {
                    tempobject[tempobject.length] = data[0][q];
                    tempobject[tempobject.length] = data[1][w];
                    objects[objects.length] = tempobject;
                    tempobject = [];
                }
            }
        } else {
            tempobject[tempobject.length] = data[0][q];
            objects[objects.length] = tempobject;
            tempobject = [];
        }
    }
}

/* Showing objects in Table */
var showData = () => {
    
    /* forming header */
    $("#trAppended").empty();
    let header;
    header += "<th>#</th>";
    for ( let i = 0; i < kolvoParam; i++ ){
        header += "<th>";
        header += i + 1;
        header += "</th>";
    }
    $("#trAppended").append(header);
    
    /* forming table */
    $("#tbAppended").empty();
    let tbAppend;
    for ( let i = 0; i < objects.length; i++ ){
        /* add number */
        tbAppend += '<tr><th scope="row">' + ( i + 1 ) + '</th>';
        for ( let j = 0; j < objects[0].length; j++ ){
            tbAppend += '<td>' + objects[i][j] + '</td>';
        }
    }
    $("#tbAppended").append(tbAppend);
    
    $("#myTable").show();
}






/* $("#quiz").children()[1].children[0].children[0].checked */
/* var abc = $("#firstRadio"); */
/* abc[0].children[0].children[0].checked */