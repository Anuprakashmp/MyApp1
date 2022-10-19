
Ext.define('MyApp.view.main.infinateGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'ige',

    controller: 'main',

    
    title: 'Infinite Grid',
   
    store: {
        type: 'igvm'
    },
    //scrollable: true,

    columns: [{
        text: 'First Name',
        width: 150,
        dataIndex: 'firstName'
    }, {
        text: 'Last Name',
        width: 150,
        dataIndex: 'lastName'
    }, {
        text: 'Id',
        flex : 1,
        width: 50,
        dataIndex: 'id',
        filter: {
            type: 'number'
        }
    }
]
});