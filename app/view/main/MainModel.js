/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('MyApp.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    formulas: 
        {
            //used to enable/disable form buttons
            dirty: 
            {
                bind: 
                {
                    bindTo: '{currentBook}',
                    deep: true
                },
                get: function(data) 
                {
                    return data ? data.dirty : false;
                }
            } ,
            // used to enable/disable grid buttons
            storeDirty: 
            {
                //bind is not used for data but for triggering the get
                bind: 
                {
                    bindTo: '{currentGridBook}',
                    deep: true
                },
                get: function() 
                {
                    return this.getStore('bookRecord').isDirty();
                },
              
            },
            
        },
    stores: 
        {
            bookRecord : 
            {
                data :
                        [
                            { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111", id : 1 },
                            { name: 'Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222", id : 2 },
                            { name: 'Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333", id : 3 },
                            { name: 'Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444", id : 4 }
                        ],
                        isDirty: function() 
                        {
                            var dirty = this.getModifiedRecords().length;
                            dirty = dirty || this.getNewRecords().length;
                            dirty = dirty || this.getRemovedRecords().length;
                            return !!dirty;
                        }
            },
        
            albumRecord: 
            {
                fields: ['id', 'name', 'email'],
                proxy: 
                {
                    type: 'memory',
                    // url : 'https://jsonplaceholder.typicode.com/albums',
                },
                autoLoad: true
            },
        }

    //TODO - add data, formulas and/or methods to support your view
});

// var store = Ext.create('Ext.data.Store', {
   
// });
// store.load();