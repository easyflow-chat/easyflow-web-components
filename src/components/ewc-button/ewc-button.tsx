import { Component, Element, Host, Listen, Method, Prop, h } from '@stencil/core';
import { getApperance } from '../helpers/apperanceHelper';

@Component({
  tag: 'ewc-button',
  styleUrl: 'ewc-button.scss',
  shadow: true,
})
export class EwcButton {
  private focusableElement: HTMLElement;
  private hiddenLightDomSubmitElement: HTMLInputElement;
  @Element() el!: HTMLEwcButtonElement;

  /**
   * The appearance of the button
   */
  @Prop() public theme: 'primary' | 'secondary' | 'transparent' = 'primary';

  /**
   * If the button is disabled
   */
  @Prop() public disabled: boolean = false;

  /**
   * If the button is loading
   */
  @Prop() public loading: boolean = false;

  /**
   * The screen reader hint for the button
   */
  @Prop() public srHint: string;

  /**
   * The type of the button
   */
  @Prop() public type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * The label of the button
   */
  @Prop() public label: string;

  /**
   * Focuses the button
   */
  @Method() public async doFocus() {
    this.focusableElement.focus();
  }

  @Listen('click', { capture: true })
  public onClick(e: Event) {
    if (this.disabled || this.loading) {
      e.stopPropagation();
      return;
    }

    this.hiddenLightDomSubmitElement?.click();
  }

  constructor() {
    if (this.type === 'submit') {
      this.hiddenLightDomSubmitElement = document.createElement('input');
      this.hiddenLightDomSubmitElement.type = this.type;
      this.hiddenLightDomSubmitElement.disabled = this.disabled;
      this.hiddenLightDomSubmitElement.hidden = true;
      this.hiddenLightDomSubmitElement.onclick = (e: MouseEvent) => e.stopPropagation();
      this.el.appendChild(this.hiddenLightDomSubmitElement);
    }
  }

  private getHostClasses() {
    return {
      [this.theme]: true,
      disabled: this.disabled,
      loading: this.loading,
      [getApperance(this.el)]: true,
    };
  }

  private getButtonClasses() {
    return {
      clickable: true,
      [this.theme]: true,
      disabled: this.disabled,
      loading: this.loading,
      [getApperance(this.el)]: true,
    };
  }

  render() {
    return (
      <Host class={this.getHostClasses()}>
        <div class="container">
          <button ref={el => (this.focusableElement = el)} class={this.getButtonClasses()}>
            <span class="sr-only">{this.srHint}</span>
            {this.loading && (
              <div class="loader-container">
                <ewc-loader size={20} strokeInherit />
              </div>
            )}
            <span class="label">{this.label}</span>
          </button>
        </div>
      </Host>
    );
  }
}
