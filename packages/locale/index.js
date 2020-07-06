import Vue from 'vue';
import deepmerge from 'deepmerge';
import Format from './src/format';

console.log('yapovichi')

const format = Format(Vue);
let lang = {};
let merged = false;
let i18nHandler = function() {
  const vuei18n = Object.getPrototypeOf(this || Vue).$t;
  if (typeof vuei18n === 'function' && !!Vue.locale) {
    if (!merged) {
      merged = true;
      Vue.locale(
        Vue.config.lang,
        deepmerge(lang, Vue.locale(Vue.config.lang) || {}, {
          clone: true
        })
      );
    }
    return vuei18n.apply(this, arguments);
  }
};

export const t = function(path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  const array = path.split('.');
  let current = lang;
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) return format(value, options);
    // if (!value) return ''
    if (!value) {
      console.warn(
        `@lerna-test没有多语言"${
          arguments[0]
        }"的值，请确认是否设置了该多语言对应的值！！`
      );
      return arguments[0];
    }
    current = value;
  }
  return '';
};

export const use = function(l) {
  lang = deepmerge(lang, l);
};

export const i18n = function(fn) {
  i18nHandler = fn || i18nHandler;
};

export default { use, t, i18n };
