function addSeparators() {
    var number1 = loader.engine.document.getElementById(116038510).getProperty('value.value'); // - formula field or number field
    loader.engine.document.getElementById(116038510).setValue(({"value": number1.toLocaleString('de-DE')})); //- short text field
    };
    window.onclick = addSeparators;