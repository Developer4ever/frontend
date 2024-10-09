import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Input, Button } from '@fluentui/react-components';

interface FieldRowProps {
  sectionIndex: number;
}

const FieldRow: React.FC<FieldRowProps> = ({ sectionIndex }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: `sections.${sectionIndex}.rows`,
  });

  const handleAddInput = () => {
    append({ label: '', size: 'small' });
  };

  return (
    <div>
      {fields.map((field, rowIndex) => (
        <div key={field.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <Input
            {...control.register(`sections.${sectionIndex}.rows.${rowIndex}.label`)}
            placeholder="Field Label"
            required
            style={{ flex: 2, marginRight: '10px' }}
          />
          <select {...control.register(`sections.${sectionIndex}.rows.${rowIndex}.size`)} style={{ flex: 1, marginRight: '10px' }}>
            <option value="small">Small (33%)</option>
            <option value="medium">Medium (50%)</option>
            <option value="large">Large (66%)</option>
            <option value="extra-large">Extra Large (100%)</option>
          </select>
          <Button type="button" onClick={() => remove(rowIndex)} appearance="transparent">🗑️</Button>
        </div>
      ))}
      <Button type="button" onClick={handleAddInput} style={{ marginTop: '10px' }}>+ Add Row</Button>
    </div>
  );
};

export default FieldRow;