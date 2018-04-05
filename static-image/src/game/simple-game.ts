import { gameConfig } from '../game-config';
import { assetsPaths } from '../assets-config';

export class SimpleGame {
    private game: Phaser.Game;

    constructor() {
        this.game = this.createGame();
    }

    private createGame(): Phaser.Game {
        const gameOptions = {
            ...gameConfig,
            scene: {
                preload: this.onPreload.bind(this),
                create: this.onCreate.bind(this)
            }
        };

        return new Phaser.Game(gameOptions);
    }

    private onPreload(): void {
        const scene = this.game.scene.scenes[0];
        scene.load.image('logo', assetsPaths.LOGO);
    }

    private onCreate(): void {
        const logo = this.createLogo();
    }

    private createLogo(): Phaser.Scene {
        const scene = this.game.scene.scenes[0];

        return scene.add.sprite(gameConfig.width / 2, gameConfig.height / 2, 'logo');
    }
}
