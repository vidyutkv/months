/*!
 * weekdays jQuery Plugin - Copyright (c) 2012 Vidyut Kumar - http://vidyutkumar.info/
 * Dual-licensed under the BSD or MIT licenses
 */
;(function($, window, document, undefined)
{
	fullDateView = function(iD){
		var $this = "#" + iD;
		var value = $($this).find('input.w-in').val();
		var outPut = "#" + iD + "-output";
		var splitValue = value.split("-");
		var thisYear = splitValue[0];
		var thisMonth = splitValue[1];
		var thisDate = splitValue[2];
		
		//for Month
		var month = new Array();
		month[1] = "January";
		month[2] = "February";
		month[3] = "March";
		month[4] = "April";
		month[5] = "May";
		month[6] = "June";
		month[7] = "July";
		month[8] = "August";
		month[9] = "September";
		month[10] = "October";
		month[11] = "November";
		month[12] = "December";
		var monthNumber = new Number(thisMonth);
		var monthName = month[monthNumber];
		$(outPut).val(monthName);	
	}
    $.fn.months = function(params)
    {
        var lists  = this,
			retval = this;

        lists.each(function()
        {
			var iD = $(this).attr('id'),
			onClickAtt = "fullDateView('"+ iD +"')";
			$(this).children('button').attr('onClick',onClickAtt);
			$(this).children('input').addClass('w-in');
        });

        return retval || lists;
    };

})(window.jQuery || window.Zepto, window, document);
