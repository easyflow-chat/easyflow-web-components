import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'ewc-button-group',
  styleUrl: 'ewc-button-group.scss',
  shadow: true,
})
export class EwcButton {
  @Prop() public layout: 'responsive' | 'fill' | 'responsive-reverse' | 'fullwidth' = 'responsive';

  private getComponentClasses() {
    return {
      component: true,
      [this.layout]: true,
    };
  }

  render() {
    return (
      <Host class={this.layout}>
        <div class={this.getComponentClasses()}>
          <slot />
        </div>
      </Host>
    );
  }
}
