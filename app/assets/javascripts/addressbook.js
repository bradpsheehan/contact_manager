function getHTTPObject() {

    var xhr;

    if (window.XMLHttpRequest) { //check for support

         xhr = new XMLHttpRequest();

    } else if (window.ACtiveXObject) { //check for the IE 6 Ajax

        xhr = new ACtiveXObject("Msxm12.XMLHTTP");
    }

    return xhr;

}

function ajaxCall(dataUrl, outputElement, callback) {

    var request = getHTTPObject();

    outputElement.innerHTML = "Loading..."

    request.onreadystatechange = function() {

        if ( request.readyState === 4 && request.status === 200 ) {

            var contacts = JSON.parse(request.responseText);

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

            ajaxCall('/contacts.json', output, function(data){

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

            ajaxCall('/contacts.json', output, function(data) {

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

        setActiveSection : function() {
            this.parentNode.setAttribute("class", "active");
        },
        removeActiveSection : function() {
            this.parentNode.removeAttribute("class");
        },
        addHoverClass : function() {
            searchForm.setAttribute("class", "hovering");
        },
        removeHoverClass : function() {
            searchForm.removeAttribute("class")
        }

    } //end addr object

    searchField.addEventListener("keyup", addr.search, false);
    searchField.addEventListener("focus", addr.setActiveSection, false);
    searchField.addEventListener("blur", addr.removeActiveSection, false);
    getAllButton.addEventListener("click", addr.getAllContacts, false);
    searchForm.addEventListener("mouseover", addr.addHoverClass, false);
    searchForm.addEventListener("mouseout", addr.removeHoverClass, false);
    searchForm.addEventListener("submit", addr.search, false);

})(); //end anonymous function
