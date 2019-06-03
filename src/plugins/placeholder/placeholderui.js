import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import { addListToDropdown, createDropdown } from '@ckeditor/ckeditor5-ui/src/dropdown/utils';
import Collection from '@ckeditor/ckeditor5-utils/src/collection';
import Model from '@ckeditor/ckeditor5-ui/src/model';
import './theme/placeholder.css';
export default class PlaceHolderUI extends Plugin {
	init() {
		const editor = this.editor;
		const t = editor.t;
		const placeholderNames = editor.config.get( 'placeholderConfig.mergeFields' );
		const placeholderLabelText = editor.config.get( 'placeholderConfig.label' );
		editor.ui.componentFactory.add( 'placeholder', locale => {
			const dropdownView = createDropdown( locale );

			addListToDropdown( dropdownView, getDropdownItemsDefinitions( placeholderNames ) );

			dropdownView.buttonView.set( {
				label: t( placeholderLabelText ),
				tooltip: true,
				withText: true
			} );

			dropdownView.class = 'placeholderLabel';

			this.listenTo( dropdownView, 'execute', evt => {
				editor.execute( 'placeholder', { value: evt.source.commandParam } );
				editor.editing.view.focus();
			} );

			return dropdownView;
		} );
	}
}

function getDropdownItemsDefinitions( placeholderNames ) {
	const itemDefinitions = new Collection();

	for ( const field of placeholderNames ) {
		const definition = {
			type: 'button',
			model: new Model( {
				commandParam: field.value,
				label: field.name,
				withText: true
			} )
		};

		itemDefinitions.add( definition );
	}

	return itemDefinitions;
}
