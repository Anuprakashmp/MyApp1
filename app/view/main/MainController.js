/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // init: function(){
    //     this.loadAlbums();
    // },

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('DO U WANT TO EDIT', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // }

    onPersonSelect: function (grid, person) 
    {
        var vm = this.getViewModel();
        vm.set('currentBook', person);
        // vm.set('path', value)  syntax
        //this.setCurrentPerson(person); was not working
    },

    onFormButton: function(btn) {
        var person = this.getViewModel().get('currentBook'), action = btn.getItemId();
        if (person && person.isModel) {
            if ('reject' === action) {
                person.reject();
            }
            if ('commit' === action) {
                person.commit();
                person.reject();
            }
        }
    },
    // for grid
    onGridButton: function(btn) {
        var action = btn.getItemId(),
            vm = this.getViewModel(),
            store = vm.getStore('bookRecord'),
            record;
        if ('add' === action) {
            record = store.insert(0, {})[0];
            vm.set('currentGridBook', record);
        }
        if ('reject' === action) {
            store.rejectChanges();
        }
        if ('commit' === action) {
            store.commitChanges();
            record = vm.get('currentGridBook');
            record.commit();
            record.reject();
        }
    },

    afterRender : function()
        {
            Ext.Ajax.request
            ({
                url: 'https://jsonplaceholder.typicode.com/albums',
                method: 'GET',
                setTimeout : 6000,
                scope : this,
                success: function (response) 
                {
                    let text = Ext.decode(response.responseText);
                    //console.dir(text);
                    var vm = this.getViewModel();
                    vm.getStore('albumRecord').add(text)   
                },
                failure: function (response)
                {
                    Ext.Msg.alert('Request Failed');
                }

            })
        }


});
