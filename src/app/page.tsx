'use client';
import {
  Accordion,
  AccordionHeading,
  AccordionPanel,
  AccordionToggleIcon,
  Button,
  Checkbox,
  Chip,
  ContentCard,
  ContentCardBody,
  ContentCardSubtitle,
  ContentCardTitle,
  Footer,
  Link,
  Typography,
  Utility,
  UtilityFragment,
  VisaLogo,
  ScreenReader, 
  Table, 
  Tbody, 
  Td, 
  Th, 
  Thead, 
  Tr,
  ProgressCircular,
  Pagination,
  PaginationOverflow,
  Divider,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogCloseButton,
  useFocusTrap,
  SectionMessage,
  SectionMessageContent,
  SectionMessageCloseButton,
  SectionMessageIcon
} from "@visa/nova-react";
import { VisaArrowEndTiny, VisaArrowStartTiny, VisaChevronLeftTiny, VisaChevronRightTiny, VisaFileUploadTiny, VisaOptionHorizontalTiny } from '@visa/nova-icons-react';
import { DefaultHorizontalNav } from "./components/header";
import { CSSProperties, useCallback, useRef, useState } from 'react';


// TIP: Customize this ID, pass it as a prop, or auto-generate it with useId() from @react
const idAccordion = 'default-multi-select-accordion-group-example';
const idChips = 'selection-group-chip';
const idProgress = 'small-determinate-circular-progress'
const idDialog = 'dialog';

const accordions = [
  {
    content: 'This is required text that describes the accordion section in more detail.',
    header: 'Accordion title 1',
  },
  {
    content: 'This is required text that describes the accordion section in more detail.',
    header: 'Accordion title 2',
  },
  {
    content: 'This is required text that describes the accordion section in more detail.',
    header: 'Accordion title 3',
  },
  {
    content: 'This is required text that describes the accordion section in more detail.',
    header: 'Accordion title 4',
  },
  {
    content: 'This is required text that describes the accordion section in more detail.',
    header: 'Accordion title 5',
  },
];

const chips = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5', 'Label 6', 'Label 7'];

export default function Home() {
  const [value, setValue] = useState(0);
  const countingRef = useRef(false);
  const [loadingMsg, setLoadingMsg] = useState('');
  
  const startCountUp = useCallback(async () => {
    setValue(0);
    countingRef.current = true;
    setLoadingMsg('Loading...');
    for (let i = 0; i < 100; i++) {
      if (!countingRef.current) {
        resetCount();
        break;
      }
      await new Promise(resolve => setTimeout(resolve, 50));
      setValue(prev => prev + 1); 
    }
    setLoadingMsg('Loading complete');
    countingRef.current = false;
  }, []);
  const resetCount = () => {
    countingRef.current = false;
    setValue(0);
    setLoadingMsg('');
  };

  const { onKeyNavigation, ref } = useFocusTrap();

  return (
    <div>
      <DefaultHorizontalNav/>
      
      <Utility vFlex vFlexWrap vGap={16} vPadding={32}>
        <Button onClick={() => ref.current?.showModal()}>Open default dialog</Button>
        <Dialog
          aria-describedby={`${idDialog}-description`}
          aria-labelledby={`${idDialog}-title`}
          id={idDialog}
          ref={ref}
          onKeyDown={e => onKeyNavigation(e, ref.current?.open)}
        >
          <DialogContent>
            <DialogHeader id={`${idDialog}-title`}>Default title</DialogHeader>
            <Typography id={`${idDialog}-description`}>
              This is required text that describes the dialog title in more detail.
            </Typography>
            <Utility vAlignItems="center" vFlex vFlexWrap vGap={8} vPaddingTop={16}>
              <Button>Primary action</Button>
              <Button colorScheme="secondary" onClick={() => ref.current?.close()}>Cancel</Button>
            </Utility>
          </DialogContent>
          <DialogCloseButton onClick={() => ref.current?.close()} />
        </Dialog>
      </Utility>

      <Utility vFlex vFlexWrap vGap={16} vPadding={32}>
        <Button>Primary action</Button>
        <Button alternate>Primary action</Button>
        <Button iconTwoColor>
          <VisaFileUploadTiny />
          Primary action
        </Button>
        <Button iconTwoColor>
          Primary action
          <VisaFileUploadTiny />
        </Button>
      </Utility>

      <Utility vFlex vFlexWrap vPadding={32}>
        <SectionMessage>
        <SectionMessageIcon />
          <UtilityFragment vPaddingLeft={2} vPaddingBottom={2}>
            <SectionMessageContent>
              <Typography tag="h4" variant="body-2-bold">Informational title</Typography>
              <Typography>This is required text that describes the section message in more detail.</Typography>
            </SectionMessageContent>
          </UtilityFragment>
          <SectionMessageCloseButton />
        </SectionMessage>
      </Utility>

      <Utility vFlex vFlexWrap vPaddingLeft={32}>
        <SectionMessage messageType="success">
          <SectionMessageIcon />
          <UtilityFragment vPaddingLeft={2} vPaddingBottom={2}>
            <SectionMessageContent>
              <Typography  tag="h4" variant="body-2-bold">Success title</Typography>
              <Typography>This is required text that describes the section message in more detail.</Typography>
            </SectionMessageContent>
          </UtilityFragment>
          <SectionMessageCloseButton />
        </SectionMessage>
      </Utility>

      <Utility vFlex vFlexWrap vPadding={32}>
        <SectionMessage messageType="warning">
          <SectionMessageIcon />
          <UtilityFragment vPaddingLeft={2} vPaddingBottom={2}>
            <SectionMessageContent>
              <Typography  tag="h4" variant="body-2-bold">Warning title</Typography>
              <Typography>This is required text that describes the section message in more detail.</Typography>
            </SectionMessageContent>
          </UtilityFragment>
          <SectionMessageCloseButton />
        </SectionMessage>
      </Utility>

      <Utility vFlex vFlexWrap vPaddingLeft={32} vPaddingBottom={32}>
        <SectionMessage messageType="error">
          <SectionMessageIcon />
          <UtilityFragment vPaddingLeft={2} vPaddingBottom={2}>
          <SectionMessageContent>
            <Typography  tag="h4" variant="body-2-bold">Error title</Typography>
            <Typography>This is required text that describes the section message in more detail.</Typography>
          </SectionMessageContent>
          </UtilityFragment>
          <SectionMessageCloseButton />
        </SectionMessage>
      </Utility>
      
       <Utility vFlex vFlexWrap vGap={16} vPadding={32}>
        <ContentCard>
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
            <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
            <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
            <Typography className="v-pt-4">
              This is optional text that describes the headline and subtitle in more detail.
            </Typography>
            <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
              <Button>Primary action</Button>
              <Link href="#" noUnderline>
                Destination label <VisaChevronRightTiny rtl />
              </Link>
            </Utility>
          </Utility>
        </ContentCard>

        <ContentCard>
          <Utility element={<ContentCardBody />} vFlex vFlexCol vGap={4}>
            <ContentCardTitle variant="headline-4">Headline</ContentCardTitle>
            <ContentCardSubtitle variant="subtitle-3">Subtitle</ContentCardSubtitle>
            <Typography className="v-pt-4">
              This is optional text that describes the headline and subtitle in more detail.
            </Typography>
            <Utility vAlignItems="center" vFlex vFlexWrap vGap={16} vPaddingTop={12}>
              <Button>Primary action</Button>
              <Link href="#" noUnderline>
                Destination label <VisaChevronRightTiny rtl />
              </Link>
            </Utility>
          </Utility>
        </ContentCard>
      </Utility>
    
      <Utility vFlex vFlexWrap vGap={16} vPadding={32}>
        {chips.map((chip, index) => (
          <Chip chipType="selection" htmlFor={`${idChips}-${index}`} key={`${idChips}-${index}`} tag="label">
            <span>{chip}</span>
            <Checkbox id={`${idChips}-${index}`} />
          </Chip>
        ))}
      </Utility>

      <Utility vFlexCol vGap={12}  vPadding={32}>
        <ProgressCircular aria-labelledby={idProgress} progressSize="small" value={value} aria-valuenow={value}>
          <Typography tag="div" className="v-progress-label" variant="body-2-bold" id={idProgress}>{value}%</Typography>
        </ProgressCircular>
        <Utility tag="span" role="alert" className="v-sr">{loadingMsg}</Utility>
        <Utility vMarginVertical={12} vFlex vGap={12}>
          <Button onClick={startCountUp}>
            Start
          </Button>
          <Button colorScheme="secondary" onClick={resetCount}>
            Reset
          </Button>
        </Utility>
      </Utility>

      <Utility vFlex vFlexWrap vGap={16} vPadding={32}>
        <Table
          alternate
          style={
            {
              '--v-table-data-padding-block-default': 'var(--v-table-data-padding-block-large)',
              '--v-table-data-block-default': 'var(--v-table-data-block-large)',
            } as CSSProperties
          }
          >
          <ScreenReader tag="caption">Table with large padding and banded rows.</ScreenReader>
          <Thead>
            <Tr>
              <Th scope="col">Column A</Th>
              <Th scope="col">Column B</Th>
              <Th scope="col">Column C</Th>
              <Th scope="col">Column D</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>A1</Td>
              <Td>B1</Td>
              <Td>C1</Td>
              <Td>D1</Td>
            </Tr>
            <Tr>
              <Td>A2</Td>
              <Td>B2</Td>
              <Td>C2</Td>
              <Td>D2</Td>
            </Tr>
            <Tr>
              <Td>A3</Td>
              <Td>B3</Td>
              <Td>C3</Td>
              <Td>D3</Td>
            </Tr>
          </Tbody>
        </Table>
      </Utility>

      <Utility vFlex vJustifyContent="center" vGap={16} vPaddingBottom={32}>
        <nav aria-label="1 digit pagination" role="navigation">
        <Pagination className="v-flex v-flex-row v-align-items-center v-gap-4">
          <li className="v-mobile-container-hide">
            <Button aria-label="Go to first page" buttonSize="small" colorScheme="tertiary" disabled iconButton>
              <VisaArrowStartTiny rtl />
            </Button>
          </li>
          <li>
            <Button aria-label="Go to previous page" buttonSize="small" colorScheme="tertiary" disabled iconButton>
              <VisaChevronLeftTiny rtl />
            </Button>
          </li>
          <li>
            <Button aria-current="true" aria-label="Page 1" colorScheme="tertiary">
              1
            </Button>
          </li>
          <li>
            <Button aria-label="Page 2" colorScheme="tertiary">
              2
            </Button>
          </li>
          <li>
            <Button aria-label="Page 3" colorScheme="tertiary">
              3
            </Button>
          </li>
          <li className="v-mobile-container-hide">
            <Button aria-label="Page 4" colorScheme="tertiary">
              4
            </Button>
          </li>
          <PaginationOverflow className="v-flex v-align-items-center v-mobile-container-hide">
            <VisaOptionHorizontalTiny />
          </PaginationOverflow>
          <li className="v-mobile-container-hide">
            <Button aria-label="Page 10" colorScheme="tertiary">
              10
            </Button>
          </li>
          <li>
            <Button aria-label="Go to next page" buttonSize="small" colorScheme="tertiary" iconButton>
              <VisaChevronRightTiny rtl />
            </Button>
          </li>
          <li className="v-mobile-container-hide">
            <Button aria-label="Go to last page" buttonSize="small" colorScheme="tertiary" iconButton>
              <VisaArrowEndTiny rtl />
            </Button>
          </li>
        </Pagination>
      </nav>
      </Utility>

      <Utility vFlex vFlexCol vGap={16} vPaddingBottom={42} vPadding={32}>
        {accordions.map((accordion, index) => (
          <Accordion key={`${idAccordion}-${index}`}>
            <AccordionHeading buttonSize="large" colorScheme="secondary">
              <AccordionToggleIcon />
              {accordion.header}
            </AccordionHeading>
            <AccordionPanel>
              <Typography>{accordion.content}</Typography>
            </AccordionPanel>
          </Accordion>
        ))}
      </Utility>

      <Divider dividerType="decorative"/>

      <UtilityFragment vFlex vFlexRow vGap={24} vPadding={24}>
        <Footer>
          <Utility vFlex vFlexCol vFlexGrow vFlexShrink0 vGap={24} style={{ flexBasis: 'calc(30% - 32px)' }}>
            <VisaLogo aria-label="Visa" />
            <p>
              The information furnished here is confidential and to be used solely for the support of clients Visa
              programs. This information shall not be duplicated, published, or disclosed, in whole or in part, without
              the prior written permission of Visa.
            </p>
            <Typography colorScheme="subtle">Copyright &copy; YYYY-YYYY Visa. All rights reserved.</Typography>
          </Utility>
          <Utility vFlex vFlexGrow vFlexWrap vGap={24}>
            <Utility vFlex vFlexCol vFlexGrow vGap={24} style={{ flexBasis: 'calc(15% - 32px)' }}>
              <Typography tag="h2" variant="body-2-bold">
                Visa Inc.
              </Typography>
              <Utility tag="ul" vFlex vFlexCol vGap={16}>
                <li>
                  <Link href="#">Privacy</Link>
                </li>
                <li>
                  <Link href="#">Terms of use</Link>
                </li>
                <li>
                  <Link href="#">About Visa</Link>
                </li>
              </Utility>
            </Utility>
            <Utility vFlex vFlexCol vFlexGrow vGap={24} style={{ flexBasis: 'calc(15% - 32px)' }}>
              <Typography tag="h2" variant="body-2-bold">
                Support
              </Typography>
              <Utility tag="ul" vFlex vFlexCol vGap={16}>
                <li>
                  <Link href="#">FAQs</Link>
                </li>
                <li>
                  <Link href="#">Feedback/Contact Us</Link>
                </li>
                <li>
                  <Link href="#">Online help</Link>
                </li>
              </Utility>
            </Utility>
            <Utility vFlex vFlexCol vFlexGrow vGap={24} style={{ flexBasis: 'calc(15% - 32px)' }}>
              <Typography tag="h2" variant="body-2-bold">
                Update profile
              </Typography>
              <Utility tag="ul" vFlex vFlexCol vGap={16}>
                <li>
                  <Link href="#">My information</Link>
                </li>
                <li>
                  <Link href="#">My security</Link>
                </li>
                <li>
                  <Link href="#">My services</Link>
                </li>
              </Utility>
            </Utility>
            <Utility vFlex vFlexCol vFlexGrow vGap={24} style={{ flexBasis: 'calc(15% - 32px)' }}>
              <Typography tag="h2" variant="body-2-bold">
                Site index
              </Typography>
              <Utility tag="ul" vFlex vFlexCol vGap={16}>
                <li>
                  <Link href="#">Alphabetized index</Link>
                </li>
                <li>
                  <Link href="#">Site map</Link>
                </li>
                <li>
                  <Link href="#">Topic index</Link>
                </li>
              </Utility>
            </Utility>
          </Utility>
        </Footer>
      </UtilityFragment>
    </div>
  );
}
