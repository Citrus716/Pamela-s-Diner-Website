function validate() {

    var zip = $("#zipcode").val();

    if (!(zip.length ==0 || zip.length == 5)) {
        alert("Length of zip code should be 5");
        return false;
    }

    if (isNaN(zip)) {
        alert("Zip code must be all digits");
        return false;
    }

    return true;
}