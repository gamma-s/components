import classNames, {ArgumentArray} from 'classnames';
import {prefix} from '../settings';

export class classPrefix {
  styles: Record<string, string>;
  modifier: string;
  prefix: typeof prefix;

  constructor(styles: Record<string, string>, modifier: string) {
    this.styles = styles;
    this.modifier = modifier;
    this.prefix = prefix;
  }

  create(
    conditions?: {[key: string]: boolean | undefined},
    ...others: ArgumentArray
  ) {
    const prefixes = {
      [this.styles[`${this.prefix}-${this.modifier}`]]: true,
    };

    if (typeof conditions !== 'undefined') {
      const keys = Object.keys(conditions);
      const values = Object.values(conditions);

      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        const value = values[j];

        if (value === true) {
          prefixes[this.styles[`${this.prefix}-${this.modifier}--${key}`]] =
            true;
        }
      }
    }

    return classNames(...(others as ArgumentArray), prefixes);
  }

  action(action: string, modifier?: string, condition = true) {
    const prefixes = {
      [this.styles[`${this.prefix}-${modifier || this.modifier}--${action}`]]:
        condition,
    };

    return classNames(prefixes);
  }
}
