// components/FontSelector.tsx
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import { useFont } from '../hooks/fontContext';

const fonts = [
  { name: 'Poppins', var: 'Poppins' },
  { name: 'Inter', var: 'Inter' },
  { name: 'Roboto', var: 'Roboto' },
];

export default function FontSelector() {
  const { currentFont, setFont } = useFont();
  const [fontVar, setFontVar] = useState(currentFont);

  useEffect(() => {
    setFont(fontVar);
  }, [fontVar, setFont]);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select Font</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={fontVar}
        label="Select Font"
        onChange={e => setFontVar(e.target.value)}
      >
        {fonts.map(f => (
          <MenuItem key={f.var} value={f.var}>{f.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
