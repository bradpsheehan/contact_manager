(function() {

var contacts =
    [
      {
        id: 1,
        last_name: "Sheehan",
        first_name: "Brad",
        email: "brad@example.com",
        phone_number: "(303)717-1234",
        created_at: "2013-10-07T22:05:47.976Z",
        updated_at: "2013-10-07T22:05:47.976Z"
      },
      {
        id: 2,
        last_name: "Griesemer",
        first_name: "Alice",
        email: "ag@example.com",
        phone_number: "(123) 123-1234",
        created_at: "2013-10-07T22:06:35.667Z",
        updated_at: "2013-10-07T22:06:35.667Z"
      },
      {
        id: 3,
        last_name: "Sheehan",
        first_name: "Daniel",
        email: "dan@example.com",
        phone_number: "(303) 123-456",
        created_at: "2013-10-15T21:09:07.059Z",
        updated_at: "2013-10-15T21:09:07.059Z"
      },
      {
        id: 4,
        last_name: "Sheehan",
        first_name: "Brian",
        email: "brian@example.com",
        phone_number: "(303) 123-4567",
        created_at: "2013-10-16T15:26:06.953Z",
        updated_at: "2013-10-16T15:26:06.953Z"
      },
      {
        id: 5,
        last_name: "Horne",
        first_name: "Ben",
        email: "ben@example.com",
        phone_number: "(720)123-4567",
        created_at: "2013-10-16T15:26:26.280Z",
        updated_at: "2013-10-16T15:26:26.280Z"
      },
      {
        id: 6,
        last_name: "Orenstein",
        first_name: "Ben",
        email: "beno@example.com",
        phone_number: "(970) 123-1234",
        created_at: "2013-10-16T16:19:21.672Z",
        updated_at: "2013-10-16T16:19:21.672Z"
      },
      {
        id: 7,
        last_name: "VanPelt",
        first_name: "Bradlee",
        email: "bradlee@example.com",
        phone_number: "(970)567-7890",
        created_at: "2013-10-16T16:20:44.545Z",
        updated_at: "2013-10-16T16:20:44.545Z"
      }
    ];

    // define the DOM elements and common variables you'll need
    var searchForm = document.getElementById("search-form"),
      searchField = document.getElementById("q"),
      getAllButton = document.getElementById("get-all"),
      count = contacts.length
      target = document.getElementById("output");

    // define address book methods
    var addr = {

        search : function(event) {

            // save the input value, contacts length and i to variables
            var searchValue = searchField.value,
            i;

            // stop the default behavior
            event.preventDefault();

            //clear the target area just in case there's something in it.
            target.innerHTML = "";

            //check the count
            if(count > 0 && searchValue !== "") {

                //loop through the contacts
                for(i = 0; i < count; i++) {

                    // look through the first name value to see if it contains the searchTerm string
                    var obj = contacts[i],
                        isItFound = obj.first_name.indexOf(searchValue);

                    // anything other than -1 means we found a match
                    if(isItFound !== -1) {
                        target.innerHTML += '<p>' + obj.first_name + ', <a href="mailto:' + obj.email + '">' + obj.email +'</a><p>';
                    } //end if

                } //end for

            } //end count check
        },
        getAllContacts : function() {
            var i;

            //clear the target area just in case there's something in it.
            target.innerHTML = ""

            //check the count
            if(count > 0) {

                // loop through the contacts
                for(i = 0; i < count; i++) {

                    var obj = contacts[i];

                    target.innerHTML += '<p>' + obj.first_name + ', <a href="mailto:' + obj.email + '">' + obj.email +'</a><p>'

                } //end for

            } //end count check

        },

    } //end addr object

    // activate event listeners
    searchField.addEventListener("keyup", addr.search, false)
    getAllButton.addEventListener("click", addr.getAllContacts, false)
    searchForm.addEventListener("submit", addr.search, false)

})(); //end anonymous function
