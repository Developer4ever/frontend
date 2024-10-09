import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DialogContent, Button } from '@fluentui/react-components';
import { formValidationSchema } from '../utils/formValidationSchema';
import SectionAccordion from './SectionAccordion';
import ViewTypeDropdown from './ViewTypeDropdown';
import LabelInput from './LabelInput';
import FieldRow from './FieldRow';

const FormDialog: React.FC = () => {
  const methods = useForm({
    resolver: zodResolver(formValidationSchema),
    defaultValues: { sections: [], viewType: '', label: '' },
  });

  const [showSections, setShowSections] = useState(false);
  const [rows, setRows] = useState([]);

  const handleAddRow = () => {
    setRows((prevRows) => [...prevRows, { fields: [{ label: '', size: 'small' }, { label: '', size: 'small' }, { label: '', size: 'small' }] }]);
  };

  return (
    <DialogContent style={{ width: '80%', padding: '20px' }}>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <LabelInput />
            <ViewTypeDropdown />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label>
              Show Sections
              <input
                type="checkbox"
                checked={showSections}
                onChange={() => setShowSections(!showSections)}
                style={{ marginLeft: '10px' }}
              />
            </label>
          </div>
          {showSections ? (
            <SectionAccordion sections={methods.watch('sections')} />
          ) : (
            <div>
              <Button type="button" onClick={handleAddRow} style={{ marginBottom: '10px' }}>+ Add Row</Button>
              {rows.map((row, rowIndex) => (
                <FieldRow key={rowIndex} sectionIndex={rowIndex} />
              ))}
            </div>
          )}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button appearance="secondary">Cancel Request</Button>
            <Button type="submit" appearance="primary">Save Design</Button>
          </div>
        </form>
      </FormProvider>
    </DialogContent>
  );
};

export default FormDialog;