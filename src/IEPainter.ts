class IEPainter {
  private static instance: IEPainter;
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
      this.instance = new IEPainter(document.querySelector('#canvas'));
    }
    return this.instance;
  }
}

export default IEPainter;