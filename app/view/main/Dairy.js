Ext.define('MyApp.view.main.Dairy', {
    extend: 'Ext.grid.Panel',
    xtype: 'dairy',

    requires: 
    [
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'Ext.grid.plugin.CellEditing'
    ],

    controller: 'main',
    viewModel: 'dairyview',

    plugins: 
    [{
        ptype: 'cellediting',
        clicksToEdit: 1,
        pluginId: 'cellediting'
    }],

    bind: 
    {
        store : '{dairyStore}'
    },

    columns: 
    [
    {
        text: 'Record',
        flex : 1,

        columns: 
        [  
        {
                xtype: 'rownumberer'
        },
        {
            text: 'Start date',
            dataIndex: 'sdate',
            id : 'd1',
            flex: 1,
            dateFormat: 'm-d-Y',
           editor:{
            xtype: 'datefield',
           },
            width: 75,
        }, 
        {
            text: 'End date',
            dataIndex: 'edate',
            id : 'd2',
            flex: 1,    
            dateFormat: 'm-d-Y',
            editor:{
                xtype: 'datefield',
               },
            width: 80,
           // renderer: 'renderChange'
        }, 
        {
            text: 'Cost Month',
            dataIndex: 'cmonth',
            flex : 1,
            editor: true,

            width: 100,
            sortable: true,
           // renderer: 'renderPercent'
        }
        // {
        //     xtype:'actioncolumn',
        //     width:50,
        //     items: 
        //     [
        //         {
        //         iconCls: 'x-fa fa-check',
        //         tooltip: 'Edit',
        //         handler: function(grid, rowIndex, colIndex) 
        //             {
        //                 var rec = grid.getStore().getAt(rowIndex);
        //                 alert("Edit " + rec.get('year'));
        //             }
        //         }
        //     ]
        // }
        ]
    }],
    tbar: [
        {
            text: 'save',
            handler: 'onSave'
        }
    ]
});