class Paint {
  private static instance: Paint;
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
      this.instance = new Paint(document.querySelector('#canvas'));
    }
    return this.instance;
  }
}

export default Paint;