class WorldTile {
  private source: string;
  private altText: string;
  private innerHtmlContent: HTMLElement | undefined;

  constructor(source: string, altText: string, innerHtmlContent?: HTMLElement) {
    this.source = source;
    this.altText = altText;
    this.innerHtmlContent = innerHtmlContent ? innerHtmlContent : undefined;

    return this;
  }
}

export default class WorldTileBuilder {
  public static brick() {
    try {
      return new WorldTile('../assets/moosh-brick.png', 'Brick object');
    } catch (error) {
      console.log('Error building brick object: ', error);
    }
  };

  public static block() {
    try {
      return new WorldTile('../assets/moosh-block.png', 'Block object');
    } catch (error) {
      console.log('Error building block object: ', error);
    }
  }
}