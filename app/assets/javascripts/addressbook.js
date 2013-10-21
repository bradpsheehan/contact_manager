(function(){

    var addressbook = {

        search : function(event) {

            $.getJSON('/contacts.json', function(data){

                var searchValue = $('#q').val();
                    contacts = data,
                    contacts_count = contacts.length;

                $('#output').empty();

                if(contacts_count > 0 && searchValue !== "") {

                    $.each(contacts, function(i, contact) {

                        var findByFirstName = contact.first_name.indexOf(searchValue);
                        var findByLastName = contact.last_name.indexOf(searchValue);

                        if( findByFirstName !== -1 || findByLastName !== -1) {

                            $('#output').append('<p>' + contact.first_name + ' ' + contact.last_name + ', <a href="mailto:' + contact.email + '">'+ contact.email +'</a><p>').hide().fadeIn();

                        } //end if

                    }); // end each

                } // end if

            }); // end ajax call
        },

        getAllContacts : function(event) {

            event.preventDefault();

            $.getJSON('/contacts.json', function(data){

                var contacts = data,
                    contacts_count = contacts.length;

                $('#output').empty();

                if(contacts_count > 0) {

                    $.each(contacts, function(i, contact) {

                        $('#output').append('<p>' + contact.first_name + ' ' + contact.last_name + ', <a href="mailto:' + contact.email + '">'+ contact.email +'</a><p>').hide().fadeIn();

                    }); // end each

                } // end if

            }); // end ajax call
        }
    } // end addressbook obj

    $("#q").keyup(addressbook.search).focus(function () {

            $(this).parent().addClass("active");

        }).blur(function () {

            $(this).parent().removeClass("active");

        });

    $("#search-form").hover(function () {
        $(this).addClass("hovering");

    }, function () {

        $(this).removeClass("hovering");

    }).submit(addressbook.search);

    $("#get-all").click(addressbook.getAllContacts);


})(); // end anon function
