Ext.define('MyApp.view.main.borderLayoutExample', {
    extend: 'Ext.panel.Panel',
    xtype: 'layout-border',

    requires: [
        'Ext.layout.container.Border'
    ],

    layout: 'border',
    width: 500,
    height: 400,

    bodyBorder: false,

    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 10
    },

    items: [
        {
            title: 'Footer',
            region: 'south',
            height: 100,
            minHeight: 75,
            maxHeight: 150,
            html: '<p>Footer content</p>'
        },  
        {
            title: 'Navigation',
            region: 'west',
            floatable: false,
            margin: '5 0 0 0',
            width: 300,
            // minWidth: 100,
            // maxWidth: 250,
           // html: '<p>Secondary content like navigation links could go here</p>'
        
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
            title: 'Bill Details',
            collapsible: true,
            region: 'center',
            margin: '5 0 0 0',
            html: '<h2>Consumer Id</h2><p>This is where the main content would go</p>',
           
        }
    ]   
})