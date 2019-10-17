/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.editorConfig = function( config ) {
	config.toolbarGroups = [
		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
		{ name: 'basicstyles', groups: [ 'cleanup' ] },
		{ name: 'colors', groups: [ 'colors' ] },
		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
		{ name: 'paragraph', groups: [ 'bidi', 'list', 'indent', 'blocks', 'align', 'paragraph' ] },
		{ name: 'insert', groups: [ 'insert' ] },
		{ name: 'links', groups: [ 'links' ] },
		{ name: 'styles', groups: [ 'styles' ] },
		{ name: 'about', groups: [ 'about' ] }
	];

	config.removeButtons = 'Font,FontSize,Paste,PasteText,PasteFromWord,Save,Preview,Print,Templates,NewPage,SelectAll,Scayt,CopyFormatting,Checkbox,Select,Radio,Button,TextField,ImageButton,About,ShowBlocks,Language,Flash,Iframe,Maximize';
	//Configuração de linguagem padrão
	config.language = 'pt-br';
	//Configuração do skin
	config.skin='moonocolor';
	//Linguagem do corretor ortográfico 
	config.scayt_sLang='pt_BR';
	config.defaultLanguage='pt-br';
	//Configuração  do label da fonte padrão 
	config.font_defaultLabel = 'Times New Roman';
	config.fontSize_defaultLabel = '12';	
	//Configuração de plugins extras
	config.extraPlugins = 'autogrow,tableresize';
	//Configuração tamalho do edital e barra e rolagem
	config.autoGrow_onStartup= true;
	config.autoGrow_minHeight = 600;
	config.autoGrow_maxHeight = 600;
	//Configuração da tecla tab
	config.linkShowAdvancedTab=false;
	config.linkShowTargetTab=false;
	//Ativação da tecla table com 4 espaçamento
	config.tabSpaces = 4;
	//Ativação do corretor padrão do navegador
	config.disableNativeSpellChecker = false;
	//Remoção de plugins nativos
	config.removePlugins= 'scayt,wsc';
	//Configuração de estilos personalizados 
	config.stylesSet = 'default';
	//Retirar o rodapé
	config.removePlugins = "elementspath";
	config.resize_enabled = false;
	//Corrigindo a opção de colagem - cola formatação da mesma forma
	config.allowedContent = true;
	//config.enterMode = CKEDITOR.ENTER_BR;
	//config.stylesSet=({'color': 'black', 'font-size': '72px'});
	//config.extraCss="{color:blue}";
	//config.fontSize_sizes = '48/48px;';
};
