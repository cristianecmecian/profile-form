import moment from 'moment'
import msk from 'msk'
import Phone from '@vtex/phone'
import brazil from '@vtex/phone/countries/BRA'

export default {
  country: 'BRA',
  personalFields: [
    {
      name: 'firstName',
      maxLength: 100,
      label: 'firstName',
      required: true,
    },
    {
      name: 'lastName',
      maxLength: 100,
      label: 'lastName',
      required: true,
    },
    {
      name: 'document',
      maxLength: 50,
      label: 'cpf',
      mask: value => msk.fit(value, '999.999.999-99'),
    },
    {
      name: 'gender',
      maxLength: 30,
      label: 'gender',
    },
    {
      name: 'birthDate',
      maxLength: 30,
      label: 'birthDate',
      mask: value => msk.fit(value, '99/99/9999'),
      validate: value => moment(value, 'DD/MM/YYYY', true).isValid(),
    },
    {
      name: 'homePhone',
      maxLength: 30,
      label: 'homePhone',
      mask: value =>
        value.length === 14
          ? msk.fit(value, '(99) 9999-9999')
          : msk.fit(value, '(99) 99999-9999'),
      validate: value => Phone.validate(value, '55'),
    },
  ],
  businessFields: [
    {
      name: 'corporateName',
      maxLength: 100,
      label: 'corporateName',
    },
    {
      name: 'corporateDocument',
      maxLength: 30,
      label: 'cnpj',
    },
    {
      name: 'businessPhone',
      maxLength: 30,
      label: 'businessPhone',
    },
    {
      name: 'stateRegistration',
      maxLength: 50,
      label: 'stateRegistration',
    },
    {
      name: 'tradeName',
      maxLength: 100,
      label: 'tradeName',
    },
  ],
}
