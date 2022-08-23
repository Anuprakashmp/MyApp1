/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    requires: 
    [
        'MyApp.view.main.MainModel',
        'MyApp.view.main.MainController',
        'Ext.grid.plugin.CellEditing'
    ],
    title: 'BOOK TRACK',
    // store: {
    //     type: 'personnel'    if we use from app\store\Personnel.js
    // },
    controller : 'main',

    bind: 
    {
        store: '{bookRecord}',
    },
    listeners: 
    {
        //scope: 'this',
        select: 'onPersonSelect'
    },
    // onPersonSelect: function (grid, person)         
    // {
    //     debugger;
    //     var vm = this.up('app-main').getViewModel();
    //     vm.set('currentPerson', person);
    //     //this.setCurrentPerson(person);
    // },

    plugins: [{
        ptype: 'cellediting',
        clicksToEdit: 2,
        pluginId: 'cellediting'
    }],
    columns: [
        { text: 'Name',  dataIndex: 'name', editor: true},
        { text: 'Email', dataIndex: 'email', flex: 1,editor: true},
        { text: 'Phone', dataIndex: 'phone', flex: 1, editor: true}
    ],
    tbar : [
        {
            text : 'New',
            xtype: 'button',
            itemId: 'add',
            handler: 'onGridButton'
        },
        {
            iconCls: 'x-fa fa-trash-alt',
            itemId: 'reject',
            xtype: 'button',
            handler: 'onGridButton',
            disabled: true,
            bind: {
                disabled: '{!storeDirty}'
            },
        },
        {
            iconCls : 'x-fa fa-check-circle',
            itemId: 'commit',
            xtype: 'button',
            handler: 'onGridButton',
           disabled: true,
            bind: {
                disabled: '{!storeDirty}'
            },
        }
    ],

    // listeners: {
    //     select: 'onItemSelected'
    // }
});
