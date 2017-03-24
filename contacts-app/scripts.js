contactsApp.scripts = function() {

    return {
        newContact: function () {
            if (document.getElementById('firstName').value && document.getElementById('lastName').value &&
                document.getElementById(('phone')).value && document.getElementById('address').value &&
                document.getElementById('city').value) {

                contactsApp.contactStorage.saveContact(contactsApp.scripts.createContact());
                contactsApp.scripts.updateContacts();

                var elements = document.getElementsByTagName('input');
                for (var i = 0; i < elements.length; i++) {
                    elements[i].value = '';
                }
            }
            else {
                alert('Fill all fields!');
            }
        },

        createContact: function () {
            return contactsApp.contact(
                document.getElementById('firstName').value,
                document.getElementById('lastName').value,
                document.getElementById(('phone')).value,
                document.getElementById('address').value,
                document.getElementById('city').value
            );
        },

        updateContacts: function () {
            var contacts = contactsApp.contactStorage.getContacts();
            var rows = '';
            for (var i = 0; i < contacts.length; i++) {
                var googleMaps = 'https://www.google.com/maps?q=' + contacts[i].address;
                rows += '<tr>' +
                    '<td>' + contacts[i].firstName + '</td>' +
                    '<td>' + contacts[i].lastName + '</td>' +
                    '<td>' + contacts[i].phone + '</td>' +
                    '<td>' + '<a target="_blank" href="' + googleMaps + '">' + contacts[i].address + '</a></td>' +
                    '<td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Edit</button>' +
                    '<div class="break"></div>' +
                    '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored" ' +
                    'onclick="contactsApp.scripts.deleteContact(this.parentNode.parentNode.rowIndex)">Delete</button></td>' +
                    '</tr>';
            }
            document.getElementById('tableBody').innerHTML = rows;
        },

        deleteContact: function (index) {
            contactsApp.contactStorage.deleteAllContacts();
            var table = document.getElementById('contactsTable');

            table.deleteRow(index);

            for (var i = 1; i < table.rows.length; i++) {
                var firstName = table.rows[i].cells[0].innerHTML;
                var lastName = table.rows[i].cells[1].innerHTML;
                var phone = table.rows[i].cells[2].innerHTML;
                var address = contactsApp.scripts.clearLinkFromAddress(table.rows[i].cells[3].innerHTML)
                var street = address.split(',')[0];
                var city = address.split(' ')[1];

                contactsApp.contactStorage.saveContact(contactsApp.contact(firstName, lastName, phone, street, city));
            }
        },

        clearLinkFromAddress: function (givenAddress) {
            givenAddress = givenAddress.split('>')[1];
            givenAddress = givenAddress.split('<')[0];

            return givenAddress;
        }
    }
}();