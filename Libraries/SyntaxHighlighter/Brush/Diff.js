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
		this.regexList = [
			{ "regex": /^\+\+\+.*$/gm,		"css": 'color2' },
			{ "regex": /^\-\-\-.*$/gm,		"css": 'color2' },
			{ "regex": /^\s.*$/gm,			"css": 'color1' },
			{ "regex": /^@@.*@@$/gm,			"css": 'variable' },
			{ "regex": /^\+[^\+]{1}.*$/gm,	"css": 'string' },
			{ "regex": /^\-[^\-]{1}.*$/gm,	"css": 'comments' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['diff', 'patch'];

	SyntaxHighlighter.brushes[ "Diff" ] = Brush;

	ns[ NS_EXPORT ]( EX_CLASS, "Diff", Brush );
})();
