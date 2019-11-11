function todaysDate(){
    var today = new Date();
    
    var dd = today.getDate();
    //getDate() method is used to get the day of the month for a specified date
    //accordinf to a local time. The value returned by this method is an interger between 1 and 31
    var mm = today.getMonth()+1;
    //getMonth() method returns the specified date according to a local time, as a zero-based value
    //The value returned is an interger between 0 and 11. 0 corresponds to January, 1 February and so on
    var yyyy = today.getFullYear();
    //getFullYear() method return the specified date according local time. The value returned
    //is a absolute number. For dates between years 1000 and 9999, getFullYear() returns a four-digit number.

    if(dd<10){
        dd='0'+dd;
    }

    if(mm<10){
        mm ='0'+mm;
    }
    today = mm+ '/' + dd +'/'+ yyyy;
    console.log(today);
    today = dd +'/' + mm + '/' + yyyy;
    console.log(today);
}
todaysDate();