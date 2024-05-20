import { Component, Element, Prop, h } from '@stencil/core';
import { getApperance } from '../helpers/apperanceHelper';

@Component({
  tag: 'ewc-loader',
  styleUrl: 'ewc-loader.scss',
  shadow: true,
})
export class EwcLoader {
  private baseWidth = 50;

  @Element() el!: HTMLEwcLoaderElement;

  /**
   * The size of the loader
   */
  @Prop() public size: number = this.baseWidth;

  /**
   * If the loader inherits the color of the parent element
   */
  @Prop() public strokeInherit: boolean = false;

  /**
   * The screen reader hint for the loader
   */
  @Prop() public srHint: string = 'status: Loading';

  private gerLoaderStyle() {
    return {
      'circle': true,
      'stroke-inherit': this.strokeInherit,
      [getApperance(this.el)]: true,
    };
  }

  render() {
    return (
      <div class="component" style={{ width: `${this.size}px`, heigth: `${this.size}px` }}>
        <span class="sr-only">{this.srHint}</span>
        <svg viewBox="0 0 50 50" width="100%" height="100%">
          <circle
            class={this.gerLoaderStyle()}
            cx="50%"
            cy="50%"
            r="40%"
            fill="none"
            stroke-linecap="round"
            stroke-width="10%"
          />
        </svg>
      </div>
    );
  }
}
