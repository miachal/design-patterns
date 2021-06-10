class Discord {
  on() { console.log('Discord:ON'); }
  off() { console.log('Discord:OFF'); }
};

class Battlenet {
  on() { console.log('Battlenet:ON'); }
  off() { console.log('Battlenet:OFF'); }
};

class Starcraft {
  on() { console.log('SC:ON'); }
  off() { console.log('SC:OFF'); }
  findGame() { console.log('SC:FindGame'); }
  play() { console.log('SC:play'); }
};

class GameFacade {
  private discord: Discord;
  private bnet: Battlenet;
  private sc: Starcraft;

  constructor(
    discord: Discord,
    bnet: Battlenet,
    sc: Starcraft
  ) {
    this.discord = discord;
    this.bnet = bnet;
    this.sc = sc;
  }

  startGame() {
    this.discord.on();
    this.bnet.on();
    this.sc.on();
    this.sc.findGame();
    this.sc.play();
  }
};

const discord = new Discord();
const bnet = new Battlenet();
const sc = new Starcraft();

new GameFacade(discord, bnet, sc).startGame();