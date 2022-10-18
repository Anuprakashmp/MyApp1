Ext.define('MyApp.view.main.detailsOne', {
        extend: 'Ext.form.Panel',
        controller : 'main',
        view: 'main',
        requires:
            [
                'Ext.window.*',
                'MyApp.view.main.MainController',
                'Ext.form.field.Text',
                'MyApp.view.main.iconGrid',
                'MyApp.view.main.MainModel'
            ],
        xtype: 'details1',
        defaultType: 'textfield',
        items: 
        [
           {
            name: 'fname',
            fieldLabel: 'fname',
            //text: 'fname'
           },
           {
            name : 'phone',
            fieldLabel: 'phone'
           }
        ],
        listeners : {
            afterrender : function(){
               var r = this.config.record1;
               this.getForm().setValues(r);
            }
        }
    
    });
    
    
    