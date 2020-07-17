/**
 * BLOCK: veta-layout
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import "./editor.scss";
import "./style.scss";

import { InnerBlocks } from "@wordpress/block-editor";

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("cgb/block-veta-layout", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("veta-layout - CGB Block"), // Block title.
	icon: "welcome-widgets-menus", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		// Creates a <p class='wp-block-cgb-block-veta-layout'></p>.
		return (
			<section className={props.className}>
				<div className="container">
					<InnerBlocks />
				</div>
			</section>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<section className={props.className}>
				<div className="container">
					<InnerBlocks.Content />
				</div>
			</section>
		);
	},
});

registerBlockType("cgb/block-button-veta", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("button veta - CGB Block"), // Block title.
	icon: "migrate", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		// Creates a <p class='wp-block-cgb-block-veta-layout'></p>.
		return (
			<a href="https://vetabolaget.se/kurser/endokrina-sjukdomar-hund-och-katt-del-1">
				<p>
					<InnerBlocks />
				</p>
			</a>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<a
				className="button button_purple"
				href="https://vetabolaget.se/kurser/endokrina-sjukdomar-hund-och-katt-del-1"
			>
				<p>
					<InnerBlocks.Content />
				</p>
			</a>
		);
	},
});
registerBlockType("cgb/small-veta-block", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("small veta block - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		// Creates a <p class='wp-block-cgb-block-veta-layout'></p>.
		return (
			<div>
				<InnerBlocks />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div className="small_block">
				<InnerBlocks.Content />
			</div>
		);
	},
});
registerBlockType("cgb/card-veta", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("card veta - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		// Creates a <p class='wp-block-cgb-block-veta-layout'></p>.
		return (
			<div className="card">
				<InnerBlocks />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div className="card">
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType("cgb/card-heading-veta", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("card heading veta - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		return (
			<div className="card_heading">
				<InnerBlocks />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div className="card_heading">
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType("cgb/card-circle-veta", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("card circle veta - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		return (
			<div className="circle">
				<InnerBlocks />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div className="circle">
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType("cgb/card-title-veta", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("card title veta - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		return (
			<p>
				<InnerBlocks />
			</p>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<p>
				<InnerBlocks.Content />
			</p>
		);
	},
});

registerBlockType("cgb/paragraph-veta", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("paragraph veta - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		return (
			<div className="veta-paragraph">
				<InnerBlocks allowedBlocks={"core/paragraph"} />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div className="veta-paragraph">
				<InnerBlocks.Content />
			</div>
		);
	},
});
registerBlockType("cgb/classic-paragraph-veta", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("classic paragraph veta - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		return (
			<div className="classic-veta-paragraph">
				<InnerBlocks allowedBlocks={"core/paragraph"} />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div className="classic-veta-paragraph">
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType("cgb/purple-text", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("purple text - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		return (
			<div className="purple-text">
				<InnerBlocks allowedBlocks={"core/paragraph"} />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div className="purple-text">
				<InnerBlocks.Content />
			</div>
		);
	},
});

registerBlockType("cgb/list-item", {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __("list item veta - CGB Block"), // Block title.
	icon: "editor-aligncenter", // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: "veta-blocks", // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__("veta-layout — CGB Block"),
		__("CGB Example"),
		__("create-guten-block"),
	],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: (props) => {
		return (
			<div className="list_item">
				<InnerBlocks allowedBlocks={"core/paragraph"} />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: (props) => {
		return (
			<div className="list_item">
				<InnerBlocks.Content />
			</div>
		);
	},
});
