/**
 * Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin which shows the Styles drop-down
// list containing all styles in the editor toolbar. Other plugins, like
// the "div" plugin, use a subset of the styles for their features.
//
// If you do not have plugins that depend on this file in your editor build, you can simply
// ignore it. Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.
//
// For more information refer to: https://ckeditor.com/docs/ckeditor4/latest/guide/dev_styles.html#style-rules

CKEDITOR.stylesSet.add( 'default', [
	/* Block styles */

	// These styles are already available in the "Format" drop-down list ("format" plugin),
	// so they are not needed here by default. You may enable them to avoid
	// placing the "Format" combo in the toolbar, maintaining the same features.
	/*
	{ name: 'Paragraph',		element: 'p' },
	{ name: 'Heading 1',		element: 'h1' },
	{ name: 'Heading 2',		element: 'h2' },
	{ name: 'Heading 3',		element: 'h3' },
	{ name: 'Heading 4',		element: 'h4' },
	{ name: 'Heading 5',		element: 'h5' },
	{ name: 'Heading 6',		element: 'h6' },
	{ name: 'Preformatted Text',element: 'pre' },
	{ name: 'Address',			element: 'address' },
	*/
	
	{ name: 'Parágrafo de 2,5 cm', element: 'p',
		styles: 
		{
			'font-size':'12pt',
			'font-family':'Times New Roman',
			'text-indent':'2.5cm',
			'text-align':'justify',
			'word-wrap':'normal',
			'margin-right':'113,385px',
			'margin-left':'75,5px',
			'color':'#000000'
		},
		attributes: {'class': 'paragrafo_2.5'}  
	},
	{ name: 'Estilo normal', element: 'p',
		styles: 
		{
			'font-size':'12pt',
			'font-family':'Times New Roman',
			'text-align':'justify',
			'word-wrap':'normal',
			'margin-right':'113,385px',
			'margin-left':'75,5px',
			'color':'#000000'
		},
		attributes: {'class': 'estilo_normal'} 
	},
	{ name: 'Citação com recuo de 4 cm', element: 'div',
		styles: 
		{
			'font-size':'10pt',
			'font-family':'Times New Roman',
			'text-align':'justify',
			'word-wrap':'normal',
			'margin-left':'151.18300703px',
			'color':'#000000'
			
		} ,
		attributes: {'class': 'citacao_4cm'} 
	},
	{ name: 'Citação com recuo de 6 cm', element: 'div',
		styles: 
		{
			'font-size':'10pt',
			'font-family':'Times New Roman',
			'text-align':'justify',
			'word-wrap':'normal',
			'margin-left':'226.771653px',
			'color':'#000000'
			
		} ,
		attributes: {'class': 'citacao_6cm'} 
	},
	{ name: 'Espaçamento 6pt antes com recuo', element: 'p',
		styles: 
		{
			'font-size':'12pt',
			'font-family':'Times New Roman',
			'text-indent':'2.5cm',
			'text-align':'justify',
			'word-wrap':'normal',
			'margin-top':'7.968883px',
			'color':'#000000'
		},
		attributes: {'class': 'espacamento_6pt_com_recuo'} 
	},
	{ name: 'Espaçamento 6pt antes sem recuo', element: 'p',
		styles: 
		{
			'font-size':'12pt',
			'font-family':'Times New Roman',
			'text-align':'justify',
			'word-wrap':'normal',
			'margin-top':'7.968883px',
			'color':'#000000'
		},
		attributes: {'class': 'espacamento_6pt_sem_recuo'}  
	},
	{ name: 'Espaçamento entre linhas 1,5', element: 'p',
		styles: 
		{
			'line-height':'1.5'
		},
		attributes: {'class': 'espacamento_linha_1.5'}  
	},
	{ name: 'Espaçamento entre linhas duplo', element: 'p',
		styles: 
		{
			'line-height':'2.0'
		},
		attributes: {'class': 'espacamento_linha_duplo'} 
	},
	{ name: 'Rodapé com linha', element: 'div',
		styles: 
		{
			'font-size':'10pt',
			'font-family':'Times New Roman',
			'text-align':'justify',
			'word-wrap':'normal',
			'border-top':'2px solid #666',
			'color':'#000000'
			
		} ,
		attributes: {'class': 'rodape_com_linha'}
	},
	{ name: 'Referência', element: 'div',
		styles: 
		{
			'font-size':'10pt',
			'font-family':'Times New Roman',
			'text-align':'justify',
			'word-wrap':'normal',
			'color':'#000000'
			
		} ,
		attributes: {'class': 'referencia'}
	},
	/*{ name: 'Italic Title',		element: 'h2', styles: { 'font-style': 'italic' } },*/
	{ name: 'Subtítulo',			element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' },
	attributes: {'class': 'subtitulo'}  },
	{
		name: 'Bloco especial',
		element: 'div',
		styles: {
			padding: '5px 10px',
			background: '#eee',
			border: '1px solid #ccc'
		},
		attributes: {'class': 'bloco_especial'} 
	},

	/* Inline styles */

	// These are core styles available as toolbar buttons. You may opt enabling
	// some of them in the Styles drop-down list, removing them from the toolbar.
	// (This requires the "stylescombo" plugin.)
	/*
	{ name: 'Strong',			element: 'strong', overrides: 'b' },
	{ name: 'Emphasis',			element: 'em'	, overrides: 'i' },
	{ name: 'Underline',		element: 'u' },
	{ name: 'Strikethrough',	element: 'strike' },
	{ name: 'Subscript',		element: 'sub' },
	{ name: 'Superscript',		element: 'sup' },
	*/

	{ name: 'Marcador',			element: 'span', attributes: { 'class': 'marker' } },

	/*{ name: 'Big',				element: 'big' },
	{ name: 'Small',			element: 'small' },
	{ name: 'Typewriter',		element: 'tt' },

	{ name: 'Computer Code',	element: 'code' },
	{ name: 'Keyboard Phrase',	element: 'kbd' },
	{ name: 'Sample Text',		element: 'samp' },
	{ name: 'Variable',			element: 'var' },
	*/
	{ name: 'Tachado',		element: 'del' },
	/*
	{ name: 'Inserted Text',	element: 'ins' },

	{ name: 'Cited Work',		element: 'cite' },

	{ name: 'Language: RTL',	element: 'span', attributes: { 'dir': 'rtl' } },
	{ name: 'Language: LTR',	element: 'span', attributes: { 'dir': 'ltr' } },
	*/
	/* Object styles */

	{
		name: 'Imagem estilizada a esquerda',
		element: 'img',
		attributes: { 'class': 'left' }
	},

	{
		name: 'Imagem estilizada a direita',
		element: 'img',
		attributes: { 'class': 'right' }
	},

	{
		name: 'Compactar tabela',
		element: 'table',
		attributes: {
			cellpadding: '5',
			cellspacing: '0',
			border: '1',
			bordercolor: '#ccc'
		},
		styles: {
			'border-collapse': 'collapse'
		}
	},

	{ name: 'Tabela estilizada',		element: 'table',	styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
	{ name: 'Lista com marcadores quadrado',	element: 'ul',		styles: { 'list-style-type': 'square' } },

	/* Widget styles */

	{ name: 'Limpa imagem', type: 'widget', widget: 'image', attributes: { 'class': 'image-clean' } },
	{ name: 'Imagem cinza', type: 'widget', widget: 'image', attributes: { 'class': 'image-grayscale' } },

	{ name: 'Featured Snippet', type: 'widget', widget: 'codeSnippet', attributes: { 'class': 'code-featured' } },

	{ name: 'Featured Formula', type: 'widget', widget: 'mathjax', attributes: { 'class': 'math-featured' } },

	{ name: '240p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-240p' }, group: 'size' },
	{ name: '360p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-360p' }, group: 'size' },
	{ name: '480p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-480p' }, group: 'size' },
	{ name: '720p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-720p' }, group: 'size' },
	{ name: '1080p', type: 'widget', widget: 'embedSemantic', attributes: { 'class': 'embed-1080p' }, group: 'size' },

	// Adding space after the style name is an intended workaround. For now, there
	// is no option to create two styles with the same name for different widget types. See https://dev.ckeditor.com/ticket/16664.
	{ name: '240p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-240p' }, group: 'size' },
	{ name: '360p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-360p' }, group: 'size' },
	{ name: '480p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-480p' }, group: 'size' },
	{ name: '720p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-720p' }, group: 'size' },
	{ name: '1080p ', type: 'widget', widget: 'embed', attributes: { 'class': 'embed-1080p' }, group: 'size' }

] );

