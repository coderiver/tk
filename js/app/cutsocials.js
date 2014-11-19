define([
	'jquery'
], function()
{
	// alert('a');


	function Truncate(str, maxLength, suffix)
	{
	    if(str.length > maxLength)
	    {
	        str = str.substring(0, maxLength + 1); 
	        str = str.substring(0, Math.min(str.length, str.lastIndexOf(" ")));
	        str = str + suffix;
	    }
	    return str;
	}
	$('.cutme').each(function(index, el) {
		str = $(this).html();
		newstr = Truncate(str,160,'...');
		$(this).html(newstr);
	});



});