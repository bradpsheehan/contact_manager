// Standard Ajax xhr function

function getHTTPObject() {

    var xhr;

    if (window.XMLHttpRequest) { //check for support

        // if it's supported use it because it's better
        xhr = new XMLHttpRequest();

    } else if (window.ACtiveXObject) { //chec for the IE 6 Ajax

        //save it to the xhr variable
        xhr = new ACtiveXObject("Msxm12.XMLHTTP");
    }

    return xhr;

}

// define the Ajax call

function ajaxCall(dataUrl, outputElement, callback) {

    var request = getHTTPObject();

    outputElement.innerHTML = "Loading..."

    request.onreadystatechange = function() {

        //check to see if the Ajax call went through
        if ( request.readyState === 4 && request.status === 200 ) {

            //save the ajax response to a variable
            var contacts = JSON.parse(request.responseText);

            //make sure the callback is indeed a function before executing it
            if (typeof callback === "function") {

                callback(contacts);

            } //end check

        } //end ajax status check

    } //end on readystatechange

    request.open("GET", dataUrl, true);
    request.send(null)
};


(function() {

    var searchForm   = document.getElementById("search-form"),
        searchField  = document.getElementById("q"),
        getAllButton = document.getElementById("get-all"),
        target       = document.getElementById("output");

    var addr = {

        search : function(event) {

            var output = document.getElementById("output")

            ajaxCall('http://localhost:3000/contacts.json', output, function(data){

                var searchValue = searchField.value,
                    contacts = data,
                    count = contacts.length,
                    i;

                event.preventDefault();

                target.innerHTML = "";

                if(count > 0 && searchValue !== "") {

                    for(i = 0; i < count; i++) {

                        var contact = contacts[i],
                            isItFound = contact.first_name.indexOf(searchValue);

                        // anything other than -1 means we found a match
                        if(isItFound !== -1) {
                            target.innerHTML += '<p>' + contact.first_name + ', <a href="mailto:' + contact.email + '">' + contact.email +'</a><p>';
                        } //end if

                    } //end for loop through contacts

                } //end count check

            });//end ajax call

        },
        getAllContacts : function() {

            var output = document.getElementById("output");

            ajaxCall('http://localhost:3000/contacts.json', output, function(data) {

                var contacts = data,
                    count = contacts.length,
                    i;

                target.innerHTML = ""

                if(count > 0) {

                    for(i = 0; i < count; i++) {

                        var contact = contacts[i];

                        target.innerHTML += '<p>' + contact.first_name + ', <a href="mailto:' + contact.email + '">' + contact.email +'</a><p>'

                    } //end for loop through contacts

                } //end count check

            }); //end ajax call

        },

    } //end addr object

    // activate event listeners
    searchField.addEventListener("keyup", addr.search, false)
    getAllButton.addEventListener("click", addr.getAllContacts, false)
    searchForm.addEventListener("submit", addr.search, false)

})(); //end anonymous function
