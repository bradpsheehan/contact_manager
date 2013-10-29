$.fn.contactSearcher = function(options) {

    var defaults = {
        path: "/contacts.json",
        outputId: "#output"
    };

    var options = $.extend(defaults, options);

    return this.each(function() {

        $(document).ready( function() {

            var addressbook = {

                search : function(event) {

                    $.getJSON(options.path, function(data){

                        var searchValue = $('#q').val(),
                            contacts = data,
                            contacts_count = contacts.length;

                        $(options.outputId).empty();

                        if(contacts_count > 0 && searchValue !== "") {

                            $.each(contacts, function(i, contact) {

                                var findByFirstName = contact.first_name.indexOf(searchValue);
                                var findByLastName = contact.last_name.indexOf(searchValue);

                                if( findByFirstName !== -1 || findByLastName !== -1) {

                                    var source = $('#output-template').html();
                                    var template = Handlebars.compile(source);
                                    var context = {first_name: contact.first_name, last_name: contact.last_name, email: contact.email}
                                    var html = template(context);
                                    $('#output').append(html);

                                } //end if

                            }); // end each

                        } // end if

                    }); // end ajax call
                },

                getAllContacts : function(event) {

                    event.preventDefault();

                    $.getJSON(options.path, function(data){

                        var contacts = data,
                            contacts_count = contacts.length;

                        $(options.outputId).empty();

                        if(contacts_count > 0) {

                            $.each(contacts, function(i, contact) {

                                var source = $('#output-template').html();
                                var template = Handlebars.compile(source);
                                var context = {first_name: contact.first_name, last_name: contact.last_name, email: contact.email}
                                var html = template(context);
                                $('#output').append(html);

                            }); // end each

                        } // end if

                    }); // end ajax call
                }
            }; // end addressbook obj

            $("#q").keyup(addressbook.search).focus(function () {

                    $(this).parent().addClass("active");

                }).blur(function () {

                    $(this).parent().removeClass("active");

            });

            function onChange() {
              $('#q').bind('webkitspeechchange',function() {
                addressbook.search;
              });
            };

            $('#q').bind('webkitspeechchange',function() {
                addressbook.search;
            });

            $("#search-form").hover(function () {
                $(this).addClass("hovering");

            }, function () {

                $(this).removeClass("hovering");

            }).submit(addressbook.search);

            $("#get-all").click(addressbook.getAllContacts);

        });

    }); // end loop

}; // end plugin
