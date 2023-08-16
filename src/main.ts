import Phaser from 'phaser';

const gameWidth = 800;
const gameHeight = 600;

const sharedConfig = {
	width: gameWidth,
	height: gameHeight,

	playerStartPosition: {
		x: gameWidth / 2, // 800 / 2 = 400 pixels
		y: gameHeight / 2, // 600 / 2 = 300 pixels
	},
};

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	physics: {
		default: 'arcade',
		arcade: {
			debug: true,
		},
	},
	...sharedConfig,
	scene: [new GameScene(sharedConfig)],
};

new Phaser.Game(config);
