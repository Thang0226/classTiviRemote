let sony = new TiVi();
let remote = new Remote("12345");

remote.turnTiviOn(sony);
sony.switchChannel(7);
remote.switchChannel(sony, 3);
remote.increaseVolume(sony, 2);
remote.turnTiviOff(sony);
