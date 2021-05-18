import React from 'react';
import { Accordion } from '../components';
import faqsData from '../fixtures/faq.json'

export function FaqsContainer() {
   return  (<Accordion>
        <Accordion.Title>Fequently Asked Questions</Accordion.Title>
        {faqsData.map((item) => (
       
            <Accordion.Item key={item.id}>
                <Accordion.Header>{item.Header}</Accordion.Header>
                <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
        ))}
    </Accordion>
   )
}