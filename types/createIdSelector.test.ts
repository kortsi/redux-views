import { createIdSelector } from 'redux-views';
import { PropsA, PropsB } from './test.types';

// $ExpectType ParametricInstanceSelector<{}, PropsA, string | number>
export const contactIdSelector = createIdSelector(
  ({ contactId }: PropsA) => contactId
);

// $ExpectType ParametricInstanceSelector<{}, PropsB, string | number>
export const companyIdSelector = createIdSelector<PropsB>(
  ({ companyId }) => companyId
);
