import {prefix} from '../settings';

export const classPrefix = (
  styles: Record<string, string>,
  modifier: string,
  conditions?: {[key: string]: boolean | undefined}[],
  optionalPrefix?: string
) => {
  const classPrefix = {
    [styles[`${optionalPrefix || prefix}-${modifier}`]]: true,
  };

  if (typeof conditions !== 'undefined') {
    for (let i = 0; i < conditions.length; i++) {
      const condition = conditions[i];
      const keys = Object.keys(condition);
      const values = Object.values(condition);

      for (let j = 0; j < keys.length; j++) {
        const key = keys[j];
        const value = values[j];

        if (value === true) {
          classPrefix[
            styles[`${optionalPrefix || prefix}-${modifier}-${key}`]
          ] = true;
        }
      }
    }
  }

  console.log(classPrefix);
  return classPrefix;
};
