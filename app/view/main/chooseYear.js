Ext.define('MyApp.view.main.chooseYear', {
    extend: 'Ext.grid.Panel',
    xtype: 'chooseyear',

    requires: 
    [
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'Ext.grid.plugin.CellEditing'
    ],

    //controller: 'main',
    viewModel: 'dairyview',

    bind: 
    {
        store : '{yearStore}'
    },

    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 1,
        pluginId: 'cellediting'
    }],

    columns : [
        {
            text: 'Year',
            dataIndex: 'year',
            height : 65

        }
    ]
});