contactsApp.contact = function (firstName, lastName, phone, streetAddress, city) {

    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        streetAddress: streetAddress,
        city: city,
        address: streetAddress + ', ' + city
    }
};

contactsApp.contactE = function (firstName, lastName, phone, streetAddress, city, index) {

    return {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        streetAddress: streetAddress,
        city: city,
        address: streetAddress + ', ' + city,
        rowIndex: index
    }
};