function regressive(i) {
    console.log(i);
    if ( i <= 1) { //caso base
        return;
    } else {       //caso recursivo
        regressive(i-1);
    }
}
regressive(5);