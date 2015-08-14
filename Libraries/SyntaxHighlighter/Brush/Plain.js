/**
 * SyntaxHighlighter
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 3.0.83 (July 02 2010)
 * 
 * @copyright
 * Copyright (C) 2004-2010 Alex Gorbatchev.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	var ns = __namespace( "Libraries.SyntaxHighlighter.Brush" );

    /** @type {Libraries.SyntaxHighlighter} */
    var SyntaxHighlighter = __import( "Libraries.SyntaxHighlighter" );

    /** @type {Libraries.SyntaxHighlighter.Brush} **/
    var Brush = function()
	{
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['text', 'plain'];

	SyntaxHighlighter.brushes[ "Plain" ] = Brush;

    ns[ NS_EXPORT ]( EX_CLASS, "Plain", Brush );
})();
