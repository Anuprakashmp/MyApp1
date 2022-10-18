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

            infiniteRecord :
            {
                fields: [
                    'ID Nation', 'Nation', 'ID Year', 'Year', 'Population', 'Slug Nation',
                   ],
            
                    //leadingBufferZone: 100,
                    pageSize: 50,
                    remoteSort: true,
                    autoLoad: true,
                    proxy: {
                        type: 'rest',  // 'ajax' also works
                        url: 'https://datausa.io/api/data?drilldowns=Nation&measures=Population',
                        cors : true,
                        useDefaultXhrHeader: false,
                        
                        reader: {     // interprets data to be loaded to ext.data.model
                            rootProperty: 'data',
                            //totalProperty: 'totalCount'
                        }
                    }
            },
            ZigZag : 
            {
                data :
                        [
                            { fname: 'Jean Luc',  phone: "+91-111-1111", status: true, objType: 1},
                            { fname: 'Worf',    phone: "+01-222-2222",  status: false, objType: 3},
                            { fname: 'Deanna',    phone: "+91-333-3333", status: true, objType: 1},
                            { fname: 'Data',    phone: "+91-444-4444",  status: false, objType: 3}
                        ],
            }
        }

    //TODO - add data, formulas and/or methods to support your view
});