function EditEuro() {
    var Euro={prijs2};
    
    InputEuro = document.euroconv.Euro.value;
    FixedEuro = parseFloat(InputEuro.replace
    (',',g, '.'));
    document.euroconv.Mark.value = cent(parseFloat
    (FixedEuro*KursMark*100)/100);
    }
    
    
    // hier probeer ik de output op het scherm weer te
    //geven
    // document.writeln("Input: ",InputEuro,"<br>");
    
    //weergeven van resultaat
    // document.writeln("Output: ", Euro, "<br>");