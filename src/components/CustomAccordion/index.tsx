'use client'

import * as React from 'react';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Accordion from '@mui/material/Accordion';
import ArrowIcon from '@/src/icons/Arrow';

type CustomAccordionProps = {
  className?: string
  items: {
    title: string
    body: string
  }[]
}

export default function CustomAccordion({ items, className }: CustomAccordionProps) {
  const [expanded, setExpanded] = React.
    useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div className={className}>
      {items.map((e, i) => (
        <Accordion key={i} expanded={expanded === `${i}`} onChange={handleChange(`${i}`)}>
          <AccordionSummary expandIcon={expanded === `${i}` ? <ArrowIcon /> : <ArrowIcon view='down' />} aria-controls={`${i}-content`} id={`${i}-header`}>
            <p className='font-normal'>{e.title}</p>
          </AccordionSummary>
          <AccordionDetails>
            <p className='font-normal'>
              {e.body}
            </p>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
