import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Accordion, AccordionItem, AccordionHeader, AccordionPanel, Button } from '@fluentui/react-components';
import FieldRow from './FieldRow';

interface SectionAccordionProps {
  sections: any[];
}

const SectionAccordion: React.FC<SectionAccordionProps> = ({ sections }) => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'sections',
  });

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        {fields.map((section, index) => (
          <div key={section.id} style={{ marginBottom: '10px', background: '#4b4b6b', color: 'white', padding: '10px', borderRadius: '5px' }}>
            <input
              {...register(`sections.${index}.label`)}
              placeholder={`New Section ${index + 1}`}
              required
              style={{ width: '100%', border: 'none', background: 'transparent', color: 'white', fontWeight: 'bold' }}
            />
            <Button type="button" onClick={() => remove(index)} appearance="transparent" style={{ float: 'right', color: 'white' }}>🗑️</Button>
          </div>
        ))}
        <Button type="button" onClick={() => append({ label: '', rows: [] })} style={{ width: '100%', marginTop: '10px' }}>+ Add Section</Button>
      </div>
      <div style={{ flex: 2 }}>
        <Accordion>
          {fields.map((section, index) => (
            <AccordionItem key={section.id} value={index} style={{ marginBottom: '10px' }}>
              <AccordionHeader style={{backgroundColor: 'gainsboro'}}>{section.label || `New Section ${index + 1}`}</AccordionHeader>
              <AccordionPanel>
                <FieldRow sectionIndex={index} />
                <Button type="button" onClick={() => remove(index)} appearance="secondary" style={{ marginTop: '10px' }}>Delete Section</Button>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default SectionAccordion;
