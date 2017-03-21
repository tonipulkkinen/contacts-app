contactsApp.contactStorage = (function () {

    var localStorageKey = 'ca-contacts';

    if (!localStorage.getItem(localStorageKey)) {
        localStorage.setItem(localStorageKey, JSON.stringify([]));
    }

    function getLocalStorageData() {
        var storedData = localStorage.getItem(localStorageKey);
        return JSON.parse(storedData);
    }

    function setLocalStorageData(incomingData) {
        var contacts = JSON.stringify(incomingData);
        return localStorage.setItem(localStorageKey, contacts)
    }

    return {
        saveContact: function (contact) {
            var contacts = getLocalStorageData();
            contacts.push(contact);
            setLocalStorageData(contacts);
        },
        getContacts: function () {
            return getLocalStorageData();
        }
    }
})();