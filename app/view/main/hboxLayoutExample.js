Ext.define('MyApp.view.main.hboxLayoutExample', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.layout.container.HBox'
       // 'Ext.layout.container.VBox'
    ],
    xtype: 'layout-horizontal-box',

    width: 500,
    height: 400,

    controller : 'main',

    layout: {
        type: 'hbox',
        //pack : 'center',
        align: 'stretch'
    },

   
    bodyPadding: 10,

    defaults: {
        frame: true,
        bodyPadding: 10,
        collapsible : true
    },

    items: [
        {
            title: 'Panel 1',
            margin: '0 10 0 0',
            width : 300,
            //html : 'left',
            
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
        },

        {
            // xtype: 'layout-vertical-box',    not possible
            flex: 2,
            layout: {
                type: 'vbox',
                pack: 'start',
                align: 'stretch'
            },
            bodyPadding: 10,

            defaults: {
                frame: true,
                bodyPadding: 10,
                collapsible : true
            },
        
            items: [{
                    margin: '0 0 10 0',
                    xtype: 'form',
                    title : 'Invoice Details',
                
                        layout: 'column',
                        labelAlign: 'top',
                        defaults: {
                            xtype: 'container',
                            layout: 'form',
                            allowBlank : false,
                            columnWidth: 0.5,   // it makes 2 columns 
                            padding : 20
                        },
                            items : [{
                                xtype : 'textfield',
                                fieldLabel : 'Consumer Id'
                            },
                            {
                                xtype : 'textfield',
                                fieldLabel : 'First Name',
                            },
                            {
                                xtype : 'textfield',
                                fieldLabel : 'Last Name',
                            },
                            {
                                fieldLabel : 'Phone number',
                                xtype : 'textfield',
                            },
                            {
                                fieldLabel : 'Book Title',
                                xtype : 'textfield',
                            },
                            {
                                fieldLabel : 'Author',
                                xtype : 'textfield',
                            },
                            {
                                fieldLabel : 'Purchased Date',
                                xtype : 'textfield',
                            },
                            {
                                fieldLabel : 'Paid amount',
                                xtype : 'textfield',
                            },
                            {
                                xtype: 'button',
                                text: 'Print & Download',
                                handler : 'onPrint',
                                //formBind: true,
                            }
                        ]
                },
                {
                    xtype : 'panel',
                    title: 'Declaration',
                    iconCls : 'fa-book',
                    height: 100,
                    margin: '0 0 10 0', // html: 'height: 100',  
                    //itemId : 'printpanel',    // check entire project
                    reference : 'printpanel'
                },
            ]
        }
    ]
})