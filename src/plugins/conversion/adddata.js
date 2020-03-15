import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
// import Editor from '@ckeditor/ckeditor5-core/src/editor/editor';

export default class AddData extends Plugin {
	init() {
		const editor = this.editor;

		editor.conversion.for( 'dataDowncast' ).add( dispatcher => {
			dispatcher.on( 'insert:paragraph', ( evt, data, conversionApi ) => {
				if ( conversionApi.consumable.consume( data.item, 'insert' ) ) {
					return;
				}
				const viewPosition = conversionApi.mapper.toViewPosition( data.range.start );
				const viewElement = conversionApi.writer.createContainerElement( 'a' );
				conversionApi.mapper.bindElements( data.item, viewElement );
				conversionApi.writer.insert( viewPosition, viewElement );
				evt.stop(); }
			);
		} );
		// Editor.prototype.Andy = () => {
		// 	return this.editor.getData() + 'juele';
		// };
	}
}
