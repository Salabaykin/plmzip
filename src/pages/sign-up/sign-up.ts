import './sign-up.css';

import { tooltip } from '../../components/tooltip/Tooltip';
import { mask, PasswordType } from '../../components/form/Form';

/* Password type toggle */
const passwordType = new PasswordType();
passwordType.setEventListeners();

tooltip({
  placement: 'top-end',
  theme: 'light',
});

const phoneMaskOptions = {
  selector: '#phone',
  inputmode: 'tel',
  inputMask: '+7(999)999-99-99',
};
mask(phoneMaskOptions);

const smsCode = document.querySelectorAll('.code');
smsCode.forEach(({ index }) => {
  const smsMaskOptions = {
    selector: `#code-${index + 1}`,
    inputMask: '9',
  };
  mask(smsMaskOptions);
});

const emailMaskOptions = {
  selector: '#email',
  inputmode: 'email',
  inputMask: '*{2,25}@*{2,20}.*{2,15}',
};
mask(emailMaskOptions);

const captchaMaskOptions = {
  selector: '#captcha',
  inputMask: '*{4,10}',
};
mask(captchaMaskOptions);
