import appStateManager from "../lib/appManagers/appStateManager";
import { getDeepProperty } from "../helpers/object";

export default class CheckboxField {
  public input: HTMLInputElement;
  public label: HTMLLabelElement;
  public span: HTMLSpanElement;

  constructor(options: {
    text?: string, 
    name?: string, 
    round?: boolean, 
    stateKey?: string,
    disabled?: boolean,
    checked?: boolean,
  } = {}) {
    const label = this.label = document.createElement('label');
    label.classList.add('checkbox-field');

    if(options.round) {
      label.classList.add('checkbox-field-round');
    }

    if(options.disabled) {
      label.classList.add('checkbox-disabled');
    }

    const input = this.input = document.createElement('input');
    input.type = 'checkbox';
    if(options.name) {
      input.id = 'input-' + name;
    }

    if(options.checked) {
      input.checked = true;
    }

    if(options.stateKey) {
      appStateManager.getState().then(state => {
        this.value = getDeepProperty(state, options.stateKey);

        input.addEventListener('change', () => {
          appStateManager.setByKey(options.stateKey, input.checked);
        });
      });
    }

    let span: HTMLSpanElement;
    if(options.text) {
      span = this.span = document.createElement('span');
      span.classList.add('checkbox-caption');

      if(options.text) {
        span.innerText = options.text;
      }
    } else {
      label.classList.add('checkbox-without-caption');
    }

    const box = document.createElement('div');
    box.classList.add('checkbox-box');

    const checkSvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    checkSvg.classList.add('checkbox-box-check');
    checkSvg.setAttributeNS(null, 'viewBox', '0 0 24 24');
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS(null, 'href', '#check');
    use.setAttributeNS(null, 'x', '-1');
    checkSvg.append(use);

    const bg = document.createElement('div');
    bg.classList.add('checkbox-box-background');

    const border = document.createElement('div');
    border.classList.add('checkbox-box-border');

    box.append(border, bg, checkSvg);

    label.append(input, box);

    if(span) {
      label.append(span);
    }
  }

  get value() {
    return this.input.checked;
  }

  set value(value: boolean) {
    this.setValueSilently(value);

    const event = new Event('change', {bubbles: true, cancelable: true});
    this.input.dispatchEvent(event);
  }

  public setValueSilently(value: boolean) {
    this.input.checked = value;
  }
}