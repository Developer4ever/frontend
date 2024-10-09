import { z } from 'zod';

export const formValidationSchema = z.object({
  viewType: z.string().nonempty('View type is required'),
  label: z.string().nonempty('Label is required'),
  sections: z.array(
    z.object({
      label: z.string().nonempty('Section label is required'),
      rows: z.array(
        z.object({
          label: z.string().nonempty('Field label is required'),
          size: z.enum(['small', 'medium', 'large', 'extra-large']),
        })
      ).min(1, 'At least one row is required'),
    })
  ).min(1, 'At least one section is required'),
});