import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import Editor from '@ckeditor/ckeditor5-core/src/editor/editor';

export default class HtmlExtension extends Plugin {
	init() {
		Editor.prototype.getHtml = () => this.html();
	}

	html() {
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
