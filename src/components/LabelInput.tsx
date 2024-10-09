import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@fluentui/react-components';

const LabelInput: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div style={{ flex: 1, marginRight: '20px' }}>
      <label>Label *</label>
      <Input {...register('label')} placeholder="New layout" required />
    </div>
  );
};

export default LabelInput;