contactsApp.contactStorage = (function () {

    var contactsKey = 'ca-contacts';
    var editKey = 'ca-edit';

    if (!localStorage.getItem(contactsKey)) {
        localStorage.setItem(contactsKey, JSON.stringify([]));
    }

    function getLocalStorageData() {
        var storedData = localStorage.getItem(contactsKey);
        return JSON.parse(storedData);
    }

    function setLocalStorageData(incomingData) {
        var contacts = JSON.stringify(incomingData);
        return localStorage.setItem(contactsKey, contacts)
    }

    function getEdit() {
        var storedData = localStorage.getItem(editKey);
        return JSON.parse(storedData);
    }

    function setEdit(givenEdit) {
        var edit = JSON.stringify(givenEdit);
        return localStorage.setItem(editKey, edit)
    }

    return {
        saveContact: function (contact) {
            var contacts = getLocalStorageData();
            contacts.push(contact);
            setLocalStorageData(contacts);
        },
        getContacts: function () {
            return getLocalStorageData();
        },
        deleteAllContacts: function () {
            setLocalStorageData([]);
        },
        saveEdit: function (contact) {
            setEdit(contact);
        },
        loadEdit: function () {
            return getEdit();
        },
        finishEdit: function (contact, index) {
            var contacts = getLocalStorageData();
            index -= 1;
            contacts[index] = contact;
            setLocalStorageData(contacts);
        }
    }
})();