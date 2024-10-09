import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Select } from '@fluentui/react-components';

const ViewTypeDropdown: React.FC = () => {
  const { register } = useFormContext();

  return (
    <div style={{ flex: 1 }}>
      <label>View Type</label>
      <Select {...register('viewType')} required>
        <option value="">Select View Type</option>
        <option value="create">Create</option>
        <option value="edit">Edit</option>
        <option value="view">View</option>
      </Select>
    </div>
  );
};

export default ViewTypeDropdown;