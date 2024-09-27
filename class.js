class TiVi {
  constructor() {
    this.channel = 1;
    this.volume = 20;
    this.status = false;
  }

  increaseVolume(num) {
    if (this.status == false) {
      alert("TiVi is turned off. Please turn on the TiVi!");
      return;
    }
    this.volume += num;
    document.write(`Volume increased ${num} unit <br>`);
  }

  decreaseVolume(num) {
    if (this.status == false) {
      alert("TiVi is turned off. Please turn on the TiVi!");
      return;
    }
    this.volume -= num;
    document.write(`Volume decreased ${num} unit <br>`);
  }

  switchChannel(channel) {
    if (this.status == false) {
      alert("TiVi is turned off. Please turn on the TiVi!");
      return;
    }
    this.channel = channel;
    document.write(`Switched to channel ${channel} <br>`);
  }

  turnOn() {
    this.status = true;
    document.write(`Tivi is turned on <br>`);
  }

  turnOff() {
    this.status = false;
    document.write(`Tivi is turned off <br>`);
  }
}

class Remote {
  constructor(id) {
    this.id = id;
  }

  turnTiviOn(tivi) {
    tivi.turnOn();
  }

  turnTiviOff(tivi) {
    tivi.turnOff();
  }

  switchChannel(tivi, channel) {
    tivi.switchChannel(channel);
  }

  increaseVolume(tivi, num) {
    tivi.increaseVolume(num);
  }

  decreaseVolume(tivi, num) {
    tivi.decreaseVolume(num);
  }
}
