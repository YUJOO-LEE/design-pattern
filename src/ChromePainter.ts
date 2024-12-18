class ChromePainter {
  private static instance: ChromePainter;
  private constructor(canvas: HTMLCanvasElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error('Canvas must be a HTMLCanvasElement');
    }
  }

  initialize() {

  }

  initializeMenu() {

  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new ChromePainter(document.querySelector('#canvas'));
    }
    return this.instance;
  }
}

export default ChromePainter;