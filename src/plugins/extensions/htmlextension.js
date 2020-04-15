import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Editor from '@ckeditor/ckeditor5-core/src/editor/editor';

export default class HtmlExtension extends Plugin {
	init() {
		Editor.prototype.getHtml = () => this.getHtml();

		Editor.prototype.setHtml = data => this.setHtml( data );
	}

	setHtml( data ) {
		const matched = data.match( this.pattern() );
		const final = matched === null ? '' : matched.join().trim();
		this.editor.setData( final );
	}

	getHtml() {
		return this.template().replace( this.pattern(), this.editor.getData() );
	}

	pattern() {
		return new RegExp( /(?<=<body>)(.*)(?=<\/body>)/, 'gmis' );
	}

	template() {
		return `<!doctype html>
		<html lang="en">
		  <head>
			<meta charset="utf-8">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

			<title>CkEditor</title>
			</head>
			<body>
			</body>
		</html>`;
	}
}
