export default class WorldTile {
  private source: string;
  private altText: string;
  private innerHtmlContent: HTMLElement | undefined;

  constructor(source: string, altText: string, innerHtmlContent?: HTMLElement) {
    this.source = source;
    this.altText = altText;
    this.innerHtmlContent = innerHtmlContent ? innerHtmlContent : undefined;

    return this;
  }

  getSource(): string {
    return this.source;
  }

  getAltText(): string {
    return this.altText;
  }

  getDimensions() {
    const {
      offsetHeight, offsetWidth
    } = this.renderElement();
    return { height: offsetHeight, width: offsetWidth };
  }

  renderElement() {
    let innerContent;

    if (this.innerHtmlContent) {
      innerContent = this.innerHtmlContent.cloneNode(true);
      innerContent.classList.add('innerTile');
    }
      
    return(
      <div>
        <img src={this.getSource()} alt={this.getAltText()}/>
        { innerContent }
      </div>
    )
  }
}