import React from 'react';

import { styled } from '@mui/system';
import { COLORS, fontAvenirRoman, MQ } from 'src/theme';
import { Box } from '@mui/material';

import { Card } from 'src/elements/Div';
import { If } from 'src/elements/If';
import { Img } from 'src/elements/Img';
import { Span } from 'src/elements/Span';
import { useExpandable } from 'src/utils/hooks';

import minusSvg from 'public/minus.svg';
import plusSvg from 'public/plus.svg';

const QuestionAndAnswerContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 0px auto 16px;
  width: 100%;
  max-width: 960px;
  padding: 20px 15px;

  ${MQ.lg} {
    padding: 32px;
  }
`;

const QuestionContainer = styled(Box)<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  line-height: 24px;
  ${fontAvenirRoman};
  color: ${COLORS.fillBlackBlack};
  ${({ isExpanded }) => isExpanded && `color: ${COLORS.cornflower};`}
`;

const AnswerContainer = styled(Box)<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  opacity: 0;
  ${({ isExpanded }) => isExpanded && `opacity: 1;`}
  color: ${COLORS.fillBlackBlack};

  & p:first-of-type {
    margin-top: 15px;
  }
`;

const QuestionAndAnswerRow: React.FC<{
  answer: React.ReactNode;
  index: number;
  question: React.ReactNode;
}> = ({ answer, question }) => {
  const { isExpanded, setExpanded, contentRef, contentHeight } = useExpandable();

  return (
    <QuestionAndAnswerContainer>
      <QuestionContainer
        isExpanded={isExpanded}
        onClick={() => {
          setExpanded(!isExpanded);
        }}
      >
        <Span sx={{ mr: 'auto' }}>{question}</Span>
        <If is={isExpanded}>
          <Img sx={{ ml: '24px' }} src={minusSvg} alt="Close Icon" width={13} />
        </If>
        <If is={!isExpanded}>
          <Img sx={{ ml: '24px' }} src={plusSvg} alt="Expand Icon" width={13} />
        </If>
      </QuestionContainer>
      <AnswerContainer isExpanded={isExpanded} ref={contentRef} height={contentHeight}>
        {answer}
      </AnswerContainer>
    </QuestionAndAnswerContainer>
  );
};

export default QuestionAndAnswerRow;
