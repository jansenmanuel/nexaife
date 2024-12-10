import React, { forwardRef } from 'react';

import Div from '../../../Atomic/Container/Div/Div';
import Input from '../../../Atomic/Input/Input/Input';

const DateInput = forwardRef(({ value, onClick }, ref) => (
  <Div onClick={onClick} ref={ref}>
    <Input name="date" type="text" value={value} onChange />
  </Div>
));

export default DateInput;
