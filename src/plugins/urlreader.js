
export default class UrlReader {
	constructor() {
		this._error = null;
		this._reject = null;
	}
	get error() {
		return this._error;
	}

	read( url ) {
		return new Promise( ( resolve, reject ) => {
			this._reject = reject;

			window.fetch( url )
				.then( resource => resource.blob() )
				.then( blob => {
					const type = blob.type;
					const filename = `file.${ type.split( '/' ).pop() }`;
					const file = new window.File( [ blob ], filename, { type: blob.type } );

					this._reject = null;

					resolve( file );
				} )
				.catch( error => {
					this._reject = null;
					this._error = error;

					reject( error );
				} );
		} );
	}

	abort() {
		if ( this._reject ) {
			this._reject();
		}
	}
}
