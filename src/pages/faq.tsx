import React, { FC, useState } from 'react';
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import Layout from '../components/Layout/Layout';
import faqJSONData from '../data/faq.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export interface TabPanelProps {
  index: number;
  value: number;
}

type FAQType = {
  question: string;
  answer: string;
};

type FAQDataType = {
  [group: string]: FAQType[];
};

const TabPanel: FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const renderAccordion = (faqs: FAQType[]): React.ReactNode => {
  return faqs.map((faq, index) => (
    <Accordion key={`accordiong_id_${index}`}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{faq.question}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{faq.answer}</Typography>
      </AccordionDetails>
    </Accordion>
  ));
};

const Faq = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const faqData: FAQDataType = faqJSONData;
  return (
    <Layout>
      <Typography variant="h2" align="center">
        FAQ
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'divider',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {Object.keys(faqData).map((group, index) => (
              <Tab
                id={`simple-tab-${index}`}
                key={`tab_id_${index}`}
                label={group.toUpperCase()}
                aria-controls={`simple-tabpanel-${index}`}
              />
            ))}
          </Tabs>
        </Box>
        {Object.keys(faqData).map((group, index) => (
          <TabPanel value={value} index={index} key={`tabpanel_id_${index}`}>
            {renderAccordion(faqData[group])}
          </TabPanel>
        ))}
      </Box>
    </Layout>
  );
};

export default Faq;
