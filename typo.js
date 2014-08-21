( function( win ) {
	var body = document.body,
	create = function( tagName, props ) {
		var node = document.createElement( tagName );
		if( props ) for( var i in props ) node[ i ] = props[ i ];
		return node;
	};
	
	if( !document.addEventListener ) return;
	
	window.typo = function( options ) {
		if( !typo.init ) {
			typo.init = true;
			win.addEventListener( 'keydown', function( evt ) {
				if( 13 === evt.which && evt.ctrlKey && typo.init ) {
					var selectionText = window.getSelection().toString(),
						commentText;
					if( selectionText ) {
						commentText = prompt( 'Thanks! You\'re selected:\n\n"' + selectionText + '"\n\nYour Comment:' );
						if( commentText !== null ) {
							selection.value = selectionText;
							comment.value = commentText;
							form.submit();
							alert( 'Thank you!' );
						}
					} else {
						alert( 'Please, select inaccuracy or typo for letting us know.\nThanks.' );
					}
				}
			});
			
			var iframe = body.appendChild( create( 'iframe', {
					name: 'typo-iframe',
					id: 'typo-iframe',
					onload: function() {}
				}) ),
				form = body.appendChild( create( 'form', {
					action: options.formURL,
					method: 'POST',
					target: 'typo-iframe'
				}) ),
				selection = form.appendChild( create( 'input', {
					name: options.selectionName
				}) ),
				comment = form.appendChild( create( 'input', {
					name: options.commentName
				}) ),
				page = form.appendChild( create( 'input', {
					name: options.pageName,
					value: document.location.href
				}) );
				
			form.style.display = iframe.style.display = 'none';
		}
	};
	
	
	typo({
		formURL: 'https://docs.google.com/forms/d/1lCplFvSZfwDU_zr4WsK0fSCo5ktBOnox0od_BPx40xk/formResponse',
		selectionName: 'entry.1972481987',
		commentName: 'entry.1777335671',
		pageName: 'entry.339184258'
	});
})( window );
