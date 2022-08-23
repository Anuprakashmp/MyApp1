Ext.define('Override.form.field.VTypes', {
    override: 'Ext.form.field.VTypes',

    // vtype validation function
    phone: function(value) {
        return this.phoneRe.test(value);
    },
    // RegExp for the value to be tested against within the validation function
    phoneRe: /^((\+0?1\s)?)\(?\d{3}\)?[\s.\s]\d{3}[\s.-]\d{4}$/i,
    // vtype Text property: The error text to display when the validation function
    // returns false
    phoneText: 'Not a valid phone.  Must be in the format "(999) 999-9999"',
    // vtype Mask property: The keystroke filter mask
    phoneMask: /[0-9]]/i
});


Ext.define('MyApp.view.main.addOrUpdatePanel', {
    extend: 'Ext.form.Panel',
    xtype: 'addorupdate',
    controller : 'main',

    requires : ['Ext.form.field.Number',
                'MyApp.view.main.List'],

    header: {
        padding: "4 9 5 9",
        items: 
        [{
            text: 'Reject',
            xtype: 'button',
            itemId: 'reject',
            handler: 'onFormButton',
            //disabled until currentPerson dirty
            disabled: true,
            bind: {
                disabled: '{!dirty}'
            }
        }, 
        {
            text: 'Commit',
            xtype: 'button',
            itemId: 'commit',
            handler: 'onFormButton',
            //disabled until currentPerson dirty
            disabled: true,
            bind: {
                disabled: '{!dirty}'
            }
        }
    ]
    },
    bodyPadding: 10,
    defaultType: 'textfield',
    defaults: {
        anchor: '100%',
        selectOnFocus: true,
        disabled: true,
        allowBlank: false,
    },
    items: [{
        fieldLabel: 'Name',
        bind: {
            value: '{currentBook.name}',
            disabled: '{!currentBook}'
        }
    }, {
        fieldLabel: 'Email',
        bind: {
            value: '{currentBook.email}',
            disabled: '{!currentBook}'
        }           
    }, {
        fieldLabel: 'Phone',
        inputMask: '(999) 999-9999',
        vtype : 'phone',
        bind: {
            value: '{currentBook.phone}',
            disabled: '{!currentBook}'
        },
        // minLength : '10',
         msgTarget: 'under',
        // blankText: 'enter ten digit phone number',
    }]

})