import React from 'react';

import { styled } from '@mui/system';

import chevronDown from '../../public/chevron-down.svg';
import chevronRight from '../../public/chevron-right.svg';
import { useExpandable } from '../utils/hooks';
import { Anchor } from './Anchor';
import { Flex } from './Div';
import { If } from './If';
import { Img } from './Img';

const DropdownContainer = styled(Flex)`
  flex-direction: column;
  width: 100%;
`;

const DropdownAnchor = styled(Anchor)``;

const DropdownLinkChevron = styled(Img)`
  width: 12px;
  height: 12px;
  margin-left: auto;
`;

const DropdownContentContainer = styled(Flex)<{ contentHeight: number }>`
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  height: ${({ contentHeight }) => contentHeight}px;
`;

const Dropdown: React.FC<{ children: [React.ReactNode, React.ReactNode]; className?: string }> = ({
  children,
  className,
}) => {
  const { isExpanded, setExpanded, contentRef, contentHeight } = useExpandable();
  const [linkChildren, ...contentChildren] = React.Children.toArray(children);

  return (
    <DropdownContainer>
      <DropdownAnchor bold={true} onClick={() => setExpanded(!isExpanded)} className={className}>
        {linkChildren}
        <If is={isExpanded}>
          <DropdownLinkChevron src={chevronDown} />
        </If>
        <If is={!isExpanded}>
          <DropdownLinkChevron src={chevronRight} />
        </If>
      </DropdownAnchor>
      <DropdownContentContainer ref={contentRef} contentHeight={contentHeight}>
        {contentChildren}
      </DropdownContentContainer>
    </DropdownContainer>
  );
};

export { Dropdown };
