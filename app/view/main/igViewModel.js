
Ext.define('MyApp.view.main.igViewModel', {
    extend: 'Ext.data.BufferedStore',
    alias : 'store.igvm',
    fields: [
        'firstName', 'lastName',
        {
            name: 'id',
            type: 'int'
        }],

    leadingBufferZone: 50,
    pageSize: 50,
    remoteSort: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'https://llbzr8dkzl.execute-api.us-east-1.amazonaws.com/production/user',
        reader: {
            rootProperty: 'users',
            totalProperty: 'totalCount'
        }
    }
});