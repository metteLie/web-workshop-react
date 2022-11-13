import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Steps } from './Steps';

const Lecture = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    return ( 
        <>
            <h1>
                Lecture Tips
            </h1>
            <br />
            <div className='lecture'>
                {Steps.map(step => (
                    <Accordion expanded={expanded === step.panel} onChange={handleChange(step.panel)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {step.step}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{step.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        {step.description}
                        </Typography>
                    </AccordionDetails>
                    </Accordion>
                ))}
            </div>
          </>
      
     );
}
 
export default Lecture;