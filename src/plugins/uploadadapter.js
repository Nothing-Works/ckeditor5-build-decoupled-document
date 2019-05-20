import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import FileRepository from '@ckeditor/ckeditor5-upload/src/filerepository';

export default class Base64UploadAdapter extends Plugin {
	static get requires() {
		return [ FileRepository ];
	}

	static get pluginName() {
		return 'Base64UploadAdapter';
	}

	init() {
		this.editor.plugins.get( FileRepository ).createUploadAdapter = loader => new UploadAdapter( loader );
	}
}

class UploadAdapter {
	constructor( loader ) {
		this.loader = loader;
	}

	upload() {
		return this.loader.file.then( file =>
			new Promise( ( resolve, reject ) => {
				const reader = this.reader = new window.FileReader();
				reader.onload = function() {
					resolve( { default: reader.result } );
				};

				reader.onerror = function( error ) {
					reject( error );
				};

				reader.onabort = function() {
					reject();
				};

				reader.readAsDataURL( file );
			} ) );
	}

	abort() {
		if ( this.reader ) {
			this.reader.abort();
		}
	}
}
