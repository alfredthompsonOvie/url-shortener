import { Form as VeeForm, Field as VeeField, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, url, min } from '@vee-validate/rules';

export default {
  install(app) {
    app.component("VeeForm", VeeForm);
    app.component("VeeField", VeeField);
    app.component("ErrorMessage", ErrorMessage);
    
    defineRule("required", required);
    defineRule("url", url);
    defineRule("min", min);

    configure({
      generateMessage: (ctx) => {
        const messages = {
          required: `Please add a link`,
          url: `Please add a link`,
          min: `The field ${ctx.field} is too short.`,
        }
        const message = messages[ctx.rule.name] ? messages[ctx.rule.name] : `The field ${ctx.field} is invalid.`;

        return message;
      }
    })
  }
}
