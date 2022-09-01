/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // init: function(){
    //     this.loadAlbums();
    // },

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('DO U WANT TO EDIT', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // }

    onPersonSelect: function (grid, person) 
    {
        var vm = this.getViewModel();
        vm.set('currentBook', person);
        // vm.set('path', value)  syntax
        //this.setCurrentPerson(person); was not working
    },

    onFormButton: function(btn) {
        var person = this.getViewModel().get('currentBook'), action = btn.getItemId();
        if (person && person.isModel) {
            if ('reject' === action) {
                person.reject();
            }
            if ('commit' === action) {
                person.commit();
                person.reject();
            }
        }
    },
    // for grid
    onGridButton: function(btn) {
        var action = btn.getItemId(),
            vm = this.getViewModel(),
            store = vm.getStore('bookRecord'),
            record;
        if ('add' === action) {
            record = store.insert(0, {})[0];
            vm.set('currentGridBook', record);
        }
        if ('reject' === action) {
            store.rejectChanges();
        }
        if ('commit' === action) {
            store.commitChanges();
            record = vm.get('currentGridBook');
            record.commit();
            record.reject();
        }
    },

    afterRender : function()
        {
            Ext.Ajax.request
            ({
                url: 'https://jsonplaceholder.typicode.com/albums',
                method: 'GET',
               // setTimeout : 6000,
                scope : this,
                success: function (response) 
                {
                    let text = Ext.decode(response.responseText);
                    //console.dir(text);
                    var vm = this.getViewModel();
                    //vm.getStore('albumRecord').add(text)   
                },
                failure: function (response)
                {
                    Ext.Msg.alert('Request Failed');
                }

            })
        },

        onSave: function() {
            var  a = this.getStore('dairyStore').getData().items,
                len = this.getStore('dairyStore').getData().items.length,
                dairyrecord = [],
                cmontharray = [],
                sdatearray = [],
                edatearray = [],
                darray = [],
                d1 = [],
                d2 =[]

                for(var i = 0; i<len ; i++) {
                    dairyrecord.push(a[i].data);
                    cmontharray[i] = dairyrecord[i]['cmonth']
                    sdatearray[i] = dairyrecord[i]['sdate']
                    edatearray[i] = dairyrecord[i]['edate'],
                    min= new Date(sdatearray[i]) 
                    max = new Date(edatearray[i])
                    min1= new Date(sdatearray[i+1]) 
                    max1 = new Date(edatearray[i+1])
                    
                    date1 = new Date(sdatearray[i]) , date2 = new Date(edatearray[i])
                    differenceBetweenDates = Ext.Date.diff(date1, date2, Ext.Date.DAY)

                    selectedYear = date1.getFullYear() , selectedMonth = date1.getMonth() +1 

                    darray.push(differenceBetweenDates);
                    totalDiffernce = [...darray].reduce((a, b) => a + b, 0) + len

                    leapOrNot = Ext.Date.isLeapYear(date1)
                    var  days_of_a_year = numberOfDaysInSelectedYear => leapOrNot ? 366 : 365;       
                    numberOfDaysInSelectedYear = days_of_a_year()

                            if(differenceBetweenDates < 31 && differenceBetweenDates != 0 && cmontharray[i] == selectedMonth) {
                                    Ext.Msg.alert('Good')
                                }
                            else {
                                    Ext.Msg.alert('Check Record size(1-31) or Month Value(1-12)'); return 0;
                                }
                }
                if(totalDiffernce == numberOfDaysInSelectedYear) {
                    Ext.Msg.alert('Record have ' + numberOfDaysInSelectedYear + ' tracks')
                }
                else {
                    Ext.Msg.alert('Bad Record') ; return 0;
                }

                function getDatesInRange(startDate, endDate) {
                            const date = new Date(startDate.getTime());
                            const dates = []
                            while (date <= endDate) 
                            {
                            dates.push(new Date(date));
                            date.setDate(date.getDate() + 1);
                            }
                        return dates;
                }
                        
                        for(var i = 0; i<len ; i++) {
                            min= new Date(sdatearray[i]) 
                             max = new Date(edatearray[i])
                             min1= new Date(sdatearray[i+1]) 
                             max1 = new Date(edatearray[i+1])
                             d1 = getDatesInRange(min,max)
                             d2 = getDatesInRange(min1,max1)

                            for(var k=0; k < 32; k++) {
                                if(d1[k].getDay() == d2[k].getDay()) {
                                    Ext.Msg.alert('Bad') 
                                }
                                else {
                                    Ext.Msg.alert('Good')  
                                }
                             
                            }  
                        }
        }                    
});
