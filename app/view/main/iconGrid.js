
Ext.define ('MyApp.view.main.iconGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'icongrid',

    requires: [
        'Ext.grid.column.Action'
    ],

    title: 'Basic Grid',
    width: 750,
    height: 1000,
    //padding: 50,

    controller: 'main',
    viewModel: 'main',

    bind: {
        store: '{ZigZag}'
    },

    columns : [{
        text: 'fname',
        align : 'center',
        width: 150,
        dataIndex: 'fname'
    },
    {
        text: 'Ph number',
        width: 150,
        dataIndex: 'phone',
        // renderer: function (value, metaData) {
        //     if(value.startsWith('+91')){
        //        debugger;
        //        metaData.style = 'background-color:black;';
        //     }
        //     else{
        //         metaData.tdAttr = 'bgcolor="green"';
        //     }

        //      return value;
        //  }
    },
    {
        text: 'details',
        width: 120,
        align : 'center',
        xtype: 'widgetcolumn',
        widget: {
            text: 'details',
            xtype: 'button',
            iconCls: 'widget-grid-user',
            handler: 'onButtonWidgetClick'
        }
    },
    {
        text: 'icon',
        //flex: 1,
        sortable: false,
        width: 200,
        dataIndex: 'status',
        xtype: 'widgetcolumn',
        align: 'center',
        buttonText: null,
        widget: {
            xtype: 'button',
            buttonText: null,
        },
        onWidgetAttach: function (col, widget, record) {
            //debugger
            if(record.data.status == true){
                widget.setIconCls('x-fa fa-book');
            }
            else{
                widget.setIconCls('x-fa fa-cog')
            }
        }
    },
    {
        text: 'extra',
        align : 'center',
        xtype: 'actioncolumn',
        width: 150,
        dataIndex: 'objType',
        getClass : function(value, rowIndex, record, metaData) {
            if(value == 1){
                return 'x-fa fa-upload';
            }
            else {
                return 'x-fa fa-download';
            }
        }
    }
        // items: [{
        //     // tooltip: 'File upload',
        //     handler: function (grid, rowIndex, colIndex) {
        //         alert('Upload');
        //     },
        //     getClass: function (v, metadata, rec) {
        //         if (v == 1 ) {
        //             return 'x-fa fa-upload';
        //         }
              
        //     }
        // }, 
        // {
        //     // tooltip: 'File download',
        //     handler: function (grid, rowIndex, colIndex) {
        //         var rec = grid.getStore().getAt(rowIndex);
        //         Ext.toast('download ' + rec.get('fname'));
        //     },
        //     getClass: function (v, metadata, rec) {
        //         if (v == 3) {
        //             return 'x-fa fa-download';
        //         }
    
        //     }
        // }]
        
    ],

    // items: [{
    // // tooltip: ('icon_compare_version'),
    //     icon: "/bundles/pimcoreadmin/img/flat-color-icons/info.svg",
    //     //handler: this.compareVersion.bind(this),
    //     iconCls: 'compare-v'
    // },
    // {
    // // tooltip: t('icon_compare_image_version'),
    //     id:'compare-i',
    //     icon: "/bundles/pimcoreadmin/img/flat-color-icons/picture.svg",
    // // handler: this.compareImageVersion.bind(this),
    //     iconCls: 'compare-i'
    // }],

    // items: [{
    //     iconCls: 'x-fa fa-cog',
    //     // tooltip: 'Edit',
    //     // handler: function(grid, rowIndex, colIndex) {
    //     //     var rec = grid.getStore().getAt(rowIndex);
    //     //     alert("Edit " + rec.get('firstname'));
    //     // }
    // },{
    //     icon: 'extjs-build/examples/restful/images/delete.png',
    //     // tooltip: 'Delete',
    //     // handler: function(grid, rowIndex, colIndex) {
    //     //     var rec = grid.getStore().getAt(rowIndex);
    //     //     alert("Terminate " + rec.get('firstname'));
    //     // }
    // }],
    viewConfig: {
        getRowClass: function (record, rowIndex, rowParams, store) {
            return (record.data.phone.startsWith('+91')) ? 'redBackground' : '';
        }
    }
});

 // renderer: function (value, rowIndex, record, column, widget) {
        //     //debugger
        //     if (value == 'object') {
        //                 rowIndex.tdCls = 'iconCls'
        //         }
        //         else{
        //                 rowIndex.tdCls = 'icon'
        //             }
        //         }

        // render: function(value, rowIndex, record, column, widget) {
        //     var a = '<i class="fa fa-money "></i>';
        //     return a;
        //   }