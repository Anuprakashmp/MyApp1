Ext.define('MyApp.view.main.dataFromServer', {
    extend: 'Ext.grid.Panel',
    xtype: 'datafromserver',
    requires: 
    [
        'MyApp.view.main.MainModel',
        'MyApp.view.main.MainController',
    ],
    title: 'BOOK TRACK',
    viewModel : 'main',
    controller : 'main',
    bind: 
    {
        store: '{albumRecord}',
    },
    columns: 
    [
            { text: 'User ID',  dataIndex: 'userId' },
            { text: 'Title Num', dataIndex: 'id', flex: 1},
            { text: 'Title', dataIndex: 'title', flex: 1}
    ],
    listeners : 
    {
       afterRender : 'afterRender'
    }
    
});