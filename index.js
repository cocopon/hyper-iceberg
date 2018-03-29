exports.decorateConfig = (config) => {
	return Object.assign({}, config, {
		backgroundColor: '#161821',
		borderColor: '#272c42',
		colors: {
			black: '#1e2132',
			red: '#e27878',
			green: '#b4be82',
			yellow: '#e2a478',
			blue: '#84a0c6',
			magenta: '#a093c7',
			cyan: '#89b8c2',
			white: '#c6c8d1',
			lightBlack: '#6b7089',
			lightRed: '#e98989',
			lightGreen: '#c0ca8e',
			lightYellow: '#e9b189',
			lightBlue: '#91acd1',
			lightMagenta: '#ada0d3',
			lightCyan: '#95c4ce',
			lightWhite: '#d2d4de',
		},
		css: `
			${config.css || ''}
			.tab_tab {
				transition: background-color 0.2s ease-out;
			}
			.tab_tab:hover {
				background-color: #1e2132;
			}
			.tab_icon {
				color: #6b7089;
				transition: background-color 0.2s ease-out, color 0.2s ease-out;
			}
			.tab_icon:hover {
				background-color: rgba(198, 200, 209, 0.2);
				color: #c6c8d1;
			}
			.tab_text {
				color: #6b7089;
			}
		`,
		cursorColor: '#c6c8d1',
		foregroundColor: '#c6c8d1',
	});
}
