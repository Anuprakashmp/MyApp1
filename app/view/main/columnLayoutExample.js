Ext.define('MyApp.view.main.columnLayoutExample', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-column',

    requires: [
        'Ext.layout.container.Column'
    ],

    layout: 'column',

    bodyPadding: 20,

    defaults: {
        bodyPadding: 15, 
    },

    items: [
        {
            xtype: 'form',
            title : 'Consumer Invoice',
            defaults : {
                xtype : 'textfield',
                allowBlank : false,
            },
            items : [{
                fieldLabel : 'Consumer Id'
            },
            {
                fieldLabel : 'First Name',
            },
            {
                fieldLabel : 'Last Name',
            },
            {
                fieldLabel : 'Phone number',
            },
            {
                fieldLabel : 'Book Title'
            },
            {
                fieldLabel : 'Author'
            },
            {
                fieldLabel : 'Purchased Date'
            },
            {
                fieldLabel : 'Paid amount'
            }]
        },
    
        {
            xtype: 'form',
            title : 'Original Invoice',
            defaults : {
                xtype : 'textfield',
                allowBlank : false,
            },
            items : [{
                fieldLabel : 'Consumer Id'
            },
            {
                fieldLabel : 'First Name',
            },
            {
                fieldLabel : 'Last Name',
            },
            {
                fieldLabel : 'Phone number',
            },
            {
                fieldLabel : 'Book Title'
            },
            {
                fieldLabel : 'Author'
            },
            {
                fieldLabel : 'Purchased Date'
            },
            {
                fieldLabel : 'Paid amount'
            }]
    }]
})