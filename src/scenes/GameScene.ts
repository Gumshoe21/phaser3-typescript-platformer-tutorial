import Phaser from 'phaser';
import gameBackgroundImg from '../assets/game-background.png';
import squareImg from '../assets/square.png';

export default class GameScene extends Phaser.Scene {
	config;
	constructor(config) {
		super('GameScene');
		this.config = config; // NEW
	}

	preload() {
		this.load.image('square', squareImg);
		this.load.image('game-background', gameBackgroundImg);
	}

	create() {
		this.add.image(400, 300, 'game-background').setOrigin(0.5, 0.5);
		const square = this.physics.add.sprite(400, this.cameras.main.height, 'square').setOrigin(0, 1);
	}
}
