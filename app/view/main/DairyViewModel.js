Ext.define('MyApp.view.main.DairyViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.dairyview',

    stores: 
        {
            yearStore : 
            {
               data : [
                {year : '2000'},
                {year : '2001'},
                {year : '2002'},
                {year : '2003'},
                {year : '2004'},
                {year : '2005'},
                {year : '2006'},
                {year : '2007'},
                {year : '2008'},
                {year : '2009'},
                {year : '2010'}
               ]
            },

            dairyStore : 
            {
                data : [

                    {sdate: '3-16-2022', edate: '3-31-2022', cmonth: 3, id: 2 },
                    
                    {sdate: '3-16-2022', edate: '3-31-2022', cmonth: 3, id: 15 },

                    {sdate: '1-1-2022', edate: '1-15-2022', cmonth: 1, id: 16 },

                    {sdate: '2-1-2022', edate: '2-10-2022', cmonth: 2, id: 3 },
                    {sdate: '2-11-2022', edate: '2-28-2022', cmonth: 2, id: 14 },

                    {sdate: '3-1-2022', edate: '3-15-2022', cmonth: 3, id: 4 },
                    
                    {sdate: '4-1-2022', edate: '4-15-2022', cmonth: 4, id: 5 },
                    {sdate: '4-16-2022', edate: '4-30-2022', cmonth: 4, id: 1 },
                   
                    {sdate: '5-1-2022', edate: '5-31-2022', cmonth: 5, id: 6 },
                    {sdate: '6-1-2022', edate: '6-30-2022', cmonth: 6, id: 7 },

                    {sdate: '7-1-2022', edate: '7-25-2022', cmonth: 7, id: 8 },

                    {sdate: '7-26-2022', edate: '8-10-2022', cmonth: 7, id: 17 },

                    {sdate: '8-11-2022', edate: '8-31-2022', cmonth: 8, id: 9 },

                    {sdate: '9-1-2022', edate: '9-30-2022', cmonth: 9, id: 10 },

                    {sdate: '10-1-2022', edate: '10-31-2022', cmonth: 10, id: 11 },
                    {sdate: '11-1-2022', edate: '11-30-2022', cmonth: 11, id: 12 },
                    {sdate: '12-1-2022', edate: '12-31-2022', cmonth: 12, id: 13 },


                   
                ]
            }
        }
    
    
   
});